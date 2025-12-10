'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Target, Rocket, Calendar, Database } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Target,
    title: 'Onboarding guidé par IA',
    description: 'Guide interactif qui vous aide à configurer votre ICP : secteur d\'activité, zone géographique, volume de contacts souhaité.',
    duration: '15 min',
    color: 'brand'
  },
  {
    number: '02',
    icon: Database,
    title: 'Génération de bases qualifiées',
    description: 'L\'IA génère automatiquement des bases de données ultra-qualifiées (Pages Jaunes, annuaires) selon vos critères avec moins de 50% de données manquantes.',
    duration: 'Quelques minutes',
    color: 'purple'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Prise de contact automatisée',
    description: 'Tests A/B automatiques sur vos messages. Fonction PLAY/PAUSE pour contrôler. Suivi en temps réel dans le dashboard avec statut détaillé de chaque contact.',
    duration: 'En continu',
    color: 'emerald'
  },
  {
    number: '04',
    icon: Calendar,
    title: 'Conversation IA & RDV',
    description: 'L\'Agent IA gère les conversations, répond aux questions, gère les objections. Connexion automatique à votre agenda pour la prise de RDV.',
    duration: '24/7',
    color: 'cyan'
  }
]

export default function HowItWorks() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
          >
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">
              Simple comme bonjour
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Comment ça{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              fonctionne ?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            De zéro à vos premiers RDV en moins d'une semaine. Sans effort.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-600/20 via-purple-600/20 to-cyan-600/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Card */}
                  <div className="relative h-full rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-white/10 p-6 md:p-8 hover:border-brand-500/30 transition-all duration-300 flex flex-col">
                    {/* Number badge */}
                    <div className={`absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-${step.color}-500/20 border border-${step.color}-500/30 flex items-center justify-center font-display text-base md:text-lg font-bold text-${step.color}-400`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex p-3 md:p-4 rounded-xl bg-${step.color}-500/10 border border-${step.color}-500/20 mb-4 md:mb-6`}>
                      <Icon className={`w-6 h-6 md:w-8 md:h-8 text-${step.color}-400`} />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                      {step.title}
                    </h3>

                    <p className="text-sm md:text-base text-gray-400 mb-4 flex-grow">
                      {step.description}
                    </p>

                    {/* Duration badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${step.color}-500/10 border border-${step.color}-500/20 mt-auto`}>
                      <div className={`w-2 h-2 rounded-full bg-${step.color}-400`} />
                      <span className="text-xs text-gray-400">{step.duration}</span>
                    </div>
                  </div>

                  {/* Connection arrow (desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 -translate-y-1/2 z-10">
                      <svg className="w-full h-full text-purple-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            { value: '0h', label: 'Temps investi après setup', color: 'emerald' },
            { value: '< 7j', label: 'Pour vos premiers RDV', color: 'brand' },
            { value: '24/7', label: 'L\'IA ne dort jamais', color: 'purple' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`text-5xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link 
            href="/demo"
            className="inline-block px-8 py-4 bg-white text-gray-950 rounded-xl font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-300"
          >
            Commencer gratuitement →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
