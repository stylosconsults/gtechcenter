import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import React from 'react'

interface LatestBlogCardProps {
    description: string;
    imagePublicId: string;
    _id: string;
}
const LatestBlogCard = ({ description, imagePublicId, _id }: LatestBlogCardProps) => {

    return (
        <Link href={`/blogs/${_id}`} className='flex h-[80px]  items-center'>
            <CldImage
                src={imagePublicId}
                width={100}
                height={100}
                alt='img'
                crop="fill"
                gravity='auto'
                className='w-[40%] h-full'
            />
            <div className='bg-headerBgColor text-ellipsis whitespace-nowrap overflow-hidden h-[75%] flex items-center justify-center w-[90%] text-textColor font-semibold'>
                <p className=' text-ellipsis whitespace-nowrap overflow-hidden w-[98%]'>{description}</p>
            </div>
        </Link>
    )
}

export default LatestBlogCard