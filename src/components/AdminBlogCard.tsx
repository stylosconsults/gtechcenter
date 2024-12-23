
import { dayExtractor, monthShortener, yearExtractor } from '@/utils/dateDetailsExtractor'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import React from 'react'
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
const AdminBlogCard = ({ _id, imagePublicId, index, lastlyUpdatedDate, title, category, description }: BlogCardProps) => {
   
    return (
        <>
           

                    <div key={index} className='bg-headerBgColor rounded-[15px] flex flex-col col-span-1 justify-between h-[400px]'>
                        <CldImage
                            src={imagePublicId}
                            width={100}
                            height={100}
                            alt='img'
                            crop="fill"
                            gravity='auto'
                            className='h-[73%] rounded-t-[15px] w-[100%]'
                        />
                        {/* <Image className='w-full' src={image} alt='Image' /> */}
                        <div className='flex justify-around items-center h-[27%] rounded-bl-[15px] '>
                            <div className='w-[15%] rounded-bl-[15px] bg-headerInfoBgColor h-full flex flex-col justify-center items-center'>
                                <p className='text-white'>{dayExtractor(lastlyUpdatedDate)}</p>
                                <p className='text-textColor'>{monthShortener(lastlyUpdatedDate)}</p>
                                <p className='text-white'>{yearExtractor(lastlyUpdatedDate)}</p>
                            </div>

                            <div className='flex rounded-bl-[15px] flex-col w-[70%] justify-evenly gap-1' >
                                <div className={`flex gap-3 text-welcomeBgColor justify-evenly ${open_sans.className}`}>
                                    <p title={title} className='w-45% text-ellipsis whitespace-nowrap overflow-hidden'>{title}</p>
                                    <p title={category} className='w-45% text-ellipsis whitespace-nowrap overflow-hidden'>{category}</p>
                                </div>

                                <p title={description} className={`text-[1.2em] overflow-hidden text-ellipsis whitespace-nowrap text-textColor font-semibold leading-[1.2em]  ${inter.className}`}>{description}</p>
                            </div>

                            <div className='flex flex-col gap-2 w-[13%] justify-center items-center  '>
                                {/* <Link href={`/admin/blogs?show_delete=true&id=${_id}`}><DeleteIcon /></Link> */}
                                <Link href={`/admin/delete_blog/${_id}`}><DeleteIcon /></Link>
                                <Link href={`/admin/edit_blog/${_id}`}><EditIcon /></Link>
                            </div>
                        </div>
                    </div>
            

        </>
    )
}

export default AdminBlogCard