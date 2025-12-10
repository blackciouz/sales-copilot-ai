'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Sparkles, Zap, Crown } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: 497,
    description: 'Idéal pour démarrer',
    volume: '500 contacts/mois',
    features: [
      '500 contacts inclus',
      'Génération de bases de données qualifiées',
      '1-2 secteurs géographiques',
      'Prise de contact via formulaires WEB',
      'Tests A/B sur 2 messages',
      'Dashboard en temps réel',
      'Agent IA conversation basique',
      'Support email (48h)',
      'Fonction PLAY/PAUSE'
    ],
    cta: 'Commencer',
    highlighted: false
  },
  {
    name: 'Professional',
    icon: Sparkles,
    price: 997,
    description: 'Le plus populaire',
    volume: '1,500 contacts/mois',
    badge: 'Plus populaire',
    features: [
      '1,500 contacts inclus',
      'Multi-sources de données (Pages Jaunes + annuaires)',
      'Secteurs géographiques illimités',
      'Tests A/B automatiques avancés',
      'Agent IA avec gestion multi-cibles',
      'Pipeline graphique de suivi',
      'Connexion agenda automatique',
      'Notifications intelligentes',
      'Support prioritaire (24h)',
      'Export multi-formats (CSV, Excel, API)'
    ],
    cta: 'Démarrer maintenant',
    highlighted: true
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: 'Sur mesure',
    description: 'Volume personnalisé',
    volume: '5,000+ contacts/mois',
    features: [
      'Volume de contacts sur-mesure',
      'Bases de données ultra-qualifiées',
      'Toutes fonctionnalités incluses',
      'Account Manager dédié',
      'Onboarding personnalisé avec formation',
      'Custom AI training pour votre secteur',
      'API access + Webhooks',
      'Intégrations CRM sur-mesure',
      'Support 24/7 + Slack dédié',
      'SLA garanti',
      'Facturation adaptée (mensuelle/trimestrielle)'
    ],
    cta: 'Nous contacter',
    highlighted: false
  }
]

export default function Pricing() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">
              Tarification Simple et Transparente
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Choisissez votre{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              niveau de croissance
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Tarification par volume de contacts. Pas de frais cachés.
            Résiliez quand vous voulez. Forfaits sur-mesure disponibles.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${plan.highlighted ? 'md:-mt-4' : ''}`}
              >
                {/* Badge for highlighted plan */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-semibold shadow-lg">
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`relative h-full rounded-3xl bg-gray-900/40 backdrop-blur-xl border ${
                  plan.highlighted 
                    ? 'border-brand-500/50 shadow-2xl shadow-brand-500/20' 
                    : 'border-white/10'
                } p-8 ${plan.highlighted ? 'md:py-12' : ''}`}>
                  
                  {/* Icon & Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-xl ${
                      plan.highlighted 
                        ? 'bg-brand-500/20 border border-brand-500/30' 
                        : 'bg-white/5 border border-white/10'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        plan.highlighted ? 'text-brand-400' : 'text-gray-400'
                      }`} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      {typeof plan.price === 'number' ? (
                        <>
                          <span className="text-5xl font-bold text-white">
                            €{plan.price.toLocaleString()}
                          </span>
                          <span className="text-gray-500">/mois</span>
                        </>
                      ) : (
                        <span className="text-4xl font-bold text-white">
                          {plan.price}
                        </span>
                      )}
                    </div>
                    <div className="mt-2 text-sm text-brand-400 font-medium">
                      {plan.volume}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={plan.name === 'Enterprise' ? '/contact' : '/demo'}
                    className={`block w-full py-4 rounded-xl font-semibold transition-all duration-300 mb-8 text-center ${
                    plan.highlighted
                      ? 'bg-white text-gray-950 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-brand-500/30'
                  }`}>
                    {plan.cta}
                  </Link>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`mt-0.5 p-0.5 rounded-full ${
                          plan.highlighted ? 'bg-brand-500/20' : 'bg-white/10'
                        }`}>
                          <Check className={`w-4 h-4 ${
                            plan.highlighted ? 'text-brand-400' : 'text-gray-400'
                          }`} />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover glow */}
                  {plan.highlighted && (
                    <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-brand-600/0 via-brand-600/20 to-brand-600/0 opacity-50 -z-10" />
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Money-back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Check className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Garantie 30 jours satisfait ou remboursé</div>
              <div className="text-sm text-gray-400">Testez sans risque, résiliez quand vous voulez</div>
            </div>
          </div>
        </motion.div>

        {/* FAQ link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500">
            Des questions ?{' '}
            <Link href="/pricing#faq" className="text-brand-400 hover:text-brand-300 underline">
              Consultez notre FAQ
            </Link>
            {' '}ou{' '}
            <Link href="/contact" className="text-brand-400 hover:text-brand-300 underline">
              contactez-nous
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
