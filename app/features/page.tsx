import Features from '@/components/Features'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import { Check, Database, Filter, Shield, Play } from 'lucide-react'

export const metadata = {
  title: 'Fonctionnalités - Sales Copilot AI',
  description: '5 agents IA intelligents qui automatisent votre prospection commerciale',
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-6">
            <span className="text-sm text-brand-400 font-medium">
              5 Agents IA Puissants
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
            Fonctionnalités qui
            <br />
            <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
              transforment votre prospection
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Une suite complète d'agents IA qui travaillent ensemble pour automatiser 
            chaque étape de votre processus commercial.
          </p>
        </div>
      </section>

      {/* Features Component */}
      <Features />

      {/* Detailed Features from PDF */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Fonctionnalités détaillées
            </h2>
            <p className="text-xl text-gray-400">
              Un écosystème complet pour automatiser votre prospection
            </p>
          </div>

          <div className="space-y-16">
            {/* Onboarding & Dashboard */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-6">
                  <span className="text-sm text-brand-400 font-medium">Onboarding Intelligent</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-white mb-4">
                  Démarrage guidé par IA
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-400 mt-1 flex-shrink-0" />
                    <span>Guide interactif avec Agent IA pour la configuration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-400 mt-1 flex-shrink-0" />
                    <span>Questionnaire intelligent : secteur, cibles, zone géographique</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-400 mt-1 flex-shrink-0" />
                    <span>Tests A/B automatiques pour optimiser vos messages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-400 mt-1 flex-shrink-0" />
                    <span>Dashboard personnalisé : volume clients, chiffre d'affaires, emails envoyés</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-400 mt-1 flex-shrink-0" />
                    <span>Système de notifications intelligent pour rester informé</span>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h4 className="font-semibold text-white mb-4">Dashboard en temps réel</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-brand-500/10 border border-brand-500/20">
                    <span className="text-sm text-gray-400">Prospects contactés</span>
                    <span className="text-xl font-bold text-brand-400">1,247</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-sm text-gray-400">RDV confirmés</span>
                    <span className="text-xl font-bold text-emerald-400">34</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <span className="text-sm text-gray-400">Taux de transformation</span>
                    <span className="text-xl font-bold text-purple-400">2.7%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Generation */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 card">
                <h4 className="font-semibold text-white mb-4">Génération de bases qualifiées</h4>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Database className="w-5 h-5 text-brand-400" />
                      <span className="font-medium text-white">Multi-sources</span>
                    </div>
                    <p className="text-sm text-gray-400">Scraping intelligent des Pages Jaunes, annuaires professionnels, sites web</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Filter className="w-5 h-5 text-emerald-400" />
                      <span className="font-medium text-white">Filtres avancés</span>
                    </div>
                    <p className="text-sm text-gray-400">Secteur d'activité + zone géographique précise</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-5 h-5 text-purple-400" />
                      <span className="font-medium text-white">Qualité garantie</span>
                    </div>
                    <p className="text-sm text-gray-400">Bases qualitatives avec moins de 50% de données manquantes</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                  <span className="text-sm text-emerald-400 font-medium">Bases de données</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-white mb-4">
                  Génération de leads ultra-qualifiés
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span>Plusieurs typologies de cibles sur plusieurs secteurs géographiques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span>Affichage complet avec filtres, suppression et ajout manuel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span>Export dans différents formats (CSV, Excel, API)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span>Interface de génération intuitive : secteur + zone géographique</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form Filling */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                  <span className="text-sm text-purple-400 font-medium">Prise de contact</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-white mb-4">
                  Formulaires WEB automatisés
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span>Aide et recommandations IA pour composer le message initial</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span>Tests A/B automatiques sur 2-3 messages différents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span>Fonction PLAY et PAUSE pour contrôler l'envoi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span>Envoi automatique au dashboard avec statut détaillé</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span>Colonne de statut : soumis à date XX/XX/XXXX</span>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h4 className="font-semibold text-white mb-4">Contrôle total de vos campagnes</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3">
                      <Play className="w-5 h-5 text-emerald-400" />
                      <span className="text-white">Campagne active</span>
                    </div>
                    <button className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm">
                      En cours
                    </button>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Progression</span>
                      <span className="text-sm text-white font-medium">247 / 500</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-brand-500 to-purple-600" style={{width: '49.4%'}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  )
}
