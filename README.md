# 🚀 Sales Copilot AI

> **Votre équipe commerciale IA, travaillant 24/7 pour remplir votre calendrier de rendez-vous qualifiés.**

![License](https://img.shields.io/badge/license-Proprietary-red)
![Python](https://img.shields.io/badge/python-3.11+-blue)
![Node](https://img.shields.io/badge/node-18+-green)
![Docker](https://img.shields.io/badge/docker-required-blue)

---

## 🎯 Qu'est-ce que Sales Copilot AI ? (Phase 2 - V1)

**Sales Copilot AI** est une plateforme SaaS d'automatisation commerciale propulsée par l'IA qui agit comme un assistant commercial 24/7. Version **Phase 2 - V1** (Janvier-Mars 2026) avec fonctionnalités avancées selon le cahier des charges produit.

### ✨ Proposition de Valeur Phase 2

- ✅ **Onboarding guidé par IA** : Configuration intelligente en 15 minutes
- ✅ **Bases de données ultra-qualifiées** : Pages Jaunes + annuaires multi-sources
- ✅ **Tests A/B automatiques** : Optimisation continue des messages
- ✅ **Fonction PLAY/PAUSE** : Contrôle total de vos campagnes
- ✅ **Pipeline graphique** : Visualisation des conversations en temps réel
- ✅ **Dashboard personnalisé** : Métriques selon votre business model
- ✅ **Tarification par volume** : Payez selon vos besoins (500 à 5000+ contacts)

---

## 🏗️ Architecture

Le système est basé sur **5 agents IA intelligents** qui travaillent ensemble :

```
┌─────────────────────────────────────────────────────────────┐
│                  CLIENT DASHBOARD                            │
└────────────────────┬────────────────────────────────────────┘
                     │
         ┌───────────┴───────────┐
         │   ORCHESTRATOR        │
         │   (Decision Engine)   │
         └───────────┬───────────┘
                     │
    ┌────────────────┼────────────────┐
    │                │                │
┌───▼────┐    ┌─────▼─────┐    ┌────▼─────┐
│Research│    │Form Filler│    │Inbox     │
│ Agent  │    │  Agent    │    │Master    │
└────────┘    └───────────┘    └──────────┘
                     │
              ┌──────▼───────┐
              │Conversation  │
              │   Agent      │
              └──────────────┘
```

### Les 5 Agents

1. **🔍 Research Agent** - Trouve et qualifie les prospects
2. **📝 Form Filler Agent** - Remplit automatiquement les formulaires de contact
3. **📧 Inbox Master Agent** - Centralise et analyse toutes les réponses
4. **💬 Conversation Agent** - Gère les conversations avec l'IA
5. **🧠 Decision Engine** - Décide quand et comment agir

---

## 🚀 Quick Start

### Prérequis

```bash
# Python 3.11+
python --version

# Node.js 18+
node --version

# Docker & Docker Compose
docker --version
```

### Installation

```bash
# 1. Cloner le repository
git clone https://github.com/votre-org/sales-copilot-ai.git
cd sales-copilot-ai

# 2. Configuration des variables d'environnement
cp .env.example .env
# Éditer .env avec vos clés API

# 3. Lancer l'infrastructure avec Docker
docker-compose up -d

# 4. Accéder au dashboard
open http://localhost:3000

# 5. API disponible sur
open http://localhost:8000/docs
```

### Installation Manuelle (sans Docker)

```bash
# 1. Installer les dépendances Python
pip install -r requirements.txt

# 2. Installer les dépendances Node.js
cd dashboard && npm install

# 3. Installer Playwright
playwright install

# 4. Lancer PostgreSQL et Redis localement
# (via Homebrew, apt, ou autre)

# 5. Lancer les migrations
python manage.py migrate

# 6. Lancer l'API
cd api && uvicorn main:app --reload

# 7. Lancer le dashboard
cd dashboard && npm run dev
```

---

## 📚 Documentation

- **📖 [Architecture Technique](ARCHITECTURE.md)** - Design du système complet
- **💼 [Business Plan](BUSINESS_PLAN.md)** - Stratégie commerciale et pricing
- **🎨 [Design System](DESIGN_SYSTEM.md)** - Guidelines UI/UX et branding
- **🤖 [Agents Documentation](AGENTS.md)** - Documentation des agents IA

---

## 💡 Fonctionnalités Principales

### 🎯 Pour les Clients

- ✅ Dashboard temps réel de toutes les conversations
- ✅ Paramétrage du persona cible
- ✅ Intégration calendrier (Google, Outlook, Cal.com)
- ✅ Analytics et rapports hebdomadaires
- ✅ CRM intégré ou export vers votre CRM

### 🤖 Capacités de l'IA

- ✅ Détection automatique des formulaires web
- ✅ Génération de messages personnalisés
- ✅ Conversation naturelle multilingue (FR/EN)
- ✅ Gestion des objections commerciales
- ✅ Scoring intelligent des leads
- ✅ Auto-optimisation continue

---

## 🛠️ Stack Technologique

### Backend
- **Python 3.11+** - Agents IA et API
- **FastAPI** - API REST haute performance
- **PostgreSQL** - Base de données principale
- **Redis** - Cache et queues
- **Celery** - Tâches asynchrones

### Frontend
- **Next.js 14** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling (Design System)
- **Framer Motion** - Animations

### IA & ML
- **Anthropic Claude 3.5** - Conversation IA
- **OpenAI GPT-4** - Génération de contenu
- **LangChain** - Orchestration LLM
- **Pinecone** - Vector database (RAG)

### Automation
- **Playwright** - Browser automation
- **BeautifulSoup** - Web scraping
- **IMAP/SMTP** - Email automation

---

## 📊 Structure du Projet

```
sales-copilot-ai/
├── agents/                      # Agents IA
│   ├── research_agent/          # Agent 1: Recherche
│   ├── form_filler_agent/       # Agent 2: Form Filler
│   ├── inbox_master_agent/      # Agent 3: Inbox Master
│   ├── conversation_agent/      # Agent 4: Conversation
│   └── decision_engine/         # Agent 5: Décision
├── api/                         # API FastAPI
│   ├── routes/
│   ├── models/
│   └── main.py
├── dashboard/                   # Dashboard Next.js
│   ├── app/
│   ├── components/
│   └── public/
├── shared/                      # Code partagé
│   ├── database/
│   ├── utils/
│   └── config/
├── tests/                       # Tests
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/                        # Documentation
├── docker-compose.yml
├── requirements.txt
├── package.json
└── README.md
```

---

## 🧪 Tests

```bash
# Tests unitaires Python
pytest tests/unit/ -v

# Tests d'intégration
pytest tests/integration/ -v

# Tests E2E
pytest tests/e2e/ -v

# Coverage
pytest --cov=agents --cov-report=html

# Tests frontend
cd dashboard && npm test
```

---

## 🚢 Déploiement

### Production avec Docker

```bash
# Build les images
docker-compose -f docker-compose.prod.yml build

# Déployer
docker-compose -f docker-compose.prod.yml up -d

# Monitoring
docker-compose logs -f
```

### Cloud Providers

- **AWS** : ECS/Fargate + RDS + ElastiCache
- **Azure** : Container Apps + PostgreSQL + Redis
- **GCP** : Cloud Run + Cloud SQL + Memorystore

Voir [DEPLOYMENT.md](docs/DEPLOYMENT.md) pour plus de détails.

---

## 📈 Pricing

### 🥉 STARTER - €997/mois
- 10-15 RDV qualifiés/mois
- 1 persona ciblé
- Email + Web Forms
- Support email 48h

### 🥈 GROWTH - €2,497/mois ⭐
- 25-35 RDV qualifiés/mois
- 3 personas ciblés
- Tous les canaux
- Support prioritaire 24h

### 🥇 ENTERPRISE - €5,997/mois
- 50-70 RDV qualifiés/mois
- Personas illimités
- Dedicated Account Manager
- Custom AI training

---

## 🤝 Contribution

Ce projet est **propriétaire** et n'accepte pas de contributions externes pour le moment.

Pour l'équipe interne, voir [CONTRIBUTING.md](docs/CONTRIBUTING.md).

---

## 📄 License

**Propriétaire** - Sales Copilot AI © 2024

Tous droits réservés. Ce code est la propriété exclusive de Sales Copilot AI et ne peut être utilisé, copié, modifié ou distribué sans autorisation écrite préalable.

---

## 📞 Contact & Support

- **Site web** : [salescopilot.ai](https://salescopilot.ai)
- **Email** : contact@salescopilot.ai
- **Support** : support@salescopilot.ai
- **LinkedIn** : [Sales Copilot AI](https://linkedin.com/company/sales-copilot-ai)

---

## 🎯 Roadmap 2024

### Q1 2024
- [x] MVP des 3 premiers agents
- [x] Dashboard client v1
- [ ] Beta privée (10 clients)

### Q2 2024
- [ ] Les 5 agents opérationnels
- [ ] Intégrations CRM (HubSpot, Salesforce)
- [ ] Mobile app iOS/Android

### Q3 2024
- [ ] LinkedIn automation
- [ ] SMS automation
- [ ] API publique

### Q4 2024
- [ ] Voice AI (appels automatisés)
- [ ] Expansion internationale (USA, UK)
- [ ] White-label options

---

## 🏆 Métriques de Succès

Nos clients en moyenne :

- 📈 **+250%** d'augmentation des RDV
- ⏱️ **30h/mois** économisées sur la prospection
- 💰 **ROI de 5:1** en moyenne
- ⭐ **NPS de 65+**

---

<div align="center">

**Prêt à transformer votre prospection avec l'IA ?**

[Demander une démo](https://calendly.com/salescopilot) • [Voir la vidéo](https://youtube.com/salescopilot)

</div>
