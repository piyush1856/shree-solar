"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { loadCompanyData, type CompanyData } from "@/lib/company-loader"
import { useTranslation } from "@/hooks/use-translation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [companyData, setCompanyData] = useState<CompanyData | null>(null)
  const { t } = useTranslation()

  useEffect(() => {
    loadCompanyData().then(setCompanyData).catch(console.error)
  }, [])

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/products", label: t("nav.products") },
    { href: "/packages", label: t("nav.packages") },
    { href: "/calculator", label: t("nav.calculator") },
    { href: "/services", label: t("nav.services") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/about", label: t("nav.about") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {companyData?.logo && (
              <div className="relative">
                <img
                  src={companyData.logo.icon}
                  alt={companyData.logo.alt}
                  className="w-12 h-12 transition-all duration-300 group-hover:scale-110 drop-shadow-md"
                />
              </div>
            )}
            <div className="hidden sm:flex flex-col -space-y-1">
              <span className="text-2xl font-extrabold tracking-tight leading-none">
                <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 bg-clip-text text-transparent">
                  {companyData?.brandName?.split(' ')[0] || "Shree"}
                </span>
              </span>
              <span className="text-xl font-bold tracking-wide leading-none pl-0.5">
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 dark:from-amber-400 dark:via-orange-400 dark:to-yellow-400 bg-clip-text text-transparent">
                  {companyData?.brandName?.split(' ')[1] || "Solar"}
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={`tel:${companyData?.contact.phone}`}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              {t("nav.callNow")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-700">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-green-50 dark:hover:bg-slate-800"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${companyData?.contact.phone}`}
              className="block mx-4 mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-center"
            >
              {t("nav.callNow")}
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
