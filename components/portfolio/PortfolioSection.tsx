'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/motion-variants'

const projects = [
  {
    name: 'Capital Intelligence Platform',
    tag: 'AI Portfolio Management',
    pattern: (
      <svg viewBox="0 0 200 112" className="w-full h-full opacity-30">
        <rect x="20" y="20" width="60" height="40" fill="none" stroke="#555" strokeWidth="0.5" />
        <rect x="90" y="30" width="50" height="30" fill="none" stroke="#555" strokeWidth="0.5" />
        <rect x="150" y="50" width="30" height="40" fill="none" stroke="#555" strokeWidth="0.5" />
        <line x1="80" y1="40" x2="90" y2="45" stroke="#888" strokeWidth="0.5" />
        <line x1="140" y1="55" x2="150" y2="70" stroke="#888" strokeWidth="0.5" />
        <circle cx="50" cy="40" r="8" fill="none" stroke="#555" strokeWidth="0.5" />
        <circle cx="115" cy="45" r="6" fill="none" stroke="#555" strokeWidth="0.5" />
      </svg>
    )
  },
  {
    name: 'NexusPay Infrastructure',
    tag: 'Embedded Payments API',
    pattern: (
      <svg viewBox="0 0 200 112" className="w-full h-full opacity-30">
        <rect x="30" y="30" width="140" height="52" rx="4" fill="none" stroke="#555" strokeWidth="0.5" />
        <rect x="50" y="50" width="40" height="20" rx="2" fill="none" stroke="#555" strokeWidth="0.5" />
        <rect x="100" y="50" width="40" height="20" rx="2" fill="none" stroke="#555" strokeWidth="0.5" />
        <line x1="90" y1="60" x2="100" y2="60" stroke="#888" strokeWidth="0.5" />
        <path d="M70 35 L80 30 L90 35 L100 30" fill="none" stroke="#555" strokeWidth="0.5" />
      </svg>
    )
  },
  {
    name: 'Regulatory Compliance Engine',
    tag: 'Automated KYC & AML',
    pattern: (
      <svg viewBox="0 0 200 112" className="w-full h-full opacity-30">
        <polygon points="100,20 120,40 120,80 100,100 80,80 80,40" fill="none" stroke="#555" strokeWidth="0.5" />
        <polygon points="100,30 112,44 112,72 100,88 88,72 88,44" fill="none" stroke="#555" strokeWidth="0.5" />
        <line x1="100" y1="40" x2="100" y2="75" stroke="#888" strokeWidth="0.5" />
        <line x1="90" y1="55" x2="110" y2="55" stroke="#888" strokeWidth="0.5" />
        <circle cx="100" cy="55" r="6" fill="none" stroke="#555" strokeWidth="0.5" />
      </svg>
    )
  },
  {
    name: 'Unified Banking Core',
    tag: 'Cloud-Native Ledger System',
    pattern: (
      <svg viewBox="0 0 200 112" className="w-full h-full opacity-30">
        <rect x="20" y="20" width="160" height="72" rx="2" fill="none" stroke="#555" strokeWidth="0.5" />
        <line x1="20" y1="45" x2="180" y2="45" stroke="#888" strokeWidth="0.5" />
        <line x1="20" y1="70" x2="180" y2="70" stroke="#888" strokeWidth="0.5" />
        <rect x="30" y="28" width="30" height="10" fill="none" stroke="#555" strokeWidth="0.5" />
        <rect x="70" y="28" width="30" height="10" fill="none" stroke="#555" strokeWidth="0.5" />
        <rect x="110" y="28" width="30" height="10" fill="none" stroke="#555" strokeWidth="0.5" />
        <rect x="30" y="53" width="50" height="10" fill="none" stroke="#555" strokeWidth="0.5" />
        <rect x="90" y="53" width="50" height="10" fill="none" stroke="#555" strokeWidth="0.5" />
        <rect x="30" y="78" width="70" height="8" fill="none" stroke="#555" strokeWidth="0.5" />
        <rect x="110" y="78" width="40" height="8" fill="none" stroke="#555" strokeWidth="0.5" />
      </svg>
    )
  }
]

export default function PortfolioSection() {
  return (
    <section className="py-24 px-6 bg-c-void border-t border-c-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <motion.div variants={fadeUp}>
            <span className="font-mono text-xs text-c-500 uppercase tracking-widest block mb-4">
              Selected Work
            </span>
          </motion.div>
          <motion.div variants={fadeUp}>
            <h2 className="font-display font-extrabold text-c-white text-3xl md:text-4xl">
              Financial platforms we have built and deployed.
            </h2>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.10,
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-video bg-gradient-to-br from-c-900 to-c-800 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 p-8">
                {project.pattern}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-c-900/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-c-white text-[1.1rem] mb-1">
                      {project.name}
                    </h3>
                    <span className="font-mono text-c-500 text-[0.65rem] uppercase tracking-wider">
                      {project.tag}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-c-400 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}