'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, ArrowRight } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/motion-variants'

export default function ContactSection() {
  const nameRef = useRef<HTMLInputElement>(null)
  const companyRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = () => {
    const data = {
      name: nameRef.current?.value,
      company: companyRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value
    }
    console.log('Form submitted:', data)
  }

  return (
    <section className="py-24 px-6 bg-c-black border-t border-c-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          <motion.div variants={fadeUp}>
            <span className="font-mono text-xs text-c-500 uppercase tracking-widest block mb-4">
              Get In Touch
            </span>
            <h2 className="font-display font-extrabold text-c-white text-3xl md:text-4xl leading-tight mb-6">
              Let&apos;s build your financial intelligence platform.
            </h2>
            <p className="font-body font-light text-c-400 mb-8 leading-relaxed">
              Whether you are a financial institution, an investment platform, or a capital 
              operation — we build the infrastructure that powers your next phase.
            </p>
            
            <div className="space-y-2 mb-8">
              <p className="font-body font-light text-c-400">hello@nexusfi.com</p>
              <p className="font-body font-light text-c-400">Available globally. Remote-first.</p>
            </div>

            <div className="flex gap-6">
              <a href="#" className="font-mono text-c-500 text-[0.65rem] hover:text-c-300 transition-colors duration-200 flex items-center gap-2">
                Linkedin <Linkedin className="w-3 h-3" />
              </a>
              <a href="#" className="font-mono text-c-500 text-[0.65rem] hover:text-c-300 transition-colors duration-200 flex items-center gap-2">
                Twitter/X <Twitter className="w-3 h-3" />
              </a>
              <a href="#" className="font-mono text-c-500 text-[0.65rem] hover:text-c-300 transition-colors duration-200 flex items-center gap-2">
                GitHub <Github className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="space-y-6">
              <div>
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-c-700 py-3 font-body font-light text-c-200 text-[1rem] placeholder:text-c-600 focus:outline-none focus:border-c-white transition-colors duration-200"
                />
              </div>
              <div>
                <input
                  ref={companyRef}
                  type="text"
                  placeholder="Company"
                  className="w-full bg-transparent border-b border-c-700 py-3 font-body font-light text-c-200 text-[1rem] placeholder:text-c-600 focus:outline-none focus:border-c-white transition-colors duration-200"
                />
              </div>
              <div>
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-c-700 py-3 font-body font-light text-c-200 text-[1rem] placeholder:text-c-600 focus:outline-none focus:border-c-white transition-colors duration-200"
                />
              </div>
              <div>
                <textarea
                  ref={messageRef}
                  placeholder="What are you building?"
                  rows={4}
                  className="w-full bg-transparent border-b border-c-700 py-3 font-body font-light text-c-200 text-[1rem] placeholder:text-c-600 focus:outline-none focus:border-c-white transition-colors duration-200 resize-none"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={handleSubmit}
                className="w-full bg-c-white text-c-black font-body font-medium text-[0.88rem] py-4 hover:bg-c-100 hover:-translate-y-px transition-all duration-200 flex items-center justify-center gap-2"
              >
                Send Message <ArrowRight className="w-4 h-4" />
              </button>
              <p className="font-mono text-c-500 text-[0.62rem] text-center mt-4">
                We respond within 24 hours.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}