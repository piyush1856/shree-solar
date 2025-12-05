import { Hero } from "@/components/hero"
import { Packages } from "@/components/packages-preview"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Packages />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  )
}
