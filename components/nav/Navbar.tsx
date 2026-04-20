'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-c-black/80 backdrop-blur-xl border-b border-c-800' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link 
            href="/" 
            className="text-c-white font-display font-extrabold text-xl tracking-tight"
          >
            NexusFi
          </Link>

          <div className="hidden md:flex items-center justify-center gap-8">
            <Link 
              href="#technology" 
              className="text-c-300 text-sm hover:text-c-white transition-colors"
            >
              Technology
            </Link>
            <Link 
              href="#services" 
              className="text-c-300 text-sm hover:text-c-white transition-colors"
            >
              Services
            </Link>
            <Link 
              href="#contact" 
              className="text-c-300 text-sm hover:text-c-white transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block text-c-300 text-sm hover:text-c-white transition-colors">
              Sign in
            </button>
            <button className="bg-c-white text-c-black font-body font-medium text-sm px-5 py-2.5 hover:bg-c-100 transition-colors">
              Get started
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}