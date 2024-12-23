import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const AdminHeader = ({ backBtnRequired }: { backBtnRequired: boolean }) => {
    const router = useRouter()
    return (
        <div className='flex justify-between items-center h-[7%]'>
            <p className='text-[5vw] sm:text-[4vw] md:text-[2em]'><span className='font-bold'>Dashboard / </span>Blogs</p>
            {backBtnRequired ? (
                <button onClick={() => router.back()} className='bg-welcomeBgColor md:text-[1.4em] sm:text-[4vw] text-[5vw] text-white w-[25vw] md:w-[6em] rounded-[8px] text-center py-2 flex justify-center items-center'>Back</button>

            ) : (

                    <Link href={"/admin/add_blog"} className='md:text-[1.4em] sm:text-[4vw] text-[5vw]  bg-headerInfoBgColor text-white w-[25vw] md:w-[6em] rounded-[8px] text-center py-2 flex justify-center items-center'>Add Blog</Link>
            )

            }
        </div>)
}

export default AdminHeader