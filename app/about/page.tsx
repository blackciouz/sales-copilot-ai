import { Target, Users, TrendingUp, Sparkles, Brain } from 'lucide-react'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'À propos - Sales Copilot AI',
  description: 'Notre mission : révolutionner la prospection commerciale B2B avec l\'IA',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">
              Notre mission
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
            Nous révolutionnons la
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              prospection B2B
            </span>
          </h1>
          
          <p className="text-xl text-gray-400">
            Sales Copilot AI est né d'une frustration : la prospection commerciale 
            consomme trop de temps et génère des résultats imprévisibles.
            <br />
            Nous avons créé l'IA qui change la donne.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <h2 className="font-display text-3xl font-bold text-white mb-6">
              Notre histoire
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                En 2023, après avoir vu des dizaines d'entrepreneurs brillants échouer non pas 
                à cause de leur produit, mais par manque de clients, nous avons décidé d'agir.
              </p>
              <p>
                Le constat était clair : <span className="text-white font-semibold">la prospection est le maillon faible</span> de 
                la plupart des startups. Trop chronophage, trop coûteuse, trop imprévisible.
              </p>
              <p>
                Avec l'émergence de modèles d'IA conversationnelle comme GPT-4 et Claude, 
                nous avons vu l'opportunité de créer quelque chose de révolutionnaire : 
                <span className="text-white font-semibold"> une équipe commerciale IA qui travaille 24/7</span>.
              </p>
              <p>
                Aujourd'hui, Sales Copilot AI aide plus de 120 entreprises B2B à générer 
                des milliers de RDV qualifiés chaque mois, automatiquement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Nos valeurs
            </h2>
            <p className="text-xl text-gray-400">
              Ce qui guide chaque décision que nous prenons
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Résultats avant tout',
                description: 'Nous ne vendons pas un outil, nous livrons des RDV qualifiés. Notre succès est directement lié au vôtre.',
                color: 'brand'
              },
              {
                icon: Users,
                title: 'Transparence totale',
                description: 'Dashboard en temps réel, conversations visibles, métriques claires. Vous savez toujours exactement ce qui se passe.',
                color: 'purple'
              },
              {
                icon: TrendingUp,
                title: 'Innovation continue',
                description: 'L\'IA évolue rapidement. Nous aussi. Mises à jour régulières, nouvelles fonctionnalités, optimisation constante.',
                color: 'emerald'
              }
            ].map((value, i) => {
              const Icon = value.icon
              return (
                <div key={i} className="card text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-${value.color}-500/10 border border-${value.color}-500/20 mb-6`}>
                    <Icon className={`w-8 h-8 text-${value.color}-400`} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              L'équipe
            </h2>
            <p className="text-xl text-gray-400">
              Des experts en IA, Sales et Product qui révolutionnent le B2B
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alexandre Martin',
                role: 'CEO & Co-founder',
                bio: '10+ ans en Sales B2B. Ex-VP Sales chez Lemlist.',
                icon: Users
              },
              {
                name: 'Sophie Chen',
                role: 'CTO & Co-founder',
                bio: 'PhD ML. Ex-Research Scientist chez DeepMind.',
                icon: Brain
              },
              {
                name: 'Marc Dubois',
                role: 'Head of Product',
                bio: 'Product Manager passionné. Ex-HubSpot.',
                icon: Target
              }
            ].map((member, i) => {
              const Icon = member.icon
              return (
              <div key={i} className="card text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center">
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-400 text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm">
                  {member.bio}
                </p>
              </div>
            )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '120+', label: 'Clients actifs' },
              { value: '5,000+', label: 'RDV générés' },
              { value: '23%', label: 'Taux de réponse moyen' },
              { value: '6:1', label: 'ROI moyen' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-bold bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  )
}
