# 🏗️ Sales Copilot AI - Architecture Technique

## Vue d'ensemble du système

**Sales Copilot AI** est une plateforme d'automatisation commerciale basée sur une architecture microservices orchestrée par des agents IA intelligents.

---

## 🎯 Architecture Globale

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT INTERFACE                         │
│  (Dashboard Web + Mobile App + API Access)                   │
└────────────────────┬────────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────────┐
│                  API GATEWAY + AUTH                          │
│         (Authentication, Rate Limiting, Routing)             │
└────────────────────┬────────────────────────────────────────┘
                     │
         ┌───────────┴───────────┐
         │                       │
┌────────▼────────┐    ┌────────▼────────┐
│  ORCHESTRATOR   │    │   ANALYTICS     │
│     ENGINE      │◄───┤     ENGINE      │
└────────┬────────┘    └─────────────────┘
         │
    ┌────┴────┐
    │         │
┌───▼──┐  ┌──▼───┐  ┌──────┐  ┌──────┐  ┌──────┐
│Agent │  │Agent │  │Agent │  │Agent │  │Agent │
│  1   │  │  2   │  │  3   │  │  4   │  │  5   │
└──┬───┘  └──┬───┘  └──┬───┘  └──┬───┘  └──┬───┘
   │         │         │         │         │
└──┴─────────┴─────────┴─────────┴─────────┴────┘
              │
    ┌─────────▼─────────┐
    │   DATA LAYER      │
    │  (PostgreSQL +    │
    │   Vector DB +     │
    │   Redis Cache)    │
    └───────────────────┘
