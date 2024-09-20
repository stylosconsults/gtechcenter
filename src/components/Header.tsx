// "use client"
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
    <div className={`${open_sans.variable } flex justify-between items bg-headerBgColor h-[35px]`}>
        <div className='flex items-center ps-[35px] w-[40%]'>
            <Link className='border-r-headerLinkBorderColor border-r-2 flex justify-center w-[30%] items-center h-full text-welcomeBgColor' href={""}>FAQs</Link>
            <Link className='border-r-headerLinkBorderColor border-r-2 flex justify-center w-[30%] items-center h-full text-welcomeBgColor' href={""}>Support</Link>
            <Link className='border-r-headerLinkBorderColor border-r-2 flex justify-center w-[30%] items-center h-full text-welcomeBgColor' href={""}>Privacy</Link>
            <Link className='border-r-headerLinkBorderColor border-r-2 flex justify-center w-[30%] items-center h-full text-welcomeBgColor' href={""}>Policy</Link>
            <Link className='flex justify-center w-[30%] h-full items-center text-welcomeBgColor' href={""}>Career</Link>
        </div>

        <div className='flex items-center ps-9 justify-center pe-[35px] gap-[30px] text-white w-[30%]  bg-headerInfoBgColor inclined-left'>
            <Link href={""} className='flex items-center gap-1 font-semibold '> <InfoIcon /> info@example.com</Link>
            <Link href={""} className='flex items-center gap-2 font-semibold'> <PhoneIcon />+250788647871</Link>
        </div>


    </div>
  )
}

export default Header