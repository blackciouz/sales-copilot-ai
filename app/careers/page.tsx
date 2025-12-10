'use client'

import { Briefcase, MapPin, Clock, Users, TrendingUp, Heart, Zap, Globe, Target } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Paris / Remote",
      type: "CDI",
      experience: "5+ ans",
      description: "Nous recherchons un développeur Full-Stack expérimenté pour rejoindre notre équipe technique et contribuer au développement de notre plateforme d'IA."
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      department: "AI/ML",
      location: "Paris / Remote",
      type: "CDI",
      experience: "3+ ans",
      description: "Rejoignez notre équipe IA pour améliorer nos agents conversationnels et optimiser nos algorithmes de qualification de prospects."
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "Paris",
      type: "CDI",
      experience: "4+ ans",
      description: "Définissez la vision produit et la roadmap de Sales Copilot AI en collaboration avec les équipes engineering, design et sales."
    },
    {
      id: 4,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Paris / Remote",
      type: "CDI",
      experience: "2+ ans",
      description: "Accompagnez nos clients dans leur réussite et assurez un taux de satisfaction et de rétention maximum."
    },
    {
      id: 5,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "CDI / Freelance",
      experience: "3+ ans",
      description: "Créez des expériences utilisateur exceptionnelles et un design system cohérent pour notre plateforme SaaS."
    },
    {
      id: 6,
      title: "Sales Development Representative (SDR)",
      department: "Sales",
      location: "Paris",
      type: "CDI",
      experience: "1+ an",
      description: "Générez des opportunités commerciales qualifiées et contribuez à la croissance rapide de notre entreprise."
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Croissance rapide",
      description: "Rejoignez une startup en hyper-croissance et évoluez rapidement"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Impact réel",
      description: "Votre travail a un impact direct sur des milliers d'entreprises"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Remote-friendly",
      description: "Travaillez d'où vous voulez avec une flexibilité totale"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Équipe passionnée",
      description: "Collaborez avec des experts motivés et bienveillants"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Avantages premium",
      description: "Salaire attractif, BSPCE, mutuelle, RTT, budget formation"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Technologies modernes",
      description: "Travaillez avec les dernières technologies (Next.js, AI, Cloud)"
    }
  ]

  const values = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans tout ce que nous faisons, de la qualité du code à l'expérience client."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Innovation",
      description: "Nous repoussons constamment les limites de ce qui est possible avec l'IA et l'automatisation."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Collaboration",
      description: "Nous croyons en la force du collectif et encourageons la collaboration entre toutes les équipes."
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Growth Mindset",
      description: "Nous valorisons l'apprentissage continu et l'amélioration constante, tant individuelle que collective."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Rejoignez <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">l'aventure</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Construisez l'avenir de la prospection commerciale avec nous. Nous recherchons des talents passionnés 
              pour révolutionner le B2B avec l'intelligence artificielle.
            </p>
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span><strong className="text-white">20+</strong> collaborateurs</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span><strong className="text-white">Paris</strong> & Remote</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <span><strong className="text-white">Série A</strong> levée</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pourquoi nous rejoindre ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Chez Sales Copilot AI, nous offrons bien plus qu'un simple emploi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 
                       hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nos valeurs
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ce qui nous guide au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-500/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-purple-400">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                </div>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Openings Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Postes ouverts
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Découvrez nos opportunités actuelles et trouvez le poste qui vous correspond
            </p>
          </div>

          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 
                         hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10
                         group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 bg-purple-600/20 text-purple-400 text-xs font-semibold rounded-full">
                        {job.department}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={16} />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg 
                                   transition-colors shadow-lg shadow-purple-500/30 whitespace-nowrap">
                    Postuler
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spontaneous Application Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 md:p-12 text-center border border-purple-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Vous ne trouvez pas le poste idéal ?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Envoyez-nous une candidature spontanée ! Nous sommes toujours à la recherche de talents exceptionnels 
              pour rejoindre notre équipe.
            </p>
            <a
              href="mailto:careers@salescopilot.ai"
              className="inline-block px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg 
                       transition-colors shadow-lg"
            >
              Candidature spontanée
            </a>
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
