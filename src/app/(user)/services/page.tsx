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
            <div className='flex flex-col justify-center items-center relative gap-7 mt-[5em]'>
                <p className="text-textColor font-semibold text-[2.5em] before:absolute before:h-[1px] before:bg-headerInfoBgColor before:w-[10%] before:top-[1.6em] before:mx-auto before:left-[19.2em] before:content-['']">What We Offer</p>
                <div className='flex flex-wrap justify-center gap-[1.6em]'>
                    <div className=" w-[25%] flex flex-col items-center justify-center gap-5 h-[20em] bg-headerBgColor rounded-[4px] ">
                        <CallCenter width={80} height={80} />
                        <p className='text-textColor font-semibold text-[1.3em] w-[90%] text-center'>Call Center optimisation services</p>
                        <p className='text-center w-[90%] text-welcomeBgColor'>Enhance the efficiency and customer satisfaction of your call center with GTechCenter's Optimization Services.</p>
                    </div>

                    <div className=" w-[25%] flex flex-col items-center justify-center gap-5 h-[20em] bg-headerBgColor rounded-[4px] ">
                        <ProjectManage width={80} height={80} />
                        <p className='text-textColor  font-semibold text-[1.3em] w-[90%] text-center'>Project Management</p>
                        <p className='text-center w-[90%] text-welcomeBgColor'>Drive your projects to success with GTechCenter's Project Management Solutions. Our expert team ensures efficient planning, execution, and delivery.</p>
                    </div>

                    <div className=" w-[25%] flex flex-col items-center justify-center gap-5 h-[20em] bg-headerBgColor rounded-[4px] ">
                        <ItSolutions width={80} height={80} />
                        <p className='text-textColor font-semibold text-[1.3em] w-[90%] text-center'>IT Solutions</p>
                        <p className='text-center w-[90%] text-welcomeBgColor'>Empower your business with GTechCenter's innovative IT solutions, offering seamless integrations, secure systems, and scalable technologies. </p>
                    </div>

                    <div className=" w-[25%] flex flex-col items-center justify-center gap-5 h-[20em] bg-headerBgColor rounded-[4px] ">
                        <WebDev width={80} height={80} />
                        <p className='text-textColor font-semibold text-[1.3em] w-[90%] text-center'>Web design & development</p>
                        <p className='text-center w-[90%] text-welcomeBgColor'>GTechCenter delivers visually appealing, responsive websites that combine sleek design with innovative technology.</p>
                    </div>

                    <div className=" w-[25%] flex flex-col items-center justify-center gap-5 h-[20em] bg-headerBgColor rounded-[4px] ">
                        <MobileDeve width={80} height={80} />
                        <p className='text-textColor font-semibold text-[1.3em] w-[90%] text-center'>Mobile app development</p>
                        <p className='text-center w-[90%] text-welcomeBgColor'>Expert mobile app development creating intuitive, high-performance, and scalable solutions for seamless user experiences.</p>
                    </div>

                    <div className=" w-[25%] flex flex-col items-center justify-center gap-5 h-[20em] bg-headerBgColor rounded-[4px] ">
                        <CyberSecurity width={80} height={80} />
                        <p className='text-textColor font-semibold text-[1.3em] w-[90%] text-center'>Cyber security services</p>
                        <p className='text-center w-[90%] text-welcomeBgColor'>Protect your business with GTechCenter's advanced cybersecurity services, ensuring data integrity and security.</p>
                    </div>

                </div>
            </div>

            <div className='flex relative flex-col gap-8 items-center my-[5em]'>
                <p className="text-textColor  font-semibold text-[2.5em] before:absolute before:h-[1px] before:bg-headerInfoBgColor before:w-[10%] before:top-[1.6em] before:left-[19.2em] before:content-['']">Why Choose Us!!!</p>
                <div className='flex'>
                    <div className='flex flex-col gap-[1.9em] w-[33.3%]'>
                        <div className='flex flex-col gap-3 px-7'>
                            <ExpertTeam />
                            <p className='text-textColor font-semibold text-[1.3em]'>Expert team</p>
                            <p className='text-welcomeBgColor'>With a diverse team of skilled professionals, G-WISSEN Consults offers unmatched expertise in tech consulting.</p>
                        </div>
                        <div className='flex flex-col gap-3 px-7'>
                            <ClientApproach />
                            <p className='text-textColor font-semibold text-[1.3em]'>Client-Centered Approach</p>
                            <p className='text-welcomeBgColor'>We place our clients at the core of everything we do, ensuring solutions are customized to their needs.</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-7 bg-headerInfoBgColor w-[33.3%]'>
                        <p className='text-white text-center w-[90%]'>At G-WISSEN Ltd Consultancy Solutions, we are committed to delivering tailored, innovative, and results-driven solutions that empower businesses to thrive in today's competitive environment. With a team of skilled professionals and a client-first approach, we are your trusted partner for achieving your goals.</p>

                        <Link href={"/about"} className='text-black w-[9em] rounded-[1.6em] text-center p-3 bg-white ' >Learn More</Link>
                    </div>

                    <div className='flex flex-col  gap-[1.9em] w-[33.3%]'>
                        <div className='flex flex-col gap-3 px-7'>
                            <InnovativeSols />
                            <p className='text-textColor font-semibold text-[1.3em]'>Innovative Solutions</p>
                            <p className='text-welcomeBgColor'>We stay ahead of industry trends to bring the latest and most effective technology solutions to our clients.</p>
                        </div>

                        <div className='flex flex-col gap-3 px-7'>
                            <ResultOriented />
                            <p className='text-textColor font-semibold text-[1.3em]'>Results Oriented</p>
                            <p className='text-welcomeBgColor'>Our focus is on delivering measurable outcomes that drive business success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services