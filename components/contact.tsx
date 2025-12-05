"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { siteData } from "@/lib/data"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-800 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 text-balance">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
            Have questions? Our team is here to help. Contact us for a free consultation.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white dark:bg-slate-700 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-100 rounded-lg">
                  Thanks for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-600 text-slate-900 dark:text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-600 text-slate-900 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-600 text-slate-900 dark:text-white"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-600 text-slate-900 dark:text-white resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone size={24} className="text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Phone</h3>
                      <a href={`tel:${siteData.phone}`} className="text-green-600 hover:underline">
                        {siteData.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail size={24} className="text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Email</h3>
                      <a href={`mailto:${siteData.email}`} className="text-green-600 hover:underline">
                        {siteData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Address</h3>
                      <p className="text-slate-600 dark:text-slate-300">{siteData.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-slate-200 dark:bg-slate-600 rounded-lg h-80 flex items-center justify-center">
                <p className="text-slate-600 dark:text-slate-400">📍 Map coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
