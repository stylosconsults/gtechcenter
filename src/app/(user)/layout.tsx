import { Metadata } from 'next'
import React from 'react'
import "../globals.css"
import { Barlow } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "user/",
  description: "User portal"
}

const barlow = Barlow({
  display: 'swap',
  subsets: ['latin'],
  variable: "--font-barlow",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function UserLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`h-[100vh]  ${barlow.className}`}>
     
        <Navbar />
        {children}
        <Footer />
       
      </body>
    </html>
  )
}

