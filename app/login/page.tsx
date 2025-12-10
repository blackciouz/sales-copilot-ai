'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Lock, ArrowRight, Shield } from 'lucide-react'
import Footer from '@/components/Footer'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement authentication
    console.log('Login:', { email, password })
  }

  return (
    <>
      <main className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src="/logo.png"
                  alt="Sales Copilot AI"
                  width={64}
                  height={64}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <h1 className="font-display text-3xl font-bold text-white mb-2">
              Connexion
            </h1>
            <p className="text-gray-400">
              Accédez à votre dashboard Sales Copilot AI
            </p>
          </div>

          {/* Form */}
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-brand-500/50 focus:outline-none transition-colors"
                    placeholder="vous@entreprise.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-brand-500/50 focus:outline-none transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                  <input type="checkbox" className="rounded border-white/10" />
                  Se souvenir de moi
                </label>
                <Link href="/reset-password" className="text-brand-400 hover:text-brand-300">
                  Mot de passe oublié ?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-gray-950 rounded-xl font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Se connecter
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              Pas encore de compte ?{' '}
              <Link href="/demo" className="text-brand-400 hover:text-brand-300 font-medium">
                Demander une démo
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex justify-center items-center gap-6 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-3 h-3 text-emerald-400" />
              <span>Sécurisé SSL</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-3 h-3 text-brand-400" />
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
