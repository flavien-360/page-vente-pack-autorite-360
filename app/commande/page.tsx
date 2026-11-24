import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Déploiement — Pack Autorité 360",
  robots: { index: false, follow: false },
}

export default function CommandePage() {
  return (
    <main className="w-screen h-screen bg-[#09090B] overflow-hidden">
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}>
        <div
          data-fillout-id="2xyiR58iH4us"
          data-fillout-embed-type="fullscreen"
          style={{ width: "100%", height: "100%" }}
          data-fillout-inherit-parameters
        />
      </div>
      <Script src="https://server.fillout.com/embed/v1/" strategy="afterInteractive" />
    </main>
  )
}