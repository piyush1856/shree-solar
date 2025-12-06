"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { loadCompanyData, type CompanyData } from "@/lib/company-loader"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

const getSocialIcon = (type: string) => {
  const icons: Record<string, any> = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
    twitter: Twitter,
    youtube: Youtube,
  }
  return icons[type] || null
}

export function Footer() {
  const [companyData, setCompanyData] = useState<CompanyData | null>(null)

  useEffect(() => {
    loadCompanyData().then(setCompanyData).catch(console.error)
  }, [])

  if (!companyData) return null

  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {companyData.logo && (
                <img
                  src={companyData.logo.icon}
                  alt={companyData.logo.alt}
                  className="w-12 h-12 drop-shadow-md"
                />
              )}
              <div className="flex flex-col -space-y-1">
                <span className="text-2xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                  {companyData.brandName.split(' ')[0]}
                </span>
                <span className="text-xl font-bold tracking-wide leading-none pl-0.5 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  {companyData.brandName.split(' ')[1]}
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm">{companyData.about.shortDescription}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-green-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-green-400">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-green-400">
                  Calculator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/services" className="hover:text-green-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-green-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-green-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/subsidy" className="hover:text-green-400">
                  Subsidies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href={`tel:${companyData.contact.phone}`} className="hover:text-green-400">
                  {companyData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-green-400">
                  {companyData.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>{companyData.address.fullAddress}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {companyData.brandName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {companyData.socialMedia.map((social) => {
              const Icon = getSocialIcon(social.type)
              if (!Icon) return null
              return (
                <a
                  key={social.type}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-400 transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
