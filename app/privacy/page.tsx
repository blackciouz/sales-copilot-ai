import Footer from '@/components/Footer'
import { AlertTriangle, CheckCircle } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-gray-400">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 space-y-8 text-gray-300">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p className="leading-relaxed">
              Chez <span className="text-purple-400 font-semibold">Sales Copilot AI</span>, nous prenons très au sérieux la protection de vos données personnelles. 
              Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations 
              conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          {/* Données collectées */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Données Collectées</h2>
            <p className="mb-4">Nous collectons les types de données suivants :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Données d'identification :</strong> Nom, prénom, email, société</li>
              <li><strong className="text-white">Données de connexion :</strong> Adresse IP, logs de connexion, cookies</li>
              <li><strong className="text-white">Données professionnelles :</strong> Secteur d'activité, zone géographique, contacts prospects</li>
              <li><strong className="text-white">Données de paiement :</strong> Informations de facturation (traitées par nos partenaires sécurisés)</li>
              <li><strong className="text-white">Données d'utilisation :</strong> Statistiques d'utilisation de la plateforme, campagnes, conversions</li>
            </ul>
          </section>

          {/* Utilisation des données */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Utilisation des Données</h2>
            <p className="mb-4">Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fournir et améliorer nos services de prospection automatisée</li>
              <li>Gérer votre compte et votre abonnement</li>
              <li>Générer des bases de données qualifiées selon vos critères</li>
              <li>Automatiser l'envoi de messages et la gestion des conversations</li>
              <li>Analyser les performances de vos campagnes</li>
              <li>Assurer le support client et la communication</li>
              <li>Respecter nos obligations légales et contractuelles</li>
            </ul>
          </section>

          {/* Base légale */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Base Légale du Traitement</h2>
            <p className="leading-relaxed">
              Le traitement de vos données repose sur :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li><strong className="text-white">L'exécution du contrat :</strong> Nécessaire pour fournir nos services</li>
              <li><strong className="text-white">Le consentement :</strong> Pour les communications marketing et cookies non essentiels</li>
              <li><strong className="text-white">L'intérêt légitime :</strong> Pour améliorer nos services et assurer la sécurité</li>
              <li><strong className="text-white">L'obligation légale :</strong> Pour respecter la législation en vigueur</li>
            </ul>
          </section>

          {/* Partage des données */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Partage des Données</h2>
            <p className="mb-4">
              Nous ne vendons jamais vos données personnelles. Nous pouvons les partager avec :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Prestataires de services :</strong> Hébergement (conformes RGPD), paiement, support client</li>
              <li><strong className="text-white">Partenaires techniques :</strong> APIs d'intelligence artificielle (OpenAI, Claude) avec anonymisation</li>
              <li><strong className="text-white">Autorités légales :</strong> Si requis par la loi</li>
            </ul>
            <div className="mt-4 flex items-start gap-2 text-yellow-400">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Important :</strong> Les bases de données que vous générez via notre plateforme vous appartiennent. 
                Nous ne les revendons pas et ne les utilisons pas pour d'autres clients.
              </p>
            </div>
          </section>

          {/* Conservation des données */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Conservation des Données</h2>
            <p className="leading-relaxed">
              Nous conservons vos données pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li><strong className="text-white">Données de compte actif :</strong> Pendant la durée de votre abonnement + 3 ans</li>
              <li><strong className="text-white">Données de facturation :</strong> 10 ans (obligation légale comptable)</li>
              <li><strong className="text-white">Bases de données générées :</strong> Tant que vous restez client actif</li>
              <li><strong className="text-white">Logs de connexion :</strong> 1 an maximum</li>
            </ul>
          </section>

          {/* Vos droits */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Vos Droits RGPD</h2>
            <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
              <li><strong className="text-white">Droit de rectification :</strong> Corriger vos données inexactes ou incomplètes</li>
              <li><strong className="text-white">Droit à l'effacement :</strong> Demander la suppression de vos données</li>
              <li><strong className="text-white">Droit à la limitation :</strong> Limiter le traitement de vos données</li>
              <li><strong className="text-white">Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
              <li><strong className="text-white">Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
              <li><strong className="text-white">Droit de retirer votre consentement :</strong> À tout moment</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:privacy@salescopilot.ai" className="text-purple-400 hover:text-purple-300 underline">privacy@salescopilot.ai</a>
            </p>
          </section>

          {/* Sécurité */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Sécurité des Données</h2>
            <p className="mb-4">Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Chiffrement SSL/TLS pour toutes les communications</li>
              <li>Authentification forte et gestion des accès</li>
              <li>Hébergement sécurisé conforme RGPD (Europe)</li>
              <li>Sauvegardes régulières et redondantes</li>
              <li>Audits de sécurité périodiques</li>
              <li>Formation de notre équipe à la protection des données</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Cookies et Technologies Similaires</h2>
            <p className="leading-relaxed mb-4">
              Nous utilisons des cookies pour améliorer votre expérience et analyser l'utilisation de notre site :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Cookies essentiels :</strong> Nécessaires au fonctionnement du site (pas de consentement requis)</li>
              <li><strong className="text-white">Cookies analytiques :</strong> Pour mesurer l'audience et améliorer nos services</li>
              <li><strong className="text-white">Cookies marketing :</strong> Pour personnaliser la publicité (avec votre consentement)</li>
            </ul>
            <p className="mt-4">
              Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur.
            </p>
          </section>

          {/* Transferts internationaux */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Transferts Internationaux</h2>
            <p className="leading-relaxed">
              Vos données sont principalement stockées dans l'Union Européenne. Si un transfert hors UE est nécessaire 
              (par exemple vers les États-Unis pour nos services d'IA), nous nous assurons que des garanties appropriées 
              sont en place (clauses contractuelles types, Privacy Shield, etc.).
            </p>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Modifications de cette Politique</h2>
            <p className="leading-relaxed">
              Nous pouvons mettre à jour cette politique de confidentialité pour refléter les changements de nos pratiques 
              ou des exigences légales. Nous vous informerons de toute modification significative par email ou via notre plateforme.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Nous Contacter</h2>
            <p className="leading-relaxed mb-4">
              Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits :
            </p>
            <div className="bg-gray-900/50 p-6 rounded-lg space-y-2">
              <p><strong className="text-white">Email :</strong> <a href="mailto:privacy@salescopilot.ai" className="text-purple-400 hover:text-purple-300">privacy@salescopilot.ai</a></p>
              <p><strong className="text-white">DPO (Délégué à la Protection des Données) :</strong> <a href="mailto:dpo@salescopilot.ai" className="text-purple-400 hover:text-purple-300">dpo@salescopilot.ai</a></p>
              <p><strong className="text-white">Réclamation CNIL :</strong> Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés)</p>
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
