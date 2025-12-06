'use client'

import { ProductVariantCard } from './product-variant-card'
import type { VariantWithAttributes } from '@/lib/product-helpers'
import type { Attribute, VariantAttributeMap } from '@/lib/data-loader'

interface ProductVariantGridProps {
  variants: VariantWithAttributes[]
  attributes: Attribute[]
  variantAttributeMap: VariantAttributeMap[]
  images: Record<string, string>
  whatsappNumber: string
}

export function ProductVariantGrid({
  variants,
  attributes,
  variantAttributeMap,
  images,
  whatsappNumber,
}: ProductVariantGridProps) {
  if (variants.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600 dark:text-slate-400">
          No products found matching your filters.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {variants.map((variant) => (
        <ProductVariantCard
          key={variant.id}
          variant={variant}
          attributes={attributes}
          variantAttributeMap={variantAttributeMap}
          images={images}
          whatsappNumber={whatsappNumber}
        />
      ))}
    </div>
  )
}

