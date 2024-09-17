import PagesTopDiv from '@/components/PagesTopDiv'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col'>
            <PagesTopDiv heading='Contact Us' paragraph='Home Contact' />

            <div className='flex h-[500px]'>

                <div className='flex flex-col gap-3 pt-2 w-[50%] h-full px-4 justify-center'>
                    <p className='text-textColor text-[2em] font-semibold h-[10%]'>Contact For Any Queries</p>
                    <form action="" className='h-[75%] w-full flex flex-col justify-evenly rounded-[5px] gap-4 bg-headerBgColor p-2'>
                        <div className='flex justify-between'>
                            <input className='outline-none w-[49%] p-3 text-[1.1em] rounded-[5px] ' type="text" placeholder='First Name' />
                            <input className='outline-none w-[49%] p-3 text-[1.1em] rounded-[5px] ' type="text" placeholder='Last Name' />
                        </div>

                        <input type="text" placeholder='Subject' className='p-3 text-[1.1em] outline-none rounded-[5px]' />
                        <textarea name="comment" id="comment" placeholder='Message' className='h-[120px] resize-none rounded-[5px] outline-none p-2 text-[1.1em]'></textarea>

                        <button className='bg-headerInfoBgColor text-white p-2 text-[1.1em] font-semibold rounded-[5px]'>Submit</button>
                    </form>

                </div>

                <div className='w-[50%] flex justify-center items-center '>Google map</div>
            </div>

        </div>
    )
}

export default page