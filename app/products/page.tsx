'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { ProductTabs } from '@/components/product-tabs'
import { FilterSidebar } from '@/components/filter-sidebar'
import { ProductVariantGrid } from '@/components/product-variant-grid'
import {
  loadProducts,
  loadVariants,
  loadAttributes,
  loadProductAttributeMap,
  loadVariantAttributeMap,
  loadImages,
} from '@/lib/data-loader'
import { getAllVariants, getFilterableAttributesForProducts, getVariantAttributeMapForVariants } from '@/lib/product-helpers'
import { applyFilters, sortVariants, type SortOption, type FilterState } from '@/lib/filter-engine'
import type { Product, Variant, Attribute, VariantAttributeMap, ProductAttributeMap } from '@/lib/data-loader'
import type { VariantWithAttributes } from '@/lib/product-helpers'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

function ProductsPageContent() {
  const searchParams = useSearchParams()
  const productIdParam = searchParams.get('productId')
  const [sortOption, setSortOption] = useState<SortOption>('price-low-high')
  const [filters, setFilters] = useState<FilterState>({})

  const [products, setProducts] = useState<Product[]>([])
  const [variants, setVariants] = useState<Variant[]>([])
  const [attributes, setAttributes] = useState<Attribute[]>([])
  const [productAttributeMap, setProductAttributeMap] = useState<ProductAttributeMap[]>([])
  const [variantAttributeMap, setVariantAttributeMap] = useState<VariantAttributeMap[]>([])
  const [images, setImages] = useState<Record<string, string>>({})
  const [siteData, setSiteData] = useState<{ whatsapp?: string }>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const [
          productsData,
          variantsData,
          attributesData,
          productAttributeMapData,
          variantAttributeMapData,
          imagesData,
          siteDataResponse,
        ] = await Promise.all([
          loadProducts(),
          loadVariants(),
          loadAttributes(),
          loadProductAttributeMap(),
          loadVariantAttributeMap(),
          loadImages(),
          fetch('/shree-solar/data/site.json').then((res) => {
            if (!res.ok) throw new Error(`Failed to load site data: ${res.status}`)
            return res.json()
          }),
        ])

        setProducts(productsData)
        setVariants(variantsData)
        setAttributes(attributesData)
        setProductAttributeMap(productAttributeMapData)
        setVariantAttributeMap(variantAttributeMapData)
        setImages(imagesData)
        setSiteData(siteDataResponse)
        setLoading(false)
      } catch (error) {
        console.error('Failed to load product data:', error)
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // Get all active products
  const activeProducts = products.filter((p) => p.isActive)
  
  // Determine which product to show (from URL or default to first product)
  const selectedProductId = productIdParam 
    ? parseInt(productIdParam) 
    : activeProducts[0]?.id || 1

  // Filter products based on selection
  const displayProducts = activeProducts.filter((p) => p.id === selectedProductId)
  const displayProductIds = displayProducts.map((p) => p.id)

  // Get variants for selected product only
  const allVariants = getAllVariants(variants, products)
  const displayVariants = allVariants.filter((v) => v.productId === selectedProductId)
  
  // Get filterable attributes for selected product
  // Uses product-attribute-map with isFilter flag to determine which filters to show
  // Only shows attributes where isFilter: true for the displayed product
  const filterableAttributes = getFilterableAttributesForProducts(
    displayProductIds,
    productAttributeMap,
    attributes
  )
  
  // Get variant IDs for displayed variants
  const displayVariantIds = displayVariants.map((v: VariantWithAttributes) => v.id)
  
  // Filter variantAttributeMap to only include variants being displayed
  // This ensures filter values come only from variants of the selected product
  const variantAttributeMapForDisplay = getVariantAttributeMapForVariants(
    displayVariantIds,
    variantAttributeMap
  )

  // Apply filters
  const filteredVariants = applyFilters(
    displayVariants,
    filters,
    variantAttributeMapForDisplay,
    attributes
  )

  // Apply sorting
  const sortedVariants = sortVariants(
    filteredVariants,
    sortOption,
    variantAttributeMapForDisplay,
    attributes
  )

  const whatsappNumber = siteData.whatsapp || '+919876543210'

  if (loading) {
    return (
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-slate-600 dark:text-slate-400">Loading products...</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <ProductTabs products={products} />
      <div className="bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
            Our Solar Products
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
            Premium quality solar panels, inverters, and energy storage solutions for residential and commercial
            installations.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <FilterSidebar
              attributes={filterableAttributes}
              filters={filters}
              onFiltersChange={setFilters}
              variantAttributeMap={variantAttributeMapForDisplay}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort and Results Count */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Showing {sortedVariants.length} product{sortedVariants.length !== 1 ? 's' : ''}
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm text-slate-600 dark:text-slate-400">
                  Sort by:
                </label>
                <Select value={sortOption} onValueChange={(value) => setSortOption(value as SortOption)}>
                  <SelectTrigger id="sort" className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                    <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                    <SelectItem value="wattage-high">Highest Wattage</SelectItem>
                    <SelectItem value="efficiency-high">Best Efficiency</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Product Grid */}
            <ProductVariantGrid
              variants={sortedVariants}
              attributes={attributes}
              variantAttributeMap={variantAttributeMapForDisplay}
              images={images}
              whatsappNumber={whatsappNumber}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-slate-600 dark:text-slate-400">Loading...</p>
          </div>
        </div>
      </main>
    }>
      <ProductsPageContent />
    </Suspense>
  )
}
