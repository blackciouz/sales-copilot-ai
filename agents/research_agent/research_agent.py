"""
Research Agent - Prototype
Finds and qualifies prospects based on criteria
"""

import requests
import logging
from typing import Dict, List, Optional
from dataclasses import dataclass
import json

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@dataclass
class Prospect:
    """Prospect data structure"""
    company_name: str
    website: str
    industry: str
    size_range: str
    location: str
    contact_email: Optional[str] = None
    contact_name: Optional[str] = None
    linkedin_url: Optional[str] = None
    technologies: List[str] = None
    lead_score: int = 0
    metadata: Dict = None


class ResearchAgent:
    """
    Agent capable de :
    1. Rechercher des entreprises selon des critères
    2. Extraire les données de contact
    3. Enrichir les informations
    4. Scorer les leads selon leur pertinence
    5. Exporter vers la base de données
    """
    
    def __init__(self, config: Dict):
        """
        Initialize Research Agent
        
        Args:
            config: Configuration with API keys
                - apollo_api_key: For Apollo.io
                - hunter_api_key: For Hunter.io
                - clearbit_api_key: For Clearbit (optional)
        """
        self.config = config
        self.apollo_api_key = config.get('apollo_api_key')
        self.hunter_api_key = config.get('hunter_api_key')
    
    def search_companies(
        self,
        criteria: Dict[str, any]
    ) -> List[Prospect]:
        """
        Search for companies matching criteria
        
        Args:
            criteria: {
                'industry': ['SaaS', 'Technology'],
                'location': ['France', 'USA'],
                'size': '10-50',
                'technologies': ['React', 'Python']
            }
        
        Returns:
            List of Prospect objects
        """
        logger.info(f"🔍 Searching companies with criteria: {criteria}")
        
        # Mock data for demonstration
        # In production, this would call Apollo.io API or similar
        mock_prospects = [
            Prospect(
                company_name="Acme Digital",
                website="https://acmedigital.com",
                industry="Digital Marketing",
                size_range="10-50",
                location="Paris, France",
                technologies=["WordPress", "Google Ads"],
                lead_score=0
            ),
            Prospect(
                company_name="TechStart SaaS",
                website="https://techstart.io",
                industry="SaaS",
                size_range="5-20",
                location="Lyon, France",
                technologies=["React", "Node.js", "AWS"],
                lead_score=0
            ),
            Prospect(
                company_name="Consulting Pro",
                website="https://consultingpro.fr",
                industry="Business Consulting",
                size_range="20-100",
                location="Marseille, France",
                lead_score=0
            )
        ]
        
        logger.info(f"✅ Found {len(mock_prospects)} prospects")
        return mock_prospects
    
    def enrich_prospect(self, prospect: Prospect) -> Prospect:
        """
        Enrich prospect data with email, LinkedIn, etc.
        
        Uses Hunter.io, Apollo.io, or web scraping
        """
        logger.info(f"📊 Enriching prospect: {prospect.company_name}")
        
        # Mock enrichment (in production, call real APIs)
        if not prospect.contact_email:
            domain = prospect.website.replace('https://', '').replace('http://', '').split('/')[0]
            prospect.contact_email = f"contact@{domain}"
        
        if not prospect.contact_name:
            prospect.contact_name = "Decision Maker"
        
        if not prospect.linkedin_url:
            company_slug = prospect.company_name.lower().replace(' ', '-')
            prospect.linkedin_url = f"https://linkedin.com/company/{company_slug}"
        
        logger.info(f"  ✓ Email: {prospect.contact_email}")
        logger.info(f"  ✓ LinkedIn: {prospect.linkedin_url}")
        
        return prospect
    
    def score_lead(
        self,
        prospect: Prospect,
        ideal_profile: Dict[str, any]
    ) -> int:
        """
        Score lead based on how well it matches ideal customer profile
        
        Args:
            prospect: The prospect to score
            ideal_profile: {
                'preferred_industries': ['SaaS', 'Technology'],
                'preferred_size': '10-50',
                'required_technologies': ['React'],
                'preferred_locations': ['France']
            }
        
        Returns:
            Score from 0-100
        """
        score = 50  # Base score
        
        # Industry match (+20 points)
        if prospect.industry in ideal_profile.get('preferred_industries', []):
            score += 20
            logger.info(f"  ✓ Industry match: +20")
        
        # Size match (+15 points)
        if prospect.size_range == ideal_profile.get('preferred_size'):
            score += 15
            logger.info(f"  ✓ Size match: +15")
        
        # Technology match (+10 points per tech)
        required_techs = ideal_profile.get('required_technologies', [])
        if prospect.technologies:
            matching_techs = set(prospect.technologies) & set(required_techs)
            tech_score = len(matching_techs) * 10
            score += tech_score
            if tech_score > 0:
                logger.info(f"  ✓ Technology match: +{tech_score}")
        
        # Location match (+5 points)
        if any(loc in prospect.location for loc in ideal_profile.get('preferred_locations', [])):
            score += 5
            logger.info(f"  ✓ Location match: +5")
        
        # Cap at 100
        score = min(score, 100)
        
        logger.info(f"📊 Final score for {prospect.company_name}: {score}/100")
        return score
    
    def qualify_prospects(
        self,
        prospects: List[Prospect],
        ideal_profile: Dict[str, any],
        min_score: int = 60
    ) -> List[Prospect]:
        """
        Qualify prospects by scoring and filtering
        
        Returns:
            List of qualified prospects (score >= min_score)
        """
        logger.info(f"🎯 Qualifying {len(prospects)} prospects (min score: {min_score})...")
        
        qualified = []
        for prospect in prospects:
            # Enrich data
            prospect = self.enrich_prospect(prospect)
            
            # Score lead
            score = self.score_lead(prospect, ideal_profile)
            prospect.lead_score = score
            
            # Filter by minimum score
            if score >= min_score:
                qualified.append(prospect)
                logger.info(f"  ✅ QUALIFIED: {prospect.company_name} ({score}/100)")
            else:
                logger.info(f"  ❌ REJECTED: {prospect.company_name} ({score}/100)")
        
        logger.info(f"✅ {len(qualified)}/{len(prospects)} prospects qualified")
        return qualified
    
    def export_to_json(self, prospects: List[Prospect], filename: str = "qualified_leads.json"):
        """Export qualified prospects to JSON file"""
        data = [
            {
                'company_name': p.company_name,
                'website': p.website,
                'industry': p.industry,
                'size_range': p.size_range,
                'location': p.location,
                'contact_email': p.contact_email,
                'contact_name': p.contact_name,
                'linkedin_url': p.linkedin_url,
                'technologies': p.technologies,
                'lead_score': p.lead_score
            }
            for p in prospects
        ]
        
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        
        logger.info(f"💾 Exported {len(prospects)} prospects to {filename}")


