"use client"

import Link from "next/link"
import { useEffect } from "react"
import { ArrowLeft, FileText, Lock, Printer, Scale, Shield } from "lucide-react"

export default function MentionsLegalesPage() {
  // Masque les éléments Chatbase persistants sur la page juridique (et les restaure au retour)
  useEffect(() => {
    const selector =
      'iframe[src*="chatbase"], iframe[id*="chatbase"], [id*="chatbase"], [class*="chatbase"]'
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector))
    const prevDisplay = nodes.map((el) => el.style.display)

    nodes.forEach((el) => {
      el.style.display = "none"
    })

    return () => {
      nodes.forEach((el, index) => {
        el.style.display = prevDisplay[index]
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 font-sans selection:bg-[#D4AF37]/30 selection:text-white print:min-h-0 print:bg-white print:text-zinc-900">
      {/* ARRIÈRE-PLAN IDENTIQUE À LA PAGE DE VENTE (MASQUÉ EN PDF) */}
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
        alt="Architecture résidentielle contemporaine"
        className="fixed inset-0 w-full h-full object-cover opacity-20 -z-20 pointer-events-none print:hidden"
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#09090B]/95 via-[#09090B]/90 to-[#09090B] -z-10 pointer-events-none print:hidden" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[780px] h-[340px] bg-[#D4AF37]/10 blur-[140px] rounded-full -z-10 pointer-events-none print:hidden" />

      {/* HEADER NAVIGATION (MASQUÉ EN PDF) */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#09090B]/85 backdrop-blur-md print:hidden">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4 gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l’offre
          </Link>

          <div className="hidden sm:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <a href="#mentions" className="hover:text-[#D4AF37] transition-colors">
              Mentions légales
            </a>
            <a href="#rgpd" className="hover:text-[#D4AF37] transition-colors">
              RGPD
            </a>
            <a href="#cgv" className="hover:text-[#D4AF37] transition-colors">
              CGV B2B
            </a>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold bg-[#D4AF37] text-[#09090B] rounded-lg hover:bg-[#E7C766] transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            Imprimer / PDF
          </button>
        </div>
      </header>

      {/* CONTENU LÉGAL */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-16 print:w-full print:max-w-full print:mx-0 print:px-1 print:py-0 print:overflow-hidden">
        {/* BANDEAU EN-TÊTE NOIR & OR (WEB + PAGE 1 PDF) */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-[#121216]/90 border border-[#D4AF37]/35 print:mb-5 print:p-5 print:rounded-xl print:bg-[#09090B] print:border-[#D4AF37]">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/logo-pack-transparent.png"
              alt="Pack Autorité 360"
              className="h-7 w-auto object-contain"
            />
            <span className="font-bold text-white text-lg tracking-tight">
              Pack Autorité <span className="text-[#D4AF37]">360</span>
            </span>
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-1">
            Conformité légale France · B2B
          </p>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-1.5 print:text-xl">
            Mentions Légales, RGPD &amp; CGV B2B
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 print:text-[10.5px] print:text-zinc-300">
            Dernière mise à jour : 2026 — Applicables à l’ensemble des sites et services Pack Autorité 360 (immo-systeme.fr).
          </p>
        </div>

        <div className="space-y-10 text-sm sm:text-[15px] leading-relaxed text-zinc-300 break-words print:space-y-0 print:text-[10.5px] print:leading-[1.45] print:text-zinc-800">
          {/* SECTION 1 : MENTIONS LÉGALES (PAGE 1 PDF) */}
          <section
            id="mentions"
            className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-[#121216]/90 border border-white/10 print:p-0 print:bg-transparent print:border-0 print:rounded-none"
          >
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10 print:mb-4 print:pb-2 print:border-[#D4AF37] print:break-after-avoid">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center print:hidden">
                <FileText className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white print:text-base print:text-[#09090B]">
                1. Mentions Légales
              </h2>
            </div>

            <div className="space-y-6 print:space-y-3.5">
              <div className="print:break-inside-avoid">
                <h3 className="text-base font-bold text-[#E7C766] mb-2 print:text-[11px] print:uppercase print:tracking-wide print:text-[#9A7B1C] print:break-after-avoid">
                  1.1. Éditeur du site et du logiciel
                </h3>
                <p className="mb-2">
                  Le site vitrine et l’infrastructure logicielle{" "}
                  <strong className="text-white print:text-black">Pack Autorité 360</strong> (nom de domaine{" "}
                  <strong className="text-white print:text-black">immo-systeme.fr</strong> et ses sous-domaines) sont édités par :
                </p>
                <ul className="space-y-1.5 pl-5 list-disc marker:text-[#D4AF37]">
                  <li>
                    <strong className="text-white print:text-black">Identité :</strong> Flavien Houvenaeghel EI — Entrepreneur individuel (micro-entreprise)
                  </li>
                  <li>
                    <strong className="text-white print:text-black">Immatriculation :</strong> SIREN 109 157 297 · SIRET 109 157 297 00010 · Code APE 6201Z
                  </li>
                  <li>
                    <strong className="text-white print:text-black">Adresse professionnelle :</strong> 4 rue Boltar, 31600 Seysses, France
                  </li>
                  <li>
                    <strong className="text-white print:text-black">Adresse électronique :</strong>{" "}
                    <a
                      href="mailto:flavien.houvenaeghel@immo-systeme.fr"
                      className="text-[#D4AF37] underline underline-offset-2 print:text-black print:no-underline"
                    >
                      flavien.houvenaeghel@immo-systeme.fr
                    </a>
                  </li>
                  <li>
                    <strong className="text-white print:text-black">Directeur de la publication :</strong> Flavien Houvenaeghel
                  </li>
                  <li>
                    <strong className="text-white print:text-black">Régime fiscal :</strong> Franchise en base de TVA — TVA non applicable, article 293 B du CGI
                  </li>
                </ul>
              </div>

              <div className="print:break-inside-avoid">
                <h3 className="text-base font-bold text-[#E7C766] mb-2 print:text-[11px] print:uppercase print:tracking-wide print:text-[#9A7B1C] print:break-after-avoid">
                  1.2. Hébergement de l’infrastructure
                </h3>
                <ul className="space-y-1.5 pl-5 list-disc marker:text-[#D4AF37]">
                  <li>
                    <strong className="text-white print:text-black">Interfaces web (vitrine et espace client) :</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (vercel.com).
                  </li>
                  <li>
                    <strong className="text-white print:text-black">Tunnels de capture :</strong> Systeme.io — ITACWT Limited, 2 Cruise Park Ravine, Tyrrelstown, Dublin 15, Irlande.
                  </li>
                  <li>
                    <strong className="text-white print:text-black">Moteur d’automatisation (n8n) :</strong> PikaPods (hébergement européen sécurisé).
                  </li>
                </ul>
              </div>

              <div className="print:break-inside-avoid">
                <h3 className="text-base font-bold text-[#E7C766] mb-2 print:text-[11px] print:uppercase print:tracking-wide print:text-[#9A7B1C] print:break-after-avoid">
                  1.3. Propriété intellectuelle
                </h3>
                <p>
                  L’ensemble des contenus, textes, visuels, architectures logicielles, workflows d’automatisation et designs composant Pack Autorité 360 relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle. Toute reproduction, copie ou exploitation, même partielle, sans autorisation écrite préalable de l’éditeur est strictement interdite.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2 : RGPD (PAGE 2 PDF) */}
          <section
            id="rgpd"
            className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-[#121216]/90 border border-white/10 print:break-before-page print:p-0 print:bg-transparent print:border-0 print:rounded-none"
          >
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10 print:mb-4 print:pb-2 print:border-[#D4AF37] print:break-after-avoid">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center print:hidden">
                <Lock className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white print:text-base print:text-[#09090B]">
                2. Politique de Confidentialité (RGPD)
              </h2>
            </div>

            <div className="space-y-6 print:space-y-3.5">
              <div className="print:break-inside-avoid">
                <h3 className="text-base font-bold text-[#E7C766] mb-2 print:text-[11px] print:uppercase print:tracking-wide print:text-[#9A7B1C] print:break-after-avoid">
                  2.1. Collecte, finalités et bases légales
                </h3>
                <p className="mb-2">
                  Dans le cadre de la commercialisation et de l’exploitation de Pack Autorité 360, Flavien Houvenaeghel EI collecte les données strictement nécessaires auprès de ses clients professionnels (identité, coordonnées professionnelles, secteur géographique d’intervention, éléments visuels, paramètres techniques et données de facturation) sur les bases légales suivantes :
                </p>
                <ul className="space-y-1 pl-5 list-disc marker:text-[#D4AF37]">
                  <li>
                    <strong className="text-white print:text-black">Exécution du contrat (art. 6.1.b RGPD) :</strong> configuration de l’infrastructure, préparation et diffusion des contenus, gestion de l’espace client et support.
                  </li>
                  <li>
                    <strong className="text-white print:text-black">Obligation légale (art. 6.1.c RGPD) :</strong> comptabilité, facturation et conservation des pièces justificatives.
                  </li>
                  <li>
                    <strong className="text-white print:text-black">Intérêt légitime (art. 6.1.f RGPD) :</strong> sécurité technique, prévention des abus et suivi commercial B2B.
                  </li>
                </ul>
              </div>

              <div className="print:break-inside-avoid">
                <h3 className="text-base font-bold text-[#E7C766] mb-2 print:text-[11px] print:uppercase print:tracking-wide print:text-[#9A7B1C] print:break-after-avoid">
                  2.2. Sous-traitants techniques et transferts hors UE
                </h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-[#D4AF37] mb-2">
                  <li>
                    <strong className="text-white print:text-black">Paiement et prélèvements :</strong> GoCardless SAS (mandat SEPA) et/ou Stripe selon le mode de règlement activé.
                  </li>
                  <li>
                    <strong className="text-white print:text-black">Formulaires, tunnels et agenda :</strong> Fillout, Systeme.io, Cal.com.
                  </li>
                  <li>
                    <strong className="text-white print:text-black">Infrastructure, base de données et médias :</strong> Vercel, PikaPods (n8n), Airtable, Clerk, Cloudinary.
                  </li>
                  <li>
                    <strong className="text-white print:text-black">Routage e-mails, assistance et production éditoriale :</strong> Resend, Chatbase, Anthropic.
                  </li>
                </ul>
                <p>
                  Lorsque certains prestataires sont établis aux États-Unis, les transferts de données sont encadrés par le Data Privacy Framework (DPF) UE–États-Unis ou par les Clauses Contractuelles Types (CCT) adoptées par la Commission européenne.
                </p>
              </div>

              <div className="print:break-inside-avoid">
                <h3 className="text-base font-bold text-[#E7C766] mb-2 print:text-[11px] print:uppercase print:tracking-wide print:text-[#9A7B1C] print:break-after-avoid">
                  2.3. Durées de conservation
                </h3>
                <ul className="space-y-1 pl-5 list-disc marker:text-[#D4AF37]">
                  <li>
                    Données contractuelles et techniques du client : conservées pendant toute la durée de l’abonnement, puis archivées 3 ans maximum après la fin de la relation commerciale (sauf demande de suppression anticipée).
                  </li>
                  <li>
                    Pièces comptables et factures : conservées 10 ans conformément au Code de commerce.
                  </li>
                </ul>
              </div>

              <div className="print:break-inside-avoid">
                <h3 className="text-base font-bold text-[#E7C766] mb-2 print:text-[11px] print:uppercase print:tracking-wide print:text-[#9A7B1C] print:break-after-avoid">
                  2.4. Rôle de sous-traitant sur les données des prospects du client (art. 28 RGPD)
                </h3>
                <p>
                  Concernant les données personnelles des propriétaires prospects collectées via les pages de capture, formulaires et agendas configurés pour le compte du client,{" "}
                  <strong className="text-white print:text-black">le client professionnel demeure seul Responsable de Traitement</strong> et Flavien Houvenaeghel EI intervient exclusivement en qualité de{" "}
                  <strong className="text-white print:text-black">Sous-traitant technique</strong> sur instructions documentées du client. L’éditeur applique un cloisonnement technique strict par compte (architecture multi-tenant), la sécurisation des accès et un mécanisme de désinscription RGPD en un clic. Les données prospects sont supprimées ou restituées à la fin du contrat sur simple demande.
                </p>
              </div>

              <div className="print:break-inside-avoid">
                <h3 className="text-base font-bold text-[#E7C766] mb-2 print:text-[11px] print:uppercase print:tracking-wide print:text-[#9A7B1C] print:break-after-avoid">
                  2.5. Exercice de vos droits
                </h3>
                <p>
                  Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité de vos données. Pour l’exercer, écrivez à{" "}
                  <a
                    href="mailto:flavien.houvenaeghel@immo-systeme.fr"
                    className="text-[#D4AF37] underline underline-offset-2 print:text-black print:no-underline"
                  >
                    flavien.houvenaeghel@immo-systeme.fr
                  </a>
                  . Vous disposez également du droit d’introduire une réclamation auprès de la{" "}
                  <strong className="text-white print:text-black">CNIL</strong> (www.cnil.fr).
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3 : CGV B2B (PAGE 3 PDF COMPLÈTE) */}
          <section
            id="cgv"
            className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-[#121216]/90 border border-white/10 print:break-before-page print:p-0 print:bg-transparent print:border-0 print:rounded-none"
          >
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10 print:mb-3 print:pb-2 print:border-[#D4AF37] print:break-after-avoid">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center print:hidden">
                <Scale className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white print:text-base print:text-[#09090B]">
                3. Conditions Générales de Vente (CGV) — B2B
              </h2>
            </div>

            <div className="space-y-6 print:space-y-2.5 print:text-[10px] print:leading-[1.4]">
              <div className="print:break-inside-avoid">
                <h3 className="text-base font-bold text-[#E7C766] mb-1.5 print:mb-1 print:text-[10.5px] print:uppercase print:tracking-wide print:text-[#9A7B1C] print:break-after-avoid">
                  Article 1 — Objet et champ d’application
                </h3>
                <p>
                  Les présentes CGV régissent la souscription et l’utilisation du service logiciel{" "}
                  <strong className="text-white print:text-black">Pack Autorité 360</strong>, édité par{" "}
                  <strong className="text-white print:text-black">Flavien Houvenaeghel EI</strong> (SIREN 109 157 297 — SIRET 109 157 297 00010), domicilié au 4 rue Boltar, 31600 Seysses, France. Le service est exclusivement réservé aux professionnels (B2B) exerçant dans le secteur immobilier. Toute commande implique l’adhésion sans réserve aux présentes CGV.
                </p>
              </div>

              <div className="print:break-inside-avoid">
                <h3 className="text-base font-bold text-[#E7C766] mb-1.5 print:mb-1 print:text-[10.5px] print:uppercase print:tracking-wide print:text-[#9A7B1C] print:break-after-avoid">
                  Article 2 — Description du service et obligations
                </h3>
                <p className="mb-1">
                  Pack Autorité 360 est une infrastructure logicielle en ligne (SaaS) comprenant le déploiement d’un tunnel de capture vendeurs, un espace client de validation, la préparation et la diffusion automatisée de contenus locaux, ainsi que des séquences d’e-mails reliées à l’agenda du client.
                </p>
                <p>
                  L’éditeur est tenu à une <strong className="text-white print:text-black">obligation de moyens</strong> quant à la disponibilité technique du service et ne garantit aucun volume précis de prospects, de rendez-vous ou de mandats. Le client demeure seul responsable de sa conformité réglementaire (Loi Hoguet, détention d’une carte T ou d’une attestation de collaborateur, mentions légales propres) et de la relecture et validation finale des publications diffusées en son nom.
                </p>
              </div>

              <div className="print:break-inside-avoid">
                <h3 className="text-base font-bold text-[#E7C766] mb-1.5 print:mb-1 print:text-[10.5px] print:uppercase print:tracking-wide print:text-[#9A7B1C] print:break-after-avoid">
                  Article 3 — Tarifs, paiement et pénalités de retard
                </h3>
                <ul className="space-y-0.5 pl-5 list-disc marker:text-[#D4AF37] mb-1">
                  <li>
                    <strong className="text-white print:text-black">Frais de mise en place technique uniques :</strong> 297 € net, exigibles immédiatement à la commande.
                  </li>
                  <li>
                    <strong className="text-white print:text-black">Abonnement mensuel récurrent :</strong> 197 € net par mois, prélevé automatiquement à date anniversaire (mandat SEPA GoCardless ou carte bancaire).
                  </li>
                </ul>
                <p className="mb-1">
                  <strong className="text-white print:text-black">TVA non applicable, article 293 B du CGI.</strong> Tout mois d’abonnement entamé reste dû dans son intégralité.
                </p>
                <p>
                  Conformément à l’article L441-10 du Code de commerce, tout retard ou incident de paiement entraîne de plein droit, sans mise en demeure préalable : l’application de pénalités de retard calculées sur la base de{" "}
                  <strong className="text-white print:text-black">trois (3) fois le taux d’intérêt légal</strong> en vigueur, une{" "}
                  <strong className="text-white print:text-black">indemnité forfaitaire pour frais de recouvrement de 40 €</strong> par facture impayée, ainsi que la faculté pour l’éditeur de suspendre immédiatement l’accès au service et aux automatisations jusqu’à régularisation complète.
                </p>
              </div>

              <div className="print:break-inside-avoid">
                <h3 className="text-base font-bold text-[#E7C766] mb-1.5 print:mb-1 print:text-[10.5px] print:uppercase print:tracking-wide print:text-[#9A7B1C] print:break-after-avoid">
                  Article 4 — Absence de droit de rétractation
                </h3>
                <p>
                  Les contrats conclus à distance entre professionnels dans le cadre de leur activité principale ne bénéficient pas du droit légal de rétractation de 14 jours. En validant sa commande, le client demande expressément le démarrage immédiat de la configuration technique de son infrastructure et reconnaît renoncer à tout droit de rétractation une fois le déploiement engagé.
                </p>
              </div>

              <div className="print:break-inside-avoid">
                <h3 className="text-base font-bold text-[#E7C766] mb-1.5 print:mb-1 print:text-[10.5px] print:uppercase print:tracking-wide print:text-[#9A7B1C] print:break-after-avoid">
                  Article 5 — Durée et résiliation
                </h3>
                <p>
                  L’abonnement est conclu pour une durée indéterminée, sans engagement de durée minimale. Le client peut résilier à tout moment, sans frais, depuis son espace dédié ou par simple e-mail à{" "}
                  <a
                    href="mailto:flavien.houvenaeghel@immo-systeme.fr"
                    className="text-[#D4AF37] underline underline-offset-2 print:text-black print:no-underline"
                  >
                    flavien.houvenaeghel@immo-systeme.fr
                  </a>
                  . La résiliation prend effet à l’issue de la période mensuelle en cours (toute demande devant parvenir au moins 48 heures ouvrées avant la date d’échéance suivante pour stopper le prélèvement). Les frais initiaux de mise en place ne sont pas remboursables une fois la configuration réalisée.
                </p>
              </div>

              <div className="print:break-inside-avoid">
                <h3 className="text-base font-bold text-[#E7C766] mb-1.5 print:mb-1 print:text-[10.5px] print:uppercase print:tracking-wide print:text-[#9A7B1C] print:break-after-avoid">
                  Article 6 — Propriété intellectuelle et limitation de responsabilité
                </h3>
                <p>
                  Le client bénéficie d’un droit d’utilisation personnel, non exclusif et non cessible de l’infrastructure pendant toute la durée active de son abonnement. L’architecture logicielle, le code source, les scénarios d’automatisation et les gabarits demeurent la propriété exclusive de l’éditeur. La responsabilité financière totale de l’éditeur, toutes causes confondues, est expressément plafonnée au montant des sommes effectivement versées par le client au cours des trois (3) derniers mois précédant le fait générateur.
                </p>
              </div>

              <div className="print:break-inside-avoid">
                <h3 className="text-base font-bold text-[#E7C766] mb-1.5 print:mb-1 print:text-[10.5px] print:uppercase print:tracking-wide print:text-[#9A7B1C] print:break-after-avoid">
                  Article 7 — Droit applicable et juridiction compétente
                </h3>
                <p>
                  Les présentes CGV sont soumises au droit français. En cas de différend, les parties s’engagent à rechercher une solution amiable préalable. À défaut d’accord dans un délai de 30 jours, tout litige sera porté devant les juridictions compétentes du ressort de{" "}
                  <strong className="text-white print:text-black">Toulouse</strong>, sous réserve des règles impératives de compétence territoriale.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* PIED DE PAGE */}
        <footer className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 print:mt-4 print:pt-2.5 print:border-zinc-300 print:text-[9.5px] print:text-zinc-600 print:break-inside-avoid">
          <span>© 2026 Pack Autorité 360 — Flavien Houvenaeghel EI · SIRET 109 157 297 00010</span>
          <span className="inline-flex items-center gap-2 text-zinc-300 print:text-zinc-800">
            <Shield className="w-4 h-4 text-[#D4AF37] print:hidden" />
            Conforme RGPD &amp; Droit français
          </span>
        </footer>
      </main>
    </div>
  )
}