import { ProjectsList } from "@/components/projects-list"

export const metadata = {
  title: "Our Projects | Shree Solar",
  description: "Browse our completed solar installations. See real projects and customer results.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
            Our Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
            Explore our portfolio of completed solar installations across India.
          </p>
        </div>
      </div>
      <ProjectsList />
    </main>
  )
}
