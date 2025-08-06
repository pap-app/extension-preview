// components/AuthGate.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useWallet } from './walletProvider'
export default function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [checked, setChecked] = useState(false)
  const {setWalletAddress} = useWallet()

  useEffect(() => {
    const wallet = localStorage.getItem('steller_wallet_address')
    setWalletAddress(wallet)

    if (!wallet) {
      router.replace('/preview') // Redirect to onboarding
    } else {
      router.replace('/preview/home') // Redirect to main app
    }

    setChecked(true)
  }, [router])

  if (!checked) return null // or <Loading />

  return <>{children}</>
}
