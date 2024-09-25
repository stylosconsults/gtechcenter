"use client"
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

type PaginationControlsTypes = {
    numOfBlogs: number,
    baseUrl: string
}

const PaginationControls = ({ numOfBlogs, baseUrl }: PaginationControlsTypes) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') ? searchParams.get('page') : 1
    const per_page = searchParams.get('per_page') ? searchParams.get('per_page') : 5

    const numOfLinks:number = Math.ceil(numOfBlogs / Number(per_page))
    const pageLinks = Array.from({ length: numOfLinks }, (_, index) => index + 1); // [1, 2, 3, ...]

    return (
        <div className='flex w-[200px] ms-11 border-2 border-headerLinkBorderColor'>
            <button  className='w-[30%] p-2 border-2 border-r-headerLinkBorderColor border-t-0 border-b-0 border-l-0 '></button>
            {
                pageLinks.map((pageNumber, index)=>(
                    <button
                    onClick={()=>router.push(`${baseUrl}?page=${pageNumber}`)} 
                    key={index}
                    className={`w-[20%] p-2 border-2 border-r-headerLinkBorderColor border-t-0 border-b-0 border-l-0 ${page == pageNumber ? 'bg-headerInfoBgColor text-white' : ''}`}
                >
                    {pageNumber}
                </button>
                ))
            }
            <button className='w-[30%] p-2'></button>
        </div>
    )
}

export default PaginationControls