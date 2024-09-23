"use client"
import React from 'react'
import DeleteDashBlogSvg from "../../public/icons/dashboard/deleteIllustrationDashboard.svg"
import Link from 'next/link'
import { Barlow, Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';

const inter = Inter({
    display: "swap",
    subsets: ['latin'],
    variable: "--font-inter",
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // All available weights
});


const barlow = Barlow({
    display: 'swap',
    subsets: ['latin'],
    variable: "--font-barlow",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const Modal = () => {
    const router = useRouter()
    return (
        <div className='w-full h-full absolute flex justify-center items-center bg-black bg-opacity-20 top-0 left-0'>
            <div className='flex flex-col justify-evenly items-center w-[35%] h-[50%] bg-white opacity-[10] rounded-[34px]'>
                <DeleteDashBlogSvg/>
                <p className={`${inter.className} text-[1.1em]`}>Are you sure you want to delete this blog post?</p>
                <div className={`${barlow.className} flex w-[100%] justify-center gap-5 `}>
                    <button className='bg-welcomeBgColor text-white w-[10em] p-[10px] text-[1.2em] text-center rounded-[14px]' onClick={router.back}>Remove</button>
                    <Link className='bg-headerInfoBgColor text-white w-[10em] p-[10px] text-[1.2em] text-center rounded-[14px]' href={""}>Delete</Link>
                </div>
            </div>

        </div>
    )
}

export default Modal