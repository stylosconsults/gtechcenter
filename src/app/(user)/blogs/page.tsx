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
import LoadingBlogCard from '@/components/LoadingBlogCard'



type SearchParamsType = {
    searchParams: Record<string, string> | null | undefined;
}

const BlogsPage = ({ searchParams }: SearchParamsType) => {

    const page = searchParams?.page ? Number(searchParams?.page) : 1
    const per_page = searchParams?.per_page ? Number(searchParams?.per_page) : 5
    const startIndex = (page - 1) * per_page
    const endIndex = startIndex + per_page

    const { blogs, loadingStates } = useBlogs()


    const slicedBlogs = blogs.slice(startIndex, endIndex)
    const latestBlogs = blogs.slice(0, 5)
    const loadingBlogCards = new Array(per_page || 5).fill(null)


    return (
        <div className='flex flex-col gap-7 mb-[4em]'>
            <PagesTopDiv heading='Blogs' paragraph='Home Blogs' />
            <div className='md:flex grid grid-cols-1 gap-y-10  justify-center p-4'>

                {/* Left column */}
                <div className='col-span-1 flex flex-wrap gap-8 -1 h-[10%]  md:w-[65%] md:ps-12'>


                    {loadingStates.loadingAllBlogs ? (
                        // Show loading cards when loading is true
                        loadingBlogCards.map((_, index) => (
                            <LoadingBlogCard key={index} />
                        ))
                    ) : blogs.length === 0 ? (
                        // Show no blogs found when blogs array is empty
                        <NoBlogsFound />
                    ) : (
                        // Show actual blog cards when data is loaded
                        slicedBlogs.map(({ category, description, title, imagePublicId, lastlyUpdatedDate, _id }, index) => (
                            <BlogCard
                                key={_id} // Better to use _id instead of index
                                index={index}
                                _id={_id}
                                category={category}
                                description={description}
                                imagePublicId={imagePublicId}
                                lastlyUpdatedDate={lastlyUpdatedDate}
                                title={title}
                            />
                        ))
                    )}

                </div>
                {/* Left column */}


                {/* Right column */}
                <div className='col-span-1 flex flex-col gap-[6em] p-1 w-full md:w-[28%]'>
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
                            <PinkCircle className="absolute top-[14.1em] left-[70%]" />
                        </div>
                    )}

                    <div className='flex flex-col  h-auto  justify-center'>

                        {loadingStates.loadingAllBlogs ? (
                            // Show loading cards when loading is true
                            loadingBlogCards.map((_, index) => (
                                <div key={index} className='bg-headerBgColor my-[3px] flex items-center justify-center h-[70px] '>
                                    loading...
                                </div>))
                        ) : (
                            // Show actual blog cards when data is loaded
                            latestBlogs.map(({ description, imagePublicId, _id }, index) => (
                                <LatestBlogCard
                                    key={index}
                                    _id={_id}
                                    description={description}
                                    imagePublicId={imagePublicId}
                                />
                            ))
                        )}

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

                </div>
            </div>
            {/* Right column */}

            <PaginationControls baseUrl='/blogs/' numOfBlogs={blogs.length} />
        </div>
    )

    //     return (
    //     <div className={`${barlow.variable} flex flex-col mb-[4em]`}>
    //         <PagesTopDiv heading='Blog Detail' paragraph='Home Blog_Detail' />

    //         {loadingStates.loadingSingleBlog ? (
    //             <div className="grid grid-cols-1 gap-4">
    //                 {loadingBlogCards.map((_, index) => (
    //                     <LoadingSingleBlogCard key={index} />
    //                 ))}
    //             </div>
    //         ) : (
    //             <div className='flex flex-col lg:flex-row justify-evenly gap-8 px-4'>
    //                 <div className='w-full lg:w-[60%] flex flex-col gap-[2em]'>
    //                     <div className='flex flex-col gap-7'>
    //                         <CldImage
    //                             src={singleBlog?.imagePublicId || "/images/latestBlog1.png"}
    //                             width={100}
    //                             height={100}
    //                             alt='img'
    //                             crop="fill"
    //                             gravity='auto'
    //                             className='w-full h-[300px] md:h-[400px] lg:h-[550px] object-cover'
    //                         />
    //                         <p className='text-textColor text-xl md:text-2xl lg:text-[2em] font-bold leading-tight'>{singleBlog?.title}</p>
    //                         <div className='text-base md:text-lg text-welcomeBgColor'>
    //                             <p>{singleBlog?.description}</p>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <div className='w-full lg:w-[28%] flex flex-col gap-8 md:gap-[6em]'>
    //                     <div className='relative'>
    //                         <p className='text-textColor text-xl md:text-2xl lg:text-[2em] font-semibold'>Category</p>
    //                         <div className='bg-headerBgColor p-4 md:p-7'>
    //                             <p className='text-textColor font-semibold'>{singleBlog?.category}</p>
    //                         </div>
    //                         <RedCircle className="hidden lg:block absolute top-[9em] right-4" />
    //                     </div>

    //                     <div>
    //                         <p className='text-textColor text-xl md:text-2xl lg:text-[2em] font-semibold mb-4'>Recent Post</p>
    //                         <div className='grid gap-4'>
    //                             {latestBlogs.map((blog, index) => (
    //                                 <LatestBlogCard key={index} {...blog} />
    //                             ))}
    //                             {!blogs && <p>No blogs found</p>}
    //                         </div>
    //                     </div>

    //                     <div>
    //                         <p className='text-textColor text-xl md:text-2xl lg:text-[2em] font-semibold mb-4'>Tag Cloud</p>
    //                         <div className='flex flex-wrap gap-2'>
    //                             {['Design', 'Development', 'Marketing', 'SEO', 'Writing', 'Consulting'].map((tag) => (
    //                                 <Link 
    //                                     key={tag}
    //                                     className='bg-headerBgColor rounded-md text-textColor font-semibold p-2 px-3 text-sm md:text-base'
    //                                     href={""}
    //                                 >
    //                                     {tag}
    //                                 </Link>
    //                             ))}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         )}
    //     </div>
    // 
}

export default BlogsPage