import Link from "next/link"

export function CTA() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-green-600 to-green-700 dark:from-green-800 dark:to-green-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Ready to Go Solar?</h2>
        <p className="text-lg text-green-50 mb-8 max-w-2xl mx-auto">
          Join thousands of Indians saving money and the planet with solar energy today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors font-semibold"
          >
            Get Free Consultation
          </Link>
          <Link
            href="/calculator"
            className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold"
          >
            Calculate Savings
          </Link>
        </div>
      </div>
    </section>
  )
}
