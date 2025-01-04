"use client"
import React from 'react'
import { Open_Sans } from 'next/font/google';
import Link from 'next/link';
import InfoIcon from '../../public/icons/infoIcon.svg'
import PhoneIcon from "../../public/icons/phoneIcon.svg"


const open_sans = Open_Sans({
    display: "swap",
    subsets: ['latin'],
    variable: "--font-open-sans",
    weight: ["300", "400", "500", "600", "700", "800"],
});



const Header = () => {

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

          
        </div>
    );
};

export default Header;