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
import AdminBlogCard from '@/components/AdminBlogCard'
import toast from 'react-hot-toast'
import NoBlogsFound from '@/components/NoBlogsFound'
import { useRouter } from 'next/navigation'


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

type SearchParamsType = {
    searchParams: Record<string, string> | null | undefined;
}

const page = ({ searchParams }: SearchParamsType) => {
    const { blogs, error, setError, loading, fetchBlogs } = useBlogs()
    const router = useRouter()
    const showDeleteModal = searchParams?.show_delete
    const blogId = searchParams?.id
    const page = searchParams?.page ? Number(searchParams?.page) : 1
    const per_page = searchParams?.per_page ? Number(searchParams?.per_page) : 5
    const startIndex = ((page) - 1) * per_page
    const endIndex = startIndex + per_page

    const loadingBlogCards = new Array(5).fill(null)
    const slicedBlogs = blogs.slice(startIndex, endIndex)

    return (
        <div className={`flex flex-col w-[95%] ${barlow.className} gap-5 p-3 overflow-auto`}>
            <div className='flex justify-between h-[7%]'>
                <p className='text-[2em]'><span className='font-bold'>Dashboard / </span>Blogs</p>
                <Link href={"/admin/add_blog"} className='text-[1.4em] bg-headerInfoBgColor text-white w-[6em] rounded-[8px] text-center p-2'>Add Blog</Link>
            </div>

            <div className='flex flex-col gap-5 h-[90%] '>
                <p className='text-[1.5em] h-[2%]'>All blogs</p>
                <div className='flex flex-wrap gap-3 h-[98%] min-h-[300px]  overflow-auto p-1'>

                    {!loading ?
                        slicedBlogs.map(({ category, description, title, imagePublicId, lastlyUpdatedDate, _id }, index) => (
                            <AdminBlogCard index={index} _id={_id} category={category} description={description} imagePublicId={imagePublicId} lastlyUpdatedDate={lastlyUpdatedDate} title={title} />
                        )) :
                        loadingBlogCards.map((el, index) => (
                            <AdminBlogCard loading={true} _id={''} imagePublicId={''} index={0} lastlyUpdatedDate={''} title={''} category={''} description={''} />
                        ))

                    }

                    {
                        blogs.length === 0 && !loading && (
                           <NoBlogsFound/>
                        )
                    }


                    {/* {showDeleteModal && <DeleteModal blogId={blogId!} />} */}


                </div>
                <PaginationControls baseUrl='/admin/blogs/' numOfBlogs={blogs.length} />
            </div>


        </div >
    )
}

export default page