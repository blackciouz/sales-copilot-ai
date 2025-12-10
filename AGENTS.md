# 🤖 Sales Copilot AI - Agents Documentation

## Vue d'ensemble

Ce document centralise la documentation de tous les agents intelligents qui composent Sales Copilot AI, incluant les fonctionnalités de la **Phase 2 - V1** (Janvier-Mars 2026).

---

## 📁 Structure du Projet

```
sales-copilot-ai/
├── agents/
│   ├── research_agent/          # Agent 1: Recherche & Qualification
│   ├── form_filler_agent/       # Agent 2: Soumission de Formulaires
│   ├── inbox_master_agent/      # Agent 3: Réception & Parsing
│   ├── conversation_agent/      # Agent 4: Conversation IA
│   └── decision_engine/         # Agent 5: Décision Intelligente
├── shared/
│   ├── database/                # Schémas et migrations
│   ├── utils/                   # Fonctions utilitaires
│   └── config/                  # Configuration globale
├── dashboard/                   # Interface client (Next.js 14)
├── api/                         # API Gateway
└── docs/                        # Documentation

```

---

## 🎯 Les 5 Agents - Phase 2 V1

### 1️⃣ Research Agent (Génération de Bases de Données)
**Responsabilité** : Générer des bases de données ultra-qualifiées

**Fonctionnalités Phase 2** :
- ✅ Génération multi-sources (Pages Jaunes, annuaires professionnels)
- ✅ Scraping intelligent par secteur d'activité + zone géographique
- ✅ Interface de génération intuitive
- ✅ Filtrage avancé et suppression manuelle
- ✅ Export multi-formats (CSV, Excel, API)
- ✅ Qualité garantie : moins de 50% de données manquantes
- ✅ Support multi-typologies de cibles
- ✅ Plusieurs secteurs géographiques simultanés
- ✅ Scraping avec aperçu Pages Jaunes électroniques (données masquées avant paiement)
- ✅ Protection anti-scraping pour éviter revente des bases générées

**Technologies** :
- Python 3.11+
- Scrapy / BeautifulSoup / Selenium
- OpenAI API pour enrichissement et validation
- PostgreSQL pour stockage
- Schéma : secteur d'activité + secteur géographique

**Base de données** :
```sql
TABLE data_sources (
  id UUID PRIMARY KEY,
  client_id UUID,
  sector_activity VARCHAR(255),
  geographic_zone VARCHAR(255),
  source_type VARCHAR(50), -- pages_jaunes, annuaire, etc.
  generated_at TIMESTAMP,
  total_contacts INTEGER,
  quality_score FLOAT -- % de données complètes
);
```

---

### 2️⃣ Form Filler Agent (Prise de Contact Automatisée)
**Responsabilité** : Soumettre automatiquement les formulaires de contact web

**Fonctionnalités Phase 2** :
- ✅ Aide IA pour composer le message initial de base
- ✅ Tests A/B automatiques sur 2-3 messages différents
- ✅ Fonction PLAY et PAUSE pour contrôler l'envoi
- ✅ Envoi automatique des données au dashboard
- ✅ Statut détaillé : "Soumis à date XX/XX/XXXX"
- ✅ Colonne de statut dans la base de données
- ✅ Recommandations IA pour optimiser les messages
- ✅ Sélection automatique du meilleur message (tests A/B)
- ✅ Gestion des échecs de formulaire avec compensation si nécessaire
- ✅ Système de relance automatique si pas de réponse sous X jours

**Technologies** :
- Node.js / TypeScript
- Playwright pour automation navigateur
- 2Captcha API pour résolution CAPTCHA
- RabbitMQ pour gestion de queue
- OpenAI/Claude pour recommandations messages

**Workflow** :
1. Client compose 2-3 messages avec aide IA
2. Sélection de la base de données cible
3. PLAY → Démarre la campagne
4. Tests A/B automatiques en cours
5. Envoi au dashboard avec statut temps réel
6. PAUSE → Arrête temporairement
7. Analyse des résultats et sélection du meilleur message

---

### 3️⃣ Inbox Master Agent (Réception & Parsing)
**Responsabilité** : Centraliser et analyser toutes les réponses email

**Fonctionnalités Phase 2** :
- ✅ Connexion multi-boîtes email
- ✅ Parsing intelligent des réponses
- ✅ Classification automatique (Intéressé/Pas intéressé/Question)
- ✅ Extraction d'informations clés
- ✅ Alimentation automatique du dashboard
- ✅ Notification en temps réel
- ✅ Thread tracking complet

**Technologies** :
- Python 3.11+
- IMAP/SMTP
- OpenAI GPT-4 pour parsing et classification
- PostgreSQL
- WebSocket pour notifications temps réel

---

### 4️⃣ Conversation Agent (IA Conversationnelle Multi-Cibles)
**Responsabilité** : Gérer les conversations avec les prospects de manière intelligente

