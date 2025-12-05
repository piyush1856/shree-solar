import { products } from "@/lib/data"

export function ProductsList() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Solar Panels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Solar Panels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.solarPanels.map((panel) => (
              <div
                key={panel.id}
                className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-600"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{panel.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Power Output</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{panel.wattage}W</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Efficiency</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{panel.efficiency}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Warranty</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{panel.warranty} Years</span>
                  </div>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-600 pt-4">
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{panel.price}</p>
                  <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inverters */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Inverters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.inverters.map((inverter) => (
              <div
                key={inverter.id}
                className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-600"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{inverter.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Power Capacity</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{inverter.power}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Battery Support</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{inverter.battery}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Efficiency</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{inverter.efficiency}%</span>
                  </div>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-600 pt-4">
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{inverter.price}</p>
                  <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Batteries */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Battery Storage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.batteries.map((battery) => (
              <div
                key={battery.id}
                className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-600"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{battery.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Capacity</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{battery.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Type</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{battery.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Lifespan</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{battery.lifespan} Years</span>
                  </div>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-600 pt-4">
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{battery.price}</p>
                  <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
