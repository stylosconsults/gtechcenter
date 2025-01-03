import { File } from 'lucide-react'
import React from 'react'

const NoBlogsFound = () => {
    return (
        <div className='col-span-1 md:col-span-2 lg:col-span-3 h-[10vh] md:h-[30vh] flex justify-center items-center text-[2em] '>
            <File className='w-[20%] h-full ' size={48} color="gray" />

            <p className='text-center text-[5vw] md:text-[2.2vw]'>No blogs found </p>
        </div>
    )
}

export default NoBlogsFound