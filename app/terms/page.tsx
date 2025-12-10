import Footer from '@/components/Footer'
import { CheckCircle } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-gray-400">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 space-y-8 text-gray-300">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Préambule</h2>
            <p className="leading-relaxed">
              Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») régissent l'utilisation de la plateforme 
              <span className="text-purple-400 font-semibold"> Sales Copilot AI</span>, éditée par [VOTRE SOCIÉTÉ], 
              permettant l'automatisation de la prospection commerciale B2B via intelligence artificielle.
            </p>
            <p className="mt-4 leading-relaxed">
              En accédant et en utilisant notre plateforme, vous acceptez sans réserve les présentes CGU.
            </p>
          </section>

          {/* Article 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Article 1 - Définitions</h2>
            <ul className="space-y-3">
              <li><strong className="text-white">« Plateforme » :</strong> Désigne l'ensemble des services Sales Copilot AI accessibles via notre site web et nos APIs</li>
              <li><strong className="text-white">« Utilisateur » ou « Client » :</strong> Toute personne physique ou morale utilisant la Plateforme</li>
              <li><strong className="text-white">« Agent IA » :</strong> Intelligence artificielle conversationnelle automatisant les échanges avec les prospects</li>
              <li><strong className="text-white">« Base de données » :</strong> Ensemble de contacts prospects générés ou importés par l'Utilisateur</li>
              <li><strong className="text-white">« Campagne » :</strong> Ensemble d'actions de prospection automatisées (envoi de formulaires, conversations, relances)</li>
              <li><strong className="text-white">« Abonnement » :</strong> Souscription à nos services selon différentes formules tarifaires</li>
            </ul>
          </section>

          {/* Article 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Article 2 - Objet</h2>
            <p className="leading-relaxed">
              Les présentes CGU ont pour objet de définir les modalités et conditions d'utilisation de la Plateforme 
              Sales Copilot AI, ainsi que les droits et obligations des parties dans ce cadre.
            </p>
          </section>

          {/* Article 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Article 3 - Accès et Inscription</h2>
            <h3 className="text-xl font-semibold text-white mb-3 mt-4">3.1 Conditions d'accès</h3>
            <p className="leading-relaxed mb-4">
              L'accès à la Plateforme est réservé aux professionnels (personnes physiques majeures ou personnes morales) 
              agissant dans le cadre de leur activité commerciale B2B.
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-3 mt-4">3.2 Inscription</h3>
            <p className="leading-relaxed mb-4">
              Pour utiliser la Plateforme, l'Utilisateur doit :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Créer un compte en fournissant des informations exactes et à jour</li>
              <li>Choisir une formule d'abonnement adaptée à ses besoins</li>
              <li>Accepter les présentes CGU et la Politique de Confidentialité</li>
              <li>Effectuer le paiement selon les modalités choisies</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">3.3 Sécurité du compte</h3>
            <p className="leading-relaxed">
              L'Utilisateur est responsable de la confidentialité de ses identifiants de connexion et de toutes les activités 
              effectuées depuis son compte. Toute utilisation frauduleuse doit être signalée immédiatement.
            </p>
          </section>

          {/* Article 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Article 4 - Services Fournis</h2>
            <p className="mb-4">La Plateforme propose les services suivants :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Génération de bases de données qualifiées :</strong> Scraping légal et enrichissement de contacts prospects selon secteur d'activité et zone géographique</li>
              <li><strong className="text-white">Automatisation de soumission de formulaires :</strong> Envoi automatisé de messages via formulaires de contact web</li>
              <li><strong className="text-white">Agent conversationnel IA :</strong> Gestion automatique des conversations avec les prospects (réponses, qualification, relances)</li>
              <li><strong className="text-white">Inbox Master :</strong> Centralisation et analyse des réponses emails</li>
              <li><strong className="text-white">Prise de rendez-vous automatique :</strong> Planification intelligente avec synchronisation calendrier</li>
              <li><strong className="text-white">Dashboard analytics :</strong> Métriques de performance, ROI, taux de conversion</li>
            </ul>
          </section>

          {/* Article 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Article 5 - Obligations de l'Utilisateur</h2>
            <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.1 Utilisation conforme</h3>
            <p className="leading-relaxed mb-4">L'Utilisateur s'engage à :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Utiliser la Plateforme conformément aux lois et réglementations en vigueur</li>
              <li>Respecter le RGPD et les droits des personnes contactées</li>
              <li>Ne pas utiliser la Plateforme pour du spam, harcèlement ou activités illégales</li>
              <li>Fournir des informations véridiques et professionnelles</li>
              <li>Ne pas tenter de contourner les mesures de sécurité</li>
              <li>Ne pas scraper ou extraire massivement les données de la Plateforme</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.2 Contenu des messages</h3>
            <p className="leading-relaxed">
              L'Utilisateur est seul responsable du contenu des messages envoyés via la Plateforme. 
              Il s'engage à ne pas diffuser de contenu illicite, diffamatoire, offensant ou trompeur.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.3 Respect des bonnes pratiques</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Limiter le volume d'envois pour éviter d'être identifié comme spam</li>
              <li>Personnaliser les messages et offrir une valeur ajoutée réelle</li>
              <li>Respecter les demandes de désinscription</li>
              <li>Ne pas usurper l'identité d'autrui</li>
            </ul>
          </section>

          {/* Article 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Article 6 - Tarifs et Paiement</h2>
            <h3 className="text-xl font-semibold text-white mb-3 mt-4">6.1 Formules d'abonnement</h3>
            <p className="leading-relaxed mb-4">
              Plusieurs formules d'abonnement sont disponibles, détaillées sur notre page Tarifs. 
              Les tarifs sont indiqués en euros TTC et peuvent être modifiés à tout moment (avec préavis pour les clients existants).
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">6.2 Modalités de paiement</h3>
            <p className="leading-relaxed mb-4">
              Le paiement s'effectue par carte bancaire ou prélèvement SEPA via notre prestataire de paiement sécurisé. 
              L'abonnement est renouvelé automatiquement sauf résiliation.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">6.3 Facturation</h3>
            <p className="leading-relaxed">
              Une facture est générée automatiquement et envoyée par email à chaque paiement. 
              Elle est également accessible depuis le dashboard client.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">6.4 Retard de paiement</h3>
            <p className="leading-relaxed">
              En cas de défaut de paiement, l'accès à la Plateforme sera suspendu jusqu'à régularisation. 
              Des pénalités de retard peuvent s'appliquer conformément à la législation en vigueur.
            </p>
          </section>

          {/* Article 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Article 7 - Durée et Résiliation</h2>
            <h3 className="text-xl font-semibold text-white mb-3 mt-4">7.1 Durée</h3>
            <p className="leading-relaxed mb-4">
              L'abonnement est souscrit pour une durée d'un mois ou d'un an selon la formule choisie, 
              renouvelable tacitement sauf résiliation.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">7.2 Résiliation par l'Utilisateur</h3>
            <p className="leading-relaxed mb-4">
              L'Utilisateur peut résilier son abonnement à tout moment depuis son dashboard, 
              avec effet à la fin de la période d'abonnement en cours. Aucun remboursement au prorata ne sera effectué.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">7.3 Résiliation par Sales Copilot AI</h3>
            <p className="leading-relaxed mb-4">
              Nous nous réservons le droit de suspendre ou résilier le compte d'un Utilisateur en cas de :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Violation des présentes CGU</li>
              <li>Utilisation frauduleuse ou abusive de la Plateforme</li>
              <li>Non-paiement</li>
              <li>Activité illégale ou portant atteinte à notre réputation</li>
            </ul>
          </section>

          {/* Article 8 */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Article 8 - Propriété Intellectuelle</h2>
            <h3 className="text-xl font-semibold text-white mb-3 mt-4">8.1 Droits sur la Plateforme</h3>
            <p className="leading-relaxed mb-4">
              Tous les éléments de la Plateforme (code, design, logo, marque, contenu) sont protégés par les droits de propriété intellectuelle 
              et appartiennent à Sales Copilot AI ou à ses partenaires. Toute reproduction non autorisée est interdite.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">8.2 Droits sur les données générées</h3>
            <div className="flex items-start gap-2 text-green-400">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Important :</strong> Les bases de données de contacts que vous générez via notre Plateforme vous appartiennent. 
                Vous conservez tous les droits sur ces données et pouvez les exporter à tout moment.
              </p>
            </div>
          </section>

          {/* Article 9 */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Article 9 - Responsabilités et Garanties</h2>
            <h3 className="text-xl font-semibold text-white mb-3 mt-4">9.1 Disponibilité</h3>
            <p className="leading-relaxed mb-4">
              Nous nous efforçons d'assurer une disponibilité maximale de la Plateforme (objectif 99% hors maintenance). 
              Toutefois, nous ne pouvons garantir un fonctionnement ininterrompu.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">9.2 Qualité des données</h3>
            <p className="leading-relaxed mb-4">
              Nous garantissons des bases de données avec moins de 50% de données manquantes. 
              Toutefois, la qualité des informations publiques disponibles en ligne peut varier.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">9.3 Taux de succès</h3>
            <p className="leading-relaxed mb-4">
              Le taux de succès des campagnes dépend de nombreux facteurs (qualité du message, secteur d'activité, etc.). 
              Nous ne garantissons pas un nombre minimum de réponses ou de conversions.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">9.4 Limitation de responsabilité</h3>
            <p className="leading-relaxed">
              Notre responsabilité est limitée au montant de l'abonnement payé. Nous ne pourrons être tenus responsables 
              des dommages indirects (perte de chiffre d'affaires, préjudice commercial, etc.).
            </p>
          </section>

          {/* Article 10 */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Article 10 - Données Personnelles</h2>
            <p className="leading-relaxed">
              Le traitement des données personnelles est régi par notre 
              <a href="/privacy" className="text-purple-400 hover:text-purple-300 underline"> Politique de Confidentialité</a>, 
              conforme au RGPD.
            </p>
          </section>

          {/* Article 11 */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Article 11 - Modifications des CGU</h2>
            <p className="leading-relaxed">
              Nous nous réservons le droit de modifier les présentes CGU à tout moment. Les Utilisateurs seront informés 
              de toute modification significative par email. La poursuite de l'utilisation de la Plateforme vaut acceptation 
              des nouvelles CGU.
            </p>
          </section>

          {/* Article 12 */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Article 12 - Droit Applicable et Juridiction</h2>
            <p className="leading-relaxed mb-4">
              Les présentes CGU sont régies par le droit français. En cas de litige, une solution amiable sera recherchée 
              en priorité. À défaut, les tribunaux compétents du siège social de Sales Copilot AI seront seuls compétents.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
            <div className="bg-gray-900/50 p-6 rounded-lg space-y-2">
              <p><strong className="text-white">Pour toute question concernant les CGU :</strong></p>
              <p><strong className="text-white">Email :</strong> <a href="mailto:legal@salescopilot.ai" className="text-purple-400 hover:text-purple-300">legal@salescopilot.ai</a></p>
              <p><strong className="text-white">Support client :</strong> <a href="mailto:support@salescopilot.ai" className="text-purple-400 hover:text-purple-300">support@salescopilot.ai</a></p>
            </div>
          </section>

        </div>

        {/* Back button */}
        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            ← Retour à l'accueil
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
