
import { dayExtractor, monthShortener, yearExtractor } from '@/utils/dateDetailsExtractor'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import React from 'react'

interface BlogCardProps {
    _id: string;
    imagePublicId: string;
    index: number;
    lastlyUpdatedDate: string;
    title: string;
    category: string;
    description: string
    loading?: boolean

}
const BlogCard = ({ _id, imagePublicId, index, lastlyUpdatedDate, title, category, description }: BlogCardProps) => {

    return (
        <>

            <Link href={`blogs/${_id}`} key={index} className='flex flex-col rounded-[15px] h-[420px] bg-headerBgColor w-full md:w-[25vw]'>
                <CldImage
                    src={imagePublicId}
                    width={100}
                    height={100}
                    alt='img'
                    crop="fill"
                    gravity='auto'
                    className='h-[75%] rounded-t-[15px] w-[100%]'
                />
                <div className='flex h-[25%]'>
                    <div className='w-[20%] rounded-bl-[15px] bg-headerInfoBgColor h-full flex flex-col justify-center items-center'>
                        <p className='text-white'>{dayExtractor(lastlyUpdatedDate)}</p>
                        <p className='text-textColor'>{monthShortener(lastlyUpdatedDate)}</p>
                        <p className='text-white'>{yearExtractor(lastlyUpdatedDate)}</p>
                    </div>
                    <div className='flex flex-col rounded-br-[15px] justify-center w-[80%] py-2'>
                        <div className='flex justify-evenly w-full'>
                            <p className='w-[45%] text-ellipsis overflow-hidden whitespace-nowrap text-welcomeBgColor'>{title}</p>
                            <p className='w-[45%] text-ellipsis overflow-hidden whitespace-nowrap text-welcomeBgColor'>{category}</p>
                        </div>
                        <p className='text-[1.1em] overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-textColor px-3'>{description}</p>
                    </div>
                </div>
            </Link>


        </>
    )
}

export default BlogCard