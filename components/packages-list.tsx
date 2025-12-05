import { packages } from "@/lib/data"

export function PackagesList() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white dark:bg-slate-700 rounded-lg p-6 hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-600 relative"
            >
              {pkg.id === 3 && (
                <div className="absolute -top-3 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{pkg.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">System Size: {pkg.power} kW</p>

              <div className="space-y-2 mb-6 pb-6 border-b border-slate-200 dark:border-slate-600">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Monthly Bill:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{pkg.monthlyBill}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Roof Area:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{pkg.area}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <p className="text-sm text-slate-600 dark:text-slate-400">Includes:</p>
                <ul className="text-sm space-y-1">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="text-slate-700 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-600">
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Original Price</p>
                <p className="text-sm line-through text-slate-500">{pkg.price}</p>
                <p className="text-sm text-green-600 font-semibold mb-2">Save {pkg.discount}</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{pkg.finalPrice}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">{pkg.emi}</p>
              </div>

              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                Get Quote
              </button>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white dark:bg-slate-700 rounded-lg p-6 overflow-x-auto">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">System Comparison</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-600">
                <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Feature</th>
                {packages.map((pkg) => (
                  <th key={pkg.id} className="px-4 py-3 text-center font-semibold text-slate-900 dark:text-white">
                    {pkg.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200 dark:border-slate-600">
                <td className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">System Size</td>
                {packages.map((pkg) => (
                  <td key={pkg.id} className="px-4 py-3 text-center text-slate-600 dark:text-slate-400">
                    {pkg.power} kW
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-600">
                <td className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Price</td>
                {packages.map((pkg) => (
                  <td key={pkg.id} className="px-4 py-3 text-center text-slate-600 dark:text-slate-400">
                    {pkg.finalPrice}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-600">
                <td className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Solar Panels</td>
                {packages.map((pkg) => (
                  <td key={pkg.id} className="px-4 py-3 text-center text-slate-600 dark:text-slate-400">
                    {pkg.includes[0]}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Warranty</td>
                {packages.map((pkg) => (
                  <td key={pkg.id} className="px-4 py-3 text-center text-slate-600 dark:text-slate-400">
                    25 Years
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