**Fonctionnalités Phase 2** :
- ✅ Tags multi-niveaux pour catégorisation
- ✅ Conversations taggées avec tags à définir
- ✅ Pipeline graphique de visualisation (type Chat)
- ✅ Gestion multi-activités du client
- ✅ Gestion multi-cibles simultanées
- ✅ Prévention des surcroîts de tokens
- ✅ Gestion des erreurs et refus gracieux
- ✅ Définition d'objectif par conversation (RDV/Appel/Visite/Achat)
- ✅ Petit rapport texte agréable au prospect
- ✅ Génération de rectifications si nécessaire
- ✅ Système d'interrogation du client si manque d'informations
- ✅ Conversations en 2 types "Chat" : relance téléphonique ou discussions closes (positivement ou refus)

**Architecture conversation** :
```
- Tags définis par le client
- Chaque conversation = 1 pipeline
- Couleurs : rouge/orange/jaune/vert (échelle progression)
- Échelle 1-10 pour tracking
- Rapport généré pour le client après chaque échange
```

**Technologies** :
- Python 3.11+
- LangChain pour orchestration
- OpenAI GPT-4 / Claude 3.5 Sonnet
- Pinecone (Vector DB) pour RAG
- Redis pour gestion des tokens

**Cas d'usage spéciaux** :
- Multi-activités : Chaussures Nord + Voitures Sud
- Multi-cibles : Sécurité jour + Urgence nuit (2 prestations différentes)
- Gestion séparée dans UI/UX et agents

---

### 5️⃣ Decision Engine (Décision Intelligente)
**Responsabilité** : Décider quand et comment agir

**Fonctionnalités Phase 2** :
- ✅ Connexion agenda via workflow
- ✅ Comptabilisation dans dashboard
- ✅ Alimentation automatique du calendrier client
- ✅ Listing des RDV avec actions de classification
- ✅ Classification : "Non signé" / "Contrat signé"
- ✅ Stats précises sur taux de transformation
- ✅ Identification d'opportunités à prendre de RDV

**Technologies** :
- Python 3.11+
- TensorFlow / Scikit-learn pour ML
- Redis pour cache décisionnel
- Celery pour tâches async
- Google Calendar / Outlook API

**Workflow RDV** :
1. Prospect accepte un RDV
2. Agent IA propose créneaux disponibles
3. Confirmation → Ajout automatique au calendrier
4. Notification client + prospect
5. Suivi dans dashboard avec statut
6. Post-RDV : Classification (Signé/Non signé)
7. Stats de transformation mises à jour

---

## 🎯 Onboarding & Dashboard (Phase 2)

### Processus d'onboarding guidé
1. **Création de compte** : Sélection d'abonnement selon budget et objectifs
2. **Guide interactif** : Agent IA accompagne la configuration
3. **Questionnaire intelligent** :
   - Informations de société et personnelles
   - Réponse à questionnaire ou discussion via Agent IA
   - Définition du business model et secteur d'activité
4. **Premier message de démarrage** : Recommandations IA
5. **Tests A/B** : Analyse des volumes de retour et sélection automatique
6. **Consultation factures et abonnement**
7. **Dashboard ROI** : Maximum de métriques pour le pilotage
8. **Bases de données consultables** : Contacts pour lesquels le client a payé
9. **Consultation calendrier et duplicata** : Intégration agenda perso
10. **Fiches de debriefing** : Issues des conversations IA
11. **Fonctions de base pour le dessin des maquettes brouillons**
12. **Système de notification**

### Dashboard personnalisé
**Métriques disponibles** :
- Volume clients / Chiffre d'affaires
- Mails envoyés / Consommation tokens
- Prospects contactés / RDV confirmés
- Taux de réponse / Taux de conversion
- Activité récente en temps réel
- Campagnes actives avec progression
- Factures et abonnement

**Interface** : Type Zoho Analytics / DIGdash / Tableau / MyReport pour gagner du temps

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
docker-compose --version
```

### Installation

```bash
# Cloner le repo
git clone https://github.com/votre-org/sales-copilot-ai.git
cd sales-copilot-ai

# Setup des variables d'environnement
cp .env.example .env
# Éditer .env avec vos clés API

# Lancer l'infrastructure
docker-compose up -d

# Installer les dépendances Python
pip install -r requirements.txt

# Installer les dépendances Node.js
npm install

# Lancer les migrations DB
python manage.py migrate

# Lancer tous les agents
python manage.py start_agents
```

---

## 📊 Monitoring

**Dashboard de monitoring** : `http://localhost:3000/monitoring`

**Métriques disponibles** :
- État de chaque agent (Running/Stopped/Error)
- Tâches en queue
- Performance (latency, throughput)
- Taux d'erreur
- Logs en temps réel

---

## 🧪 Tests

```bash
# Tests unitaires
pytest tests/unit/

# Tests d'intégration
pytest tests/integration/

# Tests E2E
pytest tests/e2e/

# Coverage
pytest --cov=agents tests/
```

---

## 📚 Documentation Complète

- **Architecture** : Voir `ARCHITECTURE.md`
- **Business Plan** : Voir `BUSINESS_PLAN.md`
- **Design System** : Voir `DESIGN_SYSTEM.md`
- **API Reference** : Voir `API_REFERENCE.md`
- **Deployment** : Voir `DEPLOYMENT.md`

---

## 🤝 Contribution

Voir `CONTRIBUTING.md` pour les guidelines de contribution.

---

## 📄 License

Propriétaire - Sales Copilot AI © 2024
