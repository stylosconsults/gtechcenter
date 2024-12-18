import DashboardSideBar from '../../../components/DashboardSideBar'
import { Metadata } from 'next'
import React from 'react'
import "../../globals.css"
import { Barlow } from 'next/font/google'

export const metadata: Metadata = {
    title: "Dashboard blogs",
    description: "Dashboard blogs management"
}

const barlow = Barlow({                           
    display: 'swap',
    subsets: ['latin'],
    variable: "--font-barlow",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function RootLayout ({ children }: Readonly<{ children: React.ReactNode }>){
    return (
        <html lang="en">
            <body className={`h-[100vh]  ${barlow.className}`}>
                <main className='flex gap-2 h-full'>
                    <DashboardSideBar />
                    {children}

                </main>
            </body>
        </html>
    )
}

