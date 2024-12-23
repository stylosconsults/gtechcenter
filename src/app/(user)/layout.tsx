"use client"
import React from 'react'
import "../globals.css"
import { Barlow } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { usePathname } from 'next/navigation'



const barlow = Barlow({
  display: 'swap',
  subsets: ['latin'],
  variable: "--font-barlow",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function UserLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname()
  const isAboutPage = pathname.includes("about")
  const isBlogsPage = pathname.includes("blogs")
  const isContactPage = pathname.includes("contact")
  const isFaqPage = pathname.includes("frequently_asked")
  const isPrivacyPolicyPage = pathname.includes("privacy_policy")
  const isServicesPage = pathname.includes("services")

  const pageTitle = isAboutPage ? "About | G-wissen" :
    isBlogsPage ? "Blogs | G-wissen" :
      isContactPage ? "Contact | G-wissen" :
        isFaqPage ? "FAQs | G-wissen" :
          isPrivacyPolicyPage ? "Privacy Policy | G-wissen" :
            isServicesPage ? "Services | G-wissen" :
              "G-wissen"

  const pageDescription = isAboutPage ? "G-wissen about page" :
    isBlogsPage ? "G-wissen blogs page" :
      isContactPage ? "G-wissen contact page" :
        isFaqPage ? "G-wissen FAQs page" :
          isPrivacyPolicyPage ? "G-wissen privacy policy page" :
            isServicesPage ? "G-wissen services page" :
              "G-wissen"
  return (
    <html lang="en">
      <head>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} />
      </head>
      <body className={`h-[100vh]  ${barlow.className}`}>

        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  )
}

