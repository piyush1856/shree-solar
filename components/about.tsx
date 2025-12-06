"use client"

import { useEffect, useState } from "react"
import { loadCompanyData, type CompanyData } from "@/lib/company-loader"

export function About() {
  const [companyData, setCompanyData] = useState<CompanyData | null>(null)

  useEffect(() => {
    loadCompanyData().then(setCompanyData).catch(console.error)
  }, [])

  if (!companyData) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-slate-600 dark:text-slate-400">Loading...</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-800 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-2">
              <span className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-none">About</span>
              <img 
                src={companyData.logo.horizontal} 
                alt={companyData.logo.alt}
                className="h-16 md:h-20 mt-1.5"
              />
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
              {companyData.about.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                To make solar energy accessible and affordable for every Indian home and business, enabling sustainable
                living and significant cost savings.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                To be the most trusted solar solution provider in India, transforming the energy landscape one
                installation at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: "5000+", label: "Happy Customers" },
              { stat: `${new Date().getFullYear() - companyData.about.yearEstablished}+`, label: "Years Experience" },
              { stat: "15MW+", label: "Installed Capacity" },
              { stat: "₹500Cr+", label: "Customer Savings" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{item.stat}</p>
                <p className="text-slate-600 dark:text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Expert Team", desc: "Certified engineers with 10+ years experience" },
              { title: "Quality Products", desc: "Premium components with extended warranties" },
              { title: "24/7 Support", desc: "Always here when you need us" },
              { title: "Hassle-Free", desc: "We handle everything from design to maintenance" },
              { title: "Transparent Pricing", desc: "No hidden costs, competitive rates" },
              { title: "Government Subsidies", desc: "We help you maximize available schemes" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