```

---

## 🤖 Les 5 Agents Principaux

### 1️⃣ Agent de Recherche & Qualification (Research Agent)

**Responsabilité** : Trouver et qualifier les prospects

**Stack Technologique** :
- **Backend** : Python (Scrapy, BeautifulSoup4, Selenium)
- **APIs** : Apollo.io, Hunter.io, LinkedIn Sales Navigator API
- **ML** : Scikit-learn pour le scoring de leads
- **Queue** : RabbitMQ pour les tâches async

**Fonctionnalités** :
- Web scraping intelligent multi-sources
- Filtrage par critères (secteur, taille, localisation, techno)
- Enrichissement automatique des données (email, téléphone, social)
- Lead scoring ML (0-100)
- Export vers CRM

**Base de données** :
```sql
TABLE prospects (
  id UUID PRIMARY KEY,
  company_name VARCHAR(255),
  website VARCHAR(255),
  industry VARCHAR(100),
  size_range VARCHAR(50),
  location VARCHAR(255),
  technologies JSONB,
  contact_email VARCHAR(255),
  contact_phone VARCHAR(50),
  linkedin_url VARCHAR(255),
  lead_score INTEGER,
  status VARCHAR(50),
  metadata JSONB,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

---

### 2️⃣ Agent de Soumission de Formulaires (Form Filler Agent)

**Responsabilité** : Soumettre automatiquement des formulaires de contact

**Stack Technologique** :
- **Backend** : Node.js + Puppeteer
- **Browser Automation** : Playwright (plus robuste que Selenium)
- **CAPTCHA Solving** : 2Captcha, AntiCaptcha API
- **Proxy Management** : Bright Data, Oxylabs

**Fonctionnalités** :
- Détection automatique des champs de formulaire
- Remplissage contextuel personnalisé
- Rotation d'identités (noms/emails)
- Gestion des CAPTCHAs
- Screenshot de confirmation
- Retry logic intelligent

**Workflow** :
```
1. Receive prospect URL
2. Load page with random user-agent
3. Detect form fields (ML-based)
4. Generate personalized message
5. Fill fields with human-like delays
6. Solve CAPTCHA if present
7. Submit form
8. Verify submission success
9. Log result + screenshot
```

---

### 3️⃣ Agent Master de Réception (Inbox Master Agent)

**Responsabilité** : Centraliser et analyser toutes les réponses

**Stack Technologique** :
- **Email** : IMAP/SMTP (Gmail API, Outlook API)
- **NLP** : OpenAI GPT-4, Claude API
- **Parsing** : Python (email library, regex)
- **Classification** : Fine-tuned transformer model

**Fonctionnalités** :
- Connexion multi-boîtes email
- Parsing intelligent des réponses
- Extraction d'entités (nom, entreprise, intention)
- Classification automatique (intéressé/pas intéressé/question/objection)
- Détection de sentiment
- Priorisation des leads chauds
- Thread tracking (historique complet)

**Classification des réponses** :
- 🟢 **HOT** : Demande de RDV, demande de prix, intérêt fort
- 🟡 **WARM** : Questions, demande d'infos, hésitation
- 🔴 **COLD** : Pas intéressé, déjà client concurrent
- ⚫ **SPAM** : Auto-réponses, out-of-office

---

### 4️⃣ Agent de Conversation IA (Conversation Agent)

**Responsabilité** : Gérer les conversations de manière naturelle

**Stack Technologique** :
- **LLM** : OpenAI GPT-4 / Claude 3 Opus
- **RAG** : LangChain + Pinecone/Weaviate (Vector DB)
- **Memory** : Redis pour contexte court-terme, PostgreSQL pour long-terme
- **Templating** : Jinja2 pour personnalisation

**Fonctionnalités** :
- Compréhension contextuelle (historique complet)
- Génération de réponses personnalisées
- Adaptation du ton (formel/casual/technique)
- Multilingue (détection automatique)
- Gestion des objections
- Détection des signaux d'achat
- A/B testing automatique des messages

**Architecture RAG** :
```
User Response → Embedding → Vector Search → Context Retrieval
                                ↓
                    GPT-4 + Context + Prompt Template
                                ↓
                         Generated Response
                                ↓
                    Human Review (if flagged) → Send
```

**Prompts système** :
```
Vous êtes un assistant commercial expert pour [CLIENT_NAME].
Votre objectif : qualifier le lead et obtenir un rendez-vous.
Ton : [FORMAL/CASUAL/TECHNICAL]
Contexte : [CONVERSATION_HISTORY]
Infos du prospect : [PROSPECT_DATA]

Répondez de manière naturelle, empathique et orientée valeur.
```

---

### 5️⃣ Agent de Décision Intelligente (Decision Engine)

**Responsabilité** : Décider quand et comment agir

**Stack Technologique** :
- **ML** : TensorFlow/PyTorch pour modèles prédictifs
- **Rules Engine** : Python (custom logic)
- **Scheduler** : Celery + Redis
- **Analytics** : Pandas, NumPy

**Fonctionnalités** :
- Décision "Répondre ou Non"
- Calcul du timing optimal (heures/jours)
- Stratégie de relance personnalisée
- Lead scoring dynamique
- Détection des patterns gagnants
- Auto-optimisation des campagnes

**Modèle de décision** :
```python
def should_respond(lead_data, conversation_history, client_config):
    score = 0
    
    # Facteurs positifs
    if "intéressé" in last_message.lower(): score += 30
    if "rendez-vous" in last_message.lower(): score += 50
    if lead_score > 70: score += 20
    if response_time < 2h: score += 10
    
    # Facteurs négatifs
    if "pas intéressé" in last_message.lower(): score -= 100
    if bounce_rate > 0.5: score -= 20
    if already_responded_3_times: score -= 15
    
    return score > 40
```

---

## 📊 Data Layer

### Bases de données

#### PostgreSQL (Données relationnelles)
```sql
-- Clients
TABLE clients (
  id UUID PRIMARY KEY,
  company_name VARCHAR(255),
  industry VARCHAR(100),
  config JSONB,
  subscription_tier VARCHAR(50),
  created_at TIMESTAMP
);

-- Prospects
TABLE prospects (
  id UUID PRIMARY KEY,
  client_id UUID REFERENCES clients(id),
  company_name VARCHAR(255),
  contact_email VARCHAR(255),
  lead_score INTEGER,
  status VARCHAR(50),
  metadata JSONB,
  created_at TIMESTAMP
);

-- Conversations
TABLE conversations (
  id UUID PRIMARY KEY,
  prospect_id UUID REFERENCES prospects(id),
  thread_id VARCHAR(255),
  messages JSONB[],
  status VARCHAR(50),
  last_message_at TIMESTAMP
);

-- Actions Log
TABLE actions_log (
  id UUID PRIMARY KEY,
  agent_type VARCHAR(50),
  prospect_id UUID,
  action_type VARCHAR(50),
  result JSONB,
  created_at TIMESTAMP
);
```

#### Vector DB (Pinecone/Weaviate) - Pour RAG
```python
# Stockage des embeddings
{
  "id": "conv_12345",
  "vector": [0.123, 0.456, ...],  # Embedding
  "metadata": {
    "prospect_id": "uuid",
    "client_id": "uuid",
    "message": "Original message text",
    "sentiment": "positive",
    "intent": "request_meeting"
  }
}
```

#### Redis (Cache + Queue)
```
# Session cache
client:uuid:config → JSON config
prospect:uuid:score → Integer

# Task queues
queue:form_submissions
queue:email_responses
queue:lead_enrichment
```

---

## 🔐 Sécurité & Conformité

### Authentication & Authorization
- **JWT tokens** pour l'API
- **OAuth 2.0** pour intégrations tierces
- **RBAC** (Role-Based Access Control)

### Data Protection
- **Encryption at rest** : AES-256
- **Encryption in transit** : TLS 1.3
- **GDPR compliance** :
  - Right to be forgotten (soft delete)
  - Data export on demand
  - Consent management

### Rate Limiting
```python
# Par client
- 1000 API calls/hour
- 500 email sends/day
- 200 form submissions/day

# Anti-spam protections
- Email warm-up progressif
- Domain reputation monitoring
- Bounce rate tracking
```

---

## 🚀 Infrastructure & Déploiement

### Cloud Provider : AWS (ou Azure/GCP)

**Services utilisés** :
- **Compute** : ECS/Fargate pour microservices
- **Database** : RDS PostgreSQL (Multi-AZ)
- **Cache** : ElastiCache Redis
- **Queue** : SQS + Lambda
- **Storage** : S3 pour logs et assets
- **CDN** : CloudFront
- **Monitoring** : CloudWatch + Datadog

### Architecture Haute Disponibilité
```
Load Balancer (ALB)
    │
    ├─── Web App (ECS) [3 instances]
    ├─── API Gateway (ECS) [3 instances]
    ├─── Agents Workers (ECS) [Auto-scaling 2-10]
    │
    └─── RDS PostgreSQL (Multi-AZ with Read Replicas)
```

### CI/CD Pipeline
```
GitHub → GitHub Actions → Docker Build → ECR → ECS Deploy
    │
    └─── Tests (Unit + Integration) → Code Quality (SonarQube)
```

---

## 📈 Scalabilité

### Stratégie de scaling

**Horizontal Scaling** :
- Agents workers : Auto-scaling basé sur queue depth
- API servers : Auto-scaling basé sur CPU/RAM
- Database : Read replicas pour queries

**Vertical Scaling** :
- ML models : GPU instances (g4dn.xlarge)
- Vector DB : Dedicated cluster

### Performance Targets
- **API Response Time** : < 200ms (p95)
- **Form Submission** : < 30s par formulaire
- **Email Response Generation** : < 5s
- **Lead Scoring** : < 1s

---

## 🔄 Intégrations

### CRM
- HubSpot API
- Salesforce API
- Pipedrive API

### Email
- Gmail API
- Outlook API
- SendGrid (pour envois)

### Calendar
- Google Calendar API
- Microsoft Calendar API
- Cal.com API

### Communication
- Slack Webhooks
- Microsoft Teams Webhooks
- Twilio (SMS)

---

## 📊 Monitoring & Observability

### Métriques clés
```
Business Metrics:
- Leads generated/day
- Response rate (%)
- Meeting booked/week
- ROI per client

Technical Metrics:
- API latency (p50, p95, p99)
- Error rate (%)
- Queue depth
- Database connection pool
- Memory/CPU usage

Agent Metrics:
- Form submissions success rate
- Email parsing accuracy
- Conversation quality score
- Lead scoring accuracy
```

### Alerting
- PagerDuty pour incidents critiques
- Slack pour warnings
- Email pour daily summaries

---

## 🧪 Testing Strategy

### Tests unitaires (80% coverage)
- Chaque agent individuellement
- Business logic isolée

### Tests d'intégration
- Communication entre agents
- API endpoints
- Database operations

### Tests E2E
- Scénarios complets de prospection
- Simulation de conversations
- Workflow de bout en bout

### Tests de charge
- JMeter/K6 pour stress testing
- 1000 concurrent users
- 10,000 requests/second

---

Cette architecture est conçue pour être **modulaire**, **scalable** et **résiliente**. Chaque agent peut être développé, déployé et mis à l'échelle indépendamment.
