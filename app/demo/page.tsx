'use client'

import { useState } from 'react'
import { Calendar, Check, ArrowRight } from 'lucide-react'
import Footer from '@/components/Footer'

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    phone: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement Calendly or similar
    console.log('Demo requested:', formData)
    alert('Merci ! Nous vous contactons sous 2h pour planifier votre démo personnalisée.')
  }

  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Benefits */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-400 font-medium">
                  Démo personnalisée · 30 minutes
                </span>
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
                Voyez Sales Copilot AI
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  en action
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-8">
                Réservez une démo privée de 30 minutes où nous vous montrons :
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Comment l\'IA trouve et qualifie vos prospects',
                  'La génération automatique de messages personnalisés',
                  'Le dashboard en temps réel de toutes vos conversations',
                  'Les résultats concrets : RDV, taux de conversion, ROI',
                  'Configuration adaptée à votre secteur d\'activité'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-emerald-500/20">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-purple-600 border-2 border-gray-950"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-white font-semibold">50+ démos ce mois</div>
                  <div>Rejoignez nos clients satisfaits</div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="card">
              <h2 className="font-display text-2xl font-bold text-white mb-2">
                Réservez votre démo
              </h2>
              <p className="text-gray-400 mb-6">
                Remplissez ce formulaire et nous vous contactons sous 2h
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-brand-500/50 focus:outline-none transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-brand-500/50 focus:outline-none transition-colors"
                    placeholder="jean@entreprise.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Entreprise *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-brand-500/50 focus:outline-none transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Taille de l'entreprise *
                  </label>
                  <select
                    required
                    value={formData.employees}
                    onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-500/50 focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="1-10">1-10 employés</option>
                    <option value="11-50">11-50 employés</option>
                    <option value="51-200">51-200 employés</option>
                    <option value="200+">200+ employés</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Téléphone (optionnel)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-brand-500/50 focus:outline-none transition-colors"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-gray-950 rounded-xl font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Réserver ma démo gratuite
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-center text-xs text-gray-500">
                  Pas de carte bancaire requise · Réponse sous 2h
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              À quoi s'attendre ?
            </h2>
            <p className="text-xl text-gray-400">
              Voici comment se déroule une démo typique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                time: '0-5 min',
                title: 'Découverte',
                description: 'Nous écoutons vos besoins, vos objectifs commerciaux et vos pain points actuels.'
              },
              {
                time: '5-20 min',
                title: 'Démo live',
                description: 'Nous vous montrons le produit en action avec des exemples concrets adaptés à votre secteur.'
              },
              {
                time: '20-30 min',
                title: 'Q&A et next steps',
                description: 'Vous posez toutes vos questions et nous discutons d\'un plan d\'action si ça vous intéresse.'
              }
            ].map((step, i) => (
              <div key={i} className="card text-center">
                <div className="inline-flex px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-sm text-brand-400 font-medium mb-4">
                  {step.time}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
