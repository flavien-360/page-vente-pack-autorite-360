"use client"

import Link from "next/link"
import { useEffect } from "react"
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  FileText,
  Mail,
  Share2,
  Shield,
} from "lucide-react"

declare global {
  interface Window {
    embeddedChatbotConfig?: {
      chatbotId: string
      domain: string
    }
  }
}

const FILLOUT_URL = "/commande"
const APP_CLIENT_URL = "https://pack-autorite-360-pro.immo-systeme.fr"

export default function Page() {
  useEffect(() => {
    window.embeddedChatbotConfig = {
      chatbotId: "su1L6oVkjma7CvXLrrBMb",
      domain: "www.chatbase.co",
    }

    if (document.getElementById("chatbase-embed-script")) return

    const script = document.createElement("script")
    script.id = "chatbase-embed-script"
    script.src = "https://www.chatbase.co/embed.min.js"
    script.defer = true
    script.setAttribute("chatbotId", "su1L6oVkjma7CvXLrrBMb")
    script.setAttribute("domain", "www.chatbase.co")
    document.body.appendChild(script)

    return () => {
      const el = document.getElementById("chatbase-embed-script")
      if (el && document.body.contains(el)) {
        document.body.removeChild(el)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 font-sans selection:bg-[#D4AF37]/30 selection:text-white">
      {/* ARRIÈRE-PLAN DISCRET HAUT DE GAMME */}
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
        alt="Architecture résidentielle contemporaine"
        className="fixed inset-0 w-full h-full object-cover opacity-20 -z-20 pointer-events-none"
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#09090B]/95 via-[#09090B]/90 to-[#09090B] -z-10 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[780px] h-[340px] bg-[#D4AF37]/10 blur-[140px] rounded-full -z-10 pointer-events-none" />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* NAVIGATION */}
        <header className="sticky top-0 z-30 border-b border-white/10 bg-[#09090B]/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4">
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-85">
              <img
                src="/logo-pack-transparent.png"
                alt="Pack Autorité 360"
                className="h-8 w-auto object-contain"
              />
              <span className="font-bold text-white text-lg sm:text-xl tracking-tight">
                Pack Autorité <span className="text-[#D4AF37]">360</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
              <a href="#systeme" className="hover:text-[#D4AF37] transition-colors">
                Le Système
              </a>
              <a href="#fonctionnement" className="hover:text-[#D4AF37] transition-colors">
                Déploiement
              </a>
              <a href="#tarifs" className="hover:text-[#D4AF37] transition-colors">
                Tarification
              </a>
            </nav>

            <a
              href={APP_CLIENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-zinc-200 border border-[#D4AF37]/40 rounded-full hover:bg-[#D4AF37] hover:text-[#09090B] transition-all duration-200"
            >
              Espace Client
            </a>
          </div>
        </header>

        {/* HERO SECTION */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-20 pb-24 sm:pt-28 sm:pb-28 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs sm:text-sm font-semibold text-[#E7C766] tracking-wide uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            Prospection digitale pour conseillers immobiliers
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.08] text-white">
            Recevez des rendez-vous vendeurs.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3D574] via-[#D4AF37] to-[#B08D26]">
              Sans pige ni porte-à-porte.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mb-10 leading-relaxed">
            Votre visibilité locale sur les réseaux sociaux, la capture de propriétaires vendeurs sur votre secteur et
            les relances jusqu’à la prise de rendez-vous dans votre agenda — entièrement pilotés pour vous.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href={FILLOUT_URL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4AF37] text-[#09090B] rounded-xl font-extrabold text-base sm:text-lg hover:bg-[#E7C766] hover:-translate-y-0.5 shadow-[0_0_35px_rgba(212,175,55,0.28)] transition-all duration-200"
            >
              Déployer mon infrastructure <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#tarifs"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 bg-white/5 text-zinc-200 border border-white/15 rounded-xl font-semibold text-base hover:border-[#D4AF37]/50 hover:text-white transition-all duration-200"
            >
              Voir les conditions
            </a>
          </div>

          {/* PREUVES OPÉRATIONNELLES */}
          <div className="mt-14 pt-8 border-t border-white/10 w-full max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-zinc-300">
              <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10">
                <CalendarCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Rendez-vous directs dans votre agenda</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Mise en service sous 48 h</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10">
                <Shield className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>100 % conforme RGPD &amp; Carte T</span>
              </div>
            </div>
          </div>
        </main>

        {/* LES 4 BRIQUES DU SYSTÈME */}
        <section id="systeme" className="py-20 sm:py-24 px-4 max-w-6xl mx-auto w-full">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
              Une mécanique complète
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
              Quatre piliers qui prospectent à votre place
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Vous restez concentré sur vos estimations, vos visites et vos signatures. Pendant ce temps, votre système
              construit votre notoriété locale et qualifie les propriétaires de votre secteur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#121216]/90 border border-white/10 hover:border-[#D4AF37]/45 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                <Share2 className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                4 carrousels d’expertise par semaine &amp; diffusion de vos biens
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Publications sur-mesure à votre nom, votre photo et vos communes sur Facebook, Instagram et LinkedIn,
                validées en un clic depuis votre espace dédié. Diffusion express de vos biens (Nouveaux biens conformes
                Loi Alur &amp; DPE, Sous offre, Vendu) en moins d’une minute sur vos 3 réseaux.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-[#121216]/90 border border-white/10 hover:border-[#D4AF37]/45 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Capture de propriétaires vendeurs
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Votre page dédiée offre le Guide de la Valorisation Immobilière en échange des coordonnées et de la
                ville du bien. Seuls les propriétaires réellement intéressés entrent dans votre base.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-[#121216]/90 border border-white/10 hover:border-[#D4AF37]/45 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Relances automatiques à votre nom
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Les propriétaires qui ne réservent pas immédiatement reçoivent une séquence d’e-mails sobres et
                pédagogiques sur le juste prix et la préparation de leur vente — avec réponse directe sur votre adresse.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-[#121216]/90 border border-white/10 hover:border-[#D4AF37]/45 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                <CalendarCheck className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Prise de rendez-vous directement qualifiée
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Dès le téléchargement du guide et dans chaque relance, le propriétaire peut bloquer un créneau d’Analyse
                Stratégique de 15 minutes directement dans vos disponibilités.
              </p>
            </div>
          </div>
        </section>

        {/* COMMENT ÇA SE DÉPLOIE */}
        <section id="fonctionnement" className="py-16 px-4 max-w-5xl mx-auto w-full">
          <div className="rounded-3xl bg-[#121216]/90 border border-[#D4AF37]/20 p-8 sm:p-12">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
                Zéro charge technique
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Opérationnel sur votre secteur en 3 étapes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="text-3xl font-black text-[#D4AF37] mb-3">01</div>
                <h3 className="text-lg font-bold text-white mb-2">Fiche d’initialisation (5 min)</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Vous transmettez vos communes d’intervention, votre photo, votre slogan et votre lien d’agenda.
                </p>
              </div>
              <div>
                <div className="text-3xl font-black text-[#D4AF37] mb-3">02</div>
                <h3 className="text-lg font-bold text-white mb-2">Configuration clé en main</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Nous configurons votre espace de validation, votre tunnel vendeur, vos e-mails de relance et vos
                  connexions réseaux.
                </p>
              </div>
              <div>
                <div className="text-3xl font-black text-[#D4AF37] mb-3">03</div>
                <h3 className="text-lg font-bold text-white mb-2">Pilotage en 2 minutes par semaine</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Chaque semaine, vos 4 publications locales vous attendent : vous validez, le système diffuse et
                  convertit en continu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TARIFICATION */}
        <section id="tarifs" className="py-24 px-4 max-w-4xl mx-auto w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest text-[#E7C766] mb-6">
            Tarification transparente
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Un seul mandat exclusif rembourse plus de 2 ans d’exploitation.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 mb-14 max-w-2xl mx-auto">
            Une mise en place complète à votre image, puis un abonnement mensuel sans engagement de durée.
          </p>

          <div className="flex flex-col md:flex-row rounded-3xl border border-[#D4AF37]/35 overflow-hidden bg-[#121216]/95 shadow-[0_24px_70px_rgba(0,0,0,0.65)]">
            {/* COLONNE 1 : INSTALLATION */}
            <div className="flex-1 p-8 sm:p-11 border-b md:border-b-0 md:border-r border-white/10 text-left">
              <div className="text-[#D4AF37] font-bold tracking-wider uppercase text-xs mb-4">
                Mise en place initiale
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-extrabold text-white">297 €</span>
                <span className="text-sm font-semibold text-zinc-400">net</span>
              </div>
              <div className="text-sm text-zinc-400 mb-8">
                Paiement unique de configuration complète
              </div>
              <ul className="space-y-4 text-sm sm:text-base">
                <li className="flex items-start gap-3.5">
                  <Check className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-zinc-200">Page de capture vendeurs personnalisée à votre image</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <Check className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-zinc-200">Intégration du Guide de la Valorisation Immobilière</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <Check className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-zinc-200">Page de confirmation connectée à votre agenda</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <Check className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-zinc-200">Paramétrage de vos communes et de votre charte visuelle</span>
                </li>
              </ul>
            </div>

            {/* COLONNE 2 : ABONNEMENT */}
            <div className="flex-1 p-8 sm:p-11 text-left relative bg-gradient-to-b from-[#D4AF37]/[0.07] to-transparent">
              <div className="inline-block mb-4">
                <span className="bg-[#D4AF37] text-[#09090B] text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  Exploitation continue
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-extrabold text-white">197 €</span>
                <span className="text-sm font-semibold text-zinc-400">/ mois net</span>
              </div>
              <div className="text-sm text-zinc-400 mb-8">
                Sans engagement de durée — résiliable en un clic
              </div>
              <ul className="space-y-4 text-sm sm:text-base">
                <li className="flex items-start gap-3.5">
                  <Check className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-zinc-200">4 carrousels locaux d’expertise préparés chaque semaine</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <Check className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-zinc-200">
                    Diffusion express de vos biens (Nouveaux biens conformes Loi Alur &amp; DPE, Sous offre, Vendu) en
                    moins d’une minute sur vos 3 réseaux
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <Check className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-zinc-200">Diffusion multi-réseaux + espace client de validation</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <Check className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-zinc-200">Séquences de relances e-mail à votre nom jusqu’au RDV</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <Check className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-zinc-200">Maintenance, hébergement, conformité RGPD et reporting</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-5 text-xs text-zinc-500">
            TVA non applicable, art. 293 B du CGI. Facturation conforme et sans frais cachés.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <Link
              href={FILLOUT_URL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#D4AF37] text-[#09090B] rounded-xl font-extrabold text-base sm:text-lg hover:bg-[#E7C766] hover:-translate-y-0.5 shadow-[0_0_35px_rgba(212,175,55,0.28)] transition-all duration-200"
            >
              Déployer mon infrastructure <ArrowRight className="w-5 h-5" />
            </Link>
            <span className="text-xs text-zinc-400">
              Mise en place rapide après validation de votre fiche secteur
            </span>
          </div>
        </section>

        {/* FOOTER (pb-24 POUR ÉVITER TOUT CHEVAUCHEMENT AVEC CHATBASE) */}
        <footer className="border-t border-white/10 mt-auto bg-[#09090B]/95 pb-24 lg:pb-12">
          <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-zinc-400 text-sm">
              <span>© 2026 Pack Autorité 360 — Flavien Houvenaeghel EI · SIRET 109 157 297 00010</span>
              <Link
                href="/mentions-legales"
                className="text-zinc-300 hover:text-[#D4AF37] underline underline-offset-4 transition-colors"
              >
                Mentions Légales &amp; CGV
              </Link>
            </div>

            <div className="flex items-center gap-2.5 text-zinc-200 text-xs sm:text-sm font-semibold bg-[#121216] px-4 py-2 rounded-full border border-[#D4AF37]/30">
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              Infrastructure 100 % légale en France &amp; conforme RGPD
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}