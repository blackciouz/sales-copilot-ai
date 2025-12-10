'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glowing orbs */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-600/30 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px]" />

          {/* Card */}
          <div className="relative rounded-3xl bg-gray-900/40 backdrop-blur-xl border border-white/10 p-12 md:p-16 text-center overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-600/0 via-brand-600/50 to-purple-600/0 opacity-50 animate-pulse" />

            {/* Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/20 border border-brand-500/30 mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                <span className="text-sm text-brand-400 font-medium">
                  Places limitées ce mois-ci
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Prêt à remplir votre
                <br />
                <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                  calendrier de RDV ?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
              >
                Rejoignez 120+ entrepreneurs qui ont arrêté de perdre leur temps en prospection.
                Premier RDV garanti sous 7 jours ou remboursé.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/demo"
                  className="group px-8 py-4 bg-white text-gray-950 rounded-xl font-semibold shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Démarrer maintenant
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/demo"
                  className="group px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-brand-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Réserver une démo
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-500"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Setup en 15 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Garantie 30 jours</span>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-brand-500/10 blur-xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-purple-500/10 blur-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
