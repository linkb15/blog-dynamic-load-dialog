// src/app/wizard-dialog/dialog.tsx

'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Wizard } from 'react-use-wizard'

export const WizardDialog = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (by: boolean) => void
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        {/* Pretty Big Content that needs to be dynamic loaded */}

        <Wizard>
          <div className='min-h-20 bg-slate-300 rounded-lg flex items-center justify-center'>
            1
          </div>
          <div className='min-h-20 bg-slate-300 rounded-lg flex items-center justify-center'>
            2
          </div>
          <div className='min-h-20 bg-slate-300 rounded-lg flex items-center justify-center'>
            3
          </div>
          <div className='min-h-20 bg-slate-300 rounded-lg flex items-center justify-center'>
            4
          </div>
          <div className='min-h-20 bg-slate-300 rounded-lg flex items-center justify-center'>
            5
          </div>
          <div className='min-h-20 bg-slate-300 rounded-lg flex items-center justify-center'>
            6
          </div>
          <div className='min-h-20 bg-slate-300 rounded-lg flex items-center justify-center'>
            7
          </div>
        </Wizard>
      </DialogContent>
    </Dialog>
  )
}
