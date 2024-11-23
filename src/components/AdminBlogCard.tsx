
import { dayExtractor, monthShortener, yearExtractor } from '@/utils/dateDetailsExtractor'
import { truncatedText } from '@/utils/truncateText';
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import DeleteIcon from "../../public/icons/dashboard/deleteIconDashboard.svg"
import EditIcon from "../../public/icons/dashboard/editDashboard.svg"
import { Barlow, Inter, Open_Sans } from 'next/font/google';


const barlow = Barlow({
    display: 'swap',
    subsets: ['latin'],
    variable: "--font-barlow",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

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
                    // <Link ref={parentRef} href={`blogs/${_id}`} key={index} className='flex flex-col h-[420px] bg-headerBgColor md:w-[25vw]'>
                    //     <CldImage
                    //         src={imagePublicId}
                    //         width={100}
                    //         height={100}
                    //         alt='img'
                    //         crop="fill"
                    //         gravity='auto'
                    //         className='h-[75%] w-[100%]'
                    //     />
                    //     <div className='flex h-[25%]'>
                    //         <div className='w-[20%] bg-headerInfoBgColor h-full flex flex-col justify-center items-center'>
                    //             <p className='text-white'>{dayExtractor(lastlyUpdatedDate)}</p>
                    //             <p className='text-textColor'>{monthShortener(lastlyUpdatedDate)}</p>
                    //             <p className='text-white'>{yearExtractor(lastlyUpdatedDate)}</p>
                    //         </div>
                    //         <div className='flex flex-col justify-center w-[90%] py-2'>
                    //             <div className='flex justify-evenly w-full'>
                    //                 <p className='text-welcomeBgColor'>{title}</p>
                    //                 <p className='text-welcomeBgColor'>{category}</p>
                    //             </div>
                    //             <p className='text-[1.1em] font-semibold text-textColor px-3'>{shortDescription}</p>
                    //         </div>
                    //     </div>
                    // </Link>

                    <div ref={parentRef} key={index} className='bg-headerBgColor  flex flex-col justify-between h-[420px] w-[420px]'>
                        <CldImage
                            src={imagePublicId}
                            width={100}
                            height={100}
                            alt='img'
                            crop="fill"
                            gravity='auto'
                            className='h-[75%] w-[100%]'
                        />
                        {/* <Image className='w-full' src={image} alt='Image' /> */}
                        <div className='flex justify-around items-center h-[30%] '>
                            <div className='w-[20%] bg-headerInfoBgColor h-full flex flex-col justify-center items-center'>
                                <p className='text-white'>{dayExtractor(lastlyUpdatedDate)}</p>
                                <p className='text-textColor'>{monthShortener(lastlyUpdatedDate)}</p>
                                <p className='text-white'>{yearExtractor(lastlyUpdatedDate)}</p>
                            </div>

                            <div className='flex flex-col w-[80%] justify-between  gap-3' >
                                <div className={`flex  text-welcomeBgColor justify-evenly ${open_sans.className}`}>
                                    <p>{title}</p>
                                    <p>{category}
                                    </p>
                                </div>

                                <p className={`text-[1.4em] w-[95%] mx-auto text-textColor font-semibold leading-[1.2em]  ${inter.className}`}>{shortDescription}</p>
                            </div>

                            <div className='flex flex-col gap-3'>
                                <Link href={`/admin/blogs?show_delete=true&id=${_id}`}><DeleteIcon /></Link>
                                <Link href={`/admin/blogs/${_id}`}><EditIcon /></Link>
                            </div>
                        </div>
                    </div>
                )

            }

        </>
    )
}

export default AdminBlogCard