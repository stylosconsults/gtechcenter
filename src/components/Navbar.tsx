"use client"
import React from 'react'
import { Open_Sans } from 'next/font/google';
import { Barlow } from 'next/font/google';
import Header from './Header';
import Link from 'next/link';
import Image from 'next/image';
import NavIcon from "../../public/icons/navbarIcon.svg"

const open_sans = Open_Sans({
    display: "swap",
    subsets: ['latin'],
    variable: "--font-open-sans",
    weight: "300",
  });

const barlow = Barlow({
    display : "swap",
    variable: "--font-barlow",
    subsets: ['latin'], 
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const Navbar = () => {
  return (
    <nav className='flex flex-col h-[16vh] gap-2'>
        <Header />
        <div className={`${barlow.className} flex items-center justify-between px-[40px] h-[60%]`}>
            <Link href={""} className='flex items-center gap-4 ' >
                <NavIcon width = "40px"/>
                <p className={`text-[40px] font-extrabold text-headerInfoBgColor`}>GTECH CENTER LTD</p>
            </Link>

            <div className='flex gap-[40px]'>
                <Link className={`text-headerInfoBgColor font-semibold`} href={""}>HOME</Link>
                <Link className='font-semibold text-navBarLinksColor' href={""}>ABOUT</Link>
                <Link className='font-semibold text-navBarLinksColor' href={""}>SERVICE</Link>
                <Link className='flex font-semibold text-navBarLinksColor items-center gap-1' href={""}>PAGES
                    <div className='w-[6px] h-[4px] bg-black'></div>
                </Link>
                <Link className='font-semibold text-navBarLinksColor' href={""}>CONTACT</Link>
            </div>
        </div>


    </nav>
  )
}

export default Navbar