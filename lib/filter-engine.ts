import type { VariantWithAttributes } from './product-helpers'
import type { VariantAttributeMap, Attribute } from './data-loader'

export type SortOption =
  | 'price-low-high'
  | 'price-high-low'
  | 'wattage-high'
  | 'efficiency-high'

export interface FilterState {
  [attributeCode: string]: {
    min?: number
    max?: number
    values?: string[]
  }
}

/**
 * Apply filters to variants based on attribute mappings
 */
export function applyFilters(
  variants: VariantWithAttributes[],
  filters: FilterState,
  variantAttributeMap: VariantAttributeMap[],
  attributes: Attribute[]
): VariantWithAttributes[] {
  if (Object.keys(filters).length === 0) return variants

  return variants.filter((variant) => {
    const variantAttributes = variantAttributeMap.filter(
      (m) => m.variantId === variant.id
    )

    return Object.entries(filters).every(([attributeCode, filterValue]) => {
      const attribute = attributes.find((a) => a.code === attributeCode)
      if (!attribute) return true

      const variantAttr = variantAttributes.find(
        (m) => m.attributeId === attribute.id
      )
      if (!variantAttr) return false

      const value = variantAttr.value

      // Range filter (for numbers)
      if (filterValue.min !== undefined || filterValue.max !== undefined) {
        if (typeof value !== 'number') return false
        if (filterValue.min !== undefined && value < filterValue.min) return false
        if (filterValue.max !== undefined && value > filterValue.max) return false
        return true
      }

      // Value filter (for strings/arrays)
      if (filterValue.values && filterValue.values.length > 0) {
        return filterValue.values.includes(String(value))
      }

      return true
    })
  })
}

/**
 * Sort variants based on sort option
 */
export function sortVariants(
  variants: VariantWithAttributes[],
  sortOption: SortOption,
  variantAttributeMap: VariantAttributeMap[],
  attributes: Attribute[]
): VariantWithAttributes[] {
  const sorted = [...variants]

  switch (sortOption) {
    case 'price-low-high':
      return sorted.sort((a, b) => a.price - b.price)

    case 'price-high-low':
      return sorted.sort((a, b) => b.price - a.price)

    case 'wattage-high': {
      const wattageAttr = attributes.find((a) => a.code === 'wattage')
      if (!wattageAttr) return sorted

      return sorted.sort((a, b) => {
        const aWattage = variantAttributeMap.find(
          (m) => m.variantId === a.id && m.attributeId === wattageAttr.id
        )?.value as number || 0
        const bWattage = variantAttributeMap.find(
          (m) => m.variantId === b.id && m.attributeId === wattageAttr.id
        )?.value as number || 0
        return bWattage - aWattage
      })
    }

    case 'efficiency-high': {
      const efficiencyAttr = attributes.find((a) => a.code === 'efficiency')
      if (!efficiencyAttr) return sorted

      return sorted.sort((a, b) => {
        const aEff = variantAttributeMap.find(
          (m) => m.variantId === a.id && m.attributeId === efficiencyAttr.id
        )?.value as number || 0
        const bEff = variantAttributeMap.find(
          (m) => m.variantId === b.id && m.attributeId === efficiencyAttr.id
        )?.value as number || 0
        return bEff - aEff
      })
    }

    default:
      return sorted
  }
}

