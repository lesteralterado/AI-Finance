'use client'

import { useState, useEffect, useRef } from 'react'

interface UseFramePreloaderOptions {
  frameCount?: number
  framePrefix?: string
}

interface UseFramePreloaderResult {
  images: HTMLImageElement[]
  progress: number
  isLoaded: boolean
}

export function useFramePreloader({
  frameCount = 240,
  framePrefix = '/frames/ezgif-frame-'
}: UseFramePreloaderOptions = {}): UseFramePreloaderResult {
  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const loadedRef = useRef(false)

  useEffect(() => {
    if (loadedRef.current) return
    loadedRef.current = true

    const imageElements: HTMLImageElement[] = []
    let loadedCount = 0

    for (let i = 0; i < frameCount; i++) {
      const img = new Image()
      const padded = String(i + 1).padStart(3, '0')
      img.src = `${framePrefix}${padded}.png`
      
      img.onload = () => {
        loadedCount++
        imageElements[i] = img
        setProgress(loadedCount / frameCount)
        
        if (loadedCount === frameCount) {
          setImages(imageElements)
          setIsLoaded(true)
        }
      }
      
      img.onerror = () => {
        loadedCount++
        imageElements[i] = img
        setProgress(loadedCount / frameCount)
        
        if (loadedCount === frameCount) {
          setImages(imageElements)
          setIsLoaded(true)
        }
      }
    }
  }, [frameCount, framePrefix])

  return { images, progress, isLoaded }
}