'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/nav/Navbar'
import HeroSection from '@/components/hero/HeroSection'
import AboutSection from '@/components/about/AboutSection'
import ServicesSection from '@/components/services/ServicesSection'
import PortfolioSection from '@/components/portfolio/PortfolioSection'
import CredibilitySection from '@/components/credibility/CredibilitySection'
import CTABanner from '@/components/cta/CTABanner'
import ContactSection from '@/components/contact/ContactSection'
import Footer from '@/components/footer/Footer'

const FrameSequenceSection = dynamic(
  () => import('@/components/scroll/FrameSequenceSection'),
  { 
    ssr: false,
    loading: () => (
      <div className="relative w-full aspect-video max-w-[1100px] mx-auto bg-c-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xs text-c-500 uppercase tracking-widest">
            Loading animation...
          </span>
        </div>
      </div>
    )
  }
)

export default function Home() {
  return (
    <main id="main" className="min-h-screen bg-c-black">
      <Navbar />
      
      <HeroSection />
      
      <AboutSection />
      
      <section id="technology" aria-label="AI Finance vault disassembly animation, scroll to explore" role="img">
        <FrameSequenceSection />
      </section>
      
      <ServicesSection />
      
      <PortfolioSection />
      
      <CredibilitySection />
      
      <CTABanner />
      
      <ContactSection />
      
      <Footer />
    </main>
  )
}