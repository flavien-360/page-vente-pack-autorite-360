import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Déploiement — Pack Autorité 360",
  robots: { index: false, follow: false },
}

export default function CommandePage() {
  return (
    <main className="w-screen h-screen bg-[#09090B] overflow-hidden">
      <iframe
        src="https://pack-aurotite-360.fillout.com/immo-systeme"
        title="Configuration et commande Pack Autorité 360"
        className="w-full h-full border-0"
        allow="payment *; clipboard-write"
      />
    </main>
  )
}