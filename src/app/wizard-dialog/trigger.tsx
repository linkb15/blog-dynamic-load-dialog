// src/app/wizard-dialog/trigger.tsx

'use client'

import { useWizardDialog } from '@/app/wizard-dialog/store'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import React from 'react'

export const WizardDialogTrigger = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const setOpen = useWizardDialog((s) => s.setOpen)
  const isLoading = useWizardDialog((s) => s.isLoading)

  const onClick = () => {
    setOpen(true)
  }

  return (
    <>
      {children &&
        React.cloneElement(children, {
          onClick,
          className: cn(
            children?.props?.className,
            isLoading && 'flex flex-items-center justify-center'
          ),
          children: isLoading ? (
            <Loader2 className='animate-spin text-current' />
          ) : (
            children?.props?.children
          ),
        })}
    </>
  )
}
