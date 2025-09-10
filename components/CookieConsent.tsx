'use client'

import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-panel text-ink p-4 shadow-lg z-50 border-t border-line">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm leading-relaxed">
              We use cookies to enhance your browsing experience and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies. 
              <a 
                href="/privacy-policy" 
                className="underline hover:no-underline ml-1"
              >
                Read our Privacy Policy
              </a>
            </p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-sm border border-ink text-ink hover:bg-ink hover:text-canvas transition-colors duration-200 rounded"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm bg-accent text-ink hover:bg-accent/90 transition-colors duration-200 rounded"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
