'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import type { Product } from '@/lib/data-loader'

interface ProductTabsProps {
  products: Product[]
}

export function ProductTabs({ products }: ProductTabsProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentProductId = searchParams.get('productId')

  if (pathname !== '/products') return null

  const activeProducts = products.filter((p) => p.isActive)

  // Use first product as default if none selected
  const activeProductId = currentProductId || (activeProducts[0]?.id.toString() || '')

  if (activeProducts.length === 0) return null

  return (
    <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex gap-1 overflow-x-auto">
          {activeProducts.map((product) => {
            const isActive = activeProductId === product.id.toString()
            return (
              <Link
                key={product.id}
                href={`/products?productId=${product.id}`}
                className={cn(
                  'px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors',
                  isActive
                    ? 'border-green-600 text-green-600 dark:text-green-400'
                    : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                )}
              >
                {product.name}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

