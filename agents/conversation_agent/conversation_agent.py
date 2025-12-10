"""
Conversation Agent - Prototype
Handles intelligent conversations with prospects using AI
"""

import anthropic
import logging
from typing import Dict, List, Optional
from datetime import datetime

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class ConversationAgent:
    """
    Agent capable de :
    1. Comprendre le contexte d'une conversation
    2. Générer des réponses personnalisées et naturelles
    3. Détecter les intentions (intérêt, objection, question)
    4. Adapter le ton selon le prospect
    5. Gérer les objections commerciales
    """
    
    def __init__(self, api_key: str):
        self.client = anthropic.Anthropic(api_key=api_key)
        self.conversation_history: Dict[str, List[Dict]] = {}
    
    def analyze_message(self, message: str) -> Dict[str, any]:
        """
        Analyze incoming message to detect intent and sentiment
        
        Returns:
            {
                'intent': 'interested|not_interested|question|objection|request_meeting',
                'sentiment': 'positive|neutral|negative',
                'key_points': ['point1', 'point2'],
                'urgency': 'high|medium|low'
            }
        """
        logger.info("🔍 Analyzing message...")
        
        prompt = f"""
Analyze this prospect message and return a JSON with:
- intent: interested|not_interested|question|objection|request_meeting
- sentiment: positive|neutral|negative
- key_points: list of important points mentioned
- urgency: high|medium|low

Message: "{message}"

Return ONLY valid JSON, no other text.
"""
        
        response = self.client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=500,
            messages=[{"role": "user", "content": prompt}]
        )
        
        analysis = response.content[0].text
        logger.info(f"✅ Analysis complete: {analysis[:100]}...")
        
        return {"analysis": analysis, "raw_message": message}
    
    def generate_response(
        self,
        prospect_message: str,
        conversation_context: List[Dict],
        prospect_data: Dict,
        client_data: Dict
    ) -> str:
        """
        Generate a personalized response using Claude AI
        
        Args:
            prospect_message: Latest message from prospect
            conversation_context: Previous messages
            prospect_data: Information about the prospect
            client_data: Information about your business
            
        Returns:
            Generated response text
        """
        logger.info("✍️ Generating response...")
        
        # Build conversation history
        history = "\n".join([
            f"{'Prospect' if msg['role'] == 'prospect' else 'You'}: {msg['content']}"
            for msg in conversation_context[-5:]  # Last 5 messages
        ])
        
        prompt = f"""
You are a professional sales assistant for {client_data.get('company_name')}.

CONTEXT:
- Your service: {client_data.get('service_description')}
- Value proposition: {client_data.get('value_proposition')}
- Prospect company: {prospect_data.get('company_name')}
- Prospect industry: {prospect_data.get('industry', 'Unknown')}

CONVERSATION HISTORY:
{history}

LATEST PROSPECT MESSAGE:
"{prospect_message}"

YOUR TASK:
Write a natural, helpful response that:
1. Addresses their specific question or concern
2. Provides value (insight, data, or solution)
3. Moves towards booking a meeting (softly)
4. Sounds human and empathetic (not robotic)
5. Is concise (3-5 sentences max)
6. Matches the prospect's language (French/English)

Do NOT:
- Be pushy or aggressive
- Use corporate jargon
- Write long paragraphs
- Ignore their actual question

Return ONLY the response message, no subject line or signature.
"""
        
        response = self.client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=400,
            messages=[{"role": "user", "content": prompt}]
        )
        
        generated = response.content[0].text.strip()
        logger.info(f"✅ Response generated: {generated[:80]}...")
        
        return generated
    
    def handle_objection(
        self,
        objection: str,
        objection_type: str,
        client_data: Dict
    ) -> str:
        """
        Handle common sales objections with proven responses
        
        Args:
            objection: The actual objection raised
            objection_type: Type (price, timing, competitor, no_need)
            client_data: Your business info
        """
        logger.info(f"💭 Handling {objection_type} objection...")
        
        prompt = f"""
You're handling a sales objection.

OBJECTION TYPE: {objection_type}
ACTUAL OBJECTION: "{objection}"

YOUR SERVICE: {client_data.get('service_description')}

Craft a response that:
1. Acknowledges their concern (empathy)
2. Reframes the objection positively
3. Provides a compelling counter-argument
4. Offers a low-risk next step

Keep it conversational and brief (3-4 sentences).
"""
        
        response = self.client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=300,
            messages=[{"role": "user", "content": prompt}]
        )
        
        return response.content[0].text.strip()


# Example usage
def main():
    """Example usage of ConversationAgent"""
    
    agent = ConversationAgent(api_key="your-api-key-here")
    
    # Client data
    client_data = {
        'company_name': 'Sales Copilot AI',
        'service_description': 'Automatisation commerciale IA',
        'value_proposition': '20-30 RDV qualifiés/mois automatiquement'
    }
    
    # Prospect data
    prospect_data = {
        'company_name': 'TechCorp',
        'industry': 'SaaS'
    }
    
    # Simulate conversation
    conversation = [
        {'role': 'you', 'content': 'Bonjour, nous aidons les SaaS à automatiser leur prospection...'},
        {'role': 'prospect', 'content': 'Intéressant, mais combien ça coûte ?'}
    ]
    
    # Generate response
    response = agent.generate_response(
        prospect_message="Intéressant, mais combien ça coûte ?",
        conversation_context=conversation,
        prospect_data=prospect_data,
        client_data=client_data
    )
    
    print("\n" + "="*60)
    print("💬 GENERATED RESPONSE:")
    print(response)
    print("="*60)


if __name__ == "__main__":
    main()
