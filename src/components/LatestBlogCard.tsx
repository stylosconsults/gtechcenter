import { truncatedText } from '@/utils/truncateText';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

interface LatestBlogCardProps {
    description: string;
    imagePublicId: string;
    _id: string;
    index: number
}
const LatestBlogCard = ({ description, imagePublicId, _id, index }: LatestBlogCardProps) => {
    const [shortDescription, setshortDescription] = useState(description)
    const parentRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        const updateDescription = () => {
            if (parentRef.current) {
                const parentWidth = parentRef.current.offsetWidth
                setshortDescription(truncatedText(description, parentWidth, 10))
            }
        }

        updateDescription()
        window.addEventListener('resize', updateDescription)

        return () => window.addEventListener('resize', updateDescription)

    }, [description])
    return (
        <Link ref={parentRef} href={`/blogs/${_id}`} key={index} className='flex h-[20%] items-center'>
            <CldImage
                src={imagePublicId}
                width={100}
                height={100}
                alt='img'
                crop="fill"
                gravity='auto'
                className='w-[40%] h-full'
            />
            <p className='bg-headerBgColor w-full h-[87%] flex items-center ps-3 text-textColor font-semibold'>{shortDescription}</p>
        </Link>
    )
}

export default LatestBlogCard