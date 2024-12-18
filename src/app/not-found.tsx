"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const not_found = () => {
    const router = useRouter()
    return (
        <div className=' mb-[10em] border border-red-500 h-[100vh] w-[100vw] flex items-center justify-center'>

            <div className='flex flex-col items-center gap-7'>
                <p className='text-[6vw]'>404 Not Found</p>
                <p className='text-[1.4vw]'>Your visited page not found. You may go home page.</p>

                <button className='text-[1.3vw]  bg-red-500 p-2 px-5 rounded-[5px] text-white' onClick={()=> router.back()}>Back to homepage</button>
            </div>
        </div>
    )
}

export default not_found