# 🚀 Getting Started - Guide de Démarrage Rapide

> **De zéro à votre premier RDV généré en 7 jours**

---

## 📅 Plan de Lancement en 7 Jours

### Jour 1 : Setup Environnement ⚙️

#### Matin (3h)
```bash
# 1. Cloner le projet
git clone <your-repo>
cd sales-copilot-ai

# 2. Installer les dépendances
pip install -r requirements.txt
npm install

# 3. Installer Playwright
playwright install chromium

# 4. Configuration
cp .env.example .env
```

#### Après-midi (3h)
**Obtenir les clés API nécessaires** :

1. **Anthropic Claude** (priorité #1)
   - Aller sur : https://console.anthropic.com
   - Créer un compte
   - Générer une API key
   - Ajouter dans `.env` : `ANTHROPIC_API_KEY=sk-ant-...`
   - Budget recommandé : $50/mois pour commencer

2. **OpenAI GPT-4** (optionnel)
   - Aller sur : https://platform.openai.com
   - Générer une API key
   - Ajouter dans `.env` : `OPENAI_API_KEY=sk-...`

3. **PostgreSQL** (local ou cloud)
   - Local : `brew install postgresql` (Mac) ou Docker
   - Cloud : Supabase (gratuit) ou AWS RDS
   - Ajouter dans `.env` : `DATABASE_URL=postgresql://...`

**✅ Checkpoint** : Vous avez un environnement configuré

---

### Jour 2 : Test des Prototypes 🧪

#### Test 1 : Conversation Agent (1h)

```bash
cd agents/conversation_agent

# Éditer conversation_agent.py ligne 20
# Ajouter votre ANTHROPIC_API_KEY

python conversation_agent.py
```

**Résultat attendu** :
```
✍️ Generating response...
✅ Response generated: Bonjour Sophie, merci pour votre...

💬 GENERATED RESPONSE:
[Votre message personnalisé généré par l'IA]
```

#### Test 2 : Research Agent (1h)

```bash
cd agents/research_agent
python research_agent.py
```

**Résultat attendu** :
```
🔍 Searching companies...
✅ Found 3 prospects
📊 Enriching prospect: Acme Digital
✅ 2/3 prospects qualified

💾 Exported to qualified_leads.json
```

#### Test 3 : Form Filler Agent (2h)

```bash
cd agents/form_filler_agent

# Éditer form_filler.py
# Ligne 480: Ajouter votre ANTHROPIC_API_KEY

python form_filler.py
```

**Résultat attendu** :
- Un navigateur s'ouvre
- Va sur un site de test
- Détecte le formulaire
- Le remplit automatiquement
- Screenshots créés dans `screenshots/`

**✅ Checkpoint** : Les 3 agents fonctionnent

---

### Jour 3 : Configuration Business 📊

#### Définir votre ICP (Ideal Customer Profile)

Créer un fichier `config/my_icp.json` :

```json
{
  "client_info": {
    "company_name": "Votre Entreprise",
    "sender_name": "Votre Nom",
    "sender_email": "vous@votreentreprise.com",
    "phone": "+33 6 XX XX XX XX",
    "service_description": "Ce que vous faites en 1 phrase",
    "value_proposition": "Comment vous aidez vos clients en 1 phrase",
    "website": "https://votresite.com"
  },
  "ideal_customer_profile": {
    "industries": ["SaaS", "Digital Marketing", "E-commerce"],
    "company_size": "10-50",
    "locations": ["France", "Belgique", "Suisse"],
    "technologies": ["React", "Shopify", "WordPress"],
    "job_titles": ["CEO", "CMO", "Head of Marketing"],
    "pain_points": [
      "Besoin de plus de leads",
      "Prospection manuelle chronophage",
      "ROI marketing difficile à mesurer"
    ]
  },
  "messaging": {
    "tone": "professionnel mais accessible",
    "language": "français",
    "key_benefits": [
      "Gain de temps : 30h/mois économisées",
      "Résultats garantis : 15-30 RDV/mois",
      "ROI mesurable : Dashboard en temps réel"
    ]
  }
}
```

**✅ Checkpoint** : Vous savez qui cibler et comment

---

### Jour 4 : Première Liste de Prospects 📋

#### Créer manuellement votre liste (pour commencer)

Créer `prospects/batch_1.json` :

```json
[
  {
    "company_name": "Acme Digital Agency",
    "website": "https://acmedigital.fr",
    "contact_page": "https://acmedigital.fr/contact",
    "industry": "Digital Marketing",
    "size": "15-30",
    "location": "Paris, France",
    "notes": "Ont un blog actif, semblent en croissance"
  },
  {
    "company_name": "TechStart SaaS",
    "website": "https://techstart.io",
    "contact_page": "https://techstart.io/contact",
    "industry": "SaaS",
    "size": "10-20",
    "location": "Lyon, France",
    "notes": "Récente levée de fonds, scaling"
  }
]
```

**Comment trouver vos premiers prospects** :

1. **Google Search** :
   ```
   "agence marketing digital" + "Paris" + "contact"
   "startup SaaS" + "France" + "nous recrutons"
   ```

2. **LinkedIn** :
   - Recherche d'entreprises par critères
   - Filtre : Taille, localisation, secteur
   - Copier leur site web

3. **Product Hunt** :
   - Nouveaux produits lancés
   - Commentaires = entreprises actives

4. **AngelList / Wellfound** :
   - Startups qui recrutent
   - Signal fort de croissance

**Objectif** : Liste de 20 prospects

**✅ Checkpoint** : Vous avez 20 prospects qualifiés

---

### Jour 5 : Lancer les Premiers Contacts 🚀

#### Script de lancement batch

Créer `scripts/launch_campaign.py` :

```python
import json
import asyncio
import sys
sys.path.append('..')

from agents.form_filler_agent.form_filler import FormFillerAgent

async def main():
    # Load config
    with open('../config/my_icp.json', 'r') as f:
        config_data = json.load(f)
    
    # Load prospects
    with open('../prospects/batch_1.json', 'r') as f:
        prospects = json.load(f)
    
    # Initialize agent
    agent_config = {
        'anthropic_api_key': 'YOUR_KEY_HERE',
        'headless': True,
        'timeout': 30000
    }
    
    agent = FormFillerAgent(agent_config)
    await agent.initialize_browser()
    
    results = []
    
    # Process each prospect
    for i, prospect in enumerate(prospects[:5], 1):  # Start with 5
        print(f"\n{'='*60}")
        print(f"Processing {i}/{len(prospects[:5])}: {prospect['company_name']}")
        print(f"{'='*60}")
        
        result = await agent.process_prospect(
            prospect_data=prospect,
            client_data=config_data['client_info']
        )
        
        results.append(result)
        
        # Wait between prospects (be respectful)
        await asyncio.sleep(60)  # 1 minute between each
    
    await agent.close_browser()
    
    # Save results
    with open('results_batch_1.json', 'w') as f:
        json.dump(results, f, indent=2)
    
    # Summary
    success = sum(1 for r in results if r['status'] == 'success')
    print(f"\n✅ Campaign complete: {success}/{len(results)} successful")

if __name__ == "__main__":
    asyncio.run(main())
```

**Lancer** :
```bash
cd scripts
python launch_campaign.py
```

**✅ Checkpoint** : Premiers formulaires soumis !

---

### Jour 6 : Monitoring des Réponses 📧

#### Setup Email Monitoring

Créer `scripts/check_responses.py` :

```python
import imaplib
import email
from email.header import decode_header

def check_inbox(email_address, password):
    """Check inbox for new responses"""
    
    # Connect to Gmail IMAP
    imap = imaplib.IMAP4_SSL("imap.gmail.com")
    imap.login(email_address, password)
    imap.select("INBOX")
    
    # Search for unread emails
    status, messages = imap.search(None, 'UNSEEN')
    
    email_ids = messages[0].split()
    
    responses = []
    
    for email_id in email_ids:
        # Fetch email
        status, msg_data = imap.fetch(email_id, '(RFC822)')
        
        for response_part in msg_data:
            if isinstance(response_part, tuple):
                msg = email.message_from_bytes(response_part[1])
                
                # Decode subject
                subject = decode_header(msg["Subject"])[0][0]
                if isinstance(subject, bytes):
                    subject = subject.decode()
                
                # Get sender
                from_ = msg.get("From")
                
                # Get body
                if msg.is_multipart():
                    for part in msg.walk():
                        if part.get_content_type() == "text/plain":
                            body = part.get_payload(decode=True).decode()
                            break
                else:
                    body = msg.get_payload(decode=True).decode()
                
                responses.append({
                    "from": from_,
                    "subject": subject,
                    "body": body[:200]  # First 200 chars
                })
                
                print(f"\n📧 New Response!")
                print(f"From: {from_}")
                print(f"Subject: {subject}")
                print(f"Preview: {body[:100]}...")
    
    imap.close()
    imap.logout()
    
    return responses

# Usage
if __name__ == "__main__":
    EMAIL = "votre.email@gmail.com"
    PASSWORD = "votre_app_password"  # Use App Password, not regular password
    
    responses = check_inbox(EMAIL, PASSWORD)
    print(f"\n✅ Found {len(responses)} new responses")
```

**Setup Gmail App Password** :
1. Aller sur : https://myaccount.google.com/apppasswords
2. Créer un mot de passe d'application
3. Utiliser ce password dans le script

**Lancer** :
```bash
python check_responses.py
```

**✅ Checkpoint** : Vous pouvez voir les réponses

---

### Jour 7 : Première Conversation IA 💬

#### Répondre à une réponse avec l'IA

Créer `scripts/reply_to_prospect.py` :

```python
from agents.conversation_agent.conversation_agent import ConversationAgent

def reply_to_prospect():
    agent = ConversationAgent(api_key="YOUR_ANTHROPIC_KEY")
    
    # Simulated prospect response
    prospect_message = """
    Bonjour,
    
    Merci pour votre message. Votre solution semble intéressante.
    Pourriez-vous m'en dire plus sur le pricing et comment ça fonctionne concrètement ?
    
    Cordialement,
    Jean Dupont
    CEO - Acme Digital
    """
    
    # Your business info
    client_data = {
        'company_name': 'Sales Copilot AI',
        'service_description': 'Automatisation commerciale IA',
        'value_proposition': '20-30 RDV qualifiés/mois automatiquement'
    }
    
    # Prospect info
    prospect_data = {
        'company_name': 'Acme Digital',
        'industry': 'Digital Marketing'
    }
    
    # Conversation history
    conversation = [
        {
            'role': 'you',
            'content': 'Bonjour, nous aidons les agences digitales à automatiser leur prospection...'
        },
        {
            'role': 'prospect',
            'content': prospect_message
        }
    ]
    
    # Generate response
    response = agent.generate_response(
        prospect_message=prospect_message,
        conversation_context=conversation,
        prospect_data=prospect_data,
        client_data=client_data
    )
    
    print("\n" + "="*60)
    print("💬 RÉPONSE GÉNÉRÉE PAR L'IA:")
    print("="*60)
    print(response)
    print("="*60)
    
    return response

if __name__ == "__main__":
    reply_to_prospect()
```

**Lancer** :
```bash
python reply_to_prospect.py
```

**✅ Checkpoint** : L'IA génère des réponses pertinentes !

---

## 🎯 Résumé des 7 Jours

| Jour | Tâche | Temps | Résultat |
|------|-------|-------|----------|
| **1** | Setup environnement | 6h | ✅ Tout installé et configuré |
| **2** | Test des prototypes | 4h | ✅ Les 3 agents fonctionnent |
| **3** | Configuration business | 3h | ✅ ICP défini, messaging prêt |
| **4** | Liste de prospects | 4h | ✅ 20 prospects qualifiés |
| **5** | Premiers contacts | 3h | ✅ 5 formulaires soumis |
| **6** | Monitoring réponses | 3h | ✅ Email monitoring actif |
| **7** | Première conversation IA | 2h | ✅ IA répond aux prospects |

**Total** : 25 heures pour avoir un système fonctionnel

---

## 📊 Semaine 2 : Optimisation & Scale

### Jours 8-10 : Analyser les Résultats

1. **Tracker les métriques** :
   - Formulaires soumis : X
   - Réponses reçues : Y
   - Taux de réponse : Y/X = Z%
   - Conversations positives : N
   - RDV obtenus : M

2. **Identifier les patterns** :
   - Quels messages fonctionnent le mieux ?
   - Quels prospects répondent le plus ?
   - Quelles objections reviennent ?

3. **Itérer** :
   - Affiner les prompts IA
   - Ajuster le ciblage
   - Améliorer les messages

### Jours 11-14 : Scaler Progressivement

1. **Batch 2** : 20 nouveaux prospects
2. **Batch 3** : 30 nouveaux prospects
3. **Optimiser le processus** :
   - Automatiser davantage
   - Créer des templates
   - Documenter ce qui marche

**Objectif Semaine 2** : 50 prospects contactés, 3-5 RDV obtenus

---

## 🎓 Best Practices

### Prospection

✅ **DO** :
- Personnaliser chaque message
- Être transparent (vous utilisez l'IA pour scale)
- Apporter de la valeur dès le premier contact
- Respecter les opt-outs immédiatement
- Espacer vos envois (pas 100 en 1h)

❌ **DON'T** :
- Spammer (qualité > quantité)
- Mentir ou être trompeur
- Ignorer les "non merci"
- Utiliser des faux emails/noms
- Envoyer sans avoir recherché le prospect

### Conversations

✅ **DO** :
- Laisser l'IA gérer les questions simples
- Intervenir manuellement pour les deals importants
- Apprendre des conversations qui marchent
- Être humain et empathique

❌ **DON'T** :
- Laisser l'IA totalement sans supervision (au début)
- Être robotique ou corporate
- Pousser trop fort pour le RDV
- Ignorer les objections

### Technique

✅ **DO** :
- Logger tout (pour apprendre)
- Tester sur 5-10 prospects avant de scaler
- Monitorer les coûts API
- Garder des backups de vos données

❌ **DON'T** :
- Hardcoder les credentials dans le code
- Ignorer les erreurs
- Scaler trop vite sans validation
- Oublier de respect les rate limits

---

## 🚨 Troubleshooting

### Problème : "No module named 'anthropic'"
```bash
pip install anthropic
```

### Problème : "Browser not found" (Playwright)
```bash
playwright install chromium
```

### Problème : "Authentication failed" (Gmail)
- Utiliser un App Password, pas votre mot de passe normal
- Activer l'accès IMAP dans Gmail settings

### Problème : "Rate limit exceeded" (APIs)
- Ralentir vos requêtes (ajouter des sleeps)
- Vérifier votre quota API
- Passer à un tier payant si nécessaire

### Problème : Les formulaires ne sont pas détectés
- Vérifier que le site n'est pas protégé par Cloudflare
- Essayer avec `headless: False` pour voir ce qui se passe
- Certains sites sont trop complexes (passer au email direct)

---

## 📈 KPIs à Tracker

### Métriques d'Efficacité

| Métrique | Calcul | Objectif |
|----------|--------|----------|
| **Taux de réponse** | Réponses / Contacts | 15-30% |
| **Taux de RDV** | RDV / Réponses positives | 30-50% |
| **Coût par RDV** | Coûts totaux / RDV obtenus | < €100 |
| **Temps investi** | Heures/semaine | < 5h |
| **ROI** | Revenus générés / Coûts | > 5:1 |

### Dashboard Simple (Excel/Sheets)

```
Semaine | Prospects Contactés | Réponses | RDV | Coûts | Revenus
1       | 20                  | 4        | 1   | €50   | €0
2       | 50                  | 12       | 3   | €120  | €2,500
3       | 80                  | 20       | 6   | €180  | €8,000
```

---

## 🎯 Objectifs Premier Mois

### Semaine 1
✅ Setup complet + 5 premiers contacts

### Semaine 2
🎯 50 prospects contactés, 10 réponses, 2-3 RDV

### Semaine 3
🎯 100 prospects contactés, 20 réponses, 5-7 RDV

### Semaine 4
🎯 150 prospects contactés, 30 réponses, 10-12 RDV

**Total Mois 1** : 150 prospects, 30 réponses, 10 RDV, 2-3 clients signés

---

## 💪 Vous Êtes Prêt !

Vous avez maintenant un **plan concret sur 7 jours** pour lancer votre premier système d'automatisation commerciale IA.

**Prochain milestone** : Votre premier RDV généré par l'IA ! 🎉

---

## 📞 Besoin d'Aide ?

- **Documentation** : Lisez les autres fichiers .md
- **Support** : Créez une issue GitHub
- **Questions** : contact@salescopilot.ai

**Let's go! 🚀**
