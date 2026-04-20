'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion-variants'

const ventures = [
  'Venture 01', 'Venture 02', 'Venture 03',
  'Venture 04', 'Venture 05', 'Venture 06',
  'Venture 07', 'Venture 08', 'Venture 09'
]

const stats = [
  { label: 'AI Systems', value: 87 },
  { label: 'FinTech Apps', value: 76 },
  { label: 'Capital Ops', value: 92 }
]

function VentureGrid() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="grid grid-cols-3 gap-3">
      {ventures.map((venture, index) => (
        <motion.div
          key={venture}
          className="aspect-square bg-c-900 border border-c-700 flex items-center justify-center group cursor-default"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            delay: index * 0.06,
            duration: 0.4
          }}
          whileHover={reducedMotion ? {} : { scale: 1.05 }}
        >
          <span className="font-mono text-[0.6rem] text-c-500 group-hover:text-c-400 transition-colors duration-200">
            {venture}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

function StatBars() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="space-y-6">
      {stats.map((stat, index) => (
        <div key={stat.label}>
          <div className="flex justify-between items-center mb-2">
            <span className="font-body font-medium text-c-200 text-[0.85rem]">{stat.label}</span>
            <span className="font-mono text-c-400 text-[0.7rem]">{stat.value}%</span>
          </div>
          <div className="h-[1px] bg-c-800 w-full overflow-hidden">
            <motion.div
              className="h-full bg-c-white"
              initial={{ width: '0%' }}
              whileInView={{ width: `${stat.value}%` }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-c-void border-t border-c-700">
      <div className="max-w-6xl mx-auto space-y-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp}>
            <span className="font-mono text-xs text-c-500 uppercase tracking-widest block mb-4">
              About NexusFi
            </span>
            <h2 className="font-display font-extrabold text-c-white text-3xl md:text-4xl leading-tight mb-6">
              A composition of money businesses, unified by intelligence.
            </h2>
            <p className="font-body font-light text-c-300 leading-[1.80]">
              NexusFi brings together a collection of financial ventures — investment platforms, 
              capital operations, and fintech products — under one AI-powered intelligence layer. 
              We do not operate as a single company. We operate as a system.
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <VentureGrid />
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp} className="order-2 lg:order-1">
            <StatBars />
          </motion.div>
          <motion.div variants={fadeUp} className="order-1 lg:order-2">
            <span className="font-mono text-xs text-c-500 uppercase tracking-widest block mb-4">
              How We Operate
            </span>
            <h2 className="font-display font-extrabold text-c-white text-3xl md:text-4xl leading-tight">
              AI software. Financial applications. Capital at scale.
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}