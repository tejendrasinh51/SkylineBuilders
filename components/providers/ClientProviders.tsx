'use client'

import dynamic from 'next/dynamic'
import PageTransition from '@/components/effects/PageTransition'

const CustomCursor = dynamic(() => import('@/components/effects/CustomCursor'), { ssr: false })

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <PageTransition>{children}</PageTransition>
    </>
  )
}
