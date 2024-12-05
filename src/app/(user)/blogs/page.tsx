"use client"
import PagesTopDiv from '../../../components/PagesTopDiv'
import React from 'react'
import PinkCircle from "../../../../public/icons/pinkCirlcle.svg"
import Link from 'next/link'
import PaginationControls from '../../../components/PaginationControls'
import { useBlogs } from '@/hooks/useBlogs'
import BlogCard from '@/components/BlogCard'
import LatestBlogCard from '@/components/LatestBlogCard'
import NoBlogsFound from '@/components/NoBlogsFound'



type SearchParamsType = {
    searchParams: Record<string, string> | null | undefined;
}

const BlogsPage = ({ searchParams }: SearchParamsType) => {

    const page = searchParams?.page ? Number(searchParams?.page) : 1
    const per_page = searchParams?.per_page ? Number(searchParams?.per_page) : 5
    const startIndex = (page - 1) * per_page
    const endIndex = startIndex + per_page

    const { blogs, loading } = useBlogs()


    const slicedBlogs = blogs.slice(startIndex, endIndex)
    const latestBlogs = blogs.slice(0, 5)
    const loadingBlogCards = new Array(per_page || 5).fill(null)


    return (
        <div className='flex flex-col gap-7 mb-[4em]'>
            <PagesTopDiv heading='Blogs' paragraph='Home Blogs' />
            <div className='flex justify-center p-4'>

                <div className='flex flex-wrap gap-8 h-[10%]  w-[65%] ps-12'>
                    {!loading ?
                        slicedBlogs.map(({ category, description, title, imagePublicId, lastlyUpdatedDate, _id }, index) => (
                            <BlogCard key={index} index={index} _id={_id} category={category} description={description} imagePublicId={imagePublicId} lastlyUpdatedDate={lastlyUpdatedDate} title={title} />
                        )) :
                        loadingBlogCards.map((el, index) => (
                            <BlogCard key={index} loading={true} _id={''} imagePublicId={''} index={index} lastlyUpdatedDate={''} title={''} category={''} description={''} />
                        ))

                    }

                    {
                        blogs.length === 0 && !loading && (
                            <NoBlogsFound />
                        )
                    }

                </div>



                <div className='flex flex-col gap-[6em] p-1 w-[28%]'>
                    {/* <form action="" className='flex border border-headerLinkBorderColor rounded-md overflow-hidden'>
                        <input type="text" placeholder='Keyword' className='p-3 outline-none w-[80%] h-full' />
                        <button className='bg-headerInfoBgColor w-[20%] h-full'></button>
                    </form> */}

                    {blogs.length !== 0 && (

                        <div className='bg-headerBgColor flex text-textColor font-semibold flex-col gap-3 p-7 relative'>
                            <p>Web Design</p>
                            <p>Web Development</p>
                            <p>Web Development</p>
                            <p>Keyword Research</p>
                            <p>Email Marketing</p>
                            <PinkCircle className="absolute top-[14.1em] left-[19.6em]" />
                        </div>
                    )}

                    <div className='flex flex-col  h-[350px]  justify-center'>

                        {!loading ?
                            latestBlogs.map(({ description, imagePublicId, _id }, index) => (
                                <LatestBlogCard key={index} _id={_id} description={description} imagePublicId={imagePublicId} index={index} />
                            )) :

                            loadingBlogCards.map((index) => (
                            
                                <div key={index} className='bg-headerBgColor my-[3px] flex items-center justify-center h-[20%] '>
                                    loading...
                                </div>))

                        }


                        {
                            blogs.length === 0 && !loading && (
                                <NoBlogsFound />
                            )
                        }

                    </div>

                    {blogs.length !== 0 && (

                        <div className='flex flex-wrap gap-2'>
                            <Link className='bg-headerBgColor rounded-md text-textColor font-semibold p-2 px-3' href={""}>Design</Link>
                            <Link className='bg-headerBgColor rounded-md text-textColor font-semibold p-2 px-3' href={""}>Development</Link>
                            <Link className='bg-headerBgColor rounded-md text-textColor font-semibold p-2 px-3' href={""}>Marketing</Link>
                            <Link className='bg-headerBgColor rounded-md text-textColor font-semibold p-2 px-3' href={""}>SEO</Link>
                            <Link className='bg-headerBgColor rounded-md text-textColor font-semibold p-2 px-3' href={""}>Writing</Link>
                            <Link className='bg-headerBgColor rounded-md text-textColor font-semibold p-2 px-3' href={""}>Consulting</Link>
                            <Link className='bg-headerBgColor rounded-md text-textColor font-semibold p-2 px-3' href={""}>Design</Link>
                            <Link className='bg-headerBgColor rounded-md text-textColor font-semibold p-2 px-3' href={""}>Development</Link>
                            <Link className='bg-headerBgColor rounded-md text-textColor font-semibold p-2 px-3' href={""}>Marketing</Link>
                            <Link className='bg-headerBgColor rounded-md text-textColor font-semibold p-2 px-3' href={""}>SEO</Link>
                            <Link className='bg-headerBgColor rounded-md text-textColor font-semibold p-2 px-3' href={""}>Writing</Link>
                            <Link className='bg-headerBgColor rounded-md text-textColor font-semibold p-2 px-3' href={""}>Consulting</Link>
                        </div>

                    )}
                    {/* <div className='flex flex-col bg-headerBgColor text-welcomeBgColor h-[200px] justify-center px-5 gap-5 items-center'>
                        <p className='text-center'>Vero sea et accusam justo dolor accusam
                            lorem consetetur, dolores sit amet sit dolor
                            clita kasd justo, diam accusam no sea ut
                            tempor magna takimata, amet sit et diam
                            dolor ipsum amet diamu</p>

                        <button className='bg-headerInfoBgColor text-white w-[37%] p-2 rounded-[1.5em]'>Read More</button>
                    </div> */}

                </div>
            </div>

            <PaginationControls baseUrl='/blogs/' numOfBlogs={blogs.length} />
        </div>
    )
}

export default BlogsPage