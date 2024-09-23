"use client"

import React from 'react'
import DeleteIcon from "../../../../public/icons/dashboard/deleteIconDashboard.svg"
import EditIcon from "../../../../public/icons/dashboard/editDashboard.svg"
import Blog from "../../../../public/images/latestBlog1.png"
import { Barlow, Inter, Open_Sans } from 'next/font/google'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import Modal from '@/components/Modal'


const barlow = Barlow({
    display: 'swap',
    subsets: ['latin'],
    variable: "--font-barlow",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const open_sans = Open_Sans({
    display: "swap",
    subsets: ['latin'],
    variable: "--font-open-sans",
    weight: ['300', '400', '500', '600', '700', '800'],
});

const inter = Inter({
    display: "swap",
    subsets: ['latin'],
    variable: "--font-inter",
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // All available weights
});

type BlogType = {
    image: StaticImageData,
    param1: string,
    param2: string,
    param3: string
}

const blogs: BlogType[] = [
    {
        image: Blog,
        param1: "ADMIN",
        param2: "WEB DESIGN",
        param3: "Magna sea dolor ipsum amet lorem eos"
    },

    {
        image: Blog,
        param1: "ADMIN",
        param2: "WEB DESIGN",
        param3: "Magna sea dolor ipsum amet lorem eos"
    },

    {
        image: Blog,
        param1: "ADMIN",
        param2: "WEB DESIGN",
        param3: "Magna sea dolor ipsum amet lorem eos"
    },

    {
        image: Blog,
        param1: "ADMIN",
        param2: "WEB DESIGN",
        param3: "Magna sea dolor ipsum amet lorem eos"
    },


    {
        image: Blog,
        param1: "ADMIN",
        param2: "WEB DESIGN",
        param3: "Magna sea dolor ipsum amet lorem eos"
    },

    {
        image: Blog,
        param1: "ADMIN",
        param2: "WEB DESIGN",
        param3: "Magna sea dolor ipsum amet lorem eos"
    },

    {
        image: Blog,
        param1: "ADMIN",
        param2: "WEB DESIGN",
        param3: "Magna sea dolor ipsum amet lorem eos"
    },

    {
        image: Blog,
        param1: "ADMIN",
        param2: "WEB DESIGN",
        param3: "Magna sea dolor ipsum amet lorem eos"
    },

    {
        image: Blog,
        param1: "ADMIN",
        param2: "WEB DESIGN",
        param3: "Magna sea dolor ipsum amet lorem eos"
    },

    {
        image: Blog,
        param1: "ADMIN",
        param2: "WEB DESIGN",
        param3: "Magna sea dolor ipsum amet lorem eos"
    }
]

type SearchParamsType = {
    searchParams: Record<string, string> | null | undefined;
}

const page = ({searchParams}: SearchParamsType) => {
    const show = searchParams?.show_delete

    return (
        <div className={`flex flex-col w-[95%] ${barlow.className} gap-5 p-3 overflow-auto`}>
            <div className='flex justify-between h-[7%]'>
                <p className='text-[2em]'><span className='font-bold'>Dashboard / </span>Blogs</p>
                <Link href={"/dashboard/blogs/add_blog"} className='text-[1.4em] bg-headerInfoBgColor text-white w-[6em] rounded-[8px] text-center p-2'>Add Blog</Link>
            </div>

            <div className='flex flex-col gap-5 h-[90%] '>
                <p className='text-[1.5em] h-[2%]'>All blogs</p>
                <div className='flex flex-wrap gap-3 h-[98%] overflow-auto p-1'>

                    {blogs.map(({ image, param1, param2, param3 }, index) => (
                        <div key={index} className='bg-headerBgColor  flex flex-col justify-between h-[420px] w-[420px]'>
                            <Image className='w-full' src={image} alt='Image' />
                            <div className='flex justify-around items-center h-[30%] '>
                                <div className='flex flex-col w-[80%] justify-between  gap-3' >
                                    <div className={`flex  text-welcomeBgColor justify-evenly ${open_sans.className}`}>
                                        <p>{param1}</p>
                                        <p>{param2}
                                        </p>
                                    </div>

                                    <p className={`text-[1.4em] w-[95%] mx-auto text-textColor font-semibold leading-[1.2em]  ${inter.className}`}>{param3}</p>
                                </div>

                                <div className='flex flex-col gap-3'>
                                    <Link href={"/dashboard/blogs/?show_delete=true"}><DeleteIcon /></Link>
                                    <button><EditIcon /></button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {show && <Modal/>}
        </div>
    )
}

export default page