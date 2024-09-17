import React from 'react'
import Mission from "../../../public/icons/Mission.svg"
import Vision from "../../../public/icons/Vision.svg"
import AboutOurApproach from "../../../public/images/AboutOurApproach.svg"
import Footer from '@/components/Footer'

const page = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center h-[200px]  bg-textColor'>
                <p className='text-white text-[2.3em] font-semibold leading-[1.5em]'>About Us</p>
                <p className='text-headerInfoBgColor text-[1.3em]'>About</p>
            </div>


            <div className='flex h-[450px]'>
                <div className='flex flex-col justify-center bg-headerBgColor w-[50%] px-6 gap-7 h-full '>
                    <p className='font-bold text-[2.5em] '>Welcome to <span className='text-headerInfoBgColor'>GTech Center Ltd</span></p>
                    <p className='text-welcomeBgColor'>GTech is a forward-thinking consultancy firm established in 2024 and headquartered in Kk 345 st. Founded by Fabrice Kagina, GTech is driven by innovation, integrity, and a commitment to excellence. We focus on delivering impactful solutions that drive sustainable growth for our clients.</p>
                    <p className='text-welcomeBgColor'>With a deep understanding of the dynamic and ever-evolving tech landscape, we work closely with our clients to deliver customized solutions that are not only practical but also forward-thinking. Whether you’re a small business or a large corporation, we have the expertise to provide strategic advice and implement effective solutions that drive real results.</p>
                    <div className='w-full'>
                        <button className='bg-headerInfoBgColor text-white font-semibold mx-auto  rounded-[30px] p-3 w-[10em]'>Get A Quote</button>
                    </div>
                </div>

                
                <div className='bg-headerInfoBgColor h-full w-[50%] flex flex-col items-center justify-evenly'>
                    <div className='w-[90%] flex justify-evenly'>
                        <Mission/>
                        <div className='w-[80%] flex flex-col gap-2 '>
                            <p className='text-white text-[1.2em] font-semibold'>Mission</p>
                            <p className='text-headerBgColor text-[1.02em]'>To provide tailored, high-quality consultancy services that add value to our clients by leveraging technology, expertise, and a deep understanding of their needs.</p>
                        </div>
                    </div>

                    <div className='w-[90%] flex justify-evenly'>
                        <Vision/>
                        <div className='w-[80%] flex flex-col gap-2 '>
                            <p className='text-white text-[1.2em] font-semibold'>Vision</p>
                            <p className='text-headerBgColor text-[1.02em]'>To be a leader in transformative consultancy, empowering businesses with innovative and sustainable solutions.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex h-[400px] mt-[2em]'>
                <div className='w-[50%] mx-auto'>
                    <AboutOurApproach className="h-[95%] mx-auto w-[90%]" />
                </div>

                <div className='w-[50%] flex flex-col justify-center gap-[1.5em]'>
                    <p className='text-textColor text-[2em] font-semibold'>Our Approach</p>
                    <p className='leading-[40px] text-[1.1em] w-[90%]'>We believe that every business is unique, which is why we don’t offer one-size-fits-all solutions. Our consultancy approach begins with understanding your specific needs and challenges. From there, we craft tailored strategies designed to deliver measurable success. Throughout every step of the process, we maintain open communication and ensure that our solutions align with your long-term objectives.</p>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default page