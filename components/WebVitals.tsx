'use client'

import { useEffect } from 'react'

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

function sendToAnalytics(metric: any) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric)
  }
  
  // Send to analytics service in production
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
      custom_parameter: metric.name,
    })
  }
}

export default function WebVitals() {
  useEffect(() => {
    // Dynamic import to avoid SSR issues
    import('web-vitals').then((webVitals) => {
      webVitals.onCLS(sendToAnalytics)
      webVitals.onINP(sendToAnalytics) // FID is replaced by INP in web-vitals v3
      webVitals.onFCP(sendToAnalytics)
      webVitals.onLCP(sendToAnalytics)
      webVitals.onTTFB(sendToAnalytics)
    })
  }, [])

  return null
}
