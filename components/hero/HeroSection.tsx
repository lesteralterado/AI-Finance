'use client'

import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight, PlayCircle } from 'lucide-react'
import { 
  fadeInUp, 
  staggerContainer, 
  bounceChevron,
  floatAnimation,
  pulseGlow,
  staggerChildren 
} from '@/lib/motion-variants'

const floatingShapes = [
  { size: 280, x: '-35%', y: '-30%', delay: 0, duration: 20 },
  { size: 180, x: '75%', y: '60%', delay: 2, duration: 18 },
  { size: 120, x: '15%', y: '75%', delay: 4, duration: 22 },
  { size: 80, x: '-20%', y: '50%', delay: 3, duration: 16 },
]

const gridLines = Array.from({ length: 12 }, (_, i) => i)

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background gradient spotlight */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent-cyan/8 via-accent-teal/4 to-transparent opacity-60 blur-3xl" />
        <div className="absolute top-[15%] left-[20%] w-[400px] h-[400px] rounded-full bg-gradient-radial from-accent-violet/6 via-transparent to-transparent opacity-40 blur-3xl" />
      </div>

      {/* Mesh grid pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* Floating geometric shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full border border-accent-white/5"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          variants={floatAnimation}
          initial="hidden"
          animate="visible"
          transition={{
            delay: shape.delay,
            duration: shape.duration,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      {/* Animated grid lines - vertical */}
      {gridLines.slice(0, 6).map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-white/5 to-transparent"
          style={{ left: `${10 + i * 15}%` }}
          animate={{ opacity: [0, 0.3, 0], y: [0, 100, 200] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'linear',
          }}
        />
      ))}

      {/* Main content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
              AI-Powered Financial Infrastructure
            </span>
          </span>
        </motion.div>

        {/* Heading with gradient */}
        <motion.h1
          variants={fadeInUp}
          className="font-display font-extrabold text-text-heading leading-[0.95] tracking-tight"
          style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}
        >
          The{' '}
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-teal to-accent-violet"> */}
            Intelligence
          {/* </span> */}
          <br />
          Behind Smarter Money.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeInUp}
          className="mt-8 text-text-body font-body font-light max-w-[520px] mx-auto leading-[1.75] text-lg"
        >
          AI-powered financial infrastructure for the institutions 
          that move markets. Build, deploy, and scale inteligent 
          financial products with enterprise-grade security.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={staggerChildren}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-3.5 bg-accent-white text-background font-medium text-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 px-8 py-3.5 border border-border-subtle text-text-body font-medium text-sm rounded-lg hover:border-accent-white/30 hover:bg-surface/50 transition-all duration-300"
          >
            <PlayCircle className="w-4 h-4 text-accent-teal" />
            <span>View Demo</span>
          </motion.button>
        </motion.div>

        {/* Floating dashboard preview card */}
        {/* <motion.div
          variants={fadeInUp}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-3xl rounded-xl border border-border-subtle bg-surface/60 backdrop-blur-xl overflow-hidden">
            Card header
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle">
              <div className="w-3 h-3 rounded-full bg-accent-white/10" />
              <div className="w-3 h-3 rounded-full bg-accent-white/10" />
              <div className="w-3 h-3 rounded-full bg-accent-white/10" />
            </div>
            Card content - simplified dashboard
            <div className="p-6 grid grid-cols-3 gap-4">
              <div className="col-span-1 space-y-3">
                <div className="h-2 w-20 rounded bg-accent-white/10" />
                <div className="h-8 w-full rounded-lg bg-gradient-to-r from-accent-cyan/20 to-accent-teal/20" />
                <div className="h-2 w-16 rounded bg-accent-white/10" />
              </div>
              <div className="col-span-2 space-y-3">
                <div className="h-2 w-24 rounded bg-accent-white/10" />
                <div className="h-24 rounded-lg bg-surface border border-border-subtle flex items-end justify-around px-2 pb-2 gap-1">
                  {[40, 65, 45, 80, 55, 70, 60].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-4 bg-gradient-to-t from-accent-cyan to-accent-teal rounded-t"
                      style={{ height: `${h}%` }}
                      animate={{ height: [`${h-10}%`, `${h}%`, `${h-5}%`] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
                <div className="flex gap-4">
                  <div className="h-2 w-12 rounded bg-accent-white/10" />
                  <div className="h-2 w-12 rounded bg-accent-white/10" />
                </div>
              </div>
            </div>
          </div>

          Glow effect behind card
          <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
            <div className="w-full h-full bg-gradient-to-br from-accent-cyan/30 via-accent-teal/20 to-accent-violet/30" />
          </div>
        </motion.div>*/}
      </motion.div> 

      {/* Scroll indicator */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="bottom-9 flex flex-col items-center justify-center gap-4"
      >
        <motion.div
          variants={bounceChevron}
          initial="initial"
          animate="animate"
        >
          <ChevronDown className="w-5 h-5 text-text-muted" strokeWidth={1.5} />
        </motion.div>
        <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
          scroll to explore
        </span>
      </motion.div>
    </section>
  )
}