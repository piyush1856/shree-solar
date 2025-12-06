"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function Hero() {
  const { t } = useTranslation()
  
  return (
    <div className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 md:py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">
              {t("hero.badge")}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 text-balance leading-tight">
            {t("hero.title")}
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 text-balance">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculator"
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2"
            >
              {t("hero.calculateSavings")} <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-slate-800 transition-colors font-semibold"
            >
              {t("hero.freeConsultation")}
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600">5000+</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t("about.happyCustomers")}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600">10+</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t("about.yearsExperience")}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600">25</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t("hero.yearWarranty")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
