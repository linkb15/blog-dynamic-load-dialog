// src/app/wizard-dialog/store.ts

import { create } from 'zustand'

interface WizardDialogState {
  open: boolean
  setOpen: (by: boolean) => void
  isLoading: boolean
  setIsLoading: (by: boolean) => void
}

export const useWizardDialog = create<WizardDialogState>()((set) => ({
  open: false,
  setOpen: (by) => set(() => ({ open: by })),
  isLoading: false,
  setIsLoading: (by) => set(() => ({ isLoading: by })),
}))
