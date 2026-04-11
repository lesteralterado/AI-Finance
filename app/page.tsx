'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/nav/Navbar'
import HeroSection from '@/components/hero/HeroSection'
import ServicesSection from '@/components/services/ServicesSection'
import CTABanner from '@/components/cta/CTABanner'
import Footer from '@/components/footer/Footer'

const FrameSequenceSection = dynamic(
  () => import('@/components/scroll/FrameSequenceSection'),
  { 
    ssr: false,
    loading: () => (
      <div className="relative w-full aspect-video max-w-[1100px] mx-auto bg-background">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
            Loading animation...
          </span>
        </div>
      </div>
    )
  }
)

export default function Home() {
  return (
    <main id="main" className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection />
      
      <section id="technology" aria-label="AI Finance vault disassembly animation, scroll to explore" role="img">
        <FrameSequenceSection />
      </section>
      
      <ServicesSection />
      
      <CTABanner />
      
      <Footer />
    </main>
  )
}