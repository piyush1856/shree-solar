'use client'

import { useState, useEffect, useCallback } from 'react'
import { t as translate, initI18n, getCurrentLanguage, type Language } from '@/lib/i18n'
import { td as translateData, initDataTranslations } from '@/lib/data-translator'

/**
 * React hook for using translations in components
 * 
 * Automatically re-renders when language changes
 * 
 * Usage:
 * const { t, language } = useTranslation()
 * return <h1>{t('nav.home')}</h1>
 */
export function useTranslation() {
  const [language, setLanguage] = useState<Language>('en')
  const [isReady, setIsReady] = useState(false)
  const [, forceUpdate] = useState({})

  // Force component re-render
  const triggerUpdate = useCallback(() => {
    forceUpdate({})
  }, [])

  useEffect(() => {
    // Initialize translations on mount
    Promise.all([
      initI18n(),
      initDataTranslations()
    ]).then(([lang]) => {
      setLanguage(lang)
      setIsReady(true)
    })

    // Listen for language changes
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<Language>
      setLanguage(customEvent.detail)
      triggerUpdate() // Force re-render with new translations
    }

    window.addEventListener('languageChanged', handleLanguageChange)

    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange)
    }
  }, [triggerUpdate])

  // Create a wrapper for t() that includes language dependency
  const t = useCallback((key: string) => {
    return translate(key)
  }, [language]) // Re-create when language changes

  // Create a wrapper for td() (data translation)
  const td = useCallback((entity: string, id: number | string, field: string) => {
    return translateData(entity, id, field)
  }, [language]) // Re-create when language changes

  return {
    t,
    td,
    language,
    isReady,
  }
}

