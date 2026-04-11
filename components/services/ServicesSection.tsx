'use client'

import { motion } from 'framer-motion'
import { 
  BrainCircuit, 
  Database, 
  ShieldCheck, 
  CreditCard, 
  Building2, 
  FileCheck 
} from 'lucide-react'

const services = [
  {
    number: '01',
    icon: BrainCircuit,
    title: 'AI Portfolio Management',
    description: 'Intelligent portfolio optimization using advanced machine learning models that adapt to market conditions in real-time.'
  },
  {
    number: '02',
    icon: Database,
    title: 'FinTech API Suite',
    description: 'Comprehensive API infrastructure for seamless integration with existing banking systems and financial platforms.'
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Risk Intelligence Engine',
    description: 'Predictive risk analysis powered by neural networks that identify potential threats before they materialize.'
  },
  {
    number: '04',
    icon: CreditCard,
    title: 'Embedded Payments',
    description: 'Next-generation payment processing with instant settlement and zero-knowledge transaction privacy.'
  },
  {
    number: '05',
    icon: Building2,
    title: 'Core Banking Software',
    description: 'Enterprise-grade core banking infrastructure built for scalability, security, and regulatory compliance.'
  },
  {
    number: '06',
    icon: FileCheck,
    title: 'Compliance Automation',
    description: 'Automated regulatory compliance with real-time monitoring and adaptive policy enforcement.'
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <span className="font-mono text-xs text-text-muted uppercase tracking-widest block mb-6">
          What We Provide
        </span>
        
        <h2 className="font-display font-extrabold text-text-heading text-4xl md:text-5xl leading-tight mb-16 max-w-2xl">
          Financial intelligence, built for scale.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-subtle border border-border-subtle">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              className="group p-8 hover:bg-white/[0.04] transition-colors duration-300 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-transparent group-hover:bg-accent-white transition-colors duration-300" />
              
              <span className="font-mono text-xs text-text-muted uppercase tracking-widest block mb-4">
                {service.number}
              </span>
              
              <service.icon className="w-8 h-8 text-text-heading mb-4" strokeWidth={1} />
              
              <h3 className="font-display font-bold text-text-heading text-xl mb-3">
                {service.title}
              </h3>
              
              <p className="font-body font-light text-text-body leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}