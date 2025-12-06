import { PackagesList } from "@/components/packages-list"

export const metadata = {
  title: "Solar Packages | Shree Solar",
  description: "Pre-configured solar system packages for different needs and budgets. Flexible financing available.",
}

export default function PackagesPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
            Solar Packages
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
            Choose the perfect solar package for your home or business. All packages include installation and 25-year
            warranty.
          </p>
        </div>
      </div>
      <PackagesList />
    </main>
  )
}
