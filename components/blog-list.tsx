import { blogs } from "@/lib/data"
import { Calendar, Tag } from "lucide-react"

export function BlogList() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900"></div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-xs">
                  <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                    <Calendar size={14} />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <Tag size={14} />
                    <span>{blog.category}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">{blog.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">{blog.excerpt}</p>
                <button className="text-green-600 hover:text-green-700 font-semibold text-sm">Read More →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
