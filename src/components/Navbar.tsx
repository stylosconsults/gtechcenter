"use client"

import React, { useState } from 'react'
// import { Open_Sans } from 'next/font/google';
import { Barlow } from 'next/font/google';
import Header from './Header';
import Link from 'next/link';
import NavIcon from "../../public/icons/GwissenIcon.svg"
import { Menu, X } from 'lucide-react';
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

// const Navbar = () => {
//     const currentPath = usePathname()
//     return (
//         <nav className='flex flex-col h-[18vh] gap-2 '>
//             <Header />
//             <div className={`${barlow.className} sticky top-0 z-40 flex items-center justify-between px-[40px] h-[60%]`}>
//                 <Link href={"/"} className='flex items-center gap-4 ' >
//                     <NavIcon width="40px" />
//                     <p className={`text-[40px] font-extrabold text-headerInfoBgColor`}>G-WISSEN LTD</p>
//                 </Link>

//                 <div className='flex gap-[40px]'>
//                     {navLinks.map(({ name, href }, index) => (
//                         <Link key={index} className={`${currentPath === href ? 'text-headerInfoBgColor' : 'text-navBarLinksColor'} ${href === '/app/blogs' ? 'flex items-center gap-1' : ''} font-semibold `} href={href}>{name} {href === '/app/blogs' && <div className='w-[6px] h-[4px] bg-black'></div>
//                         }</Link>

//                     ))}
//                 </div>
//             </div>


//         </nav>
//     )
// }



// export default Navbar


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
                        {/* <div className=' w-[60%] border border-black  sm:h-full md:h-[10%] '>
                            <NavIcon className="h-[20%] p-2 border border-black mx-auto w-[20%]" />
                        </div> */}

                        <NavIcon className="w-13" />

                        <p className='text-[6vw] md:text-[2.8vw] font-extrabold text-headerInfoBgColor'>G-WISSEN LTD</p>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex md:gap-[3vw]'>
                        {navLinks.map(({ name, href }, index) => (
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

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className='md:hidden'>
                        <div className='flex flex-col px-4 py-2 bg-white border-t'>
                            {navLinks.map(({ name, href }, index) => (
                                <Link
                                    key={index}
                                    className={`${currentPath === href ? 'text-headerInfoBgColor' : 'text-navBarLinksColor'}
                                        py-3 font-semibold hover:text-headerInfoBgColor transition-colors`}
                                    href={href}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;