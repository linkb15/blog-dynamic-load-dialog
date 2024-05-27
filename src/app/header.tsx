import { WizardDialogTrigger } from '@/app/wizard-dialog/trigger'
import React from 'react'

export const Header = () => {
  return (
    <nav className='bg-slate-50'>
      <div className='container flex py-5 items-center justify-between'>
        <div className='text-xl'>Logo</div>

        <WizardDialogTrigger>
          <button className='bg-slate-800 px-4 min-w-24 py-2 rounded-lg hover:bg-slate-800/80 text-white'>
            Take Survey
          </button>
        </WizardDialogTrigger>
      </div>
    </nav>
  )
}
