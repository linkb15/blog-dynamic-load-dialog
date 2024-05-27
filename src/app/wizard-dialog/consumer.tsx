// src/app/wizard-dialog/consumer.tsx

'use client'

import { useWizardDialog } from '@/app/wizard-dialog/store'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const WizardDialogLoading = () => {
  const setIsLoading = useWizardDialog((s) => s.setIsLoading)

  useEffect(() => {
    setIsLoading(true)
    return () => {
      setIsLoading(false)
    }
  }, [])

  return null
}

const WizardDialog = dynamic(
  () => import('@/app/wizard-dialog/dialog').then((mod) => mod.WizardDialog),
  {
    ssr: false,
    loading: WizardDialogLoading,
  }
)

export const WizardDialogConsumer = () => {
  const open = useWizardDialog((s) => s.open)
  const setOpen = useWizardDialog((s) => s.setOpen)
  return open && <WizardDialog open={open} setOpen={setOpen} />
}
