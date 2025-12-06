/**
 * Data Translation Layer
 * 
 * Translates database/JSON content (product names, descriptions, etc.)
 * Works separately from UI translations
 */

import { getCurrentLanguage } from './i18n'

// Translation maps for data entities
let dataTranslations: Record<string, Record<string, any>> = {
  en: {},
  hi: {},
}

// Helper to get basePath
function getBasePath(): string {
  return '/shree-solar'
}

/**
 * Load data translations
 */
async function loadDataTranslations(lang: 'en' | 'hi'): Promise<Record<string, any>> {
  try {
    const basePath = getBasePath()
    const url = `${basePath}/data/data-${lang}.json`
    const response = await fetch(url)
    
    if (!response.ok) {
      console.warn(`Failed to load ${lang} data translations`)
      return {}
    }
    
    return await response.json()
  } catch (error) {
    console.warn(`Error loading ${lang} data translations:`, error)
    return {}
  }
}

/**
 * Initialize data translations
 */
export async function initDataTranslations(): Promise<void> {
  dataTranslations.en = await loadDataTranslations('en')
  dataTranslations.hi = await loadDataTranslations('hi')
  
  console.log('Data translations loaded:', {
    en: Object.keys(dataTranslations.en).length,
    hi: Object.keys(dataTranslations.hi).length,
  })
}

/**
 * Translate a data field
 * 
 * Usage:
 * td('products', productId, 'name') → Gets translated product name
 * td('attributes', attrId, 'name') → Gets translated attribute name
 * 
 * @param entity - Entity type (e.g., 'products', 'attributes')
 * @param id - Entity ID
 * @param field - Field to translate
 * @returns Translated value or original if not found
 */
export function td(entity: string, id: number | string, field: string): string {
  const lang = getCurrentLanguage()
  const key = `${entity}.${id}.${field}`
  
  // Try current language
  if (dataTranslations[lang]?.[entity]?.[id]?.[field]) {
    return dataTranslations[lang][entity][id][field]
  }
  
  // Fallback to English
  if (dataTranslations.en?.[entity]?.[id]?.[field]) {
    return dataTranslations.en[entity][id][field]
  }
  
  // Return empty string if not found (caller should use original data)
  return ''
}

/**
 * Translate an entire object
 * 
 * Usage:
 * translateObject('products', product) → Returns product with translated fields
 * 
 * @param entity - Entity type
 * @param obj - Object to translate
 * @param fields - Fields to translate (optional, defaults to common fields)
 * @returns New object with translated fields
 */
export function translateObject<T extends { id: number | string }>(
  entity: string,
  obj: T,
  fields: string[] = ['name', 'shortDescription', 'description']
): T {
  const translated = { ...obj }
  
  fields.forEach((field) => {
    const translatedValue = td(entity, obj.id, field)
    if (translatedValue && field in obj) {
      ;(translated as any)[field] = translatedValue
    }
  })
  
  return translated
}

/**
 * Translate an array of objects
 */
export function translateArray<T extends { id: number | string }>(
  entity: string,
  array: T[],
  fields?: string[]
): T[] {
  return array.map((item) => translateObject(entity, item, fields))
}

/**
 * Check if translations are loaded
 */
export function isDataTranslationsReady(): boolean {
  return Object.keys(dataTranslations.en).length > 0 || Object.keys(dataTranslations.hi).length > 0
}

