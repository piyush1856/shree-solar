'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { VariantWithAttributes } from '@/lib/product-helpers'
import type { Attribute } from '@/lib/data-loader'
import { getImageUrl } from '@/lib/product-helpers'
import { getAttributesForVariant } from '@/lib/product-helpers'
import type { VariantAttributeMap } from '@/lib/data-loader'
import { useTranslation } from '@/hooks/use-translation'

interface ProductVariantCardProps {
  variant: VariantWithAttributes
  attributes: Attribute[]
  variantAttributeMap: VariantAttributeMap[]
  images: Record<string, string>
  whatsappNumber: string
}

export function ProductVariantCard({
  variant,
  attributes,
  variantAttributeMap,
  images,
  whatsappNumber,
}: ProductVariantCardProps) {
  const { t, td } = useTranslation()
  const variantAttributes = getAttributesForVariant(
    variant.id,
    variantAttributeMap,
    attributes
  )

  // Get key attributes to display (wattage, efficiency, warranty)
  const keyAttributes = ['wattage', 'efficiency', 'warranty', 'capacity', 'cycles', 'hp']
  const displayAttributes = keyAttributes
    .map((code) => variantAttributes[code])
    .filter(Boolean)

  const imageUrl =
    variant.imageIds && variant.imageIds.length > 0
      ? getImageUrl(variant.imageIds[0], images)
      : '/placeholder.jpg'

  const formatPrice = (price: number, currency: string) => {
    if (currency === 'INR') {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
      }).format(price)
    }
    return `${currency} ${price.toLocaleString()}`
  }

  const handleGetQuote = () => {
    const message = encodeURIComponent(
      `Hi, I want a quote for ${variant.displayName}, Price ${formatPrice(variant.price, variant.currency)}.`
    )
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-600">
      {/* Image */}
      <div className="relative w-full h-48 bg-slate-100 dark:bg-slate-800">
        <Image
          src={imageUrl}
          alt={variant.displayName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {variant.stockStatus === 'in-stock' && (
          <Badge
            className="absolute top-2 right-2 bg-green-600 text-white"
            variant="default"
          >
            {t("products.inStock")}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
          {td('variants', variant.id, 'displayName') || variant.displayName}
        </h3>

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-green-600 dark:text-green-400">
            {formatPrice(variant.price, variant.currency)}
          </span>
        </div>

        {/* Key Attributes */}
        {displayAttributes.length > 0 && (
          <div className="space-y-2 mb-4">
            {displayAttributes.map((attr) => (
              <div
                key={attr.attribute.code}
                className="flex justify-between text-sm"
              >
                <span className="text-slate-600 dark:text-slate-400">
                  {td('attributes', attr.attribute.id, 'name') || attr.attribute.name}:
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {attr.value}
                  {attr.attribute.unit && ` ${attr.attribute.unit}`}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Get Quote Button */}
        <Button
          onClick={handleGetQuote}
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          size="default"
        >
          {t("buttons.getQuote")}
        </Button>
      </div>
    </div>
  )
}

