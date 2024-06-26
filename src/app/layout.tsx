import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { WizardDialogConsumer } from '@/app/wizard-dialog/consumer'

import './globals.css'
import { Header } from '@/app/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <WizardDialogConsumer />
        {children}
      </body>
    </html>
  )
}
