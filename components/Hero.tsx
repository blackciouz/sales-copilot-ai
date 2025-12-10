'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, ArrowRight, PlayCircle, X, User, TrendingUp, Calendar, Mail, Target, BarChart3, Clock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [showVideo, setShowVideo] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to demo page
    window.location.href = '/demo'
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-sm text-gray-400">
              Propulsé par Claude 3.5 & GPT-4
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight"
          >
            <span className="text-white">Votre équipe commerciale</span>
            <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              IA autonome
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto px-4"
          >
            Générez <span className="text-white font-semibold">15-70 rendez-vous qualifiés par mois</span> pendant que vous dormez.
            L'IA qui prospecte, converse et réserve des RDV pour vous. 24/7.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="/demo"
              className="group px-8 py-4 bg-white text-gray-950 rounded-xl font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-300 flex items-center gap-2"
            >
              Démarrer gratuitement
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button 
              onClick={() => setShowVideo(true)}
              className="group px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-brand-500/30 transition-all duration-300 flex items-center gap-2"
            >
              <PlayCircle className="w-5 h-5" />
              Voir la démo (2 min)
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-6 sm:pt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-xs sm:text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-brand-400 to-purple-600 border-2 border-gray-950 flex items-center justify-center"
                  >
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                ))}
              </div>
              <span className="text-xs sm:text-sm">
                <span className="text-white font-semibold">120+</span> clients actifs
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs sm:text-sm">
                <span className="text-white font-semibold">4.9/5</span> (67 avis)
              </span>
            </div>
          </motion.div>

          {/* Animated Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-8 sm:pt-12 md:pt-16 hidden sm:block"
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-gray-900/40 backdrop-blur-xl border border-white/10 shadow-2xl max-w-5xl mx-auto">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-2 sm:px-4 py-2 sm:py-3 border-b border-white/10">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 mx-2 sm:mx-4">
                  <div className="bg-white/5 rounded-lg px-2 sm:px-4 py-1 text-[10px] sm:text-xs text-gray-500 text-center truncate">
                    dashboard.salescopilot.ai
                  </div>
                </div>
              </div>

              {/* Dashboard screenshot placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-3 sm:p-4 md:p-6">
                <div className="h-full flex flex-col gap-3 sm:gap-4">
                  {/* Top Stats Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    {[
                      { label: 'RDV ce mois', value: '28', icon: Calendar, color: 'from-emerald-500 to-teal-500', trend: '+12%' },
                      { label: 'Prospects', value: '156', icon: Target, color: 'from-blue-500 to-cyan-500', trend: '+8%' },
                      { label: 'Taux réponse', value: '23%', icon: Mail, color: 'from-purple-500 to-pink-500', trend: '+5%' },
                      { label: 'Conversion', value: '18%', icon: TrendingUp, color: 'from-orange-500 to-red-500', trend: '+3%' },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                        className="relative rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 p-2 sm:p-3 overflow-hidden group hover:border-white/20 transition-all"
                      >
                        {/* Animated gradient background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                        
                        <div className="relative flex flex-col gap-1">
                          <div className="flex items-center justify-between">
                            <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                            <span className="text-[8px] sm:text-[10px] text-green-400 font-medium">{stat.trend}</span>
                          </div>
                          <div className={`text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                            {stat.value}
                          </div>
                          <div className="text-[8px] sm:text-[10px] text-gray-500 truncate">{stat.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart and Activity Row */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {/* Mini Chart */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 p-2 sm:p-3 relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                          <span className="text-[10px] sm:text-xs text-gray-400 font-medium">Performance</span>
                        </div>
                        <span className="text-[8px] sm:text-[10px] text-gray-500">7 derniers jours</span>
                      </div>
                      
                      {/* Simple bar chart */}
                      <div className="flex items-end justify-between gap-1 h-16 sm:h-20">
                        {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                            className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t opacity-70 hover:opacity-100 transition-opacity"
                          />
                        ))}
                      </div>
                    </motion.div>

                    {/* Recent Activity */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 p-2 sm:p-3 overflow-hidden"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                        <span className="text-[10px] sm:text-xs text-gray-400 font-medium">Activité récente</span>
                      </div>
                      
                      <div className="space-y-1.5 sm:space-y-2">
                        {[
                          { text: 'RDV confirmé - TechCorp', time: 'Il y a 5 min', color: 'bg-green-500' },
                          { text: 'Réponse reçue - StartupXYZ', time: 'Il y a 12 min', color: 'bg-blue-500' },
                          { text: 'Email envoyé - InnovateLab', time: 'Il y a 18 min', color: 'bg-purple-500' },
                        ].map((activity, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 1.3 + i * 0.1 }}
                            className="flex items-start gap-2 text-[8px] sm:text-[10px]"
                          >
                            <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 ${activity.color} rounded-full mt-1 animate-pulse`} />
                            <div className="flex-1 min-w-0">
                              <div className="text-gray-300 truncate">{activity.text}</div>
                              <div className="text-gray-600">{activity.time}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-brand-600/30 blur-[100px]" />
            </div>
          </motion.div>

          {/* Mobile CTA (replaces dashboard on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-8 sm:hidden"
          >
            <div className="card text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
                <Sparkles className="w-4 h-4 text-brand-400" />
                <span className="text-sm text-brand-400 font-medium">
                  Essai gratuit
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Prêt à automatiser votre prospection ?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Réservez une démo et découvrez comment Sales Copilot AI peut transformer votre business.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-950 rounded-xl font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300"
              >
                Voir la démo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video container */}
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/kSGf8FZf7-Q?autoplay=1"
                    title="Sales Copilot AI Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
