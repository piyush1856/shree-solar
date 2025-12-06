import { SolarCalculator } from "@/components/solar-calculator"

export const metadata = {
  title: "Solar Calculator | Shree Solar",
  description:
    "Calculate your potential solar savings based on your electricity consumption. Get personalized recommendations.",
}

export default function CalculatorPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
            Solar Savings Calculator
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
            Enter your monthly electricity bill to see how much you can save with solar energy.
          </p>
        </div>
      </div>
      <SolarCalculator />
    </main>
  )
}
