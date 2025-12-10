'use client'

import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function BlogPage() {
  // Articles de blog (à remplacer par une vraie base de données plus tard)
  const articles = [
    {
      id: 1,
      title: "Comment l'IA révolutionne la prospection commerciale B2B",
      excerpt: "Découvrez comment l'intelligence artificielle transforme radicalement les méthodes de prospection et permet d'atteindre des taux de conversion jamais vus auparavant.",
      category: "Intelligence Artificielle",
      author: "Marie Dupont",
      date: "15 janvier 2024",
      readTime: "5 min",
      image: "/api/placeholder/800/400"
    },
    {
      id: 2,
      title: "10 erreurs à éviter dans votre prospection automatisée",
      excerpt: "L'automatisation est puissante, mais mal utilisée, elle peut nuire à votre réputation. Voici les pièges courants et comment les éviter.",
      category: "Best Practices",
      author: "Jean Martin",
      date: "12 janvier 2024",
      readTime: "7 min",
      image: "/api/placeholder/800/400"
    },
    {
      id: 3,
      title: "RGPD et prospection : ce que vous devez absolument savoir",
      excerpt: "Guide complet pour rester conforme au RGPD tout en maximisant l'efficacité de vos campagnes de prospection.",
      category: "Conformité",
      author: "Sophie Laurent",
      date: "8 janvier 2024",
      readTime: "10 min",
      image: "/api/placeholder/800/400"
    },
    {
      id: 4,
      title: "Cas client : +300% de rendez-vous qualifiés en 3 mois",
      excerpt: "Découvrez comment une PME du secteur IT a triplé son nombre de RDV qualifiés grâce à Sales Copilot AI.",
      category: "Success Story",
      author: "Thomas Bernard",
      date: "5 janvier 2024",
      readTime: "6 min",
      image: "/api/placeholder/800/400"
    },
    {
      id: 5,
      title: "Les 5 métriques essentielles pour mesurer votre ROI",
      excerpt: "Quels KPIs suivre pour évaluer précisément l'efficacité de votre stratégie de prospection automatisée ?",
      category: "Analytics",
      author: "Marie Dupont",
      date: "2 janvier 2024",
      readTime: "8 min",
      image: "/api/placeholder/800/400"
    },
    {
      id: 6,
      title: "Comment créer des messages de prospection qui convertissent",
      excerpt: "Les secrets d'un copywriting efficace pour vos campagnes automatisées : structure, ton, call-to-action.",
      category: "Copywriting",
      author: "Jean Martin",
      date: "28 décembre 2023",
      readTime: "9 min",
      image: "/api/placeholder/800/400"
    }
  ]

  const categories = ["Tous", "Intelligence Artificielle", "Best Practices", "Conformité", "Success Story", "Analytics", "Copywriting"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Sales Copilot AI</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez nos derniers articles, guides pratiques et études de cas sur la prospection commerciale automatisée
            </p>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="sticky top-0 z-10 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105
                         bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 
                       hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {article.date}
                    </span>
                  </div>
                  <span>{article.readTime}</span>
                </div>

                {/* CTA */}
                <Link
                  href={`/blog/${article.id}`}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm
                           group-hover:gap-3 transition-all"
                >
                  Lire l'article
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg 
                           transition-colors shadow-lg shadow-purple-500/30">
            Charger plus d'articles
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 md:p-12 text-center border border-purple-500/20">
            <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Restez informé des dernières tendances
            </h2>
            <p className="text-gray-300 mb-6">
              Recevez nos meilleurs articles, guides et études de cas directement dans votre boîte mail
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email professionnel"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white 
                         placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg 
                         transition-colors shadow-lg shadow-purple-500/30 whitespace-nowrap"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="text-center py-8">
        <Link
          href="/"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
        >
          ← Retour à l'accueil
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
