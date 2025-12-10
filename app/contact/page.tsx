'use client'

import { useState } from 'react'
import { Mail, MessageSquare, Calendar, Send, Shield, Lock } from 'lucide-react'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
    alert('Message envoyé ! Nous vous recontacterons sous 24h.')
  }

  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-6">
            <MessageSquare className="w-4 h-4 text-brand-400" />
            <span className="text-sm text-brand-400 font-medium">
              Parlons de votre projet
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
            Une question ?
            <br />
            <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
              Contactez-nous
            </span>
          </h1>
          
          <p className="text-xl text-gray-400">
            Notre équipe vous répond sous 24h. Parlons de comment Sales Copilot AI 
            peut transformer votre prospection.
          </p>
        </div>
      </section>

      {/* Contact Options + Form */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                title: 'Email',
                value: 'contact@salescopilot.ai',
                description: 'Réponse sous 24h',
                href: 'mailto:contact@salescopilot.ai'
              },
              {
                icon: Calendar,
                title: 'Réserver une démo',
                value: '30 minutes',
                description: 'Voir le produit en action',
                href: '/demo'
              },
              {
                icon: MessageSquare,
                title: 'Chat en direct',
                value: 'Disponible maintenant',
                description: 'Réponse immédiate',
                href: '#'
              }
            ].map((option, i) => {
              const Icon = option.icon
              return (
                <a
                  key={i}
                  href={option.href}
                  className="card hover:border-brand-500/50 transition-all duration-300 text-center group"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-brand-500/10 border border-brand-500/20 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-brand-400 font-semibold mb-1">
                    {option.value}
                  </p>
                  <p className="text-sm text-gray-500">
                    {option.description}
                  </p>
                </a>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="card">
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Envoyez-nous un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Votre nom
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
                      Email professionnel
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
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Entreprise
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
                    Votre message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-brand-500/50 focus:outline-none transition-colors resize-none"
                    placeholder="Parlez-nous de votre projet et de vos objectifs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-gray-950 rounded-xl font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Envoyer le message
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-center text-sm text-gray-500">
                  Nous vous répondrons sous 24h ouvrées
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
