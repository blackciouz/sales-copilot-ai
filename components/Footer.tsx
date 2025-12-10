'use client'

import Image from 'next/image'
import { MapPin } from 'lucide-react'

export default function Footer() {
  const links = {
    product: [
      { name: 'Fonctionnalités', href: '/features' },
      { name: 'Comment ça marche', href: '/#how-it-works' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Démo', href: '/demo' }
    ],
    company: [
      { name: 'À propos', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Carrières', href: '/careers' },
      { name: 'Contact', href: '/contact' }
    ],
    legal: [
      { name: 'Politique de confidentialité', href: '/privacy' },
      { name: 'Conditions d\'utilisation', href: '/terms' },
      { name: 'RGPD', href: '/rgpd' }
    ]
  }

  return (
    <footer className="relative border-t border-white/10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 relative">
                <Image
                  src="/logo.png"
                  alt="Sales Copilot AI"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-display text-xl font-bold text-white">
                Sales Copilot AI
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-4">
              Votre équipe commerciale IA, travaillant 24/7 pour remplir votre calendrier.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
                𝕏
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
                in
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Produit</h4>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Entreprise</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Légal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Sales Copilot AI. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>Made in Paris</span>
            <MapPin className="w-4 h-4" />
          </div>
        </div>
      </div>
    </footer>
  )
}
