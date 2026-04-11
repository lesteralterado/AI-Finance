'use client'

import { useRef } from 'react'
import { useMotionValue, useSpring, useMotionValueEvent } from 'framer-motion'

interface UseMouseParallaxOptions {
  range?: number
  stiffness?: number
  damping?: number
}

interface MouseParallaxResult {
  rotateX: ReturnType<typeof useMotionValue<number>>
  rotateY: ReturnType<typeof useMotionValue<number>>
  containerRef: React.RefObject<HTMLDivElement | null>
}

export function useMouseParallax({
  range = 3,
  stiffness = 100,
  damping = 20
}: UseMouseParallaxOptions = {}): MouseParallaxResult {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useMotionValue(0), { stiffness, damping })
  const rotateY = useSpring(useMotionValue(0), { stiffness, damping })

  useMotionValueEvent(mouseX, 'change', (latest) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const relativeX = (latest - centerX) / (rect.width / 2)
      rotateY.set(-relativeX * range)
    }
  })

  useMotionValueEvent(mouseY, 'change', (latest) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const centerY = rect.top + rect.height / 2
      const relativeY = (latest - centerY) / (rect.height / 2)
      rotateX.set(relativeY * range)
    }
  })

  const handleMouseMove = (e: MouseEvent) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', handleMouseMove)
  }

  return { rotateX, rotateY, containerRef }
}