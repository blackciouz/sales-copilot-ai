'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Search, 
  FileText, 
  Mail, 
  MessageSquare, 
  Brain,
  Zap,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Research Agent',
    description: 'Trouve et qualifie automatiquement vos prospects idéaux selon vos critères.',
    color: 'brand',
    stats: '1000+ prospects/jour'
  },
  {
    icon: FileText,
    title: 'Form Filler Agent',
    description: 'Remplit et soumet les formulaires de contact web automatiquement avec des messages personnalisés.',
    color: 'purple',
    stats: '95% de succès'
  },
  {
    icon: Mail,
    title: 'Inbox Master',
    description: 'Centralise et analyse toutes les réponses avec détection d\'intention IA.',
    color: 'emerald',
    stats: 'Temps réel'
  },
  {
    icon: MessageSquare,
    title: 'Conversation Agent',
    description: 'Gère les conversations naturelles, répond aux objections et qualifie les leads.',
    color: 'blue',
    stats: 'Multilingue FR/EN'
  },
  {
    icon: Brain,
    title: 'Decision Engine',
    description: 'Décide intelligemment quand agir, quand relancer, et optimise continuellement.',
    color: 'indigo',
    stats: 'Auto-apprenant'
  },
  {
    icon: Zap,
    title: 'Vitesse Éclair',
    description: 'Traite des centaines de prospects en parallèle, 24/7 sans pause.',
    color: 'yellow',
    stats: '24/7 actif'
  },
  {
    icon: TrendingUp,
    title: 'ROI Mesurable',
    description: 'Dashboard temps réel avec toutes les métriques : taux de réponse, RDV, pipeline.',
    color: 'pink',
    stats: 'Analytics live'
  },
  {
    icon: Shield,
    title: 'GDPR Compliant',
    description: 'Respect total de la vie privée, opt-out immédiat, données chiffrées.',
    color: 'cyan',
    stats: '100% conforme'
  },
  {
    icon: Clock,
    title: 'Économie de Temps',
    description: 'Récupérez 30-40h par mois de prospection manuelle.',
    color: 'orange',
    stats: '30h économisées/mois'
  }
]

export default function Features() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-6"
          >
            <Zap className="w-4 h-4 text-brand-400" />
            <span className="text-sm text-brand-400 font-medium">
              5 Agents IA Intelligents
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Une équipe commerciale{' '}
            <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
              entièrement automatisée
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            5 agents IA qui travaillent ensemble pour transformer votre prospection en machine à RDV.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-white/10 p-8 hover:border-brand-500/30 transition-all duration-300">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-${feature.color}-500/10 border border-${feature.color}-500/20 mb-4`}>
                    <Icon className={`w-6 h-6 text-${feature.color}-400`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4">
                    {feature.description}
                  </p>

                  {/* Stats badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-500">
                    <div className={`w-2 h-2 rounded-full bg-${feature.color}-400 animate-pulse`} />
                    {feature.stats}
                  </div>

                  {/* Hover glow */}
                  <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r from-${feature.color}-600/0 via-${feature.color}-600/20 to-${feature.color}-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link 
            href="/features"
            className="inline-block px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-brand-500/30 transition-all duration-300"
          >
            Voir l'architecture complète →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
