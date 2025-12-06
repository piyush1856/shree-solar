"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { loadCompanyData, type CompanyData } from "@/lib/company-loader"
import { useTranslation } from "@/hooks/use-translation"

export function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [companyData, setCompanyData] = useState<CompanyData | null>(null)

  useEffect(() => {
    loadCompanyData().then(setCompanyData).catch(console.error)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

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
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 text-balance">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
            {t("contact.subtitle")}
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white dark:bg-slate-700 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t("contact.sendMessage")}</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-100 rounded-lg">
                  {t("contact.successMessage")}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{t("contact.name")}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-600 text-slate-900 dark:text-white"
                    placeholder={t("contact.namePlaceholder")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{t("contact.email")}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-600 text-slate-900 dark:text-white"
                    placeholder={t("contact.emailPlaceholder")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{t("contact.phone")}</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-600 text-slate-900 dark:text-white"
                    placeholder={t("contact.phonePlaceholder")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{t("contact.message")}</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-600 text-slate-900 dark:text-white resize-none"
                    placeholder={t("contact.messagePlaceholder")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  {t("buttons.sendMessage")}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t("contact.contactInfo")}</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone size={24} className="text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">{t("contact.phone")}</h3>
                      <a href={`tel:${companyData.contact.phone}`} className="text-green-600 hover:underline">
                        {companyData.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail size={24} className="text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">{t("contact.email")}</h3>
                      <a href={`mailto:${companyData.contact.email}`} className="text-green-600 hover:underline">
                        {companyData.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">{t("contact.address")}</h3>
                      <p className="text-slate-600 dark:text-slate-300">{companyData.address.fullAddress}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-slate-200 dark:bg-slate-600 rounded-lg overflow-hidden h-80">
                <iframe
                  src={companyData.map.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Solar Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
