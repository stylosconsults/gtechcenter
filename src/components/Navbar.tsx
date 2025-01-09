"use client"

import React, { useState } from 'react'
import { Barlow } from 'next/font/google';
import Header from './Header';
import Link from 'next/link';
import NavIcon from "../../public/icons/navbar/icon1.svg"
import InfoIcon from '../../public/icons/infoIcon.svg'
import PhoneIcon from "../../public/icons/phoneIcon.svg"
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

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

const primaryNavLinks: NavLink[] = [
    {
        name: 'HOME',
        href: '/'
    },
    {
        name: 'ABOUT',
        href: '/about'
    },
    {
        name: 'SERVICES',
        href: '/services'
    },
    {
        name: 'BLOGS',
        href: '/blogs'
    },
    {
        name: 'CONTACT',
        href: '/contact'
    }
]

const secondaryNavLinks: NavLink[] = [
    {
        name: 'FAQ',
        href: '/frequently_asked'
    },
    {
        name: 'PRIVACY POLICY',
        href: '/privacy_policy'
    },
    {
        name: 'SUPPORT',
        href: '/contact'
    }
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='flex flex-col h-auto md:h-[18vh] gap-2'>
            <Header />
            <div className={`${barlow.className} sticky top-0 z-40 bg-white`}>
                <div className='flex items-center justify-between px-4 md:px-[40px] py-4 h-full'>
                    <Link href="/" className='flex items-center gap-4'>
                        <NavIcon className="w-13" />
                        <p className='text-[6vw] md:text-[2.8vw] font-extrabold text-textColor'>G-WISSEN CONSULT</p>
                    </Link>

                    {/* Desktop Navigation - Shows only primary links */}
                    <div className='hidden md:flex md:gap-[3vw]'>
                        {primaryNavLinks.map(({ name, href }, index) => (
                            <Link
                                key={index}
                                className={`${currentPath === href ? 'text-headerInfoBgColor' : 'text-navBarLinksColor'} 
                                    ${href === '/app/blogs' ? 'flex items-center gap-1' : ''} 
                                    font-semibold hover:text-headerInfoBgColor transition-colors text-[3vw] md:text-lg`}
                                href={href}
                            >
                                {name}
                                {href === '/app/blogs' && <div className='w-[6px] h-[4px] bg-black'></div>}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className='md:hidden'
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation - Shows both primary and secondary links */}
                {isMenuOpen && (
                    <div className='md:hidden'>
                        <div className='flex flex-col px-4 py-2 bg-white border-t w-[100vw]'>
                            {/* Primary Navigation Links */}
                            {primaryNavLinks.map(({ name, href }, index) => (
                                <Link
                                    key={`primary-${index}`}
                                    className={`${currentPath === href ? 'text-headerInfoBgColor' : 'text-navBarLinksColor'}
                                        py-3 font-semibold hover:text-headerInfoBgColor transition-colors`}
                                    href={href}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {name}
                                </Link>
                            ))}

                            {/* Divider */}
                            <div className="h-px bg-gray-200 my-2" />

                            {/* Secondary Navigation Links */}
                            {secondaryNavLinks.map(({ name, href }, index) => (
                                <Link
                                    key={`secondary-${index}`}
                                    className={`${currentPath === href ? 'text-headerInfoBgColor' : 'text-gray-600'}
                                        py-3 font-medium hover:text-headerInfoBgColor transition-colors text-sm`}
                                    href={href}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {name}
                                </Link>
                            ))}

                            <div className="flex flex-col w-full gap-4  text-white ">
                                <a href="mailto:gwissenconsult@gmail.com" className="flex bg-headerInfoBgColor items-center gap-1 w-[40%] font-semibold mb-2 py-3 px-4 rounded-[10px]">
                                    <InfoIcon /> gwissenconsult@gmail.com
                                </a>
                                <a href="tel:+250788647871" className="flex bg-headerInfoBgColor items-center gap-2 w-[40%] font-semibold py-3 px-4 rounded-[10px]">
                                    <PhoneIcon />+250788647871
                                </a>
                            </div>

                            {/* <div className="flex items-center ps-9 h-full justify-center pe-[2%] gap-[10%] text-white w-[40%] bg-headerInfoBgColor inclined-left">
                                <a
                                    href="mailto:gwissenconsult@gmail.com"
                                    className="flex text-[1.3vw] items-center gap-1 font-semibold"

                                >

                                    <InfoIcon /> gwissenconsult@gmail.com
                                </a>


                                <a href="tel:+250788647871" className="flex  text-[1.3vw] items-center gap-2 font-semibold">
                                    <PhoneIcon />+250788647871
                                </a>
                            </div> */}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;