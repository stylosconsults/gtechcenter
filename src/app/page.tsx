"use client"

import Navbar from '@/components/Navbar'
import React from 'react'
import bgImg from "@/public/images/bgImg.svg"
import Image from 'next/image'
import { Barlow } from 'next/font/google'

const barlow = Barlow({
  display : "swap",
  variable: "--font-barlow",
  subsets: ['latin'], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const page = () => {
  return (
    <div className='border border-red-400'>
      <div className={`bg-[url('/images/bgImg.svg')] bg-cover h-[80vh] bg-center text-white flex flex-col justify-center items-center gap-9 px-[200px] ${barlow.variable}`}>
        <p className='font-semibold text-[20px]'>
          IT CONSULTANCY
        </p>

        <p className='text-[90px] text-center font-bold leading-[90px]'>
          We Provide Solution On Your Business
        </p>

        <div className='flex border border-red-500 gap-3'> 
          <button className='bg-headerInfoBgColor rounded-[30px] p-3 w-[10em] font-semibold'>
            Get quote
          </button>

          <button className='bg-white text-black rounded-[30px] p-3 w-[10em] font-semibold'>
            Contact Us
          </button>
        </div>
      </div>

      
    </div>
  )
}

export default page