import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Tarifs - Sales Copilot AI',
  description: 'Choisissez le plan adapté à votre croissance',
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="text-sm text-emerald-400 font-medium">
              Tarification simple et transparente
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
            Investissez dans votre
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              croissance commerciale
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8">
            Tous les plans incluent l'accès complet aux 5 agents IA.
            <br />
            Sans engagement, résiliez quand vous voulez.
          </p>

          {/* ROI Calculator teaser */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="text-left">
              <div className="text-sm text-gray-500">ROI moyen clients</div>
              <div className="text-2xl font-bold text-emerald-400">6:1</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-left">
              <div className="text-sm text-gray-500">Payback period</div>
              <div className="text-2xl font-bold text-brand-400">2 mois</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Component */}
      <Pricing />

      {/* FAQ Section */}
      <section id="faq" className="relative py-32 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Puis-je changer de plan à tout moment ?',
                a: 'Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet immédiatement.'
              },
              {
                q: 'Comment fonctionne la garantie 30 jours ?',
                a: 'Si vous n\'êtes pas satisfait dans les 30 premiers jours, nous vous remboursons intégralement, sans poser de questions.'
              },
              {
                q: 'Les RDV sont-ils vraiment qualifiés ?',
                a: 'Oui ! Notre IA qualifie chaque lead selon vos critères. Seuls les prospects qui correspondent à votre ICP et qui ont montré un intérêt arrivent dans votre calendrier.'
              },
              {
                q: 'Combien de temps pour voir les premiers résultats ?',
                a: 'La plupart de nos clients obtiennent leurs premiers RDV qualifiés sous 7-10 jours après le setup.'
              }
            ].map((faq, i) => (
              <details key={i} className="group card cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-white list-none">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-400">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </main>
  )
}
