import { About } from "@/components/about"

export const metadata = {
  title: "About Us | Shree Solar",
  description:
    "Leading solar installation company in India. 10+ years experience, 5000+ installations, trusted by thousands.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <About />
    </main>
  )
}
