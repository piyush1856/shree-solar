import { services } from "@/lib/data"

export function ServicesList() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-700 rounded-lg p-8 hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-600"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { num: "1", title: "Consultation", desc: "Free assessment of your needs" },
              { num: "2", title: "Survey", desc: "Site evaluation & measurements" },
              { num: "3", title: "Installation", desc: "Professional setup & testing" },
              { num: "4", title: "Support", desc: "24/7 customer care & maintenance" },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-center">{step.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 text-center mt-2">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div
                    className="absolute top-8 -right-2 hidden md:block w-4 h-0.5 bg-green-600"
                    style={{ width: "calc(100% + 8px)" }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
