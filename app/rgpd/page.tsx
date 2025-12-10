import Footer from '@/components/Footer'
import { CheckCircle, Search, Edit, Trash2, PauseCircle, Package, XCircle, Ban, Bot, Mail, AlertTriangle, Award, FileText } from 'lucide-react'

export default function RGPDPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Conformité RGPD
          </h1>
          <p className="text-gray-400">
            Règlement Général sur la Protection des Données
          </p>
        </div>

        {/* Content */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 space-y-8 text-gray-300">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Notre Engagement RGPD</h2>
            <p className="leading-relaxed">
              <span className="text-purple-400 font-semibold">Sales Copilot AI</span> prend très au sérieux la protection 
              de vos données personnelles et s'engage à respecter le Règlement Général sur la Protection des Données (RGPD) 
              entré en vigueur le 25 mai 2018.
            </p>
            <p className="mt-4 leading-relaxed">
              Cette page détaille notre conformité RGPD et les mesures mises en place pour garantir la sécurité et 
              la confidentialité de vos données.
            </p>
          </section>

          {/* Principes RGPD */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Principes Fondamentaux Respectés</h2>
            <div className="space-y-4">
              <div className="bg-gray-900/50 p-5 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Licéité, loyauté et transparence</h3>
                    <p className="text-sm">
                      Nous traitons vos données de manière licite, loyale et transparente. Vous êtes informé de l'utilisation 
                      de vos données avant leur collecte.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 p-5 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Limitation des finalités</h3>
                    <p className="text-sm">
                      Vos données sont collectées pour des finalités déterminées, explicites et légitimes 
                      (fourniture du service, support client, facturation).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 p-5 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Minimisation des données</h3>
                    <p className="text-sm">
                      Nous ne collectons que les données strictement nécessaires à la fourniture de nos services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 p-5 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Exactitude</h3>
                    <p className="text-sm">
                      Nous prenons toutes les mesures raisonnables pour que les données inexactes soient effacées ou rectifiées.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 p-5 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Limitation de la conservation</h3>
                    <p className="text-sm">
                      Les données sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles 
                      elles sont traitées.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 p-5 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Intégrité et confidentialité</h3>
                    <p className="text-sm">
                      Vos données sont traitées de manière à garantir une sécurité appropriée (chiffrement, 
                      contrôle d'accès, audits réguliers).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 p-5 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Responsabilité</h3>
                    <p className="text-sm">
                      Nous sommes en mesure de démontrer notre conformité aux principes RGPD (documentation, audits, DPO).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Base légale */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Base Légale des Traitements</h2>
            <p className="mb-4">Nous traitons vos données sur les bases légales suivantes :</p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>
                <strong className="text-white">Exécution d'un contrat :</strong> Traitement nécessaire pour fournir nos services 
                (génération de bases de données, automatisation de prospection, analytics)
              </li>
              <li>
                <strong className="text-white">Consentement explicite :</strong> Pour les communications marketing, 
                newsletters et cookies non essentiels
              </li>
              <li>
                <strong className="text-white">Intérêt légitime :</strong> Pour améliorer nos services, assurer la sécurité 
                de la plateforme et prévenir la fraude
              </li>
              <li>
                <strong className="text-white">Obligation légale :</strong> Pour respecter nos obligations comptables, 
                fiscales et légales (conservation des factures, lutte anti-blanchiment)
              </li>
            </ul>
          </section>

          {/* Droits des personnes */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Vos Droits en tant que Personne Concernée</h2>
            <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex items-start gap-3">
                  <Search className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Droit d'accès (Art. 15)</h3>
                    <p className="text-sm">
                      Vous pouvez obtenir une copie de toutes les données personnelles que nous détenons sur vous, 
                      ainsi que des informations sur leur traitement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex items-start gap-3">
                  <Edit className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Droit de rectification (Art. 16)</h3>
                    <p className="text-sm">
                      Vous pouvez demander la correction de vos données inexactes ou incomplètes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex items-start gap-3">
                  <Trash2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Droit à l'effacement / "Droit à l'oubli" (Art. 17)</h3>
                    <p className="text-sm">
                      Vous pouvez demander la suppression de vos données dans certaines conditions 
                      (retrait du consentement, fin de la relation contractuelle, etc.).
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex items-start gap-3">
                  <PauseCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Droit à la limitation du traitement (Art. 18)</h3>
                    <p className="text-sm">
                      Vous pouvez demander le gel temporaire du traitement de vos données dans certaines situations 
                      (contestation de l'exactitude, traitement illicite).
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Droit à la portabilité (Art. 20)</h3>
                    <p className="text-sm">
                      Vous pouvez récupérer vos données dans un format structuré, couramment utilisé et lisible par machine 
                      (JSON, CSV, Excel).
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Droit d'opposition (Art. 21)</h3>
                    <p className="text-sm">
                      Vous pouvez vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière, 
                      notamment pour la prospection commerciale.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex items-start gap-3">
                  <Ban className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Droit de retirer votre consentement (Art. 7)</h3>
                    <p className="text-sm">
                      Lorsque le traitement est fondé sur votre consentement, vous pouvez le retirer à tout moment 
                      (désinscription newsletter, refus cookies).
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex items-start gap-3">
                  <Bot className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Droit de ne pas faire l'objet d'une décision automatisée (Art. 22)</h3>
                    <p className="text-sm">
                      Vous pouvez demander une intervention humaine pour toute décision automatisée ayant des effets 
                      juridiques ou significatifs sur vous.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-purple-900/30 border border-purple-500/50 p-5 rounded-lg">
              <div className="flex items-start gap-3 mb-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-semibold text-white">Comment exercer vos droits ?</h3>
              </div>
              <p className="text-sm mb-3">
                Pour exercer l'un de ces droits, contactez-nous à :
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li><strong>Email :</strong> <a href="mailto:dpo@salescopilot.ai" className="text-purple-400 hover:text-purple-300">dpo@salescopilot.ai</a></li>
                <li><strong>Formulaire en ligne :</strong> Disponible dans votre dashboard</li>
                <li><strong>Délai de réponse :</strong> Maximum 1 mois (peut être prolongé de 2 mois si complexe)</li>
              </ul>
              <div className="flex items-start gap-2 text-sm mt-3 text-yellow-400">
                <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p>Une pièce d'identité pourra vous être demandée pour vérifier votre identité.</p>
              </div>
            </div>
          </section>

          {/* Mesures de sécurité */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Mesures de Sécurité Techniques et Organisationnelles</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3 mt-4">4.1 Sécurité technique</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Chiffrement SSL/TLS :</strong> Toutes les communications sont chiffrées (HTTPS)</li>
              <li><strong className="text-white">Chiffrement des données au repos :</strong> Base de données chiffrée (AES-256)</li>
              <li><strong className="text-white">Authentification forte :</strong> Mots de passe hashés (bcrypt), 2FA disponible</li>
              <li><strong className="text-white">Firewall et WAF :</strong> Protection contre les attaques (DDoS, injections SQL, XSS)</li>
              <li><strong className="text-white">Sauvegardes automatiques :</strong> Quotidiennes, chiffrées, géorépliquées</li>
              <li><strong className="text-white">Logs de sécurité :</strong> Traçabilité des accès et modifications</li>
              <li><strong className="text-white">Tests d'intrusion :</strong> Audits de sécurité réguliers par des experts externes</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.2 Sécurité organisationnelle</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Politique de sécurité :</strong> Procédures internes documentées</li>
              <li><strong className="text-white">Accès restreints :</strong> Principe du moindre privilège (least privilege)</li>
              <li><strong className="text-white">Formation du personnel :</strong> Sensibilisation RGPD et cybersécurité</li>
              <li><strong className="text-white">Clauses de confidentialité :</strong> Tous les employés et sous-traitants sont liés par NDA</li>
              <li><strong className="text-white">Gestion des incidents :</strong> Procédure de notification en cas de violation de données (72h max)</li>
            </ul>
          </section>

          {/* Sous-traitants */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Sous-Traitants et Transferts de Données</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.1 Sous-traitants RGPD-compliant</h3>
            <p className="mb-4">Nous travaillons uniquement avec des sous-traitants offrant des garanties suffisantes :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Hébergement :</strong> OVH / AWS Europe (serveurs UE, certifiés ISO 27001)</li>
              <li><strong className="text-white">Email :</strong> SendGrid / Mailgun (RGPD compliant)</li>
              <li><strong className="text-white">Analytics :</strong> Matomo (alternative RGPD à Google Analytics)</li>
              <li><strong className="text-white">IA :</strong> OpenAI / Anthropic avec anonymisation des données sensibles</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">5.2 Transferts internationaux</h3>
            <p className="mb-4">
              Vos données sont principalement stockées dans l'Union Européenne. Si un transfert hors UE est nécessaire 
              (notamment pour les services d'IA basés aux États-Unis), nous nous assurons que :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Des <strong className="text-white">clauses contractuelles types (CCT)</strong> de la Commission Européenne sont en place</li>
              <li>Une <strong className="text-white">évaluation d'impact (TIA)</strong> a été réalisée</li>
              <li>Les données sont <strong className="text-white">pseudonymisées ou anonymisées</strong> autant que possible</li>
              <li>Le sous-traitant respecte des standards équivalents au RGPD</li>
            </ul>
          </section>

          {/* Violation de données */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Procédure en cas de Violation de Données</h2>
            <p className="mb-4">
              En cas de violation de données personnelles susceptible d'engendrer un risque pour vos droits et libertés, 
              nous nous engageons à :
            </p>
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li>
                <strong className="text-white">Notification à la CNIL</strong> dans les <strong>72 heures</strong> suivant la prise 
                de connaissance de l'incident
              </li>
              <li>
                <strong className="text-white">Notification aux personnes concernées</strong> dans les meilleurs délais si le risque 
                est élevé
              </li>
              <li>
                <strong className="text-white">Documentation de l'incident</strong> (nature, conséquences, mesures prises)
              </li>
              <li>
                <strong className="text-white">Mise en place de mesures correctives</strong> pour éviter la récurrence
              </li>
            </ol>
          </section>

          {/* DPO */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Délégué à la Protection des Données (DPO)</h2>
            <p className="mb-4">
              Conformément à l'article 37 du RGPD, nous avons désigné un Délégué à la Protection des Données (DPO) 
              chargé de :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Informer et conseiller sur les obligations RGPD</li>
              <li>Contrôler le respect du règlement</li>
              <li>Être le point de contact avec la CNIL</li>
              <li>Traiter les demandes d'exercice de droits</li>
            </ul>

            <div className="mt-4 bg-gray-900/50 p-5 rounded-lg">
              <p><strong className="text-white">Contacter notre DPO :</strong></p>
              <ul className="mt-2 space-y-1">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  Email : <a href="mailto:dpo@salescopilot.ai" className="text-purple-400 hover:text-purple-300">dpo@salescopilot.ai</a>
                </li>
                <li>Adresse : [ADRESSE POSTALE DE VOTRE SOCIÉTÉ]</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Gestion des Cookies</h2>
            <p className="mb-4">
              Conformément à la directive ePrivacy et au RGPD, nous utilisons des cookies avec votre consentement 
              (sauf cookies essentiels). Vous pouvez gérer vos préférences à tout moment.
            </p>
            <p>
              Pour plus d'informations, consultez notre <a href="/privacy#cookies" className="text-purple-400 hover:text-purple-300 underline">
              Politique de Cookies
              </a>.
            </p>
          </section>

          {/* Réclamation */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Droit de Réclamation auprès de la CNIL</h2>
            <p className="mb-4">
              Si vous estimez que vos droits ne sont pas respectés ou que le traitement de vos données pose problème, 
              vous avez le droit de déposer une réclamation auprès de l'autorité de contrôle compétente :
            </p>
            <div className="bg-gray-900/50 p-5 rounded-lg">
              <p><strong className="text-white">Commission Nationale de l'Informatique et des Libertés (CNIL)</strong></p>
              <ul className="mt-2 space-y-1">
                <li>Email : <a href="https://www.cnil.fr" target="_blank" rel="noopener" className="text-purple-400 hover:text-purple-300">www.cnil.fr</a></li>
                <li>Adresse : 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</li>
                <li>Téléphone : 01 53 73 22 22</li>
              </ul>
            </div>
          </section>

          {/* Audit et certification */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Audits et Certifications</h2>
            <p className="mb-4">
              Pour garantir notre conformité RGPD, nous réalisons :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Audits internes :</strong> Trimestriels</li>
              <li><strong className="text-white">Audits externes :</strong> Annuels par un cabinet spécialisé</li>
              <li><strong className="text-white">Registre des activités de traitement :</strong> Tenu à jour et disponible sur demande</li>
              <li><strong className="text-white">Analyse d'impact (DPIA) :</strong> Pour les traitements à risque élevé</li>
            </ul>

            <div className="mt-4 bg-green-900/30 border border-green-500/50 p-5 rounded-lg">
              <div className="flex items-start gap-3 text-green-400">
                <Award className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p><strong>Certifications en cours d'obtention :</strong></p>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• ISO 27001 (Sécurité de l'information)</li>
                    <li>• ISO 27701 (Privacy Information Management)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact RGPD</h2>
            <div className="bg-gray-900/50 p-6 rounded-lg space-y-3">
              <p><strong className="text-white">Pour toute question relative à la protection de vos données :</strong></p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <strong>DPO :</strong> <a href="mailto:dpo@salescopilot.ai" className="text-purple-400 hover:text-purple-300">dpo@salescopilot.ai</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <strong>Privacy :</strong> <a href="mailto:privacy@salescopilot.ai" className="text-purple-400 hover:text-purple-300">privacy@salescopilot.ai</a>
              </p>
              <p className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-purple-400" />
                <strong>Politique complète :</strong> <a href="/privacy" className="text-purple-400 hover:text-purple-300 underline">Politique de Confidentialité</a>
              </p>
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
