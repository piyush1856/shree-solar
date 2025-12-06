import { ServicesList } from "@/components/services-list"

export const metadata = {
  title: "Services | Shree Solar",
  description:
    "Complete solar installation services from design to maintenance. Expert team, professional installation.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
            Our Services
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
            End-to-end solar solutions from consultation to maintenance. We handle everything.
          </p>
        </div>
      </div>
      <ServicesList />
    </main>
  )
}
