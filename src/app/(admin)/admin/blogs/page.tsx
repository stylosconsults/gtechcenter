"use client"

import React from 'react'
import { Barlow} from 'next/font/google'
import Link from 'next/link'
import PaginationControls from '../../../../components/PaginationControls'
import { useBlogs } from '@/hooks/useBlogs'
import AdminBlogCard from '@/components/AdminBlogCard'
import NoBlogsFound from '@/components/NoBlogsFound'


const barlow = Barlow({
    display: 'swap',
    subsets: ['latin'],
    variable: "--font-barlow",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})


type SearchParamsType = {
    searchParams: Record<string, string> | null | undefined;
}

const AdminBlogsPage = ({ searchParams }: SearchParamsType) => {
    const { blogs, loading } = useBlogs()
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
                            <AdminBlogCard key={index} index={index} _id={_id} category={category} description={description} imagePublicId={imagePublicId} lastlyUpdatedDate={lastlyUpdatedDate} title={title} />
                        )) :
                        loadingBlogCards.map((index) => (
                            <AdminBlogCard key={index} loading={true} _id={''} imagePublicId={''} index={0} lastlyUpdatedDate={''} title={''} category={''} description={''} />
                        ))

                    }

                    {
                        blogs.length === 0 && !loading && (
                           <NoBlogsFound/>
                        )
                    }




                </div>
                <PaginationControls baseUrl='/admin/blogs/' numOfBlogs={blogs.length} />
            </div>


        </div >
    )
}

export default AdminBlogsPage