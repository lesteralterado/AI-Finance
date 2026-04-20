'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github } from 'lucide-react'

const footerLinks = {
  platform: [
    { label: 'Solutions', href: '#' },
    { label: 'API Suite', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Documentation', href: '#' }
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' }
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' }
  ]
}

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-c-black border-t border-c-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <span className="font-display font-extrabold text-c-white text-xl">NexusFi</span>
            <p className="font-mono text-c-500 text-[0.62rem] mt-2 mb-4">AI × Finance × Software</p>
            <p className="font-body font-light text-c-400 text-[0.80rem] max-w-[200px] leading-relaxed">
              A composition of money businesses unified by intelligence.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-c-600 text-[0.62rem] uppercase tracking-[0.14em] mb-5">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-body font-light text-c-400 text-[0.82rem] hover:text-c-200 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-c-600 text-[0.62rem] uppercase tracking-[0.14em] mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-body font-light text-c-400 text-[0.82rem] hover:text-c-200 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-c-600 text-[0.62rem] uppercase tracking-[0.14em] mb-5">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-body font-light text-c-400 text-[0.82rem] hover:text-c-200 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-c-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-body font-light text-c-600 text-xs">
            © 2026 NexusFi. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-c-500 hover:text-c-200 transition-colors duration-200"
            >
              <Linkedin className="w-[14px] h-[14px]" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-c-500 hover:text-c-200 transition-colors duration-200"
            >
              <Twitter className="w-[14px] h-[14px]" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-c-500 hover:text-c-200 transition-colors duration-200"
            >
              <Github className="w-[14px] h-[14px]" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}