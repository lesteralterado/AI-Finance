'use client'

import { useLocalStorage } from './useLocalStorage'

export interface SignupFormData {
  email: string
  name: string
  submittedAt: string | null
}

const MODAL_KEY = 'signup_modal_open'
const FORM_KEY = 'signup_form_data'

export function useSignupModal() {
  const [isOpenRaw, setIsOpenRaw, isOpenLoaded] = useLocalStorage<boolean>(MODAL_KEY, false)
  const [formDataRaw, setFormDataRaw, isFormLoaded] = useLocalStorage<SignupFormData>(FORM_KEY, {
    email: '',
    name: '',
    submittedAt: null,
  })

  // Both must be loaded for hydration to be complete
  const isLoaded = isOpenLoaded && isFormLoaded

  const isSubmitted = formDataRaw.submittedAt !== null && formDataRaw.email !== ''

  const openModal = () => {
    if (typeof window !== 'undefined') {
      setIsOpenRaw(true)
    }
  }

  const closeModal = () => {
    if (typeof window !== 'undefined') {
      setIsOpenRaw(false)
    }
  }

  const toggleModal = () => {
    if (typeof window !== 'undefined') {
      setIsOpenRaw((prev: boolean) => !prev)
    }
  }

  const submitForm = (email: string, name: string) => {
    if (typeof window !== 'undefined') {
      setFormDataRaw({
        email,
        name,
        submittedAt: new Date().toISOString(),
      })
      setIsOpenRaw(false)
    }
  }

  const clearForm = () => {
    if (typeof window !== 'undefined') {
      setFormDataRaw({
        email: '',
        name: '',
        submittedAt: null,
      })
    }
  }

  return {
    isOpen: isOpenRaw,
    openModal,
    closeModal,
    toggleModal,
    formData: formDataRaw,
    submitForm,
    clearForm,
    isSubmitted,
    isLoaded,
  }
}