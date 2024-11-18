"use client"

import React, { useEffect } from 'react'
import DeleteIcon from "../../../../../public/icons/dashboard/deleteIconDashboard.svg"
import EditIcon from "../../../../../public/icons/dashboard/editDashboard.svg"
import { Barlow, Inter, Open_Sans } from 'next/font/google'
import Link from 'next/link'
import Modal from '../../../../components/DeleteModal'
import PaginationControls from '../../../../components/PaginationControls'
import { useBlogs } from '@/hooks/useBlogs'
import { CldImage } from 'next-cloudinary'
import DeleteModal from '../../../../components/DeleteModal'


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

// type BlogType = {
//     image: StaticImageData,
//     param1: string,
//     param2: string,
//     param3: string
// }

// const blogs: BlogType[] = [
//     {
//         image: Blog,
//         param1: "ADMIN",
//         param2: "WEB DESIGN",
//         param3: "Magna sea dolor ipsum amet lorem eos"
//     },

//     {
//         image: Blog,
//         param1: "ADMIN",
//         param2: "WEB DESIGN",
//         param3: "Magna sea dolor ipsum amet lorem eos"
//     },

//     {
//         image: Blog,
//         param1: "ADMIN",
//         param2: "WEB DESIGN",
//         param3: "Magna sea dolor ipsum amet lorem eos"
//     },

//     {
//         image: Blog,
//         param1: "ADMIN",
//         param2: "WEB DESIGN",
//         param3: "Magna sea dolor ipsum amet lorem eos"
//     },


//     {
//         image: Blog,
//         param1: "ADMIN",
//         param2: "WEB DESIGN",
//         param3: "Magna sea dolor ipsum amet lorem eos"
//     },

//     {
//         image: Blog,
//         param1: "ADMIN",
//         param2: "WEB DESIGN",
//         param3: "Magna sea dolor ipsum amet lorem eos"
//     },

//     {
//         image: Blog,
//         param1: "ADMIN",
//         param2: "WEB DESIGN",
//         param3: "Magna sea dolor ipsum amet lorem eos"
//     },

//     {
//         image: Blog,
//         param1: "ADMIN",
//         param2: "WEB DESIGN",
//         param3: "Magna sea dolor ipsum amet lorem eos"
//     },

//     {
//         image: Blog,
//         param1: "ADMIN",
//         param2: "WEB DESIGN",
//         param3: "Magna sea dolor ipsum amet lorem eos"
//     },

//     {
//         image: Blog,
//         param1: "ADMIN",
//         param2: "WEB DESIGN",
//         param3: "Magna sea dolor ipsum amet lorem eos"
//     }, 

//     {
//         image: Blog,
//         param1: "ADMIN",
//         param2: "WEB DESIGN",
//         param3: "Magna sea dolor ipsum amet lorem eos"
//     }
// ]

type SearchParamsType = {
    searchParams: Record<string, string> | null | undefined;
}

const page = ({ searchParams }: SearchParamsType) => {
    const { blogs, blogSuccessMsgs, error, setError, loading, fetchBlogs } = useBlogs()
    const showDeleteModal = searchParams?.show_delete
    const blogId = searchParams?.id
    const page = searchParams?.page ? searchParams?.page : 1
    const per_page = searchParams?.per_page ? searchParams?.per_page : 5


    const startIndex = (Number(page) - 1) * Number(per_page)
    const endIndex = startIndex + Number(per_page)

    const slicedBlogs = blogs.slice(startIndex, endIndex)

    useEffect(() => {
        fetchBlogs()
    }, [blogs])

    useEffect(() => {
        if (error) {
            alert(error)
            setError("")
        }
    }, [error])

    console.log('blogId ', blogId);

    return (
        <div className={`flex flex-col w-[95%] ${barlow.className} gap-5 p-3 overflow-auto`}>
            <div className='flex justify-between h-[7%]'>
                <p className='text-[2em]'><span className='font-bold'>Dashboard / </span>Blogs</p>
                <Link href={"/admin/add_blog"} className='text-[1.4em] bg-headerInfoBgColor text-white w-[6em] rounded-[8px] text-center p-2'>Add Blog</Link>
            </div>

            <div className='flex flex-col gap-5 h-[90%] '>
                <p className='text-[1.5em] h-[2%]'>All blogs</p>
                <div className='flex flex-wrap gap-3 h-[98%] min-h-[300px]  overflow-auto p-1'>

                    {slicedBlogs.map(({ category, description, title, imagePublicId, _id }, index) => (



                        <div key={index} className='bg-headerBgColor  flex flex-col justify-between h-[420px] w-[420px]'>
                            <CldImage
                                src={imagePublicId}
                                width={100}
                                height={100}
                                alt='img'
                                crop="fill"
                                gravity='auto'
                                className='h-[75%] w-[100%]'
                            />
                            {/* <Image className='w-full' src={image} alt='Image' /> */}
                            <div className='flex justify-around items-center h-[30%] '>
                                <div className='flex flex-col w-[80%] justify-between  gap-3' >
                                    <div className={`flex  text-welcomeBgColor justify-evenly ${open_sans.className}`}>
                                        <p>{title}</p>
                                        <p>{category}
                                        </p>
                                    </div>

                                    <p className={`text-[1.4em] w-[95%] mx-auto text-textColor font-semibold leading-[1.2em]  ${inter.className}`}>{description}</p>
                                </div>

                                <div className='flex flex-col gap-3'>
                                    <Link href={`/admin/blogs?show_delete=true&id=${_id}`}><DeleteIcon /></Link>
                                    <Link href={`/admin/blogs/${_id}`}><EditIcon /></Link>
                                </div>
                            </div>
                        </div>


                    ))


                    }
                    {showDeleteModal && <DeleteModal blogId={blogId!} />}


                </div>
                <PaginationControls baseUrl='/admin/blogs/' numOfBlogs={blogs.length} />
            </div>


        </div >
    )
}

export default page