"use client"

import { useState } from "react"
import { faqs } from "@/lib/data"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-12 md:py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-slate-200 dark:border-slate-600 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
              >
                <span className="font-semibold text-left text-slate-900 dark:text-white">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-slate-600 dark:text-slate-400 transition-transform ${
                    open === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === faq.id && (
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-700 border-t border-slate-200 dark:border-slate-600">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
