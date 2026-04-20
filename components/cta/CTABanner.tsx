'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'

export default function CTABanner() {
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
    <section id="contact" className="py-16 px-6 bg-c-950 border-t border-b border-c-700">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="relative border border-c-700 p-8 md:p-12 overflow-hidden"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.04) 2px, rgba(255,255,255,0.04) 4px)',
            transformStyle: 'preserve-3d',
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <h2 className="font-display font-bold text-c-white text-2xl md:text-3xl lg:text-4xl text-center lg:text-left leading-tight">
              Ready to build the future of finance?
            </h2>

            <div className="flex flex-col items-center lg:items-end gap-2">
              <motion.button
                className="bg-c-white text-c-black font-body font-medium px-8 py-4 hover:bg-c-100 hover:-translate-y-px transition-all duration-200"
                style={{
                  transform: isHovered ? `perspective(1000px) rotateX(${rotateX.get()}deg) rotateY(${rotateY.get()}deg)` : 'none',
                  transformStyle: 'preserve-3d',
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get started
              </motion.button>
              <span className="font-mono text-xs text-c-500">
                No credit card required
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}