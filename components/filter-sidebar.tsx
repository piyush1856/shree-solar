'use client'

import { useState, useEffect } from 'react'
import type { Attribute } from '@/lib/data-loader'
import type { FilterState } from '@/lib/filter-engine'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/hooks/use-translation'

interface FilterSidebarProps {
  attributes: Attribute[]
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  variantAttributeMap: Array<{
    variantId: number
    attributeId: number
    value: number | string
  }>
}

export function FilterSidebar({
  attributes,
  filters,
  onFiltersChange,
  variantAttributeMap,
}: FilterSidebarProps) {
  const { t, td } = useTranslation()
  const [localFilters, setLocalFilters] = useState<FilterState>(filters)

  useEffect(() => {
    setLocalFilters(filters)
  }, [filters])

  const handleFilterChange = (attributeCode: string, value: any) => {
    const newFilters = {
      ...localFilters,
      [attributeCode]: value,
    }
    setLocalFilters(newFilters)
    // Apply filters immediately
    onFiltersChange(newFilters)
  }

  const handleApplyFilters = () => {
    onFiltersChange(localFilters)
  }

  const handleClearFilters = () => {
    const cleared: FilterState = {}
    setLocalFilters(cleared)
    onFiltersChange(cleared)
  }

  const getAttributeRange = (attributeId: number) => {
    const values = variantAttributeMap
      .filter((m) => m.attributeId === attributeId)
      .map((m) => Number(m.value))
      .filter((v) => !isNaN(v))

    if (values.length === 0) return null
    return [Math.min(...values), Math.max(...values)]
  }

  const getAttributeValues = (attributeId: number): string[] => {
    const values = new Set(
      variantAttributeMap
        .filter((m) => m.attributeId === attributeId)
        .map((m) => String(m.value))
    )
    return Array.from(values).sort()
  }

  // Filter attributes to only show those that have actual variant data
  const attributesWithData = attributes.filter((attribute) => {
    if (attribute.type === 'number') {
      const range = getAttributeRange(attribute.id)
      return range !== null && range[0] !== range[1] // Only show if there's a valid range
    } else {
      const values = getAttributeValues(attribute.id)
      return values.length > 0 // Only show if there are values
    }
  })

  if (attributesWithData.length === 0) {
    return (
      <aside className="w-full md:w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 p-6">
        <div className="text-sm text-slate-600 dark:text-slate-400">
          {t("filters.noFilters")}
        </div>
      </aside>
    )
  }

  return (
    <aside className="w-full md:w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          {t("filters.title")}
        </h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClearFilters}
          className="text-xs"
        >
          {t("filters.clear")}
        </Button>
      </div>

      <div className="space-y-6">
        {attributesWithData.map((attribute) => {
          if (attribute.type === 'number') {
            const range = getAttributeRange(attribute.id)
            if (!range) return null // Skip if no valid range
            
            const [min, max] = range
            const currentFilter = localFilters[attribute.code] || {}
            const currentMin = currentFilter.min ?? min
            const currentMax = currentFilter.max ?? max

            return (
              <div key={attribute.id}>
                <Label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                  {td('attributes', attribute.id, 'name') || attribute.name} ({attribute.unit})
                </Label>
                <div className="px-2">
                  <Slider
                    min={min}
                    max={max}
                    step={attribute.code === 'efficiency' ? 0.1 : 1}
                    value={[currentMin, currentMax]}
                    onValueChange={([newMin, newMax]) => {
                      handleFilterChange(attribute.code, {
                        min: newMin,
                        max: newMax,
                      })
                    }}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mt-2">
                  <span>{currentMin}{attribute.unit}</span>
                  <span>{currentMax}{attribute.unit}</span>
                </div>
              </div>
            )
          } else {
            // String type - use checkboxes
            const values = getAttributeValues(attribute.id)
            if (values.length === 0) return null // Skip if no values
            
            const currentValues = localFilters[attribute.code]?.values || []

            return (
              <div key={attribute.id}>
                <Label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3 block">
                  {td('attributes', attribute.id, 'name') || attribute.name}
                </Label>
                <div className="space-y-2">
                  {values.map((value) => (
                    <div key={value} className="flex items-center space-x-2">
                      <Checkbox
                        id={`${attribute.code}-${value}`}
                        checked={currentValues.includes(value)}
                        onCheckedChange={(checked) => {
                          const newValues = checked
                            ? [...currentValues, value]
                            : currentValues.filter((v) => v !== value)
                          handleFilterChange(attribute.code, {
                            values: newValues,
                          })
                        }}
                      />
                      <Label
                        htmlFor={`${attribute.code}-${value}`}
                        className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer"
                      >
                        {value}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            )
          }
        })}
      </div>

    </aside>
  )
}

