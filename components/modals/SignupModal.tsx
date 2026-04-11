'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, ArrowRight } from 'lucide-react'
import { useSignupModal } from '@/hooks/useSignupModal'

export default function SignupModal() {
  const { isOpen, closeModal, formData, submitForm, isSubmitted, isLoaded } = useSignupModal()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // All hooks must be called consistently - move early return AFTER hooks
  useEffect(() => {
    if (isOpen) {
      setEmail(formData.email)
      setName(formData.name)
      setError('')
    }
  }, [isOpen, formData.email, formData.name])

  // Don't render content until localStorage has loaded (prevents hydration mismatch)
  // But keep hooks above this line consistent

  // Second early return for when modal is closed - keep after useEffect
  if (!isOpen) return null

  // Wait for localStorage to load before showing modal content
  if (!isLoaded) return null

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim() || !name.trim()) {
      setError('Please fill in all fields')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    
    await new Promise(resolve => setTimeout(resolve, 800))
    
    submitForm(email, name)
    setIsLoading(false)
  }

  const handleClose = () => {
    closeModal()
    setError('')
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        
        <motion.div
          className="relative w-full max-w-md"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          <div className="relative bg-surface border border-border-subtle rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-violet/5" />
            
            <div className="relative p-8">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1 text-text-muted hover:text-text-body transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-6">
                      <h2 className="font-display font-bold text-text-heading text-2xl">
                        Get Started
                      </h2>
                      <p className="mt-2 text-text-body text-sm">
                        Enter your details to begin your journey with NexusFi.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block font-mono text-xs text-text-muted uppercase tracking-widest mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 bg-background border border-border-subtle rounded-lg text-text-heading placeholder-text-muted focus:outline-none focus:border-accent-cyan/50 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-xs text-text-muted uppercase tracking-widest mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 bg-background border border-border-subtle rounded-lg text-text-heading placeholder-text-muted focus:outline-none focus:border-accent-cyan/50 transition-colors"
                        />
                      </div>

                      {error && (
                        <p className="text-accent-magenta text-sm">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-accent-white text-background font-medium rounded-lg hover:bg-accent-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <span className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Continue</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent-cyan/20">
                      <Check className="w-8 h-8 text-accent-cyan" />
                    </div>
                    <h2 className="font-display font-bold text-text-heading text-2xl">
                      Welcome Aboard!
                    </h2>
                    <p className="mt-2 text-text-body text-sm">
                      Thanks for signing up, {formData.name || 'there'}! We&apos;ll be in touch at{' '}
                      <span className="text-accent-cyan">{formData.email}</span>
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-6 px-6 py-2 border border-border-subtle text-text-body rounded-lg hover:border-accent-white/30 hover:text-text-heading transition-colors text-sm"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}