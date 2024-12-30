"use client"
import React, { useState } from 'react'
import { Open_Sans } from 'next/font/google';
import Link from 'next/link';
import InfoIcon from '../../public/icons/infoIcon.svg'
import PhoneIcon from "../../public/icons/phoneIcon.svg"
import { Menu, X } from 'lucide-react';


const open_sans = Open_Sans({
    display: "swap",
    subsets: ['latin'],
    variable: "--font-open-sans",
    weight: ["300", "400", "500", "600", "700", "800"],
});



const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className={`${open_sans.variable}`}>
            {/* Desktop View */}
            <div className="hidden md:flex justify-between items-center bg-headerBgColor h-[35px]">
                <div className="flex items-center ps-[35px] w-[40%]">
                    <Link className="border-r-headerLinkBorderColor border-r-2 flex justify-center w-[30%] items-center h-full text-welcomeBgColor" href="/frequently_asked">FAQs</Link>
                    <Link className="border-r-headerLinkBorderColor border-r-2 flex justify-center w-[30%] items-center h-full text-welcomeBgColor" href="/contact">Support</Link>
                    <Link className="flex justify-center w-[30%] h-full items-center text-welcomeBgColor" href="/privacy_policy">Privacy Policy</Link>
                </div>

                <div className="flex items-center ps-9 h-full justify-center pe-[2%] gap-[10%] text-white w-[40%] bg-headerInfoBgColor inclined-left">
                    <a
                        href="mailto:gwissenconsult@gmail.com"
                        className="flex text-[1.3vw] items-center gap-1 font-semibold"

                    >

                        <InfoIcon /> gwissenconsult@gmail.com
                    </a>


                    <a href="tel:+250788647871" className="flex  text-[1.3vw] items-center gap-2 font-semibold">
                        <PhoneIcon />+250788647871
                    </a>
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden">
                <div className="bg-headerBgColor flex justify-between items-center px-4 h-[35px]">
                    <Link href="/frequently_asked" className="text-welcomeBgColor">
                        FAQs
                    </Link>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-welcomeBgColor p-1"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X size={20} />
                        ) : (
                            <Menu size={20} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute z-50 w-full bg-headerBgColor shadow-lg">
                        <div className="flex flex-col py-2">
                            <Link
                                className="px-4 py-2 text-welcomeBgColor hover:bg-gray-100"
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Support
                            </Link>
                            <Link
                                className="px-4 py-2 text-welcomeBgColor hover:bg-gray-100"
                                href="/privacy_policy"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Privacy Policy
                            </Link>
                        </div>

                        <div className="bg-headerInfoBgColor text-white py-3 px-4">
                            <Link href="" className="flex items-center gap-1 font-semibold mb-2">
                                <InfoIcon /> info@example.com
                            </Link>
                            <Link href="" className="flex items-center gap-2 font-semibold">
                                <PhoneIcon />+250788647871
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;