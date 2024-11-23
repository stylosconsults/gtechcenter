
import { dayExtractor, monthShortener, yearExtractor } from '@/utils/dateDetailsExtractor'
import { truncatedText } from '@/utils/truncateText';
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

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
const BlogCard = ({ _id, imagePublicId, index, lastlyUpdatedDate, title, category, description, loading }: BlogCardProps) => {
    const [shortDescription, setshortDescription] = useState(description)
    const parentRef = useRef<HTMLAnchorElement>(null)

    useEffect(()=>{
        const updateDescription = ()=>{
            if(parentRef.current){
                const parentWidth = parentRef.current.offsetWidth
                setshortDescription(truncatedText(description, parentWidth, 5.5))
            }
        }

        updateDescription()
        window.addEventListener('resize', updateDescription)

        return ()=> window.addEventListener('resize', updateDescription)

    }, [description])
    return (
        <>
            {loading ?
                (
                    <div className='flex items-center justify-center h-[420px] bg-headerBgColor w-[25vw]'>loading...</div>
                )
                :
                (
                    <Link ref={parentRef} href={`blogs/${_id}`} key={index} className='flex flex-col h-[420px] bg-headerBgColor md:w-[25vw]'>
                        <CldImage
                            src={imagePublicId}
                            width={100}
                            height={100}
                            alt='img'
                            crop="fill"
                            gravity='auto'
                            className='h-[75%] w-[100%]'
                        />
                        <div className='flex h-[25%]'>
                            <div className='w-[20%] bg-headerInfoBgColor h-full flex flex-col justify-center items-center'>
                                <p className='text-white'>{dayExtractor(lastlyUpdatedDate)}</p>
                                <p className='text-textColor'>{monthShortener(lastlyUpdatedDate)}</p>
                                <p className='text-white'>{yearExtractor(lastlyUpdatedDate)}</p>
                            </div>
                            <div className='flex flex-col justify-center w-[90%] py-2'>
                                <div className='flex justify-evenly w-full'>
                                    <p className='text-welcomeBgColor'>{title}</p>
                                    <p className='text-welcomeBgColor'>{category}</p>
                                </div>
                                <p className='text-[1.1em] font-semibold text-textColor px-3'>{shortDescription}</p>
                            </div>
                        </div>
                    </Link>
                )

            }

        </>
    )
}

export default BlogCard