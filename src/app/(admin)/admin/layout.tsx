"use client"
import DashboardSideBar from '../../../components/DashboardSideBar'
import React from 'react'
import "../../globals.css"
import { Barlow } from 'next/font/google'
import { usePathname } from 'next/navigation'



const barlow = Barlow({
    display: 'swap',
    subsets: ['latin'],
    variable: "--font-barlow",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const pathname = usePathname()
    const isBlogsPage = pathname.includes("blogs")
    const isAddBlogPage = pathname.includes("add_blog")
    const isDeleteBlogPage = pathname.includes("delete_blog")
    const isEditBlogPage = pathname.includes("edit_blog")


    const pageTitle = isBlogsPage ? "Dashboard Blogs | G-wissen" :
        isAddBlogPage ? "Add Blog | G-wissen" :
            isDeleteBlogPage ? "Delete Blog | G-wissen" :
                isEditBlogPage ? "Edit Blog | G-wissen" :
                    "G-wissen"

    const pageDescription = isBlogsPage ? "G-wissen Blogs Dashboard page" :
        isAddBlogPage ? "G-wissen add_blog page" :
            isDeleteBlogPage ? "G-wissen delete_blog page" :
                isEditBlogPage ? "G-wissen edit_blog page" :
                    "G-wissen"
    return (
        <html lang="en">
            <head>
                <title>{pageTitle}</title>
                <meta name='description' content={pageDescription} />
            </head>
            <body className={`h-[1020px] sm:h-[1000px] md:h-[100vh] ${barlow.className}`}>
                <main className='flex gap-2 h-full'>
                    <DashboardSideBar />
                    {children}

                </main>
            </body>
        </html>
    )
}

