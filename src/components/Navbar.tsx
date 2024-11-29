"use client"

import React from 'react'
// import { Open_Sans } from 'next/font/google';
import { Barlow } from 'next/font/google';
import Header from './Header';
import Link from 'next/link';
import NavIcon from "../../public/icons/navbarIcon.svg"
import { usePathname } from 'next/navigation';

// const open_sans = Open_Sans({
//     display: "swap",
//     subsets: ['latin'],
//     variable: "--font-open-sans",
//     weight: "300",
//   });

const barlow = Barlow({
    display: "swap",
    variable: "--font-barlow",
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

type NavLink = {
    name: string,
    href: string
}

const navLinks: NavLink[] = [
    {
        name: 'HOME',
        href: '/'
    },

    {
        name: 'ABOUT',
        href: '/about'
    },
    {
        name: 'SERVICE',
        href: '/services'
    },

    {
        name: 'PAGES',
        href: '/blogs'
    },

    {
        name: 'CONTACT',
        href: '/contact'
    }
]

const Navbar = () => {
    const currentPath = usePathname()
    console.log(currentPath);
    return (
        <nav className='flex flex-col h-[18vh] gap-2 '>
            <Header />
            <div className={`${barlow.className} sticky top-0 z-40 flex items-center justify-between px-[40px] h-[60%]`}>
                <Link href={"/"} className='flex items-center gap-4 ' >
                    <NavIcon width="40px" />
                    <p className={`text-[40px] font-extrabold text-headerInfoBgColor`}>G-WISSEN Consults LTD</p>
                </Link>

                <div className='flex gap-[40px]'>
                    {navLinks.map(({ name, href }, index) => (
                        <Link key={index} className={`${currentPath === href ? 'text-headerInfoBgColor' : 'text-navBarLinksColor'} ${href === '/app/blogs' ? 'flex items-center gap-1' : ''} font-semibold `} href={href}>{name} {href === '/app/blogs' && <div className='w-[6px] h-[4px] bg-black'></div>
                        }</Link>

                    ))}
                </div>
            </div>


        </nav>
    )
}

export default Navbar