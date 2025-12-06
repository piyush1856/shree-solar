/**
 * Bilingual Language System (English ↔ Hindi)
 * 
 * Features:
 * - Runtime language switching with localStorage persistence
 * - Automatic fallback: Hindi → English → Raw key
 * - No crashes on missing keys
 * - Works on static sites (GitHub Pages compatible)
 */

export type Language = 'en' | 'hi'

const STORAGE_KEY = 'site_language'
const DEFAULT_LANGUAGE: Language = 'en'

// In-memory cache for translations
let currentLanguage: Language = DEFAULT_LANGUAGE
let translations: Record<string, Record<string, string>> = {
  en: {},
  hi: {},
}

// Helper to get basePath for static hosting
function getBasePath(): string {
  return '/shree-solar'
}

/**
 * Load translation file for a specific language
 */
async function loadTranslations(lang: Language): Promise<Record<string, string>> {
  try {
    const basePath = getBasePath()
    const url = `${basePath}/data/lang-${lang}.json`
    const response = await fetch(url)
    
    if (!response.ok) {
      console.warn(`Failed to load ${lang} translations, using fallback`)
      return {}
    }
    
    return await response.json()
  } catch (error) {
    console.warn(`Error loading ${lang} translations:`, error)
    return {}
  }
}

/**
 * Initialize the translation system
 * - Reads language from localStorage
 * - Loads both English and selected language translations
 * - Falls back to English if invalid language
 */
export async function initI18n(): Promise<Language> {
  // Read from localStorage (only on client side)
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'hi') {
      currentLanguage = stored
    }
  }
  
  console.log('Initializing i18n, current language:', currentLanguage)
  
  // Load English (always needed for fallback)
  translations.en = await loadTranslations('en')
  console.log('English translations loaded:', Object.keys(translations.en).length, 'keys')
  
  // Load Hindi if needed
  if (currentLanguage === 'hi') {
    translations.hi = await loadTranslations('hi')
    console.log('Hindi translations loaded:', Object.keys(translations.hi).length, 'keys')
  }
  
  return currentLanguage
}

/**
 * Get current language
 */
export function getCurrentLanguage(): Language {
  return currentLanguage
}

/**
 * Set language and persist to localStorage
 * @param lang - Language to set ('en' or 'hi')
 * @returns Promise that resolves when new translations are loaded
 */
export async function setLanguage(lang: Language): Promise<void> {
  console.log('Setting language to:', lang)
  currentLanguage = lang
  
  // Persist to localStorage (only on client side)
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, lang)
  }
  
  // Load new language translations if not already loaded
  if (lang === 'hi' && Object.keys(translations.hi).length === 0) {
    translations.hi = await loadTranslations('hi')
    console.log('Hindi translations loaded:', Object.keys(translations.hi).length, 'keys')
  }
  
  console.log('Language set complete. Current language:', currentLanguage)
}

/**
 * Translate a key to current language
 * 
 * Fallback chain:
 * 1. Try current language (e.g., Hindi)
 * 2. Fall back to English
 * 3. Return the key itself if not found
 * 
 * @param key - Translation key (e.g., "nav.home")
 * @returns Translated string
 */
export function t(key: string): string {
  // Try current language first
  if (translations[currentLanguage]?.[key]) {
    return translations[currentLanguage][key]
  }
  
  // Fallback to English
  if (translations.en?.[key]) {
    return translations.en[key]
  }
  
  // Last resort: return the key itself
  return key
}

/**
 * Toggle between English and Hindi
 * @returns Promise that resolves with new language
 */
export async function toggleLanguage(): Promise<Language> {
  const newLang: Language = currentLanguage === 'en' ? 'hi' : 'en'
  await setLanguage(newLang)
  return newLang
}

