import { ProductsList } from "@/components/products-list"

export const metadata = {
  title: "Solar Products | SolarMax",
  description: "Premium solar panels, inverters, and battery storage solutions. Browse our complete product range.",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
            Our Solar Products
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
            Premium quality solar panels, inverters, and energy storage solutions for residential and commercial
            installations.
          </p>
        </div>
      </div>
      <ProductsList />
    </main>
  )
}
