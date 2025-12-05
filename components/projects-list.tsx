import { projects } from "@/lib/data"

export function ProjectsList() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 flex items-center justify-center text-6xl">
                ☀️
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">📍 {project.location}</p>
                <div className="space-y-2 mb-6 pb-6 border-b border-slate-200 dark:border-slate-600">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">System Size</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{project.systemSize}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Annual Savings</span>
                    <span className="font-semibold text-green-600">{project.savings}</span>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
