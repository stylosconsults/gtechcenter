import PagesTopDiv from '@/components/PagesTopDiv'
import React from 'react'
import RedCircle from "../../../../../public/icons/redCircle.svg"
import Image from 'next/image'
import Blog from "../../../../../public/images/latestBlog1.png"
import LatestBlog3 from "../../../../../public/images/latestBlog2.png"
import Link from 'next/link'
import { Barlow, Open_Sans } from 'next/font/google'




const open_sans = Open_Sans({
    display: "swap",
    subsets: ['latin'],
    variable: "--font-open-sans",
    weight: "300",
  });
  
const barlow = Barlow({
    display: "swap",
    variable: "--font-barlow",
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  })

const page = () => {
    return (
        <div className={`${barlow.variable} flex flex-col mb-[4em]`}>
            <PagesTopDiv heading='Blog Detail' paragraph='Home Blog_Detail' />

            <div className='flex justify-evenly'>
                <div className='w-[60%] flex flex-col  justify-between gap-[2em]'>
                    <div className='flex flex-col gap-7'>
                        <Image className='w-full' src={Blog} alt='image' />
                        <p className='text-textColor text-[2em] font-bold leading-10'>Diam dolor est labore duo ipsum clita sed et lorem tempor duo</p>

                        <div className='flex flex-col gap-3 text-[1.1em] text-welcomeBgColor'>
                            <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero
                                labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit
                                ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et
                                vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.</p>


                            <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr
                                takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor
                                vero sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero
                                amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.</p>

                            <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita
                                dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam
                                tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd,
                                takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut,
                                voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos.</p>


                        </div>
                    </div>


                    <div className='flex flex-col gap-5'>
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

                    </div>



                    <div className='h-[23%] flex flex-col p-7 gap-8 bg-headerBgColor'>
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
                    </div>
                </div>

                <div className='flex flex-col gap-[6em] p-1 w-[28%]'>
                    <form action="" className='flex border border-headerLinkBorderColor rounded-md overflow-hidden'>
                        <input type="text" placeholder='Keyword' className='p-3 py-4 outline-none w-[80%] h-full' />
                        <button className='bg-headerInfoBgColor w-[20%] h-full'></button>
                    </form>

                    <div className='relative flexflex-col gap-3'>
                        <p className='text-textColor text-[2em] font-semibold'>Categories</p>
                        <div className='bg-headerBgColor flex text-textColor font-semibold flex-col gap-3 p-7 '>

                            <p>Web Design</p>
                            <p>Web Development</p>
                            <p>Web Development</p>
                            <p>Keyword Research</p>
                            <p>Email Marketing</p>
                        </div>
                        <RedCircle className="absolute top-[18em] left-[23em]" />
                    </div>

                    <div className='h-[30%]'>
                        <p className='text-textColor text-[2em] font-semibold'>Recent Post</p>
                        <div className='flex flex-col  h-[100%] justify-center'>
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

                    </div>

                    <div>
                        <Image src={Blog} alt='image' />
                    </div>

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

                    <div className='h-[20%] flex flex-col gap-3'>
                        <p className='text-textColor text-[2em] font-semibold h-[10%]'>Plain Text</p>
                        <div className='flex flex-col bg-headerBgColor text-welcomeBgColor h-[90%] justify-center px-5 gap-5 items-center'>
                            <p className='text-center'>Vero sea et accusam justo dolor accusam
                                lorem consetetur, dolores sit amet sit dolor
                                clita kasd justo, diam accusam no sea ut
                                tempor magna takimata, amet sit et diam
                                dolor ipsum amet diamu</p>

                            <button className='bg-headerInfoBgColor text-white w-[37%] p-2 rounded-[1.5em]'>Read More</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default page