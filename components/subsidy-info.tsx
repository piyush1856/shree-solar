export function SubsidyInfo() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-800 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 text-balance">
            Government Subsidies & Schemes
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
            Explore available government schemes to reduce your solar installation costs.
          </p>
        </div>
      </div>

      {/* Schemes Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Pradhan Mantri Residential Rooftop Solar Scheme",
                subsidy: "₹3,00,000 (3kW)",
                description:
                  "Central government scheme offering 40-60% subsidy on residential rooftop solar installations.",
                eligibility: "Homeowners with roof space",
              },
              {
                name: "Net Metering",
                subsidy: "Sell excess power",
                description: "Feed excess solar power back to grid and get compensated. Available in most states.",
                eligibility: "Grid-connected systems",
              },
              {
                name: "State Government Schemes",
                subsidy: "Up to 70%",
                description: "Various states offer additional subsidies on top of central schemes.",
                eligibility: "Check your state",
              },
              {
                name: "SECI Scheme",
                subsidy: "₹90,000",
                description: "Solar Energy Corporation of India scheme with attractive financing options.",
                eligibility: "All residential units",
              },
            ].map((scheme, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{scheme.name}</h3>
                <div className="text-green-600 font-bold text-2xl mb-4">{scheme.subsidy}</div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{scheme.description}</p>
                <div className="bg-slate-50 dark:bg-slate-800 rounded p-4">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    ✓ Eligibility: {scheme.eligibility}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Subsidy FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: "How much subsidy can I get?",
                a: "Most residential customers get 40-60% subsidy depending on their state and system size. Some states offer up to 70% subsidy.",
              },
              {
                q: "What is net metering?",
                a: "Net metering allows you to send excess solar power back to the grid and get compensated for it. This significantly increases your savings.",
              },
              {
                q: "How do I apply for subsidies?",
                a: "We handle all subsidy documentation and applications. You just need to provide basic details and roof access.",
              },
              {
                q: "What are the eligibility criteria?",
                a: "Most residential customers are eligible. We check your specific eligibility based on your location and property details.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-700 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">{item.q}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
