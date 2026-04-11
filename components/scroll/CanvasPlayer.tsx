'use client'

import { useRef, useEffect } from 'react'

interface CanvasPlayerProps {
  images: HTMLImageElement[]
  currentFrame: number
  width?: number
  height?: number
}

export default function CanvasPlayer({ 
  images, 
  currentFrame, 
  width = 1100,
  height = 619
}: CanvasPlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const lastFrameRef = useRef<number>(-1)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    if (currentFrame !== lastFrameRef.current && images[currentFrame]) {
      ctx.clearRect(0, 0, width, height)
      ctx.drawImage(images[currentFrame], 0, 0, width, height)
      lastFrameRef.current = currentFrame
    }
  }, [images, currentFrame, width, height])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="w-full h-full object-contain"
      style={{ 
        background: '#000000',
        willChange: 'transform'
      }}
    />
  )
}