import React from 'react'
import Mission from "../../../../public/icons/Mission.svg"
import Vision from "../../../../public/icons/Vision.svg"
import AboutOurApproach from "../../../../public/images/AboutOurApproach.svg"
import PagesTopDiv from '../../../components/PagesTopDiv'

const page = () => {
    return (
        <div className='flex flex-col mb-[3em]'>
            <PagesTopDiv heading='About Us' paragraph='About' />

            {/* Main about content */}
            <div className='grid   sm:grid-cols-1 md:grid-cols-2 h-auto '>

                {/* Welcome section */}
                <div className='flex flex-col col-span-1  justify-center bg-headerBgColor px-6 gap-7 h-full '>
                    <p className='font-bold text-[2.5em] '>Welcome to <span className='text-headerInfoBgColor'>G-WISSEN Ltd</span></p>
                    <p className='text-welcomeBgColor'>G-WISSEN Consultsis a forward-thinking consultancy firm established in 2024 and headquartered in Kk 345 st. G-WISSEN Consults is driven by innovation, integrity, and a commitment to excellence. We focus on delivering impactful solutions that drive sustainable growth for our clients.</p>
                    <p className='text-welcomeBgColor'>With a deep understanding of the dynamic and ever-evolving tech landscape, we work closely with our clients to deliver customized solutions that are not only practical but also forward-thinking. Whether you’re a small business or a large corporation, we have the expertise to provide strategic advice and implement effective solutions that drive real results.</p>
                    <div className='w-full mb-8 sm:mb-8 md:mb-2 lg:mb-2'>
                        <button className='bg-headerInfoBgColor text-white font-semibold mx-auto  rounded-[30px] p-3 w-[10em]'>Get A Quote</button>
                    </div>
                </div>

                {/* Mission & vision section */}
                <div className='bg-headerInfoBgColor col-span-1 h-full flex flex-col items-center justify-evenly'>

                    {/* Mission section */}
                    <div className='w-[90%] flex justify-evenly'>
                        <Mission />
                        <div className='w-[80%] flex flex-col gap-2 '>
                            <p className='text-white text-[1.2em] font-semibold'>Mission</p>
                            <p className='text-headerBgColor text-[1.02em]'>To provide tailored, high-quality consultancy services that add value to our clients by leveraging technology, expertise, and a deep understanding of their needs.</p>
                        </div>
                    </div>

                    {/* Vision section */}
                    <div className='w-[90%] flex justify-evenly'>
                        <Vision />
                        <div className='w-[80%] flex flex-col gap-2 '>
                            <p className='text-white text-[1.2em] font-semibold'>Vision</p>
                            <p className='text-headerBgColor text-[1.02em]'>To be a leader in transformative consultancy, empowering businesses with innovative and sustainable solutions.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Approach section */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2  sm:h-auto md:h-[60vh] mt-[2em]'>

                {/* Approach image */}
                <div className='w-full sm:h-full md:h-[68%]  mx-auto col-span-1'>
                    <AboutOurApproach className="h-[95%] mx-auto w-[90%]" />
                </div>

                {/* Main approach */}
                <div className='sm:h-full md:h-[68%]  flex flex-col justify-center gap-[1.5em] col-span-1'>
                    <p className='text-textColor text-[2em] font-semibold text-center md:text-'>Our Approach</p>
                    <p className='leading-[40px] text-[1.1em] md:w-[90%] w-full '>We believe that every business is unique, which is why we don’t offer one-size-fits-all solutions. Our consultancy approach begins with understanding your specific needs and challenges. From there, we craft tailored strategies designed to deliver measurable success. Throughout every step of the process, we maintain open communication and ensure that our solutions align with your long-term objectives.</p>
                </div>
            </div>

        </div>
    )
}

export default page