# Example usage
def main():
    """Example usage of ResearchAgent"""
    
    # Configuration
    config = {
        'apollo_api_key': 'your-apollo-key',
        'hunter_api_key': 'your-hunter-key'
    }
    
    # Initialize agent
    agent = ResearchAgent(config)
    
    # Define search criteria
    search_criteria = {
        'industry': ['Digital Marketing', 'SaaS'],
        'location': ['France'],
        'size': '10-50',
        'technologies': ['React', 'WordPress']
    }
    
    # Define ideal customer profile
    ideal_profile = {
        'preferred_industries': ['Digital Marketing', 'SaaS', 'Technology'],
        'preferred_size': '10-50',
        'required_technologies': ['React', 'Node.js'],
        'preferred_locations': ['France', 'Paris']
    }
    
    # Search companies
    prospects = agent.search_companies(search_criteria)
    
    # Qualify prospects
    qualified = agent.qualify_prospects(prospects, ideal_profile, min_score=60)
    
    # Export results
    agent.export_to_json(qualified)
    
    print("\n" + "="*60)
    print(f"📊 RESULTS: {len(qualified)} qualified prospects")
    print("="*60)
    for p in qualified:
        print(f"\n✅ {p.company_name}")
        print(f"   Score: {p.lead_score}/100")
        print(f"   Website: {p.website}")
        print(f"   Email: {p.contact_email}")


if __name__ == "__main__":
    main()
