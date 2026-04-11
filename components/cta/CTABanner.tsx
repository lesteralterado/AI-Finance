'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'
import { useSignupModal } from '@/hooks/useSignupModal'

export default function CTABanner() {
  const { openModal, isSubmitted } = useSignupModal()
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const [isHovered, setIsHovered] = useState(false)

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <section id="contact" className="py-16 px-6 border-t border-b border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="relative border border-border-subtle p-8 md:p-12 overflow-hidden"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)',
            transformStyle: 'preserve-3d',
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <h2 className="font-display font-bold text-text-heading text-2xl md:text-3xl lg:text-4xl text-center lg:text-left leading-tight">
              Ready to build the future of finance?
            </h2>

            <div className="flex flex-col items-center lg:items-end gap-2">
              <motion.button
                onClick={openModal}
                className="bg-text-heading text-background font-body font-medium px-8 py-4 rounded-sm hover:bg-white/90 transition-colors"
                style={{
                  transform: isHovered ? `perspective(1000px) rotateX(${rotateX.get()}deg) rotateY(${rotateY.get()}deg)` : 'none',
                  transformStyle: 'preserve-3d',
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitted ? 'Welcome!' : 'Get started'}
              </motion.button>
              <span className="font-mono text-xs text-text-muted">
                No credit card required
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}