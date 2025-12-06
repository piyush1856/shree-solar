'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import type { Product } from '@/lib/data-loader'

interface CategoryTabsProps {
  products: Product[]
}

export function CategoryTabs({ products }: CategoryTabsProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category') || ''

  if (pathname !== '/products') return null

  // Group products by category column and get unique categories
  const categories = Array.from(
    new Set(products.filter((p) => p.isActive).map((p) => p.category))
  )
    .filter(Boolean) // Remove empty categories
    .map((category) => {
      // Format category slug to label (e.g., "solar-panel" -> "Solar Panel")
      const label = category
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      return { slug: category, label }
    })
    .sort((a, b) => a.label.localeCompare(b.label)) // Sort alphabetically

  // Use first category as default if none selected
  const activeCategory = currentCategory || (categories[0]?.slug || '')

  if (categories.length === 0) return null

  return (
    <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex gap-1 overflow-x-auto">
          {categories.map((category) => {
            const isActive = activeCategory === category.slug
            return (
              <Link
                key={category.slug}
                href={`/products?category=${category.slug}`}
                className={cn(
                  'px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors',
                  isActive
                    ? 'border-green-600 text-green-600 dark:text-green-400'
                    : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                )}
              >
                {category.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

