import PagesTopDiv from '../../../components/PagesTopDiv'
import React from 'react'
import LoginImage from "../../../../public/images/bgImg2.png"
import Image from 'next/image'

const page = () => {
    return (
        <div className='flex flex-col'>
            <PagesTopDiv heading='Sign Up To GTECH' paragraph='Home Sign_Up' />

            <div className='flex '>

                <div className='bg-headerBgColor flex flex-col gap-3 pt-2 w-[50%] h-full px-4 justify-center'>
                    <form action="" className='h-[75%] w-full flex flex-col justify-evenly rounded-[5px] gap-4 bg-headerBgColor p-2'>

                        <p className='text-textColor text-[2.4em] font-semibold text-center'>Sign Up</p>
                        <div className='flex justify-between'>
                            <input type="text" placeholder='First Name' className=' w-[48%] p-3 text-[1.1em] outline-none rounded-[5px]' />
                            <input type="text" placeholder='Last Name' className=' w-[48%] p-3 text-[1.1em] outline-none rounded-[5px]' />
                        </div>
                        <input type="number" placeholder='Phone number' className='p-3 text-[1.1em] outline-none rounded-[5px]' />
                        <input type="email" placeholder='youremail@example.com' className='p-3 text-[1.1em] outline-none rounded-[5px]' />
                        <input type="password" placeholder='Password' className='p-3 text-[1.1em] outline-none rounded-[5px]' />

                        <button className='bg-headerInfoBgColor text-white p-2 text-[1.1em] font-semibold rounded-[5px]'>Submit</button>
                    </form>

                </div>


                <div className='w-[50%] '>
                    <Image className='w-full h-full' src={LoginImage} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default page