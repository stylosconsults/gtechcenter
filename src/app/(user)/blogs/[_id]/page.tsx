"use client"
import PagesTopDiv from '../../../../components/PagesTopDiv'
import React, { useEffect } from 'react'
import RedCircle from "../../../../../public/icons/redCircle.svg"
import Link from 'next/link'
import { Barlow } from 'next/font/google'
import { useBlogs } from '@/hooks/useBlogs'
import { CldImage } from 'next-cloudinary'
import LatestBlogCard from '@/components/LatestBlogCard'
import LoadingSingleBlogCard from '@/components/LoadingSingleBlogCard'


const barlow = Barlow({
    display: "swap",
    variable: "--font-barlow",
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})


interface BlogParams {
    params: {
        _id: string
    }
}
const BlogPage = ({ params }: BlogParams) => {
    const blogId = params._id
    const { loadingStates, fetchSingleBlog, singleBlog, blogs } = useBlogs()
    const latestBlogs = blogs.slice(0, 5)
    const loadingBlogCards = new Array(5).fill(null)



    useEffect(() => {
        fetchSingleBlog(blogId)
    }, [blogId])
    return (
        <div className={`${barlow.variable} flex flex-col mb-[4em]`}>
            <PagesTopDiv heading='Blog Detail' paragraph='Home Blog_Detail' />

            {loadingStates.loadingSingleBlog ?
                loadingBlogCards.map((_, index) => (
                    <LoadingSingleBlogCard key={index} />
                )
                ) : (
                    <div className='justify-evenly grid grid-cols-1 md:grid-cols-4 gap-x-2 gap-y-10 md:gap-y-0 px-3'>
                        {/* Left column */}
                        <div className='col-span-1 md:col-span-3 flex flex-col  justify-between gap-[2em]'>


                            {/* target */}


                            <div className='flex flex-col gap-7'>

                                <CldImage
                                    src={singleBlog?.imagePublicId || "/images/latestBlog1.png"}
                                    width={100}
                                    height={100}
                                    alt='img'
                                    crop="fill"
                                    gravity='auto'
                                    className=' w-full h-[550px]'
                                />
                                <p className='text-textColor text-[2em] font-bold leading-10 overflow-hidden whitespace-nowrap text-ellipsis' title={singleBlog?.title}>{singleBlog?.title}</p>

                                <div className='flex flex-col gap-3 text-[1.1em] text-welcomeBgColor'>

                                    <p className='text-ellipsis overflow-hidden whitespace-nowrap' title={singleBlog?.description}>{singleBlog?.description}</p>

                                </div>
                            </div>


                            {/* target */}

                            {/* Comments */}
                            {/* <div className='flex flex-col gap-5'>
                        <p className={`${open_sans.variable} text-textColor text-[1.6em] font-semibold`}>3 Comments</p>
                        <div className='flex flex-col gap-7'>
                            <div className='flex gap-4 '>
                                <Image className='w-[60px] h-[60px] rounded-[100%]' src={LatestBlog3} alt='image' />
                                <div className='flex flex-col gap-2'>
                                    <p><span className='text-headerInfoBgColor'>John Doe </span><span className='italic text-textColor'>01 Jan 2045</span></p>
                                    <p className='text-welcomeBgColor'>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at.
                                        Kasd diam tempor rebum magna dolores sed eirmod</p>
                                    <Link className='bg-textColor text-headerLinkBorderColor w-[70px] p-1 font-semibold rounded-[5px] text-center' href={""}>Reply</Link>
                                </div>
                            </div>

                            <div className='flex gap-4 '>
                                <Image className='w-[60px] h-[60px] rounded-[100%]' src={LatestBlog3} alt='image' />
                                <div className='flex flex-col gap-2'>
                                    <p><span className='text-headerInfoBgColor'>John Doe </span><span className='italic text-textColor'>01 Jan 2045</span></p>
                                    <p className='text-welcomeBgColor'>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at.
                                        Kasd diam tempor rebum magna dolores sed eirmod</p>
                                    <Link className='bg-textColor text-headerLinkBorderColor w-[70px] p-1 font-semibold rounded-[5px] text-center' href={""}>Reply</Link>
                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <Image className='w-[60px] h-[60px] rounded-[100%]' src={LatestBlog3} alt='image' />
                                <div className='flex flex-col gap-2'>
                                    <p><span className='text-headerInfoBgColor'>John Doe </span><span className='italic text-textColor'>01 Jan 2045</span></p>
                                    <p className='text-welcomeBgColor'>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at.
                                        Kasd diam tempor rebum magna dolores sed eirmod</p>
                                    <Link className='bg-textColor text-headerLinkBorderColor w-[70px] p-1 font-semibold rounded-[5px] text-center' href={""}>Reply</Link>
                                </div>
                            </div>
                        </div>

                    </div> */}
                            {/* Comments */}

                            {/* Leave comment */}
                            {/* <div className='h-[23%] flex flex-col p-7 gap-8 bg-headerBgColor'>
                        <p className='text-textColor text-[2em] font-semibold h-[10%]'>Leave a comment</p>
                        <form action="" className=' h-[90%] flex flex-col gap-4 bg-headerBgColor'>
                            <div className='flex justify-between'>
                                <input className='outline-none w-[49%] p-3 text-[1.1em] rounded-[5px] ' type="text" placeholder='Your Name' />
                                <input className='outline-none w-[49%] p-3 text-[1.1em] rounded-[5px] ' type="text" placeholder='Your Email' />
                            </div>

                            <input type="text" placeholder='Website' className='p-3 text-[1.1em] outline-none rounded-[5px]' />
                            <textarea name="comment" id="comment" placeholder='Comment' className='h-[120px] resize-none rounded-[5px] outline-none p-2 text-[1.1em]'></textarea>

                            <button className='bg-headerInfoBgColor text-white p-2 text-[1.1em] font-semibold rounded-[5px]'>Leave Your Comment</button>
                        </form>
                    </div> */}
                            {/* leave comment */}
                        </div>
                        {/* Left column */}


                        {/* Right column */}
                        <div className='col-span-1 md:col-span-1 flex flex-col gap-[6em] p-1'>
                            {/* <form action="" className='flex border border-headerLinkBorderColor rounded-md overflow-hidden'>
                                <input type="text" placeholder='Keyword' className='p-3 py-4 outline-none w-[80%] h-full' />
                                <button className='bg-headerInfoBgColor w-[20%] h-full'></button>
                            </form> */}

                            <div className='relative flexflex-col gap-3'>
                                <p className='text-textColor text-[2em] font-semibold'>Category</p>
                                <div className='bg-headerBgColor flex text-textColor font-semibold flex-col gap-3 p-7 '>

                                    {/* <p>Web Design</p>
                            <p>Web Development</p>
                            <p>Web Development</p>
                            <p>Keyword Research</p> */}
                                    <p className='text-ellipsis whitespace-nowrap overflow-hidden'>{singleBlog?.category}</p>
                                </div>
                                <RedCircle className="absolute top-[9em] left-[70%]" />
                            </div>

                            {/* Recent post */}
                            <div className=''>
                                <p className='text-textColor text-[2em] font-semibold'>Recent Post</p>
                                <div className='flex flex-col justify-center'>

                                    {
                                        latestBlogs.map(({ description, imagePublicId, _id }, index) => (
                                            <LatestBlogCard key={index} _id={_id} description={description} imagePublicId={imagePublicId} />
                                        ))
                                    }




                                    {
                                        !blogs && (
                                            <p>No blogs found</p>
                                        )
                                    }
                                </div>

                            </div>

                            {/* Tag cloud */}

                            <div className='flex flex-col gap-3'>
                                <p className='text-textColor text-[2em] font-semibold'>Tag Cloud</p>
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
                            </div>

                            {/* <div className='h-[20%] flex flex-col gap-3'>
                                <p className='text-textColor text-[2em] font-semibold h-[10%]'>Plain Text</p>
                                <div className='flex flex-col bg-headerBgColor text-welcomeBgColor h-[90%] justify-center px-5 gap-5 items-center'>
                                    <p className='text-center'>Vero sea et accusam justo dolor accusam
                                        lorem consetetur, dolores sit amet sit dolor
                                        clita kasd justo, diam accusam no sea ut
                                        tempor magna takimata, amet sit et diam
                                        dolor ipsum amet diamu</p>

                                    <button className='bg-headerInfoBgColor text-white w-[37%] p-2 rounded-[1.5em]'>Read More</button>
                                </div>
                            </div> */}

                        </div>
                        {/* Right column */}

                    </div>
                )
            }

        </div>
    )



}

export default BlogPage