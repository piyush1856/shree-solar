import type {
  Product,
  Variant,
  Attribute,
  VariantAttributeMap,
  ProductAttributeMap,
} from './data-loader'

export interface VariantWithAttributes extends Variant {
  product?: Product
  attributes?: Record<string, number | string>
}

/**
 * Get all variants for active products
 */
export function getAllVariants(
  variants: Variant[],
  products: Product[]
): VariantWithAttributes[] {
  const activeProductIds = new Set(
    products.filter((p) => p.isActive).map((p) => p.id)
  )

  return variants
    .filter((v) => activeProductIds.has(v.productId) && v.isActive)
    .map((variant) => ({
      ...variant,
      product: products.find((p) => p.id === variant.productId),
    }))
}

/**
 * Get attributes for a specific variant
 */
export function getAttributesForVariant(
  variantId: number,
  variantAttributeMap: VariantAttributeMap[],
  attributes: Attribute[]
): Record<string, { value: number | string; attribute: Attribute }> {
  const variantAttributes = variantAttributeMap.filter(
    (m) => m.variantId === variantId
  )

  const result: Record<string, { value: number | string; attribute: Attribute }> = {}

  variantAttributes.forEach((map) => {
    const attribute = attributes.find((a) => a.id === map.attributeId)
    if (attribute) {
      result[attribute.code] = {
        value: map.value,
        attribute,
      }
    }
  })

  return result
}

/**
 * Get filterable attributes for products
 * Uses product-attribute-map with isFilter flag to determine which attributes should be shown as filters
 * Only returns attributes that are mapped to products AND have isFilter: true
 */
export function getFilterableAttributesForProducts(
  productIds: number[],
  productAttributeMap: ProductAttributeMap[],
  attributes: Attribute[]
): Attribute[] {
  const productIdSet = new Set(productIds)

  // Get attribute IDs that are mapped as FILTERS (isFilter: true) for these products
  const relevantAttributeIds = new Set(
    productAttributeMap
      .filter((m) => productIdSet.has(m.productId) && m.isFilter === true)
      .map((m) => m.attributeId)
  )

  // Return only filterable attributes that are mapped as filters for these products
  return attributes.filter(
    (a) => a.filterable && relevantAttributeIds.has(a.id)
  )
}

/**
 * Get variant attribute map filtered by variant IDs
 * Useful for getting only variant attributes for displayed variants
 */
export function getVariantAttributeMapForVariants(
  variantIds: number[],
  variantAttributeMap: VariantAttributeMap[]
): VariantAttributeMap[] {
  const variantIdSet = new Set(variantIds)
  return variantAttributeMap.filter((m) => variantIdSet.has(m.variantId))
}

/**
 * Get image URL from imageId
 */
export function getImageUrl(imageId: string, images: Record<string, string>): string {
  return images[imageId] || '/placeholder.jpg'
}

