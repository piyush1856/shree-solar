// Data loader utilities - easily replaceable with API calls later

export interface Product {
  id: number
  name: string
  slug: string
  shortDescription: string
  defaultVariantId: number
  isActive: boolean
}

export interface Variant {
  id: number
  productId: number
  displayName: string
  price: number
  currency: string
  stockStatus: string
  imageIds: string[]
  isActive: boolean
}

export interface Attribute {
  id: number
  code: string
  name: string
  unit: string
  type: string
  filterable: boolean
}

export interface ProductAttributeMap {
  productId: number
  attributeId: number
  isFilter: boolean
}

export interface VariantAttributeMap {
  variantId: number
  attributeId: number
  value: number | string
}

export interface ImagesMap {
  [key: string]: string
}

// Helper to get the correct base path
// Since basePath is configured in next.config.mjs, we need to use it
function getBasePath(): string {
  // Always use basePath since it's configured in next.config.mjs
  // In development, Next.js still applies basePath
  return '/shree-solar'
}

// Load functions - use fetch for static hosting compatibility
export async function loadProducts(): Promise<Product[]> {
  const basePath = getBasePath()
  const url = `${basePath}/data/products.json`
  const response = await fetch(url)
  if (!response.ok) {
    console.error(`Failed to load products from ${url}`, response.status, response.statusText)
    throw new Error(`Failed to load products: ${response.status} ${response.statusText}`)
  }
  return response.json()
}

export async function loadVariants(): Promise<Variant[]> {
  const basePath = getBasePath()
  const url = `${basePath}/data/variants.json`
  const response = await fetch(url)
  if (!response.ok) {
    console.error(`Failed to load variants from ${url}`, response.status, response.statusText)
    throw new Error(`Failed to load variants: ${response.status} ${response.statusText}`)
  }
  return response.json()
}

export async function loadAttributes(): Promise<Attribute[]> {
  const basePath = getBasePath()
  const url = `${basePath}/data/attributes.json`
  const response = await fetch(url)
  if (!response.ok) {
    console.error(`Failed to load attributes from ${url}`, response.status, response.statusText)
    throw new Error(`Failed to load attributes: ${response.status} ${response.statusText}`)
  }
  return response.json()
}

export async function loadProductAttributeMap(): Promise<ProductAttributeMap[]> {
  const basePath = getBasePath()
  const url = `${basePath}/data/product-attribute-map.json`
  const response = await fetch(url)
  if (!response.ok) {
    console.error(`Failed to load product-attribute-map from ${url}`, response.status, response.statusText)
    throw new Error(`Failed to load product-attribute-map: ${response.status} ${response.statusText}`)
  }
  return response.json()
}

export async function loadVariantAttributeMap(): Promise<VariantAttributeMap[]> {
  const basePath = getBasePath()
  const url = `${basePath}/data/variant-attribute-map.json`
  const response = await fetch(url)
  if (!response.ok) {
    console.error(`Failed to load variant-attribute-map from ${url}`, response.status, response.statusText)
    throw new Error(`Failed to load variant-attribute-map: ${response.status} ${response.statusText}`)
  }
  return response.json()
}

export async function loadImages(): Promise<ImagesMap> {
  const basePath = getBasePath()
  const url = `${basePath}/data/images.json`
  const response = await fetch(url)
  if (!response.ok) {
    console.error(`Failed to load images from ${url}`, response.status, response.statusText)
    throw new Error(`Failed to load images: ${response.status} ${response.statusText}`)
  }
  return response.json()
}

