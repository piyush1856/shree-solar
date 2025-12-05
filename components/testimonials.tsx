import { testimonials } from "@/lib/data"
import { Star } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-12 md:py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
            What Our Customers Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their energy consumption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(null)
                  .map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">"{testimonial.text}"</p>
              <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
