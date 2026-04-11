'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-body font-light text-text-muted text-xs">
          © 2026 NexusFi. All rights reserved.
        </span>

        <div className="flex items-center gap-8">
          <Link href="#" className="font-body font-light text-text-muted text-xs hover:text-text-body transition-colors">
            Privacy
          </Link>
          <Link href="#" className="font-body font-light text-text-muted text-xs hover:text-text-body transition-colors">
            Terms
          </Link>
          <Link href="#" className="font-body font-light text-text-muted text-xs hover:text-text-body transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}