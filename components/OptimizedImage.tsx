'use client'

import { useState, useCallback } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  priority?: boolean
  onLoad?: () => void
  onError?: () => void
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  style = {},
  priority = false,
  onLoad,
  onError 
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const handleLoad = useCallback(() => {
    setLoaded(true)
    onLoad?.()
  }, [onLoad])

  const handleError = useCallback(() => {
    setError(true)
    onError?.()
  }, [onError])

  if (error) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={style}
        role="img"
        aria-label={alt}
      >
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`} style={style}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded"></div>
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          contentVisibility: 'auto',
          containIntrinsicSize: '200px'
        }}
      />
    </div>
  )
}
