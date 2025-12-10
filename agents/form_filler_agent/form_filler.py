"""
Form Filler Agent - Prototype
Automatically detects and fills contact forms on websites
"""

import asyncio
import json
import logging
from typing import Dict, List, Optional, Any
from datetime import datetime
from playwright.async_api import async_playwright, Page, Browser
import anthropic
import random

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class FormFillerAgent:
    """
    Agent intelligent capable de :
    1. Détecter automatiquement les formulaires sur une page
    2. Identifier les champs (nom, email, message, etc.)
    3. Générer un message personnalisé
    4. Remplir et soumettre le formulaire
    5. Vérifier le succès de la soumission
    """
    
    def __init__(self, config: Dict[str, Any]):
        """
        Initialize the Form Filler Agent
        
        Args:
            config: Configuration dictionary with:
                - anthropic_api_key: Claude API key
                - user_agent: Browser user agent
                - headless: Run browser in headless mode
                - timeout: Page load timeout
        """
        self.config = config
        self.anthropic_client = anthropic.Anthropic(
            api_key=config.get('anthropic_api_key')
        )
        self.browser: Optional[Browser] = None
        
    async def initialize_browser(self) -> None:
        """Initialize Playwright browser"""
        playwright = await async_playwright().start()
        self.browser = await playwright.chromium.launch(
            headless=self.config.get('headless', True)
        )
        logger.info("✅ Browser initialized")
    
    async def close_browser(self) -> None:
        """Close browser and cleanup"""
        if self.browser:
            await self.browser.close()
            logger.info("🔒 Browser closed")
    
    async def detect_form_fields(self, page: Page) -> Dict[str, Any]:
        """
        Detect all form fields on the page using AI
        
        Returns:
            Dictionary with detected fields and their properties
        """
        logger.info("🔍 Detecting form fields...")
        
        # Extract all form elements
        form_data = await page.evaluate("""
            () => {
                const forms = Array.from(document.querySelectorAll('form'));
                return forms.map(form => ({
                    action: form.action,
                    method: form.method,
                    fields: Array.from(form.querySelectorAll('input, textarea, select')).map(field => ({
                        type: field.type,
                        name: field.name,
                        id: field.id,
                        placeholder: field.placeholder,
                        required: field.required,
                        label: field.labels?.[0]?.textContent || '',
                        className: field.className
                    }))
                }));
            }
        """)
        
        if not form_data:
            logger.warning("⚠️ No forms detected on page")
            return {}
        
        logger.info(f"✅ Detected {len(form_data)} form(s)")
        return {"forms": form_data}
    
    async def classify_field(self, field: Dict[str, str]) -> str:
        """
        Classify a form field using AI
        
        Returns:
            Field type: 'name', 'email', 'company', 'message', 'phone', 'other'
        """
        field_info = f"""
        Type: {field.get('type')}
        Name: {field.get('name')}
        ID: {field.get('id')}
        Placeholder: {field.get('placeholder')}
        Label: {field.get('label')}
        """
        
        # Simple rule-based classification (can be enhanced with AI)
        name_keywords = ['name', 'nom', 'prénom', 'firstname', 'lastname']
        email_keywords = ['email', 'mail', 'e-mail']
        company_keywords = ['company', 'entreprise', 'société', 'organization']
        message_keywords = ['message', 'comment', 'description', 'details']
        phone_keywords = ['phone', 'tel', 'telephone', 'mobile']
        
        field_str = field_info.lower()
        
        if any(kw in field_str for kw in email_keywords):
            return 'email'
        elif any(kw in field_str for kw in name_keywords):
            return 'name'
        elif any(kw in field_str for kw in company_keywords):
            return 'company'
        elif any(kw in field_str for kw in phone_keywords):
            return 'phone'
        elif any(kw in field_str for kw in message_keywords):
            return 'message'
        else:
            return 'other'
    
    async def generate_personalized_message(
        self,
        prospect_data: Dict[str, str],
        client_data: Dict[str, str]
    ) -> str:
        """
        Generate a personalized outreach message using Claude AI
        
        Args:
            prospect_data: Information about the prospect
            client_data: Information about the client (sender)
            
        Returns:
            Personalized message text
        """
        logger.info("✍️ Generating personalized message with Claude...")
        
        prompt = f"""
You are a sales expert writing a personalized outreach message.

CLIENT INFORMATION:
- Company: {client_data.get('company_name')}
- Service: {client_data.get('service_description')}
- Value Proposition: {client_data.get('value_proposition')}

PROSPECT INFORMATION:
- Company: {prospect_data.get('company_name')}
- Industry: {prospect_data.get('industry', 'Unknown')}
- Website: {prospect_data.get('website')}

Write a SHORT, personalized message (max 100 words) that:
1. Shows you've researched their company
2. Clearly states the value you can provide
3. Includes a soft call-to-action (asking for a brief call)
4. Sounds natural and human (not salesy)
5. Is in French if the prospect is French, otherwise in English

Return ONLY the message text, no subject line or signature.
"""
        
        message = self.anthropic_client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=300,
            messages=[{"role": "user", "content": prompt}]
        )
        
        generated_message = message.content[0].text.strip()
        logger.info(f"✅ Message generated: {generated_message[:50]}...")
        
        return generated_message
    
    async def fill_form(
        self,
        page: Page,
        form_index: int,
        data: Dict[str, str]
    ) -> bool:
        """
        Fill a specific form with provided data
        
        Args:
            page: Playwright page object
            form_index: Index of the form to fill
            data: Data to fill (name, email, message, etc.)
            
        Returns:
            Success status
        """
        logger.info(f"📝 Filling form #{form_index}...")
        
        try:
            # Get form fields
            form_fields = await page.evaluate(f"""
                (index) => {{
                    const form = document.querySelectorAll('form')[index];
                    if (!form) return null;
                    
                    return Array.from(form.querySelectorAll('input, textarea, select'))
                        .map((field, idx) => ({
                            selector: `form:nth-of-type(${{index + 1}}) input:nth-of-type(${{idx + 1}}), form:nth-of-type(${{index + 1}}) textarea:nth-of-type(${{idx + 1}})`,
                            type: field.type,
                            name: field.name,
                            id: field.id,
                            placeholder: field.placeholder,
                            label: field.labels?.[0]?.textContent || ''
                        }));
                }}
            """, form_index)
            
            if not form_fields:
                logger.error("❌ Form not found")
                return False
            
            # Fill each field
            for field in form_fields:
                field_type = await self.classify_field(field)
                
                value = None
                if field_type == 'name':
                    value = data.get('name')
                elif field_type == 'email':
                    value = data.get('email')
                elif field_type == 'company':
                    value = data.get('company')
                elif field_type == 'phone':
                    value = data.get('phone')
                elif field_type == 'message':
                    value = data.get('message')
                
                if value:
                    # Simulate human typing with delays
                    selector = f"#{field['id']}" if field['id'] else f"[name='{field['name']}']"
                    try:
                        await page.fill(selector, value, timeout=5000)
                        await asyncio.sleep(random.uniform(0.1, 0.3))
                        logger.info(f"  ✓ Filled {field_type}: {selector}")
                    except Exception as e:
                        logger.warning(f"  ⚠️ Could not fill {selector}: {e}")
            
            logger.info("✅ Form filled successfully")
            return True
            
        except Exception as e:
            logger.error(f"❌ Error filling form: {e}")
            return False
    
    async def submit_form(self, page: Page, form_index: int) -> bool:
        """
        Submit the form and verify submission
        
        Returns:
            Success status
        """
        logger.info("🚀 Submitting form...")
        
        try:
            # Take screenshot before submission
            await page.screenshot(path=f"screenshots/before_submit_{datetime.now().timestamp()}.png")
            
            # Find and click submit button
            submit_clicked = await page.evaluate(f"""
                (index) => {{
                    const form = document.querySelectorAll('form')[index];
                    if (!form) return false;
                    
                    const submitBtn = form.querySelector('button[type="submit"], input[type="submit"], button:not([type])');
                    if (submitBtn) {{
                        submitBtn.click();
                        return true;
                    }}
                    return false;
                }}
            """, form_index)
            
            if not submit_clicked:
                logger.error("❌ Submit button not found")
                return False
            
            # Wait for navigation or success message
            await asyncio.sleep(3)
            
            # Take screenshot after submission
            await page.screenshot(path=f"screenshots/after_submit_{datetime.now().timestamp()}.png")
            
            # Check for success indicators
            success_indicators = [
                "thank you", "merci", "success", "submitted", "received",
                "nous avons reçu", "message sent", "we'll be in touch"
            ]
            
            page_content = await page.content()
            page_text = await page.evaluate("() => document.body.innerText")
            
            is_success = any(indicator in page_text.lower() for indicator in success_indicators)
            
            if is_success:
                logger.info("✅ Form submitted successfully!")
                return True
            else:
                logger.warning("⚠️ Could not verify submission success")
                return False
                
        except Exception as e:
            logger.error(f"❌ Error submitting form: {e}")
            return False
    
    async def process_prospect(
        self,
        prospect_data: Dict[str, str],
        client_data: Dict[str, str]
    ) -> Dict[str, Any]:
        """
        Complete workflow: detect form, fill, and submit
        
        Args:
            prospect_data: Prospect information (website, company, etc.)
            client_data: Client information (sender details)
            
        Returns:
            Result dictionary with status and details
        """
        website = prospect_data.get('website')
        logger.info(f"🎯 Processing prospect: {website}")
        
        result = {
            "prospect": prospect_data.get('company_name'),
            "website": website,
            "status": "pending",
            "timestamp": datetime.now().isoformat(),
            "details": {}
        }
        
        try:
            # Create new page
            context = await self.browser.new_context(
                user_agent=self.config.get('user_agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
            )
            page = await context.new_page()
            
            # Navigate to website
            logger.info(f"🌐 Navigating to {website}...")
            await page.goto(website, timeout=30000)
            await asyncio.sleep(2)
            
            # Detect forms
            forms_data = await self.detect_form_fields(page)
            
            if not forms_data.get('forms'):
                result['status'] = 'no_form_found'
                result['details']['error'] = 'No contact form detected'
                return result
            
            # Generate personalized message
            message = await self.generate_personalized_message(prospect_data, client_data)
            
            # Prepare data to fill
            fill_data = {
                'name': client_data.get('sender_name', 'Jean Dupont'),
                'email': client_data.get('sender_email', 'contact@example.com'),
                'company': client_data.get('company_name', 'Acme Corp'),
                'phone': client_data.get('phone', '+33612345678'),
                'message': message
            }
            
            # Fill the first form
            filled = await self.fill_form(page, 0, fill_data)
            
            if not filled:
                result['status'] = 'fill_failed'
                return result
            
            # Submit form
            submitted = await self.submit_form(page, 0)
            
            if submitted:
                result['status'] = 'success'
                result['details']['message_sent'] = message
            else:
                result['status'] = 'submit_failed'
            
            await context.close()
            
        except Exception as e:
            logger.error(f"❌ Error processing prospect: {e}")
            result['status'] = 'error'
            result['details']['error'] = str(e)
        
        return result


# Example usage
async def main():
    """Example usage of FormFillerAgent"""
    
    # Configuration
    config = {
        'anthropic_api_key': 'your-api-key-here',
        'headless': False,  # Set to True in production
        'timeout': 30000
    }
    
    # Client data (your business)
    client_data = {
        'company_name': 'Sales Copilot AI',
        'sender_name': 'Sophie Martin',
        'sender_email': 'sophie@salescopilot.ai',
        'phone': '+33612345678',
        'service_description': 'Automatisation commerciale propulsée par IA',
        'value_proposition': 'Nous aidons les entreprises B2B à générer 20-30 RDV qualifiés par mois grâce à une IA qui prospecte 24/7'
    }
    
    # Prospect data
    prospect_data = {
        'company_name': 'Acme Digital Agency',
        'website': 'https://example-agency.com/contact',
        'industry': 'Digital Marketing'
    }
    
    # Initialize agent
    agent = FormFillerAgent(config)
    await agent.initialize_browser()
    
    try:
        # Process prospect
        result = await agent.process_prospect(prospect_data, client_data)
        print("\n" + "="*60)
        print("📊 RESULT:")
        print(json.dumps(result, indent=2))
        print("="*60)
    finally:
        await agent.close_browser()


if __name__ == "__main__":
    asyncio.run(main())
