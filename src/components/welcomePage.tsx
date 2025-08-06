"use client"

import React from 'react'
import OnboardingFlow from './onboardingFlow'
import { useRouter } from 'next/navigation'

export default function WelcomePage() {

const router = useRouter()
  const handleComplete = () => {
    // Navigate to dashboard after onboarding completion
  router.replace("/preview/home")
  }

  return (
    <div>
      <OnboardingFlow onComplete={handleComplete} />
    </div>
  )
}
