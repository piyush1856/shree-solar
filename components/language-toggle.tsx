'use client'

import { useState, useEffect } from 'react'
import { getCurrentLanguage, toggleLanguage, type Language } from '@/lib/i18n'
import { Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState<Language>('en')
  const [isChanging, setIsChanging] = useState(false)

  useEffect(() => {
    setCurrentLang(getCurrentLanguage())
  }, [])

  const handleToggle = async () => {
    setIsChanging(true)
    try {
      const newLang = await toggleLanguage()
      setCurrentLang(newLang)
      
      console.log('Language changed to:', newLang)
      
      // Force re-render of all components by triggering a custom event
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: newLang }))
      
      // Small delay to ensure state updates
      setTimeout(() => setIsChanging(false), 100)
    } catch (error) {
      console.error('Language toggle failed:', error)
      setIsChanging(false)
    }
  }

  return (
    <Button
      onClick={handleToggle}
      disabled={isChanging}
      variant="outline"
      size="sm"
      className="fixed top-20 right-4 z-50 shadow-lg bg-white dark:bg-slate-800 hover:bg-green-50 dark:hover:bg-slate-700 border-green-200 dark:border-green-700 transition-all"
      aria-label="Toggle Language"
      title={currentLang === 'en' ? 'Switch to Hindi' : 'Switch to English'}
    >
      <Globe className="w-4 h-4 mr-1.5" />
      <span className="font-semibold text-sm">
        {currentLang === 'en' ? 'हिंदी' : 'EN'}
      </span>
    </Button>
  )
}

