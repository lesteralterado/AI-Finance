'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/motion-variants'

const logos = Array.from({ length: 8 }, (_, i) => `Partner 0${i + 1}`)

const testimonials = [
  {
    quote: "NexusFi rebuilt our entire capital operations layer. The AI integration reduced our decision latency by over 60 percent.",
    name: "J. Hartwell",
    role: "CIO, Meridian Capital"
  },
  {
    quote: "The most sophisticated fintech infrastructure we have worked with. Clean API, zero downtime, exceptional compliance tooling.",
    name: "S. Nakamura",
    role: "Head of Engineering, VaultBank"
  },
  {
    quote: "They unified our three separate financial platforms into one. The result was immediate — faster, smarter, more scalable.",
    name: "D. Okonkwo",
    role: "CEO, Trident Investments"
  }
]

function LogoMarquee() {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-c-void to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-c-void to-transparent z-10" />
      <div className="flex animate-marquee gap-6">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[120px] h-[40px] border border-c-800 flex items-center justify-center hover:border-c-500 hover:text-c-300 transition-colors duration-200"
          >
            <span className="font-mono text-c-600 text-[0.65rem]">{logo}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CredibilitySection() {
  return (
    <section className="py-24 px-6 bg-c-black border-t border-c-800">
      <div className="max-w-6xl mx-auto space-y-24">
        <div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="mb-8">
              <span className="font-mono text-xs text-c-500 uppercase tracking-widest block mb-4">
                Trusted By
              </span>
            </motion.div>
          </motion.div>
          <LogoMarquee />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <span className="font-mono text-xs text-c-500 uppercase tracking-widest block mb-4">
              What They Say
            </span>
            <h2 className="font-display font-extrabold text-c-white text-3xl md:text-4xl">
              Built for the institutions that move markets.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeUp}
                className="bg-c-950 border border-c-800 p-8 rounded-lg hover:border-c-600 hover:bg-c-900 transition-all duration-200"
              >
                <span className="font-display font-extrabold text-c-800 text-3xl leading-none">"</span>
                <p className="font-body font-light text-c-300 text-[0.90rem] leading-[1.75] mt-4 mb-6">
                  {testimonial.quote}
                </p>
                <div>
                  <span className="font-body font-medium text-c-200 text-[0.82rem] block">
                    {testimonial.name}
                  </span>
                  <span className="font-mono text-c-500 text-[0.62rem]">
                    {testimonial.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center gap-8">
          <a href="#" className="font-mono text-c-500 text-[0.65rem] hover:text-c-300 transition-colors duration-200">
            Linkedin
          </a>
          <a href="#" className="font-mono text-c-500 text-[0.65rem] hover:text-c-300 transition-colors duration-200">
            Twitter/X
          </a>
          <a href="#" className="font-mono text-c-500 text-[0.65rem] hover:text-c-300 transition-colors duration-200">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}