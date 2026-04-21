'use client'

import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { 
  staggerContainer, 
  bounceChevron,
  fadeUp,
  stagger
} from '@/lib/motion-variants'

const whatWeDo = [
  { title: 'AI Infrastructure', desc: 'Machine learning systems for financial decision-making' },
  { title: 'FinTech Platforms', desc: 'Enterprise-grade applications for banking & payments' },
  { title: 'Capital Operations', desc: 'Automated investment and portfolio management' }
]

const stats = [
  { value: '$2.4B+', label: 'Assets Managed' },
  { value: '150+', label: 'API Endpoints' },
  { value: '99.9%', label: 'Uptime SLA' }
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-c-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-c-800/20 via-c-700/10 to-transparent opacity-60 blur-3xl" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        <motion.div variants={stagger} className="space-y-4 lg:space-y-6">
          <motion.div variants={fadeUp}>
            <span className="font-mono text-xs text-c-500 uppercase tracking-widest">
              AI × Finance × Software · Est. 2024
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-1">
            <h1 className="font-display font-extrabold text-c-white text-2xl md:text-3xl lg:text-4xl leading-[0.95] tracking-tight">
              Where Money
            </h1>
            <h1 className="font-display font-extrabold text-c-white text-2xl md:text-3xl lg:text-4xl leading-[0.95] tracking-tight">
              Meets Machine
            </h1>
            <h1 className="font-display font-extrabold text-c-500 text-2xl md:text-3xl lg:text-4xl leading-[0.95] tracking-tight">
              Intelligence.
            </h1>
          </motion.div>

          <motion.p variants={fadeUp} className="font-body font-light text-c-300 text-base leading-[1.75] max-w-md">
            AI-powered financial infrastructure for the institutions that move markets. 
            Build, deploy, and scale intelligent financial products with enterprise-grade security.
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-3">
            {whatWeDo.map((item, index) => (
              <div 
                key={item.title}
                className="flex items-start gap-4 pl-4 border-l border-c-700 hover:border-c-400 transition-colors duration-200"
              >
                <div>
                  <h3 className="font-body font-medium text-c-200 text-sm">{item.title}</h3>
                  <p className="font-body font-light text-c-400 text-xs mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <button className="px-5 py-2.5 bg-c-white text-c-black font-body font-medium text-sm hover:bg-c-100 hover:-translate-y-px transition-all duration-200 flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-5 py-2.5 text-c-400 font-body font-medium text-sm hover:text-c-200 transition-colors duration-200">
              View Our Work
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-6 pt-2">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="font-display font-bold text-c-white text-2xl">{stat.value}</span>
                <span className="font-mono text-c-500 text-xs block mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          variants={fadeUp}
          className="hidden lg:block relative aspect-square"
        >
          <div className="absolute inset-0 border border-c-800 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-c-900 to-c-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 border border-c-600 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-4 border border-c-500 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute inset-8 border border-c-400 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-c-white rounded-full opacity-80 animate-[pulse_2s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="absolute bottom-9 flex flex-col items-center justify-center gap-4"
      >
        <motion.div
          variants={bounceChevron}
          initial="initial"
          animate="animate"
        >
          <ChevronDown className="w-5 h-5 text-c-500" strokeWidth={1.5} />
        </motion.div>
        <span className="font-mono text-xs text-c-500 uppercase tracking-widest">
          scroll to explore
        </span>
      </motion.div>
    </section>
  )
}