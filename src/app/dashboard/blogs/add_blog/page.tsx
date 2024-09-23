"use client"

import { Barlow } from 'next/font/google'
import React, { ChangeEvent, DragEvent, useState } from 'react'
import UploadImageSvg from "../../../../../public/icons/dashboard/uploadImageDashboard.svg"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const barlow = Barlow({
    display: 'swap',
    subsets: ['latin'],
    variable: "--font-barlow",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const AddBlog = () => {

    const [imagePreview, setImagePreview] = useState<string>("")
    const router = useRouter()

    const getImagePreview = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files && files.length > 0) {
            const uploadedImg = files[0]
            const blogUrl = URL.createObjectURL(uploadedImg)

            setImagePreview(blogUrl)
        }

    }

    const handleDropEvent = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        e.stopPropagation()

        const files = e.dataTransfer?.files
        if (files && files.length > 0) {
            const uploadedImg = files[0]
            const blogUrl = URL.createObjectURL(uploadedImg)

            setImagePreview(blogUrl)
        }
    }

    const handleDragEnter = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        e.stopPropagation()

    }


    const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        e.stopPropagation()

    }

    return (
        <div className={`flex flex-col gap-4 w-[94%] h-[96%] mt-2  ${barlow.className}`}>
            <div className='flex justify-between h-[7%]'>
                <p className='text-[2em]'><span className='font-bold'>Dashboard / </span>Blogs / Add Blog</p>
                <button onClick={()=>router.back()} className='text-[1.4em] bg-welcomeBgColor text-white w-[6em] rounded-[8px] text-center p-2'>Back</button>
            </div>

            <div className='flex flex-col gap-3 h-[92%] p-3'>
                <p className='text-[1.5em] h-[7%] '>All blogs</p>
                <form action="" className='flex flex-col gap-5 h-[97%]'>
                    <div className='flex h-[95%] justify-evenly items-center'>
                        <div className='flex flex-col gap-3 w-[45%]'>
                            <div className='flex flex-col gap-1 text-[1.2em]'>
                                <label htmlFor="title">Title</label>
                                <input className='rounded-[15px] p-3 border border-inputBorderColor outline-none' type="text" placeholder='Blog Title' />
                            </div>

                            <div className='flex flex-col gap-1 text-[1.2em]'>
                                <label htmlFor="title">Blog Category</label>
                                <input className='rounded-[15px] p-3 border border-inputBorderColor outline-none' type="text" placeholder='Blog Title' />
                            </div>

                            <div className='flex flex-col gap-1 text-[1.2em]'>
                                <label htmlFor="title">Blog Description</label>
                                <textarea className='rounded-[15px] h-[14em] p-3 outline-none resize-none border border-inputBorderColor' name="blog_desc" id="blog_description" placeholder='Add Description'></textarea>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center gap-5 h-[85%] w-[45%] '>
                            <p className='text-[1.2em] h-[5%]'>Upload cover image</p>
                            <label
                                onDrop={(e) => handleDropEvent(e)}
                                onDragEnter={(e) => handleDragEnter(e)}
                                onDragOver={(e) => handleDragOver(e)}
                                // onDragLeave={(e)=>handleDragLeave(e)}
                                id='blog_image'
                                className={`flex relative bg-headerInfoBgColor bg-opacity-[6%] flex-col  justify-center items-center border-[1px] border-dashed  border-headerInfoBgColor w-full h-[95%] rounded-[25px]`}>
                                <input onChange={(e) => getImagePreview(e)} id='blog_image' type="file" accept='image/*' className='hidden' />

                                {imagePreview &&
                                    <div className='w-full h-full rounded-[25px] '>
                                        <Image className=' w-full h-[405px]  rounded-[25px] ' width={300} height={500} src={imagePreview} alt={'uploadedImage'} />
                                    </div>
                                }

                                <div className={`${imagePreview ? "absolute rounded-[25px] w-[638px] h-[400px] bg-white bg-opacity-[.8]": ""} w-full h-full flex flex-col justify-center items-center gap-3 `}>
                                    <UploadImageSvg className="mb-7" />
                                    <p className='text-[1.9em] text-headerInfoBgColor font-semibold'>Upload Image</p>
                                    <p className='text-[1.2em] text-dragAndDropColor'>Drag & Drop or click to add an image</p>
                                </div>

                            </label>
                        </div>

                    </div>

                    <button className='bg-headerInfoBgColor text-[1.2em] p-3 rounded-[14px] text-white font-semibold'>Add Blog</button>
                </form>
            </div>
        </div>
    )
}

export default AddBlog