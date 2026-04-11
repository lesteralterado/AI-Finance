'use client'

import { useRef } from 'react'
import { motion, useTransform, useScroll, useSpring } from 'framer-motion'

interface ScrollOverlayProps {
  containerRef: React.RefObject<HTMLDivElement | null>
}

export default function ScrollOverlay({ containerRef }: ScrollOverlayProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  const opacity1 = useTransform(smoothProgress, [0, 0.15, 0.2], [0, 1, 0])
  const x1 = useTransform(smoothProgress, [0, 0.2], [-40, 0])

  const opacity2 = useTransform(smoothProgress, [0.18, 0.25, 0.4, 0.45], [0, 1, 1, 0])
  const x2 = useTransform(smoothProgress, [0.2, 0.45], [40, 0])

  const opacity3 = useTransform(smoothProgress, [0.43, 0.5, 0.65, 0.7], [0, 1, 1, 0])
  const y3 = useTransform(smoothProgress, [0.45, 0.7], [30, 0])

  const opacity4 = useTransform(smoothProgress, [0.68, 0.75, 0.95, 1], [0, 1, 1, 0])
  const scale4 = useTransform(smoothProgress, [0.7, 1], [0.92, 1])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Overlay 1: AI Financial Core */}
      <motion.div
        className="absolute left-[8%] top-1/2 -translate-y-1/2 max-w-[320px]"
        style={{ opacity: opacity1, x: x1 }}
        aria-hidden="true"
      >
        <div className="bg-black/50 p-1">
          <span className="font-mono text-xs text-text-muted uppercase tracking-widest block mb-4">
            NEXUSFI CORE ARCHITECTURE
          </span>
          <h3 className="font-display font-extrabold text-text-heading text-3xl leading-tight mb-4">
            AI Financial Core
          </h3>
          <p className="font-body font-light text-text-body leading-relaxed">
            A single unified intelligence engine managing capital at institutional scale.
          </p>
        </div>
      </motion.div>

      {/* Overlay 2: Separating Intelligence Layers */}
      <motion.div
        className="absolute right-[8%] top-1/2 -translate-y-1/2 max-w-[320px] text-right"
        style={{ opacity: opacity2, x: x2 }}
        aria-hidden="true"
      >
        <div className="bg-black/50 p-1">
          <span className="font-mono text-xs text-text-muted uppercase tracking-widest block mb-4">
            LAYER SEPARATION
          </span>
          <h3 className="font-display font-extrabold text-text-heading text-3xl leading-tight mb-4">
            Separating Intelligence Layers
          </h3>
          <p className="font-body font-light text-text-body leading-relaxed">
            Seven distinct layers of financial technology, each precision-engineered for one purpose.
          </p>
        </div>
      </motion.div>

      {/* Overlay 3: Asset Architecture */}
      <motion.div
        className="absolute left-[8%] bottom-[25%] max-w-[320px]"
        style={{ opacity: opacity3, y: y3 }}
        aria-hidden="true"
      >
        <div className="bg-black/50 p-1">
          <span className="font-mono text-xs text-text-muted uppercase tracking-widest block mb-4">
            ASSET ARCHITECTURE
          </span>
          <h3 className="font-display font-extrabold text-text-heading text-3xl leading-tight mb-4">
            Gold · Capital · Data · Assets
          </h3>
          <p className="font-body font-light text-text-body leading-relaxed">
            From physical gold reserves to neural processing — every layer of value, visible.
          </p>
        </div>
      </motion.div>

      {/* Overlay 4: Fully Operational */}
      <motion.div
        className="absolute left-1/2 top-[20%] -translate-x-1/2 max-w-[400px] text-center"
        style={{ opacity: opacity4, scale: scale4 }}
        aria-hidden="true"
      >
        <div className="bg-black/50 p-1">
          <span className="font-mono text-xs text-text-muted uppercase tracking-widest block mb-4">
            FULLY OPERATIONAL
          </span>
          <h3 className="font-display font-extrabold text-text-heading text-4xl leading-tight mb-4">
            Architecture Revealed.
          </h3>
          <p className="font-body font-light text-text-body leading-relaxed">
            The complete financial intelligence stack — assembled, secured, and deployed.
          </p>
        </div>
      </motion.div>
    </div>
  )
}