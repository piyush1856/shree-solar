import Link from "next/link"
import { siteData } from "@/lib/data"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span>☀️</span>
              </div>
              <h3 className="font-bold text-lg">{siteData.name}</h3>
            </div>
            <p className="text-slate-400 text-sm">{siteData.description}</p>
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
                <a href={`tel:${siteData.phone}`} className="hover:text-green-400">
                  {siteData.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href={`mailto:${siteData.email}`} className="hover:text-green-400">
                  {siteData.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>{siteData.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-800 pt-8 flex justify-between items-center">
          <p className="text-sm text-slate-400">© 2025 {siteData.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href={siteData.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400"
            >
              <Facebook size={20} />
            </a>
            <a
              href={siteData.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400"
            >
              <Instagram size={20} />
            </a>
            <a
              href={siteData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
