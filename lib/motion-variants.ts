'use client'

import { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' 
    }
  }
}

export const fadeOut: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
}

export const slideInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
}

export const bounceChevron: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, 8, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

export const floatAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: [0, -20, 0],
    transition: { 
      duration: 6, 
      ease: 'easeInOut',
      repeat: Infinity,
    }
  }
}

export const staggerChildren: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
}

export const pulseGlow: Variants = {
  initial: { opacity: 0.3, scale: 0.95 },
  animate: {
    opacity: [0.3, 0.6, 0.3],
    scale: [0.95, 1.02, 0.95],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { 
      duration: 0.8, 
      ease: 'easeOut' 
    }
  }
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
  },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
  }
}

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
  show: { transition: { staggerChildren: 0.09 } }
}