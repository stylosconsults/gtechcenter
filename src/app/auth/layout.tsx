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


export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const pathname = usePathname()
    const isLoginPage = pathname.includes("login")
    const isRegisterPage = pathname.includes("register")

    const pageTitle = isLoginPage ? "Login | G-wissen" : isRegisterPage ? "Signup | G-wissen" : "G-wissen Auth"
    const pageDescription = isLoginPage ? "Login to your G-wissen account" : isRegisterPage ? "Signup to G-wissen" : "Authentication for G-wissen"
    return (
        <html lang="en">
            <head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </head>
            <body className={`h-[100vh]  ${barlow.className}`}>
                <Navbar />
                {children}
                <Footer />


            </body>
        </html>
    )
}

