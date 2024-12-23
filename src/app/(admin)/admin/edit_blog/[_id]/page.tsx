"use client"

import { Barlow } from 'next/font/google'
import React, { ChangeEvent, DragEvent, FormEvent, useEffect, useState } from 'react'
import UploadImageSvg from "../../../../../../public/icons/dashboard/uploadImageDashboard.svg"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useBlogs } from '@/hooks/useBlogs'
import { CldImage } from 'next-cloudinary'
import AdminHeader from '@/components/AdminHeader'

const barlow = Barlow({
    display: 'swap',
    subsets: ['latin'],
    variable: "--font-barlow",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

interface EditBlogFormData {
    title: string;
    category: string;
    description: string;
}

const EditBlog = ({ params }: { params: { _id: string } }) => {

    const [imgBlobUrl, setImgBlobUrl] = useState<string>("")
    const [imageObj, setImgObj] = useState<File | null>(null)
    const [disableEditBtn, setDisableEditBtn] = useState<boolean>(false)
    const { updateBlog, blogSuccessMsgs, loadingStates, fetchSingleBlog, singleBlog, } = useBlogs()
    const router = useRouter()
    const [editBlogFormData, setEditBlogFormData] = useState<EditBlogFormData>({
        title: "",
        category: "",
        description: "",

    })



    const getImagePreview = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files && files.length > 0) {
            const uploadedImg = files[0]

            setImgObj(uploadedImg)

            const blogUrl = URL.createObjectURL(uploadedImg)

            setImgBlobUrl(blogUrl)
        }

    }

    const handleDropEvent = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        e.stopPropagation()

        const files = e.dataTransfer?.files
        if (files && files.length > 0) {
            const uploadedImg = files[0]

            setImgObj(uploadedImg)

            const blogUrl = URL.createObjectURL(uploadedImg)

            setImgBlobUrl(blogUrl)
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

    const handleEditedBlogDataChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setEditBlogFormData(
            (previousEditedBlogData) => ({
                ...previousEditedBlogData,
                [name]: value
            })
        )
    }

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault()

        const data = new FormData()

        if (imageObj) data.append("file", imageObj)

        data.append("title", editBlogFormData.title)
        data.append("category", editBlogFormData.category)
        data.append("description", editBlogFormData.description)


        updateBlog(params._id, data)

    }


    useEffect(() => {

        if (blogSuccessMsgs.updateSuccessMsg) {


            setEditBlogFormData({
                title: "",
                category: "",
                description: ""
            })

            setImgBlobUrl("")
            setImgObj(null)

            router.replace("/admin/blogs")

        }

    }, [blogSuccessMsgs.updateSuccessMsg, router])


    useEffect(() => {
        fetchSingleBlog(params._id)
    }, [params._id])

    useEffect(() => {
        if (singleBlog) {
            setEditBlogFormData({
                title: singleBlog.title,
                category: singleBlog.category,
                description: singleBlog.description
            })

            // If you want to set initial image
        }

    }, [singleBlog])

    useEffect(() => {

        if (
            singleBlog?.title === editBlogFormData.title &&
            singleBlog?.description === editBlogFormData.description &&
            singleBlog?.category === editBlogFormData.category &&
            !imageObj
        ) {
            setDisableEditBtn(true);
        } else {
            setDisableEditBtn(false)
        }


    }, [editBlogFormData, singleBlog, imageObj])

    return (
        <div className={`flex flex-col  w-[91%] h-[96%] mt-2  ${barlow.className}`}>
            <AdminHeader backBtnRequired={true} />
            <div className='h-[4%] w-full flex items-center gap-2'>
                <span className=' sm:text-[10vw] md:text-[1.7em]'>Edit Blog:</span>
                <span className='text-headerInfoBgColor text-[1.2em] w-[40%] font-semibold truncate'>
                    {singleBlog?.title}
                </span>
            </div>

            <div className='flex flex-col gap-3 h-[91%] p-3'>
                <p className='text-[1.5em] h-[7%] '>All blogs</p>
                <form onSubmit={handleOnSubmit} className='flex flex-col gap-5 h-[97%]'>
                    <div className='grid grid-cols-1 md:grid-cols-2 h-auto justify-evenly items-center'>
                        {/* Other input fields */}
                        <div className='flex flex-col col-span-1 gap-3'>
                            <div className='flex flex-col gap-1 text-[1.2em]'>
                                <label htmlFor="title">Title</label>
                                <input
                                    className='rounded-[15px] p-3 border border-inputBorderColor outline-none'
                                    type="text"
                                    placeholder='Blog Title'
                                    name='title'
                                    value={editBlogFormData.title}
                                    onChange={handleEditedBlogDataChange}
                                />
                            </div>

                            <div className='flex flex-col gap-1 text-[1.2em]'>
                                <label htmlFor="title">Blog Category</label>
                                <input
                                    className='rounded-[15px] p-3 border border-inputBorderColor outline-none'
                                    type="text"
                                    placeholder='Blog Category'
                                    name='category'
                                    value={editBlogFormData.category}
                                    onChange={handleEditedBlogDataChange}

                                />
                            </div>

                            <div className='flex flex-col gap-1 text-[1.2em]'>
                                <label htmlFor="title">Blog Description</label>
                                <textarea
                                    className='rounded-[15px] h-[13em] md:h-[14em] p-3 outline-none resize-none border border-inputBorderColor'
                                    name="description"
                                    value={editBlogFormData.description}
                                    onChange={handleEditedBlogDataChange}
                                    id="blog_description"
                                    placeholder='Add Description'
                                ></textarea>
                            </div>
                        </div>
                        {/* Other input fields */}


                        {/* Upload image */}
                        <div className='flex flex-col col-span-1 md:mt-0 mt-6 justify-center ]gap-5 h-[50vh] md:h-[85%]'>
                            <p className='text-[1.2em] h-[5%] mb-3'>Upload cover image</p>
                            <label
                                onDrop={(e) => handleDropEvent(e)}
                                onDragEnter={(e) => handleDragEnter(e)}
                                onDragOver={(e) => handleDragOver(e)}
                                // onDragLeave={(e)=>handleDragLeave(e)}
                                id='blog_image'
                                className={`cursor-pointer flex relative bg-headerInfoBgColor bg-opacity-[6%] flex-col  justify-center items-center border-[1px] border-dashed  border-headerInfoBgColor w-full h-[95%] rounded-[25px]`}>
                                <input
                                    onChange={(e) => getImagePreview(e)}
                                    id='blog_image'
                                    type="file"
                                    name='file'
                                    accept='image/*'
                                    className='hidden' />

                                {singleBlog &&
                                    <div className='w-full h-full rounded-[25px] '>
                                        {imgBlobUrl ? (

                                            <div className='w-full h-full rounded-[25px] '>
                                                <Image className=' w-full h-full  rounded-[25px] object-cover ' fill src={imgBlobUrl} alt={'uploadedImage'} />
                                            </div>
                                        ) :
                                            (
                                                <CldImage
                                                    src={singleBlog?.imagePublicId || "blogs/Name"}
                                                    fill
                                                    alt='img'
                                                    crop="fill"
                                                    gravity='auto'
                                                    className='w-full h-full object-cover  rounded-[25px]'
                                                />
                                            )
                                        }
                                    </div>
                                }

                                <div className={`${singleBlog ? "absolute rounded-[25px] w-[638px] h-[400px] bg-white bg-opacity-[.8]" : ""} w-full h-full flex flex-col justify-center items-center gap-3 `}>
                                    <UploadImageSvg className="mb-7" />
                                    <p className='text-[1.9em] text-headerInfoBgColor font-semibold'>Upload Image</p>
                                    <p className='text-[1.2em] text-dragAndDropColor'>{imageObj ? imageObj.name : singleBlog ? singleBlog.fileName : 'Drag & Drop or click to add an image'}</p>
                                </div>

                            </label>
                        </div>
                        {/* Upload image */}

                    </div>

                    <button disabled={disableEditBtn} className={`${disableEditBtn ? "bg-red-400" : "bg-headerInfoBgColor"} text-[1.2em] p-3 rounded-[14px] text-white font-semibold`}>{loadingStates.loadingUpdateBlog ? "loading" : "Edit Blog "}</button>
                </form>
            </div>
        </div>
    )
}

export default EditBlog