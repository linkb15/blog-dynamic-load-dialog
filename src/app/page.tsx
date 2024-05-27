// src/app/page.tsx

import { WizardDialogTrigger } from '@/app/wizard-dialog/trigger'

export default function Page() {
  return (
    <div>
      <WizardDialogTrigger>
        <button>Take Survey</button>
      </WizardDialogTrigger>
    </div>
  )
}
