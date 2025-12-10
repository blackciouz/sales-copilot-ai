'use client'

import { motion } from 'framer-motion'
import { Star, TrendingUp, User, Shield, Zap, CreditCard, MapPin } from 'lucide-react'

const testimonials = [
  {
    name: 'Sophie Martins',
    role: 'CEO',
    company: 'TechStart SaaS',
    rating: 5,
    quote: 'Sales Copilot AI a transformé notre prospection. Nous sommes passés de 5-8 RDV par mois à 28 RDV qualifiés. Le ROI est juste incroyable.',
    results: {
      before: '5-8 RDV/mois',
      after: '28 RDV/mois',
      improvement: '+250%'
    }
  },
  {
    name: 'Marc Dubois',
    role: 'Founder',
    company: 'Agence Digitale Pro',
    rating: 5,
    quote: 'J\'économise 30h par mois que je passe maintenant à closer des deals. L\'IA gère les objections mieux que moi ! Investissement récupéré en 2 semaines.',
    results: {
      before: '30h/mois prospection',
      after: '2h/mois monitoring',
      improvement: '93% temps gagné'
    }
  },
  {
    name: 'Laura Chen',
    role: 'Head of Sales',
    company: 'CloudSolutions',
    rating: 5,
    quote: 'La qualité des leads est exceptionnelle. L\'IA qualifie mieux que mes SDRs juniors. Notre taux de closing a augmenté de 40%.',
    results: {
      before: '15% closing rate',
      after: '21% closing rate',
      improvement: '+40%'
    }
  },
  {
    name: 'Thomas Bernard',
    role: 'Directeur Commercial',
    company: 'Innov Consulting',
    rating: 5,
    quote: 'En 3 mois, nous avons généré plus de leads qu\'en 1 an de prospection manuelle. L\'automatisation est impressionnante.',
    results: {
      before: '12 RDV/mois',
      after: '42 RDV/mois',
      improvement: '+250%'
    }
  },
  {
    name: 'Amélie Rousseau',
    role: 'Co-founder',
    company: 'DataFlow Analytics',
    rating: 5,
    quote: 'Le dashboard en temps réel est un game changer. On voit exactement ce qui marche et on peut ajuster rapidement.',
    results: {
      before: '18% taux réponse',
      after: '31% taux réponse',
      improvement: '+72%'
    }
  },
  {
    name: 'Nicolas Petit',
    role: 'CEO',
    company: 'Smart Solutions',
    rating: 5,
    quote: 'Les tests A/B automatiques et la fonction PLAY/PAUSE nous donnent un contrôle total. C\'est exactement ce qu\'on cherchait.',
    results: {
      before: '8 RDV/mois',
      after: '29 RDV/mois',
      improvement: '+262%'
    }
  }
]

export default function Testimonials() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6"
          >
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-yellow-400 font-medium">
              4.9/5 sur 67 avis
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Ils ont{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              transformé
            </span>
            {' '}leur prospection
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Rejoignez 120+ entrepreneurs qui génèrent des RDV pendant leur sommeil.
            <br />
            <span className="text-sm text-gray-600 mt-2 inline-block">Témoignages clients réels utilisant notre plateforme</span>
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative h-full rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-white/10 p-8 hover:border-brand-500/30 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Results box */}
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 mb-6">
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-2">
                    <TrendingUp className="w-4 h-4" />
                    Résultats mesurés
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-gray-500">Avant</div>
                      <div className="text-white font-semibold">{testimonial.results.before}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Après</div>
                      <div className="text-emerald-400 font-semibold">{testimonial.results.after}</div>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-emerald-500/20">
                    <div className="text-emerald-400 font-bold">
                      {testimonial.results.improvement}
                    </div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-brand-600/0 via-brand-600/20 to-brand-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap justify-center items-center gap-8 text-gray-600"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">
              <Shield className="w-4 h-4 text-gray-400" />
            </div>
            <span className="text-sm">GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">
              <Zap className="w-4 h-4 text-gray-400" />
            </div>
            <span className="text-sm">99.9% Uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-gray-400" />
            </div>
            <span className="text-sm">Paiement Sécurisé</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-gray-400" />
            </div>
            <span className="text-sm">Made in France</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
