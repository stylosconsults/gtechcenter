
import React from 'react'

const LoadingBlogCard = () => {


    return (
        <div className='flex items-center justify-center h-[420px] bg-headerBgColor w-[25vw] animate-pulse'>
            <div className='flex flex-col gap-4 w-full p-4'>
                <div className='h-48 bg-gray-300 rounded'></div>
                <div className='h-4 bg-gray-300 rounded w-3/4'></div>
                <div className='h-4 bg-gray-300 rounded w-1/2'></div>
            </div>
        </div>
    )
}

export default LoadingBlogCard