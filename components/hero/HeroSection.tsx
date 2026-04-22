'use client'

import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { 
  staggerContainer, 
  bounceChevron,
  fadeUp,
  stagger
} from '@/lib/motion-variants'

const whatWeDo = [
  { title: 'AI Infrastructure', desc: 'Machine learning systems for financial decision-making' },
  { title: 'FinTech Platforms', desc: 'Enterprise-grade applications for banking & payments' },
  { title: 'Capital Operations', desc: 'Automated investment and portfolio management' }
]

const stats = [
  { value: '$2.4B+', label: 'Assets Managed' },
  { value: '150+', label: 'API Endpoints' },
  { value: '99.9%', label: 'Uptime SLA' }
]

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const videoSrc = 'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8';

    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          console.error('Video load failed');
        }
      });
      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
      video.play();
      video.onerror = () => {
        console.error('Video load failed');
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-c-black">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-0"></div>
      <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] z-0"></div>
      
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'saturate(0)' }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-[200px] pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, black, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, black, transparent)' }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-c-800/20 via-c-700/10 to-transparent opacity-60 blur-3xl" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        <motion.div variants={stagger} className="space-y-4 lg:space-y-6">
          <motion.div variants={fadeUp}>
            <span className="font-mono text-xs text-c-500 uppercase tracking-widest">
              AI × Finance × Software · Est. 2024
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-1">
            <h1 className="font-display font-extrabold text-c-white text-2xl md:text-3xl lg:text-4xl leading-[0.95] tracking-tight">
              Where Money
            </h1>
            <h1 className="font-display font-extrabold text-c-white text-2xl md:text-3xl lg:text-4xl leading-[0.95] tracking-tight">
              Meets Machine
            </h1>
            <h1 className="font-display font-extrabold text-c-500 text-2xl md:text-3xl lg:text-4xl leading-[0.95] tracking-tight">
              Intelligence.
            </h1>
          </motion.div>

          <motion.p variants={fadeUp} className="font-body font-light text-c-300 text-base leading-[1.75] max-w-md">
            AI-powered financial infrastructure for the institutions that move markets. 
            Build, deploy, and scale intelligent financial products with enterprise-grade security.
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-3">
            {whatWeDo.map((item, index) => (
              <div 
                key={item.title}
                className="flex items-start gap-4 pl-4 border-l border-c-700 hover:border-c-400 transition-colors duration-200"
              >
                <div>
                  <h3 className="font-body font-medium text-c-200 text-sm">{item.title}</h3>
                  <p className="font-body font-light text-c-400 text-xs mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <button className="px-5 py-2.5 bg-c-white text-c-black font-body font-medium text-sm hover:bg-c-100 hover:-translate-y-px transition-all duration-200 flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-5 py-2.5 text-c-400 font-body font-medium text-sm hover:text-c-200 transition-colors duration-200">
              View Our Work
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-6 pt-2">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="font-display font-bold text-c-white text-2xl">{stat.value}</span>
                <span className="font-mono text-c-500 text-xs block mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
  variants={fadeUp}
  className="hidden lg:block relative"
>
  {/* Outer frame */}
  <div className="relative overflow-hidden">

    {/* Corner tick marks — top left */}
    <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-c-600 z-10" />
    {/* Corner tick marks — top right */}
    <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-c-600 z-10" />
    {/* Corner tick marks — bottom left */}
    <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-c-600 z-10" />
    {/* Corner tick marks — bottom right */}
    <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-c-600 z-10" />

    {/* Scan line overlay */}
    <div
      // className="absolute inset-0 z-10 pointer-events-none"
      // style={{
      //   background: `repeating-linear-gradient(
      //     0deg,
      //     transparent,
      //     transparent 3px,
      //     rgba(255,255,255,0.012) 3px,
      //     rgba(255,255,255,0.012) 4px
      //   )`
      // }}
    />

    {/* Vignette overlay */}
    <div
      // className="absolute inset-0 z-10 pointer-events-none"
      // style={{
      //   background: `radial-gradient(
      //     ellipse at center,
      //     transparent 40%,
      //     rgba(0,0,0,0.65) 100%
      //   )`
      // }}
    />

    {/* Bottom data label bar */}
    {/* <div className="absolute bottom-0 left-0 right-0 z-20 px-4 py-3 flex items-center justify-between border-t border-c-800 backdrop-blur-sm">
      <span
        style={{ fontFamily: 'JetBrains Mono' }}
        className="text-[0.60rem] tracking-[0.16em] uppercase text-c-500"
      >
        AI Robotic Systems
      </span>
      <span
        style={{ fontFamily: 'JetBrains Mono' }}
        className="text-[0.60rem] tracking-[0.16em] uppercase text-c-600"
      >
        NexusFi · Core
      </span>
    </div> */}

    {/* THE IMAGE */}
    <motion.div
      initial={{ scale: 1.05 }}
      whileInView={{ scale: 1.0 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="relative aspect-[4/3]"
    >
      {/* <Image
        src="/images/ai-arm.png"
        alt="AI robotic white arm — NexusFi intelligent systems"
        fill
        priority={false}
        quality={90}
        className="object-cover object-center grayscale"
        sizes="(max-width: 1024px) 100vw, 50vw"
      /> */}
      <img src="/5a07a3fa-fe91-4695-bed1-886c72425ab4.png" alt="AI robotic white arm — NexusFi intelligent systems" />
    </motion.div>

  </div>
</motion.div>
</motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="absolute bottom-9 flex flex-col items-center justify-center gap-4"
      >
        <motion.div
          variants={bounceChevron}
          initial="initial"
          animate="animate"
        >
          <ChevronDown className="w-5 h-5 text-c-500" strokeWidth={1.5} />
        </motion.div>
        <span className="font-mono text-xs text-c-500 uppercase tracking-widest">
          scroll to explore
        </span>
      </motion.div>
    </section>
  )
}