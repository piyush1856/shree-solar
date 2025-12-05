import { BlogList } from "@/components/blog-list"

export const metadata = {
  title: "Blog | SolarMax",
  description: "Latest insights on solar energy, government schemes, and renewable energy trends.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-balance">Blog</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
            Latest articles and insights on solar energy and renewable solutions.
          </p>
        </div>
      </div>
      <BlogList />
    </main>
  )
}
