import PagesTopDiv from '@/components/PagesTopDiv'
import React from 'react'
import CyberSecurity from "../../../../public/icons/cybersecurity.svg"
import CallCenter from "../../../../public/icons/callCenter.svg"
import ProjectManage from "../../../../public/icons/projectManagement.svg"
import ItSolutions from "../../../../public/icons/itSolutions.svg"
import WebDev from "../../../../public/icons/webDevDesign.svg"
import MobileDeve from "../../../../public/icons/mobileDev.svg"
import ExpertTeam from "../../../../public/icons/expertTeam.svg"
import ClientApproach from "../../../../public/icons/clientApproach.svg"
import InnovativeSols from "../../../../public/icons/innovativeSolutions.svg"
import ResultOriented from "../../../../public/icons/resultsOriented.svg"

import Link from 'next/link'


const Services = () => {
    return (
        <div>
            <PagesTopDiv heading='Services We Offer' paragraph='Services' />


            {/* Why Choose Us section */}
            <div className="flex flex-col gap-8 items-center mt-12 md:mt-[5em] px-4">
                <p className="text-textColor font-semibold text-2xl md:text-[2.5em] text-center relative
          before:absolute before:h-[1px] before:bg-headerInfoBgColor before:w-[10%] 
          before:top-[1.6em] before:left-[50%] md:before:left-[17em] before:-translate-x-1/2">
                    Why Choose Us!!!
                </p>
                <div className="flex flex-col md:flex-row w-full gap-6">
                    {/* Left column */}
                    <div className="flex flex-col gap-6 md:gap-[1.9em] w-full md:w-[33.3%]">
                        <div className="flex flex-col items-center md:items-start gap-3 px-4 md:px-7">
                            <div className='w-full h-[66px] flex justify-center sm:justify-center md:justify-start '>
                                <ExpertTeam className='w-16 h-full sm:w-16 md:w-[18] md:h-18 lg:w-[16] ' />
                            </div>

                            <p className="text-textColor font-semibold text-lg md:text-[1.3em]">Expert team</p>
                            <p className="text-welcomeBgColor text-sm md:text-base text-center  md:text-start">
                                With a diverse team of skilled professionals, G-WISSEN Consults offers unmatched expertise in tech consulting.
                            </p>
                        </div>


                        <div className='flex flex-col items-center md:items-start gap-3 px-4 md:px-7'>
                            <div className='w-full  h-[66px]  flex justify-center sm:justify-center md:justify-start '>
                                <ClientApproach className='w-16 h-full sm:w-16 md:w-[18] md:h-18 lg:w-[16] ' />

                            </div>
                            <p className='text-textColor font-semibold text-lg md:text-[1.3em]'>Client-Centered Approach</p>
                            <p className='text-welcomeBgColor text-sm md:text-base text-center  md:text-start'>We place our clients at the core of everything we do, ensuring solutions are customized to their needs.</p>
                        </div>
                        {/* Repeat for second item */}
                    </div>

                    {/* Center column */}
                    <div className="flex flex-col items-center justify-center gap-7 bg-headerInfoBgColor w-full md:w-[33.3%] p-6">
                        <p className="text-white text-center text-sm md:text-base w-[90%]">
                            At G-WISSEN Ltd Consultancy Solutions, we are committed to delivering tailored, innovative, and results-driven solutions that empower businesses to thrive in today's competitive environment. With a team of skilled professionals and a client-first approach, we are your trusted partner for achieving your goals.
                        </p>
                        <Link href="/about"
                            className="text-black w-full md:w-[9em] rounded-[1.6em] text-center p-3 bg-white">
                            Learn More
                        </Link>
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col gap-6 md:gap-[1.9em] w-full md:w-[33.3%]">
                        <div className='flex flex-col items-center md:items-start gap-3 px-4 md:px-7'>
                            <div className='w-full h-[66px] flex justify-center sm:justify-center md:justify-start '>
                                <InnovativeSols className='w-16 h-full  sm:w-16 md:w-[18] md:h-18 lg:w-[16] ' />

                            </div>
                            <p className='text-textColor font-semibold text-lg md:text-[1.3em]'>Innovative Solutions</p>
                            <p className='text-welcomeBgColor text-sm md:text-base  text-center  md:text-start'>We stay ahead of industry trends to bring the latest and most effective technology solutions to our clients.</p>
                        </div>
                        <div className='flex flex-col items-center md:items-start gap-3 px-4 md:px-7'>
                            <div className='w-full  h-[66px] flex justify-center sm:justify-center md:justify-start '>
                                <ResultOriented className='w-16 h-full sm:w-16 md:w-[18] md:h-18 lg:w-[16] ' />

                            </div>
                            <p className='text-textColor font-semibold text-lg md:text-[1.3em] '>Results Oriented</p>
                            <p className='text-welcomeBgColor text-sm md:text-base text-center  md:text-start'>Our focus is on delivering measurable outcomes that drive business success.</p>
                        </div>
                    </div>
                    {/* Similar structure as left column */}
                </div>
            </div>

            {/* What we offer section */}
            <div className="flex flex-col justify-center items-center relative gap-7 mt-12 md:mt-[5em] px-4">
                <p className="text-textColor font-semibold text-2xl md:text-[2.5em] text-center relative
          before:absolute before:h-[1px] before:bg-headerInfoBgColor before:w-[10%] 
          before:top-[1.6em] before:left-[50%] md:before:left-[17em] before:-translate-x-1/2">
                    What We Offer
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                    {/* Service cards - keeping your original 6 cards but making them responsive */}
                    <div className="w-full md:w-full flex flex-col items-center justify-center gap-5 p-6 min-h-[20em] bg-headerBgColor rounded-[4px]">
                        <CallCenter className="w-[90%] sm:w-[12%] md:w-[35%] lg:w-[40%]" />
                        <p className="text-textColor font-semibold text-lg md:text-[1.3em] w-[90%] text-center">
                            Call Center optimisation services
                        </p>
                        <p className="text-center w-[90%] text-welcomeBgColor text-sm md:text-base">
                            We offer comprehensive solutions to improve call center operations, leveraging advanced technology and analytics to enhance customer interactions, boost agent productivity, and streamline workflows for maximum efficiency
                        </p>
                    </div>

                    <div className="w-full md:w-full flex flex-col items-center justify-center gap-5 p-6 min-h-[20em] bg-headerBgColor rounded-[4px]">
                        <ProjectManage className="w-[90%] sm:w-[12%] md:w-[35%] lg:w-[40%]" />
                        <p className='text-textColor font-semibold text-lg md:text-[1.3em] w-[90%] text-center'>Project Management</p>
                        <p className='text-center w-[90%] text-welcomeBgColor text-sm md:text-base'>Our end-to-end project management services ensure the successful delivery of your initiatives. We focus on managing resources, timelines, and risk, while ensuring that each project meets its objectives on time and within budget.</p>
                    </div>
                    <div className="w-full md:w-full flex flex-col items-center justify-center gap-5 p-6 min-h-[20em] bg-headerBgColor rounded-[4px]">
                        <ItSolutions className="w-[90%] sm:w-[12%] md:w-[35%] lg:w-[40%]" />
                        <p className='text-textColor font-semibold text-lg md:text-[1.3em] w-[90%] text-center'>IT Solutions</p>
                        <p className='text-center w-[90%] text-welcomeBgColor text-sm md:text-base'>We specialize in integrating cutting-edge technology to optimize your IT infrastructure. From system upgrades to cloud integration, we provide tailored solutions that support your business goals and drive efficiency.</p>
                    </div>
                    <div className="w-full md:w-full flex flex-col items-center justify-center gap-5 p-6 min-h-[20em] bg-headerBgColor rounded-[4px]">
                        <WebDev className="w-[90%] sm:w-[12%] md:w-[35%] lg:w-[40%]" />
                        <p className='text-textColor font-semibold text-lg md:text-[1.3em] w-[90%] text-center'>Web design & development</p>
                        <p className='text-center w-[90%] text-welcomeBgColor text-sm md:text-base'>We create responsive, intuitive, and engaging websites and mobile applications tailored to your specific needs, ensuring a seamless user experience across platforms.</p>
                    </div>
                    <div className="w-full md:w-full flex flex-col items-center justify-center gap-5 p-6 min-h-[20em] bg-headerBgColor rounded-[4px]">
                        <MobileDeve className="w-[90%] sm:w-[12%] md:w-[35%] lg:w-[40%]" />
                        <p className='text-textColor font-semibold text-lg md:text-[1.3em] w-[90%] text-center'>Mobile app development</p>
                        <p className='text-center w-[90%] text-welcomeBgColor text-sm md:text-base'>Expert mobile app development creating intuitive, high-performance, and scalable solutions for seamless user experiences.</p>
                    </div>
                    <div className="w-full md:w-full flex flex-col items-center justify-center gap-5 p-6 min-h-[20em] bg-headerBgColor rounded-[4px]">
                        <CyberSecurity className="w-[90%] sm:w-[12%] md:w-[35%] lg:w-[40%]" />
                        <p className='text-textColor font-semibold text-lg md:text-[1.3em] w-[90%] text-center'>Cyber security services</p>
                        <p className='text-center w-[90%] text-welcomeBgColor text-sm md:text-base'>Our cybersecurity solutions protect your business from digital threats. We provide continuous monitoring, threat detection, and robust security frameworks to safeguard your data and ensure business continuity.</p>
                    </div>

                    {/* Repeat similar structure for other service cards */}
                </div>
            </div>


        </div>
    )
}

export default Services