import PagesTopDiv from '@/components/PagesTopDiv'
import React from 'react'
import Blog from "../../../../public/images/latestBlog1.png"
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import PinkCircle from "../../../../public/icons/pinkCirlcle.svg"
import Link from 'next/link'

type blogTypes = {
    image: StaticImageData,
    day: string,
    month: string,
    year: string,
    param1: string,
    param2: string,
    param3: string

}

const page = () => {
    const blogs: blogTypes[] = [
        {
            image: Blog,
            day: "01",
            month: "JAN",
            year: "2025",
            param1: "ADMIN",
            param2: "WEB DESIGN",
            param3: "Magna sea dolor ipsum amet lorem eos"

        }, {
            image: Blog,
            day: "01",
            month: "JAN",
            year: "2025",
            param1: "ADMIN",
            param2: "WEB DESIGN",
            param3: "Magna sea dolor ipsum amet lorem eos"

        }, {
            image: Blog,
            day: "01",
            month: "JAN",
            year: "2025",
            param1: "ADMIN",
            param2: "WEB DESIGN",
            param3: "Magna sea dolor ipsum amet lorem eos"

        }, {
            image: Blog,
            day: "01",
            month: "JAN",
            year: "2025",
            param1: "ADMIN",
            param2: "WEB DESIGN",
            param3: "Magna sea dolor ipsum amet lorem eos"

        }, {
            image: Blog,
            day: "01",
            month: "JAN",
            year: "2025",
            param1: "ADMIN",
            param2: "WEB DESIGN",
            param3: "Magna sea dolor ipsum amet lorem eos"

        }, {
            image: Blog,
            day: "01",
            month: "JAN",
            year: "2025",
            param1: "ADMIN",
            param2: "WEB DESIGN",
            param3: "Magna sea dolor ipsum amet lorem eos"

        }, {
            image: Blog,
            day: "01",
            month: "JAN",
            year: "2025",
            param1: "ADMIN",
            param2: "WEB DESIGN",
            param3: "Magna sea dolor ipsum amet lorem eos"

        }, {
            image: Blog,
            day: "01",
            month: "JAN",
            year: "2025",
            param1: "ADMIN",
            param2: "WEB DESIGN",
            param3: "Magna sea dolor ipsum amet lorem eos"

        }, {
            image: Blog,
            day: "01",
            month: "JAN",
            year: "2025",
            param1: "ADMIN",
            param2: "WEB DESIGN",
            param3: "Magna sea dolor ipsum amet lorem eos"

        }, {

            image: Blog,
            day: "01",
            month: "JAN",
            year: "2025",
            param1: "ADMIN",
            param2: "WEB DESIGN",
            param3: "Magna sea dolor ipsum amet lorem eos"

        }, {

            image: Blog,
            day: "01",
            month: "JAN",
            year: "2025",
            param1: "ADMIN",
            param2: "WEB DESIGN",
            param3: "Magna sea dolor ipsum amet lorem eos"

        }

    ]
    return (
        <div className='flex flex-col gap-7 mb-[4em]'>
            <PagesTopDiv heading='Blogs' paragraph='Home Blogs' />
            <div className='flex justify-centerp-4'>

                <div className='flex flex-wrap gap-8 w-[65%] ps-12'>
                    {blogs.map(({ image, day, month, year, param1, param2, param3 }, index) => (
                        <Link href={`blogs/${index}`} key={index} className='flex flex-col bg-headerBgColor '>
                            <Image src={image} className='h-[70%]' alt='image' />
                            <div className='flex h-[30%]'>
                                <div className='w-[20%] bg-headerInfoBgColor h-full flex flex-col justify-center items-center'>
                                    <p className='text-white'>{day}</p>
                                    <p className='text-textColor'>{month}</p>
                                    <p className='text-white'>{year}</p>
                                </div>
                                <div className='flex flex-col justify-center w-[90%]'>
                                    <div className='flex justify-evenly w-full'>
                                        <p className='text-welcomeBgColor'>{param1}</p>
                                        <p className='text-welcomeBgColor'>{param2}</p>
                                    </div>
                                    <p className='text-[1.1em] font-semibold text-textColor px-3'>{param3}</p>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>



                <div className='flex flex-col gap-[6em] p-1 w-[28%]'>
                    <form action="" className='flex border border-headerLinkBorderColor rounded-md overflow-hidden'>
                        <input type="text" placeholder='Keyword' className='p-3 outline-none w-[80%] h-full' />
                        <button className='bg-headerInfoBgColor w-[20%] h-full'></button>
                    </form>

                    <div className='bg-headerBgColor flex text-textColor font-semibold flex-col gap-3 p-7 relative'>
                        <p>Web Design</p>
                        <p>Web Development</p>
                        <p>Web Development</p>
                        <p>Keyword Research</p>
                        <p>Email Marketing</p>
                        <PinkCircle className="absolute top-[14.1em] left-[19.6em]" />
                    </div>

                    <div className='flex flex-col  h-[30%] justify-center'>
                        <div className='flex h-[20%] items-center'>
                            <Image className='w-[30%] h-[60%]' src={Blog} alt='image' />
                            <p className='bg-headerBgColor h-[87%] flex items-center ps-3 text-textColor font-semibold'>Lorem ipsum dolor sit amet
                                adipis elit</p>
                        </div>

                        <div className='flex h-[20%] items-center'>
                            <Image className='w-[30%] h-[60%]' src={Blog} alt='image' />
                            <p className='bg-headerBgColor h-[87%] flex items-center ps-3 text-textColor font-semibold'>Lorem ipsum dolor sit amet
                                adipis elit</p>
                        </div>

                        <div className='flex h-[20%] items-center'>
                            <Image className='w-[30%] h-[60%]' src={Blog} alt='image' />
                            <p className='bg-headerBgColor h-[87%] flex items-center ps-3 text-textColor font-semibold'>Lorem ipsum dolor sit amet
                                adipis elit</p>
                        </div>

                        <div className='flex h-[20%] items-center'>
                            <Image className='w-[30%] h-[60%]' src={Blog} alt='image' />
                            <p className='bg-headerBgColor h-[87%] flex items-center ps-3 text-textColor font-semibold'>Lorem ipsum dolor sit amet
                                adipis elit</p>
                        </div>

                        <div className='flex h-[20%] items-center'>
                            <Image className='w-[30%] h-[60%]' src={Blog} alt='image' />
                            <p className='bg-headerBgColor h-[87%] flex items-center ps-3 text-textColor font-semibold'>Lorem ipsum dolor sit amet
                                adipis elit</p>
                        </div>

                    </div>

                    <div>
                        <Image src={Blog} alt='image' />
                    </div>

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

                    <div className='flex flex-col bg-headerBgColor text-welcomeBgColor h-[10%] justify-center px-5 gap-5 items-center'>
                        <p className='text-center'>Vero sea et accusam justo dolor accusam
                            lorem consetetur, dolores sit amet sit dolor
                            clita kasd justo, diam accusam no sea ut
                            tempor magna takimata, amet sit et diam
                            dolor ipsum amet diamu</p>

                        <button className='bg-headerInfoBgColor text-white w-[37%] p-2 rounded-[1.5em]'>Read More</button>
                    </div>

                </div>
            </div>

            <div className='flex w-[20%] ms-11 border-2 border-headerLinkBorderColor'>
                <button className='w-[20%] p-2 border-2 border-r-headerLinkBorderColor border-t-0 border-b-0 border-l-0 '></button>
                <button className='w-[20%] p-2 border-2 border-r-headerLinkBorderColor border-t-0 border-b-0 border-l-0 bg-headerInfoBgColor text-white'>1</button>
                <button className='w-[20%] p-2 border-2 border-r-headerLinkBorderColor border-t-0 border-b-0 border-l-0'>2</button>
                <button className='w-[20%] p-2 border-2 border-r-headerLinkBorderColor border-t-0 border-b-0 border-l-0'>3</button>
                <button className='w-[20%] p-2 border-2 border-r-0 border-t-0 border-b-0 border-l-0'></button>
            </div>
        </div>
    )
}

export default page