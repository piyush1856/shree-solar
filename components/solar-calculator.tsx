"use client"

import { useState, useMemo } from "react"
import { Calculator } from "lucide-react"

export function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(3000)

  const calculations = useMemo(() => {
    // Base calculations
    const avgRate = 8 // ₹ per kWh
    const monthlyKwh = monthlyBill / avgRate
    const annualKwh = monthlyKwh * 12

    // System sizing (typically 1kW produces 1500-1800 kWh/year)
    const systemSize = Math.ceil(annualKwh / 1500)

    // Pricing (rough estimate)
    const costPerKw = 1.5 // ₹ lakhs
    const totalCost = systemSize * costPerKw * 100000

    // Subsidy (assuming 40-50% subsidy)
    const subsidyRate = 0.4
    const subsidyAmount = totalCost * subsidyRate
    const netCost = totalCost - subsidyAmount

    // Monthly savings
    const billReduction = monthlyBill * 0.85 // 85% savings

    // Payback period
    const emiAmount = 8000 * (systemSize / 5) // Scale with system size
    const monthlyNet = billReduction - emiAmount / 12
    const paybackMonths = netCost / (monthlyNet * 12)

    // 25 year savings
    const annualSavings = billReduction * 12
    const totalSavings25Years = annualSavings * 25 - emiAmount * 25

    return {
      monthlyKwh: Math.round(monthlyKwh),
      systemSize,
      totalCost,
      subsidyAmount,
      netCost,
      monthlyBillAfter: Math.round(monthlyBill * 0.15),
      monthlySavings: Math.round(billReduction),
      emi: Math.round(emiAmount),
      paybackYears: Math.round(paybackMonths / 12),
      annualSavings: Math.round(annualSavings),
      totalSavings25Years: Math.round(totalSavings25Years),
    }
  }, [monthlyBill])

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Input Section */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-700 dark:to-slate-800 rounded-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Calculator size={28} className="text-green-600" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Your Solar Calculator</h2>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
              Monthly Electricity Bill: <span className="text-2xl text-green-600">₹{monthlyBill.toLocaleString()}</span>
            </label>
            <input
              type="range"
              min="500"
              max="50000"
              step="500"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Number(e.target.value))}
              className="w-full h-3 bg-slate-300 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
            <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mt-2">
              <span>₹500</span>
              <span>₹50,000</span>
            </div>
          </div>

          <input
            type="number"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value))}
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
            placeholder="Enter monthly bill"
          />
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { label: "Monthly Consumption", value: `${calculations.monthlyKwh} kWh`, color: "blue" },
            { label: "Recommended System", value: `${calculations.systemSize} kW`, color: "green" },
            {
              label: "Total Installation Cost",
              value: `₹${(calculations.totalCost / 100000).toFixed(1)}L`,
              color: "orange",
            },
            {
              label: "Government Subsidy",
              value: `₹${(calculations.subsidyAmount / 100000).toFixed(1)}L`,
              color: "green",
            },
            {
              label: "Your Cost (After Subsidy)",
              value: `₹${(calculations.netCost / 100000).toFixed(1)}L`,
              color: "red",
            },
            { label: "Monthly EMI", value: `₹${calculations.emi.toLocaleString()}`, color: "purple" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-${item.color}-50 dark:bg-slate-700 rounded-lg p-6 border-l-4 border-${item.color}-600`}
            >
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{item.label}</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Savings Section */}
        <div className="bg-white dark:bg-slate-700 rounded-lg p-8 mb-12 border-2 border-green-200 dark:border-green-900">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Your Potential Savings</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg p-6">
              <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2">Bill After Solar</p>
              <p className="text-3xl font-bold text-green-600">₹{calculations.monthlyBillAfter}</p>
              <p className="text-xs text-green-700 dark:text-green-300 mt-2">Monthly (85% Savings)</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg p-6">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">Annual Savings</p>
              <p className="text-3xl font-bold text-blue-600">₹{calculations.annualSavings.toLocaleString()}</p>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-2">Per Year</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg p-6">
              <p className="text-sm font-semibold text-purple-900 dark:text-purple-100 mb-2">Payback Period</p>
              <p className="text-3xl font-bold text-purple-600">{calculations.paybackYears} years</p>
              <p className="text-xs text-purple-700 dark:text-purple-300 mt-2">Break-even Timeline</p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100 to-green-50 dark:from-green-900 dark:to-slate-800 rounded-lg p-6 border-l-4 border-green-600">
            <p className="text-sm text-green-900 dark:text-green-100 mb-2">💰 Total Savings Over 25 Years</p>
            <p className="text-4xl font-bold text-green-600">₹{calculations.totalSavings25Years.toLocaleString()}</p>
            <p className="text-xs text-green-700 dark:text-green-300 mt-2">After accounting for EMI and maintenance</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-slate-50 dark:bg-slate-700 rounded-lg p-8">
          <p className="text-slate-700 dark:text-slate-300 mb-4 text-lg">
            Ready to start saving? Get a personalized quote based on your consumption.
          </p>
          <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  )
}
