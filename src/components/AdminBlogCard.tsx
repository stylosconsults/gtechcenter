
import { dayExtractor, monthShortener, yearExtractor } from '@/utils/dateDetailsExtractor'
import { truncatedText } from '@/utils/truncateText';
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import DeleteIcon from "../../public/icons/dashboard/deleteIconDashboard.svg"
import EditIcon from "../../public/icons/dashboard/editDashboard.svg"
import {  Inter, Open_Sans } from 'next/font/google';


const open_sans = Open_Sans({
    display: "swap",
    subsets: ['latin'],
    variable: "--font-open-sans",
    weight: ['300', '400', '500', '600', '700', '800'],
});

const inter = Inter({
    display: "swap",
    subsets: ['latin'],
    variable: "--font-inter",
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // All available weights
});


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
const AdminBlogCard = ({ _id, imagePublicId, index, lastlyUpdatedDate, title, category, description, loading }: BlogCardProps) => {
    const [shortDescription, setshortDescription] = useState(description)
    const parentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const updateDescription = () => {
            if (parentRef.current) {
                const parentWidth = parentRef.current.offsetWidth
                setshortDescription(truncatedText(description, parentWidth, 5.5))
            }
        }

        updateDescription()
        window.addEventListener('resize', updateDescription)

        return () => window.addEventListener('resize', updateDescription)

    }, [description])

    return (
        <>
            {loading ?
                (
                    <div className='flex items-center justify-center h-[420px] bg-headerBgColor w-[25vw]'>loading...</div>
                )
                :
                (
                 

                    <div ref={parentRef} key={index} className='bg-headerBgColor  flex flex-col justify-between h-[490px] w-[420px]'>
                        <CldImage
                            src={imagePublicId}
                            width={100}
                            height={100}
                            alt='img'
                            crop="fill"
                            gravity='auto'
                            className='h-[73%] w-[100%]'
                        />
                        {/* <Image className='w-full' src={image} alt='Image' /> */}
                        <div className='flex justify-around items-center h-[27%] '>
                            <div className='w-[20%] bg-headerInfoBgColor h-full flex flex-col justify-center items-center'>
                                <p className='text-white'>{dayExtractor(lastlyUpdatedDate)}</p>
                                <p className='text-textColor'>{monthShortener(lastlyUpdatedDate)}</p>
                                <p className='text-white'>{yearExtractor(lastlyUpdatedDate)}</p>
                            </div>

                            <div className='flex flex-col w-[80%] justify-evenly gap-1' >
                                <div className={`flex  text-welcomeBgColor justify-evenly ${open_sans.className}`}>
                                    <p>{title}</p>
                                    <p>{category}
                                    </p>
                                </div>

                                <p className={`text-[1.2em] w-[95%] mx-auto text-textColor font-semibold leading-[1.2em]  ${inter.className}`}>{shortDescription}</p>
                            </div>

                            <div className='flex flex-col gap-3'>
                                {/* <Link href={`/admin/blogs?show_delete=true&id=${_id}`}><DeleteIcon /></Link> */}
                                <Link href={`/admin/delete_blog/${_id}`}><DeleteIcon /></Link>
                                <Link href={`/admin/edit_blog/${_id}`}><EditIcon /></Link>
                            </div>
                        </div>
                    </div>
                )

            }

        </>
    )
}

export default AdminBlogCard