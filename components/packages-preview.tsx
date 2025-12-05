import Link from "next/link"
import { packages } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export function Packages() {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
            Solar Packages
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Choose the perfect solar package for your home or business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6 hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-600"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{pkg.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">System Size: {pkg.power} kW</p>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Monthly Bill:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{pkg.monthlyBill}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Roof Area:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{pkg.area}</span>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-600">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Original Price</p>
                <p className="text-lg line-through text-slate-500">{pkg.price}</p>
                <p className="text-sm text-green-600 font-semibold mb-2">Save {pkg.discount}</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{pkg.finalPrice}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{pkg.emi} (after subsidy)</p>
              </div>

              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                Get Quote
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-6 py-3 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-slate-700 rounded-lg font-semibold transition-colors"
          >
            View All Packages <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
