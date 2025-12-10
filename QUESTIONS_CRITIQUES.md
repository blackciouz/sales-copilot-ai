# ❓ Sales Copilot AI - Questions Critiques à Résoudre

## Vue d'ensemble

Ce document centralise toutes les questions ouvertes identifiées dans le cahier des charges Phase 2 - V1. Ces questions nécessitent des décisions avant l'implémentation complète.

---

## 🗄️ Génération de Bases de Données

### Q1 : Modèle de Déverrouillage des Données

**Question** :
> Un abonnement de 100 soumissions donne 1000 résultats ? Générons-nous une base complètement inaccessible, qui se débloquera au fur et à mesure que ses crédits liés à l'abonnement le permettent ?

**Options** :
- **Option A** : Générer 1000 contacts, déverrouiller progressivement (100/mois)
- **Option B** : Générer uniquement ce qui est payé (100 contacts)
- **Option C** : Générer tout, mais aperçu limité avant achat de crédits

**Impact** :
- Sur l'expérience utilisateur
- Sur les coûts de scraping
- Sur la perception de valeur

**Décision requise** : ⏳ En attente

---

### Q2 : Revente de Bases par Établissements

**Question** :
> Comment les établissements qui ont accepté votre business model de vendre des bases avec nous, les scrappons-nous et les revendons-nous ?

**Sous-questions** :
- Avons-nous des partenariats avec des établissements ?
- Sommes-nous un pure-player scraping ou agrégateur ?
- Quelle est notre proposition de valeur aux fournisseurs de données ?

**Décision requise** : 🔴 URGENT - Impact sur modèle business

---

### Q3 : Interface de Recherche

**Question** :
> Le secteur d'activité et la zone géographique que le client va entrer dans sa recherche est-elle en texte libre ou un menu déroulant à choix imposés ?

**Options** :
- **Texte libre** : Flexibilité maximale, risque d'incohérence
- **Menu déroulant** : Cohérence garantie, moins flexible
- **Hybride** : Suggestions + possibilité de saisie libre

**Impact** :
- Sur la qualité des résultats
- Sur l'expérience utilisateur
- Sur la complexité technique

**Décision requise** : 🟡 Moyenne priorité

---

### Q4 : Aperçu Pages Jaunes Électroniques

**Question** :
> Pour les Pages Jaunes et aperçus des sites, générons-nous des aperçus des Pages Jaunes électroniques ? Si oui, incluant 50% de caractères masqués **** et les numéros de téléphone + mail + site web totalement masqués avec des **** même si nous ne l'avons pas généré, pour économiser des tokens avant validation du client ?

**Options** :
- **Aperçu masqué** : Économie de tokens, effet "teaser"
- **Aperçu complet** : Meilleure UX, coût plus élevé
- **Pas d'aperçu** : Achat à l'aveugle (risqué)

**Avantages aperçu masqué** :
- ✅ Économie de tokens significative
- ✅ Incite à l'achat pour voir données complètes
- ✅ Protection contre scraping

**Inconvénients** :
- ❌ Peut frustrer l'utilisateur
- ❌ Risque de mauvaise qualité perçue

**Décision requise** : 🟢 À tester en MVP

---

### Q5 : Protection Anti-Scraping

**Question** :
> Comment se protéger pour ne pas se faire scrapper ? Car certaines sociétés ont un business model de vendre des bases de données à des call centers, et les vendent très cher. Il pourrait être très avantageux de générer des bases avec nous, les scrapper et les revendre.

**Mesures envisagées** :
- Rate limiting
- Watermarking
- Détection de patterns suspects
- Limitation des exports

**Décision requise** : 🔴 URGENT - Sécurité fondamentale

---

## 📝 Formulaires de Contact

### Q6 : Compensation en Cas d'Échec

**Question** :
> Est-ce qu'on rembourse en compensation si le formulaire échoue ?

**Options** :
- **Remboursement complet** : Satisfaction client, mais coût élevé
- **Crédit pour nouvelle tentative** : Équilibré
- **Pas de compensation** : Risque de mécontentement
- **Compensation partielle** : Selon taux d'échec

**Seuils à définir** :
- Taux d'échec acceptable : < X% ?
- À partir de quel taux compenser ?
- Type de compensation (€ ou crédits) ?

**Décision requise** : 🔴 URGENT - Impact sur CGV et modèle économique

---

### Q7 : Système de Relance Automatique

**Question** :
> Si pas de réponses sous X jours → relancer via formulaire ou via mail ?

**Paramètres à définir** :
- **Délai avant relance** : 3 jours ? 7 jours ? 14 jours ?
- **Moyen de relance** : Formulaire, email, ou les deux ?
- **Nombre de relances** : 1, 2, 3 maximum ?
- **Ton de la relance** : Identique ou adapté ?

**Options** :
- **Automatique par défaut** : Simple, mais peut être intrusif
- **Optionnel** : Client choisit, plus de contrôle
- **Intelligent** : Basé sur le comportement du prospect

