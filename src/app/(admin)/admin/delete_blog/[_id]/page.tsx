"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useBlogs } from "@/hooks/useBlogs";
import DeleteDashBlogSvg from "../../../../../../public/icons/dashboard/deleteIllustrationDashboard.svg";
import { Barlow, Inter } from "next/font/google";

const inter = Inter({
    display: "swap",
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow({
    display: "swap",
    subsets: ["latin"],
    variable: "--font-barlow",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const DeletePage = ({ params }: { params: { _id: string } }) => {
    const [disableDeleteBtn, setDisableDeleteBtn] = useState<boolean>(false);
    const { loadingStates, blogSuccessMsgs, deleteBlog } = useBlogs();
    const router = useRouter();

    const handleBlogDelete = async () => {
        if (!params._id) return;
        await deleteBlog(params._id);
    };

    useEffect(() => {
        setDisableDeleteBtn(loadingStates.loadingSingleBlog || loadingStates.loadingDeleteBlog);
    }, [loadingStates.loadingSingleBlog, loadingStates.loadingDeleteBlog]);

    useEffect(() => {
        if (blogSuccessMsgs.deleteSuccessMsg) {
            router.replace("/admin/blogs");
        }
    }, [blogSuccessMsgs.deleteSuccessMsg, router]);

    return (
        <div className="w-full h-full absolute flex justify-center items-center bg-black bg-opacity-20 top-0 left-0">
            <div className="flex flex-col justify-evenly items-center w-[70%] md:w-[35%] h-auto bg-white opacity-[10] rounded-[15px] p-2">

                <div className='w-full h-auto sm:h-auto md:h-[68%]  mx-auto col-span-1'>
                    <DeleteDashBlogSvg className="h-[95%] mx-auto w-[90%]" />
                </div>

                <p className={`${inter.className} text-[1.1em]`}>
                    Are you sure you want to delete this blog post?
                </p>
                <div className={`${barlow.className} flex w-[100%] justify-center gap-5`}>
                    <button
                        className="bg-welcomeBgColor text-white w-[10em] p-[10px] text-[1.2em] text-center rounded-[14px]"
                        onClick={router.back}
                    >
                        Remove
                    </button>
                    <button
                        disabled={disableDeleteBtn}
                        onClick={handleBlogDelete}
                        className={`${loadingStates.loadingDeleteBlog || loadingStates.loadingSingleBlog ? "bg-red-400" : "bg-headerInfoBgColor"
                            } text-white w-[10em] p-[10px] text-[1.2em] text-center rounded-[14px]`}
                    >
                        {loadingStates.loadingDeleteBlog || loadingStates.loadingSingleBlog ? "loading" : "Delete"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeletePage;
