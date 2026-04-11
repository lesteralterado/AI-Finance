'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from 'framer-motion'
import dynamic from 'next/dynamic'
import CanvasPlayer from './CanvasPlayer'
import ScrollOverlay from './ScrollOverlay'
import { useFramePreloader } from '@/hooks/useFramePreloader'

const FRAME_COUNT = 240

function LoadingState() {
  const [progress, setProgress] = useState(0)
  const { progress: loadedProgress, isLoaded } = useFramePreloader({ frameCount: FRAME_COUNT })
  
  useEffect(() => {
    setProgress(loadedProgress)
  }, [loadedProgress])

  // Always render the component content, use opacity to hide instead of early return
  // This ensures hooks are always called consistently

  return (
    <motion.div
      className="absolute inset-0 bg-background flex flex-col items-center justify-center z-10"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoaded ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6">
        Initializing
      </span>
      <div className="w-48 h-[1px] bg-border-subtle overflow-hidden">
        <motion.div 
          className="h-full bg-accent-white"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <span className="font-mono text-xs text-text-muted mt-3">
        {Math.round(progress * FRAME_COUNT)} / {FRAME_COUNT}
      </span>
    </motion.div>
  )
}

function FrameSequenceInner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentFrame, setCurrentFrame] = useState(0)
  const reducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const { images, isLoaded } = useFramePreloader({ frameCount: FRAME_COUNT })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (reducedMotion) {
      setCurrentFrame(119)
      return
    }
    const frameIndex = Math.floor(latest * (FRAME_COUNT - 1))
    setCurrentFrame(frameIndex)
  })

  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  if (!isLoaded) {
    return (
      <div className="relative w-full aspect-video max-w-[1100px] mx-auto">
        <LoadingState />
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center py-20">
          <div className="relative w-full aspect-video">
            <CanvasPlayer 
              images={images}
              currentFrame={currentFrame}
              width={1100}
              height={619}
            />
            <ScrollOverlay containerRef={containerRef} />
          </div>
        </div>

        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-border-subtle"
        >
          <motion.div 
            className="h-full bg-accent-white"
            style={{ width: progressWidth }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default function FrameSequenceSection() {
  return <FrameSequenceInner />
}

export const FrameSequenceSectionNoSSR = dynamic(
  () => Promise.resolve(FrameSequenceSection),
  { 
    ssr: false,
    loading: () => (
      <div className="relative w-full aspect-video max-w-[1100px] mx-auto bg-background animate-pulse" />
    )
  }
)