**Décision requise** : 🟡 Moyenne priorité

---

## 💬 Agent Conversation IA

### Q8 : Interrogation du Client par l'IA

**Question** :
> Si le client a des observations sur la façon de faire, parler en général, aborder un sujet, ou erreur de discours commercial → peut-il interroger l'Agent IA pour rectifications ou informations supplémentaires ?

**Workflow à définir** :
1. L'IA détecte une limite ou erreur
2. Comment notifier le client ?
3. Interface pour le client de fournir des infos ?
4. Comment l'IA intègre ces nouvelles infos ?
5. Application immédiate ou après validation ?

**Décision requise** : 🟡 Moyenne priorité - UX à définir

---

### Q9 : Éducation de l'Agent IA

**Question** :
> Si Agent IA n'a pas les informations ou connaissances pour répondre à une question → interroger le client pour s'informer et s'éduquer en conséquence ?

**Mécanisme** :
- Comment l'IA identifie son manque de connaissance ?
- Quel niveau de confiance minimum avant de demander ?
- Stockage des nouvelles infos : par client ou global ?
- Validation humaine requise ?

**Risques** :
- Trop de questions → frustration client
- Pas assez de questions → réponses incorrectes

**Décision requise** : 🟡 Moyenne priorité - Algorithme à définir

---

### Q10 : Types de Conversations "Chat"

**Question** :
> Générer un petit rapport texte agréable (pourquoi pas avec une relance téléphonique personne selon l'objectif que l'on a réalisé). Cela fait 2 zinglets type "Chat", mais : un pour les conversations engagées sans encore de réponse (dans le cas où le client souhaite faire une relance téléphonique personne) avec les refus, et un quatrième avec les refus.

**Structure à clarifier** :
- **Chat 1** : Conversations actives en cours
- **Chat 2** : Conversations sans réponse → relance téléphonique ?
- **Chat 3** : Conversations closes positivement
- **Chat 4** : Conversations closes négativement (refus)

**Questions** :
- Ces 4 catégories sont-elles optimales ?
- Besoin de sous-catégories ?
- Transitions automatiques ou manuelles ?

**Décision requise** : 🟢 À valider en conception UI

---

## 💰 Abonnements et Tarification

### Q11 : Gestion de la Sur-Mesure

**Question** :
> Dans le cas où un client est mensuel, comment générons-nous le sur-mesure ou, quitte à générons-nous toutes les prestations le plus rapidement dès le paiement ou étalons-nous équitablement sur chaque jour durant le mois ?

**Options** :
- **Génération immédiate** : Tout dès le paiement
- **Étalement mensuel** : X contacts/jour automatiquement
- **À la demande** : Client déclenche quand il veut
- **Hybride** : Quota mensuel + déclenchement manuel

**Impact** :
- Sur la charge serveur
- Sur la perception de valeur
- Sur les coûts d'infrastructure

**Décision requise** : 🟡 Moyenne priorité

---

### Q12 : Forfaits Flexibles vs Fixes

**Question** :
> Faisons-nous un système de forfaits fixes + 1 option sur-mesure, ou alors faisons-nous quelque chose de flexible comme chez les sociétés de mailing, avec un forfait qui s'ajuste du nombre de contacts sélectionnés lors de la souscription (exemple : 50/100/150/200/250/.../10,000 contacts) avec un prix par contact dégressif selon volume ?

**Options** :
- **Forfaits fixes** : Simple, prévisible (ex: 500, 1500, 5000 contacts/mois)
- **Système flexible** : Plus de choix, complexe à gérer
- **Hybride** : Forfaits de base + add-ons

**Critères de décision** :
- Simplicité de compréhension pour le client
- Facilité d'implémentation technique
- Optimisation du revenu
- Standards du marché

**Décision requise** : 🔴 URGENT - Impact sur toute la plateforme

---

### Q13 : Facturation Base de Leads Générée

**Question** :
> Facturons-nous sur une base de leads générée (ce qui me semble le plus simple et facile à vendre, mais pas le plus rentable pour nous car ça réduit un souci), ou alors si base est variable et analyse comportementale sur les suites des conversations de l'agent IA, ou alors de façon automatique ?

**Modèles possibles** :
1. **Par lead généré** : Simple, facile à comprendre
2. **Par formulaire soumis** : Ce qui est payé
3. **Au succès** : % sur les deals fermés (complexe)
4. **Forfait + variable** : Base fixe + coût par lead

**Rentabilité** :
- Quel modèle optimise notre marge ?
- Quel modèle est le plus attractif pour le client ?
- Comment gérer les échecs dans chaque modèle ?

**Décision requise** : 🔴 URGENT - Cœur du business model

---

## 📅 Gestion des RDV

### Q14 : Format du Rapport de Conversation

**Question** :
> Comment générer un petit rapport texte agréable selon l'objectif que l'on a réalisé ?

**Éléments à inclure** :
- Résumé de la conversation
- Points clés abordés
- Objections et réponses
- Prochaines étapes
- Score de qualification ?
- Recommandations pour l'appel ?

