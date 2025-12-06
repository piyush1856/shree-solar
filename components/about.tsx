"use client"

import { useEffect, useState } from "react"
import { loadCompanyData, type CompanyData } from "@/lib/company-loader"
import { useTranslation } from "@/hooks/use-translation"

export function About() {
  const { t } = useTranslation()
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
              <span className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-none">{t("about.title")}</span>
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
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t("about.mission")}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {t("about.missionText")}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t("about.vision")}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {t("about.visionText")}
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
              { stat: "5000+", label: t("about.happyCustomers") },
              { stat: `${new Date().getFullYear() - companyData.about.yearEstablished}+`, label: t("about.yearsExperience") },
              { stat: "15MW+", label: t("about.installedCapacity") },
              { stat: "₹500Cr+", label: t("about.customerSavings") },
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
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">{t("about.whyChoose")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t("about.expertTeam"), desc: t("about.expertTeamDesc") },
              { title: t("about.qualityProducts"), desc: t("about.qualityProductsDesc") },
              { title: t("about.support247"), desc: t("about.support247Desc") },
              { title: t("about.hassleFree"), desc: t("about.hassleFreeDesc") },
              { title: t("about.transparentPricing"), desc: t("about.transparentPricingDesc") },
              { title: t("about.govSubsidies"), desc: t("about.govSubsidiesDesc") },
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
