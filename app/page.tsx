'use client'

/**
 * Sales Copilot AI - Landing Page
 * Design System: Dark Mode Futuristic SaaS
 */

import { motion } from 'framer-motion'
import { BarChart3, Users, Mail, Calendar, TrendingUp, Activity, Target } from 'lucide-react'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 overflow-hidden pt-20">
        <Hero />
        <Features />
        
        {/* Dashboard Preview Section */}
        <section className="relative py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-6"
              >
                <BarChart3 className="w-4 h-4 text-brand-400" />
                <span className="text-sm text-brand-400 font-medium">
                  Dashboard en temps réel
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Pilotez votre prospection
                <br />
                <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
                  en temps réel
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400 max-w-3xl mx-auto"
              >
                Un dashboard intuitif qui vous donne une visibilité complète sur votre activité commerciale
              </motion.p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
              {[
                {
                  icon: Users,
                  label: 'Prospects contactés',
                  value: '1,247',
                  change: '+12%',
                  color: 'brand'
                },
                {
                  icon: Mail,
                  label: 'Emails envoyés',
                  value: '3,891',
                  change: '+23%',
                  color: 'purple'
                },
                {
                  icon: Calendar,
                  label: 'RDV confirmés',
                  value: '34',
                  change: '+8%',
                  color: 'emerald'
                },
                {
                  icon: TrendingUp,
                  label: 'Taux de conversion',
                  value: '2.7%',
                  change: '+0.4%',
                  color: 'cyan'
                }
              ].map((stat, i) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="card"
                  >
                    <div className={`inline-flex p-2 md:p-3 rounded-lg md:rounded-xl bg-${stat.color}-500/10 border border-${stat.color}-500/20 mb-3 md:mb-4`}>
                      <Icon className={`w-5 h-5 md:w-6 md:h-6 text-${stat.color}-400`} />
                    </div>
                    <div className="text-xs md:text-sm text-gray-500 mb-2">{stat.label}</div>
                    <div className="flex items-baseline gap-2">
                      <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs md:text-sm text-emerald-400">{stat.change}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {/* Activity Feed */}
              <div className="card">
                <h3 className="font-display text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-brand-400" />
                  Activité récente
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {[
                    { type: 'success', text: 'RDV confirmé avec Acme Corp', time: 'Il y a 5 min' },
                    { type: 'info', text: '47 nouveaux prospects ajoutés', time: 'Il y a 12 min' },
                    { type: 'success', text: 'Réponse positive de TechStart', time: 'Il y a 23 min' },
                    { type: 'warning', text: 'Campagne #12 terminée', time: 'Il y a 1h' }
                  ].map((activity, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        activity.type === 'success' ? 'bg-emerald-400' : 
                        activity.type === 'warning' ? 'bg-yellow-400' : 'bg-brand-400'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm">{activity.text}</p>
                        <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Campaign Status */}
              <div className="card">
                <h3 className="font-display text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-400" />
                  Campagnes actives
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'Agences Marketing Paris', progress: 67, status: 'En cours', sent: 335, total: 500 },
                    { name: 'SaaS B2B France', progress: 42, status: 'En cours', sent: 210, total: 500 },
                    { name: 'Startups Tech Lyon', progress: 88, status: 'Terminé', sent: 440, total: 500 }
                  ].map((campaign, i) => (
                    <div key={i} className="p-4 rounded-lg bg-white/5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white font-medium text-sm">{campaign.name}</span>
                        <span className="text-xs text-gray-500">{campaign.sent}/{campaign.total}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-brand-500 to-purple-600 transition-all duration-500"
                          style={{ width: `${campaign.progress}%` }}
                        />
                      </div>
                      <div className="mt-2 text-xs text-gray-500">{campaign.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CTA />
        <Footer />
    </main>
  )
}
