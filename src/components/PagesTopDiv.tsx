import React from 'react'

type Props = {
    heading: string;
    paragraph: string
}

const PagesTopDiv = ({heading, paragraph}: Props) => {
    return (
        <div className='flex flex-col items-center justify-center h-[200px]  bg-textColor'>
            <p className='text-white text-[2.3em] font-semibold leading-[1.5em]'>{heading}</p>
            <p className='text-headerInfoBgColor text-[1.3em]'>{paragraph}</p>
        </div>
    )
}

export default PagesTopDiv