**Format** :
- PDF téléchargeable ?
- Email automatique ?
- Dans le dashboard uniquement ?
- Notification push ?

**Décision requise** : 🟢 À définir en phase de design

---

## 💡 Opportunités Stratégiques

### Q15 : Analyse Comportementale Client

**Question** :
> Au sujet de la valeur de l'information, ne pourrions-nous pas anticiper un algorithme de récolte de data et d'analyse comportementale client qui surqualifierait notre propre base de données pour une utilisation future analogue ? C'est borderline mais c'est une potentielle mine d'or supplémentaire.

**Considérations** :
- **Légalité** : Conformité RGPD stricte requise
- **Éthique** : Consentement explicite nécessaire
- **Valeur** : Très intéressant pour revente
- **Risque** : Réputation, légal, complexité

**Questions à résoudre** :
1. Est-ce légal avec consentement approprié ?
2. Quel type de données comportementales ?
3. Anonymisation suffisante ?
4. Modèle de monétisation ?
5. Impact sur la confiance des clients ?

**Décision requise** : 🟡 Moyenne priorité - Étude légale requise

---

### Q16 : Expertise Externe Ponctuelle

**Question** :
> Peut-être qu'un expert pourrait nous aider, même si ce n'est que sur des missions de courte durée, par exemple en phase de réflexion stratégique avant action, ou en phase de test futur avant mise en production publique ?

**Domaines d'expertise nécessaires** :
- CAPTCHA bypass et automation
- Scraping à grande échelle
- Conformité RGPD
- Optimisation des coûts d'IA
- Architecture scalable

**Budget** :
- Combien allouer à l'expertise externe ?
- Mission ponctuelle vs accompagnement ?
- Freelance vs cabinet spécialisé ?

**Décision requise** : 🟡 Moyenne priorité - Budget à définir

---

## 📊 Mesure du Succès

### Q17 : Définition du ROI Client

**Question** :
> Il faut absolument que nous arrivions à mesurer le succès des campagnes pour nos clients. Comment définir et mesurer précisément le ROI ?

**Métriques à tracker** :
- Taux de réponse
- Taux de conversion
- Coût par lead qualifié
- Coût par RDV obtenu
- Coût par deal fermé
- ROI en € (chiffre d'affaires généré vs coût de l'abonnement)

**Défis** :
- Comment tracker les deals fermés ?
- Client doit-il nous informer ?
- Automatisation possible via CRM ?
- Que faire si le client ne partage pas les infos ?

**Décision requise** : 🔴 URGENT - Essentiel pour la preuve de valeur

---

## ⚙️ Infrastructure Technique

### Q18 : Limitation des Tokens pour Multi-Activités

**Question** :
> Si le client est multi-activité et plusieurs cibles, comment limiter les surcoûts trop importants de tokens de l'agent conversationnel ?

**Stratégies possibles** :
- Plafond global par client
- Plafond par conversation
- Plafond par activité
- Alerte avant dépassement
- Tarification progressive selon consommation

**Décision requise** : 🟡 Moyenne priorité - Modèle économique

---

## 📋 Priorisation des Décisions

### 🔴 URGENTES (Blocantes pour MVP)
1. Q12 : Forfaits flexibles vs fixes
2. Q13 : Modèle de facturation
3. Q6 : Compensation échecs formulaires
4. Q17 : Définition du ROI client
5. Q2 : Modèle de revente de bases

### 🟡 MOYENNES (Importantes pour UX)
6. Q7 : Système de relance
7. Q8 : Interrogation du client par IA
8. Q9 : Éducation de l'Agent IA
9. Q11 : Gestion sur-mesure
10. Q15 : Analyse comportementale
11. Q18 : Limitation tokens

### 🟢 BASSES (Améliorations)
12. Q3 : Interface de recherche
13. Q4 : Aperçu Pages Jaunes
14. Q10 : Types de conversations Chat
15. Q14 : Format rapport conversation
16. Q16 : Expertise externe

---

## 🎯 Processus de Résolution

Pour chaque question :
1. **Analyse** : Étudier les options et impacts
2. **Consultation** : Experts techniques, juridiques, business
3. **Test** : Prototyper si possible
4. **Décision** : Documenter le choix et les raisons
5. **Implémentation** : Intégrer dans la roadmap
6. **Validation** : Tester avec utilisateurs beta

---

## 📝 Template de Décision

```markdown
### Question X : [Titre]

**Décision finale** : [Option choisie]

**Date** : JJ/MM/AAAA

**Raisons** :
- Raison 1
- Raison 2
- Raison 3

**Impacts** :
- Impact technique
- Impact business
- Impact UX

**Actions** :
- [ ] Action 1
- [ ] Action 2

**Responsable** : [Nom]
```

---

**Dernière mise à jour** : Janvier 2024  
**Basé sur** : PHASE 2 - V1.pdf  
**Statut** : 🔴 DÉCISIONS REQUISES AVANT LANCEMENT MVP
