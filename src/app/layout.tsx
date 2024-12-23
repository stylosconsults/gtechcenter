"use client"
import React from 'react'
import "./globals.css"
import { Barlow } from 'next/font/google'

import ToasterProvider from './ToastProvider'


const barlow = Barlow({
  display: 'swap',
  subsets: ['latin'],
  variable: "--font-barlow",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className={`h-[100vh]  ${barlow.className}`}>
        <ToasterProvider />
        {children}

      </body>
    </html>
  )
}

