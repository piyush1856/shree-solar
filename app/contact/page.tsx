import { Contact } from "@/components/contact"

export const metadata = {
  title: "Contact Us | Shree Solar",
  description: "Get in touch with our team. Free consultation available. Call or fill out our contact form.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Contact />
    </main>
  )
}
