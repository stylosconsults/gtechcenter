import { Metadata } from 'next'
import React from 'react'
import "./globals.css"
import { Barlow } from 'next/font/google'

import { Toaster } from 'react-hot-toast'

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`h-[100vh]  ${barlow.className}`}>
                <Toaster
                    position="top-center"
                    toastOptions={{
                        duration: 3000,
                        style: {
                            background: '#333',
                            color: '#fff',
                        },
                        success: {
                            style: {
                                background: 'green',
                            },
                        },
                        error: {
                            style: {
                                background: 'red',
                            },
                        },
                    }}
                />
                {children}

            </body>
        </html>
    )
}

