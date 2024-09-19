"use client"

import Navbar from '@/components/Navbar'
import React from 'react'
import bgImg from "@/public/images/bgImg.svg"
import BussPlanning from "../../public/icons/bussPlanning.svg"
import FinancialAnalysis from "../../public/icons/financialAnalysis.svg"
import LegalAdvisor from "../../public/icons/legalAdvisory.svg"
import CallCenter from "../../public/icons/callCenter.svg"
import ProjectManage from "../../public/icons/projectManagement.svg"
import ItSolutions from "../../public/icons/itSolutions.svg"
import WebDev from "../../public/icons/webDevDesign.svg"
import MobileDeve from "../../public/icons/mobileDev.svg"
import CyberSecurity from "../../public/icons/cybersecurity.svg"
import ExpertTeam from "../../public/icons/expertTeam.svg"
import ClientApproach from "../../public/icons/clientApproach.svg"
import InnovativeSols from "../../public/icons/innovativeSolutions.svg"
import ResultOriented from "../../public/icons/resultsOriented.svg"
import requestNote from "../../public/images/requestNote.png"
import teamMember1 from "../../public/images/teamMember1.png"
import teamMember2 from "../../public/images/teamMember2.png"
import teamMember3 from "../../public/images/teamMember3.png"
import RedCircle from "../../public/icons/redCircle.svg"
import Quote from "../../public/icons/quote.svg"
import LatestBlog1 from "../../public/images/latestBlog1.png"
import LatestBlog2 from "../../public/images/latestBlog2.png"
import LatestBlog3 from "../../public/images/latestBlog3.png"
import WelcomeToGTech from "../../public/images/welcomeToGtech.svg"
import Image from 'next/image'
import { Barlow, Open_Sans } from 'next/font/google'
import Link from 'next/link'
import Footer from '@/components/Footer'

const barlow = Barlow({
  display: "swap",
  variable: "--font-barlow",
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})
const open_sans = Open_Sans({
  display: "swap",
  subsets: ['latin'],
  variable: "--font-open-sans",
  weight: "300",
});

const page = () => {
  return (
    <div className='flex flex-col mb-[4em]'>
      <div className={`bg-[url('/images/bgImg.svg')] bg-cover h-[80vh] bg-center text-white flex flex-col justify-center items-center gap-9 px-[200px] ${barlow.variable}`}>
        <p className='font-semibold text-[20px]'>
          IT CONSULTANCY
        </p>

        <p className='text-[4em] text-center font-bold leading-[1.3em]'>
          Your Trusted Partner for Innovative Solutions
        </p>

        <div className='flex gap-3'>
          <button className='bg-headerInfoBgColor rounded-[30px] p-3 w-[10em] font-semibold'>
            Get quote
          </button>

          <button className='bg-white text-black rounded-[30px] p-3 w-[10em] font-semibold'>
            Contact Us
          </button>
        </div>
      </div>

      <div className='flex '>
        <div className='flex flex-col items-center justify-center bg-headerBgColor w-[50%] px-6 gap-7 '>
          <p className='font-bold text-[2.5em]'>Welcome to <span className='text-headerInfoBgColor'>GTech Center Ltd</span></p>
          <p className='text-welcomeBgColor'>where innovation meets expertise! As a forward-thinking technology consultancy firm, we deliver cutting-edge solutions that drive growth and efficiency for businesses across various industries. Whether you're looking to scale your operations, improve data management, or integrate new technology into your workflow, Gtech Center is here to guide you every step of the way.</p>
          <div className='w-full'>
            <button className='bg-headerInfoBgColor text-white font-semibold mx-auto  rounded-[30px] p-3 w-[10em]'>Get A Quote</button>
          </div>
        </div>

        <div className=' w-[50%] gap-5 p-7 flex justify-center items-center '>
          <WelcomeToGTech />
        </div>

      </div>

      <div className='flex flex-col justify-center items-center relative gap-7 mt-[5em]'>
        <p className="text-textColor font-semibold text-[2.5em] before:absolute before:h-[1px] before:bg-headerInfoBgColor before:w-[10%] before:top-[1.6em] before:mx-auto before:left-[17em] before:content-['']">What We Offer</p>
        <div className='flex flex-wrap justify-center gap-[1.6em]'>
          <div className=" w-[25%] flex flex-col items-center justify-center gap-5 h-[20em] bg-headerBgColor rounded-[4px] ">
            <CallCenter width={80} height={80} />
            <p className='text-textColor font-semibold text-[1.3em] w-[90%] text-center'>Call Center optimisation services</p>
            <p className='text-center w-[90%] text-welcomeBgColor'>Tempor erat elitr rebum at clita. Diam
              dolor ipsum amet eos erat ipsum lorem et
              sit sed stet lorem</p>
          </div>

          <div className=" w-[25%] flex flex-col items-center justify-center gap-5 h-[20em] bg-headerBgColor rounded-[4px] ">
            <ProjectManage width={80} height={80} />
            <p className='text-textColor  font-semibold text-[1.3em] w-[90%] text-center'>Project Management</p>
            <p className='text-center w-[90%] text-welcomeBgColor'>Tempor erat elitr rebum at clita. Diam
              dolor ipsum amet eos erat ipsum lorem et
              sit sed stet lorem</p>
          </div>

          <div className=" w-[25%] flex flex-col items-center justify-center gap-5 h-[20em] bg-headerBgColor rounded-[4px] ">
            <ItSolutions width={80} height={80} />
            <p className='text-textColor font-semibold text-[1.3em] w-[90%] text-center'>IT Solutions</p>
            <p className='text-center w-[90%] text-welcomeBgColor'>Tempor erat elitr rebum at clita. Diam
              dolor ipsum amet eos erat ipsum lorem et
              sit sed stet lorem</p>
          </div>

          <div className=" w-[25%] flex flex-col items-center justify-center gap-5 h-[20em] bg-headerBgColor rounded-[4px] ">
            <WebDev width={80} height={80} />
            <p className='text-textColor font-semibold text-[1.3em] w-[90%] text-center'>Web design & development</p>
            <p className='text-center w-[90%] text-welcomeBgColor'>Tempor erat elitr rebum at clita. Diam
              dolor ipsum amet eos erat ipsum lorem et
              sit sed stet lorem</p>
          </div>

          <div className=" w-[25%] flex flex-col items-center justify-center gap-5 h-[20em] bg-headerBgColor rounded-[4px] ">
            <MobileDeve width={80} height={80} />
            <p className='text-textColor font-semibold text-[1.3em] w-[90%] text-center'>Mobile app development</p>
            <p className='text-center w-[90%] text-welcomeBgColor'>Tempor erat elitr rebum at clita. Diam
              dolor ipsum amet eos erat ipsum lorem et
              sit sed stet lorem</p>
          </div>

          <div className=" w-[25%] flex flex-col items-center justify-center gap-5 h-[20em] bg-headerBgColor rounded-[4px] ">
            <CyberSecurity width={80} height={80} />
            <p className='text-textColor font-semibold text-[1.3em] w-[90%] text-center'>Cyber security services</p>
            <p className='text-center w-[90%] text-welcomeBgColor'>Tempor erat elitr rebum at clita. Diam
              dolor ipsum amet eos erat ipsum lorem et
              sit sed stet lorem</p>
          </div>

        </div>
      </div>


      <div className='flex relative flex-col gap-8 items-center mt-[5em]'>
        <p className="text-textColor font-semibold text-[2.5em] before:absolute before:h-[1px] before:bg-headerInfoBgColor before:w-[10%] before:top-[1.6em] before:left-[17em] before:content-['']">Why Choose Us!!!</p>
        <div className='flex'>
          <div className='flex flex-col gap-[1.9em] w-[33.3%]'>
            <div className='flex flex-col gap-3 px-7'>
              <ExpertTeam />
              <p className='text-textColor font-semibold text-[1.3em]'>Expert team</p>
              <p className='text-welcomeBgColor'>With a diverse team of skilled professionals, Gtech Center offers unmatched expertise in tech consulting.</p>
            </div>
            <div className='flex flex-col gap-3 px-7'>
              <ClientApproach />
              <p className='text-textColor font-semibold text-[1.3em]'>Client-Centered Approach</p>
              <p className='text-welcomeBgColor'>We place our clients at the core of everything we do, ensuring solutions are customized to their needs.</p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center gap-7 bg-headerInfoBgColor w-[33.3%]'>
            <p className='text-white text-center w-[90%]'>Clita nonumy sanctus nonumy et clita tempor, et
              sea amet ut et sadipscing rebum amet takimata
              amet, sed accusam eos eos dolores dolore et. Et
              ea ea dolor rebum invidunt clita eos. Sea
              accusam stet stet ipsum, sit ipsum et ipsum
              kasd</p>

            <Link href={""} className='text-black w-[9em] rounded-[1.6em] text-center p-3 bg-white ' >Learn More</Link>
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

      <div className='flex h-[400px] mt-[7em]'>
        <div className='w-[50%] flex flex-col justify-center px-8 gap-[1.3em] bg-headerBgColor'>
          <p className='text-textColor font-semibold text-[2.5em] '>Request A Free Note</p>
          <p className='text-welcomeBgColor'>Kasd vero erat ea amet justo no stet, et elitr no dolore no elitr sea kasd et dolor
            diam tempor. Nonumy sed dolore no eirmod sit nonumy vero lorem amet stet
            diam at. Ea at lorem sed et, lorem et rebum ut eirmod gubergren, dolor ea duo
            diam justo dolor diam ipsum dolore stet stet elitr ut. Ipsum amet labore lorem
            lorem diam magna sea, eos sed dolore elitr.</p>
          <form className='flex flex-wrap gap-2 w-[80%]' action="">
            <input className='border border-inputBorderColor rounded-[3px] p-3 text-welcomeBgColor placeholder:text-welcomeBgColor outline-none' type="text" placeholder='Full Name' />
            <input className='border border-inputBorderColor rounded-[3px] p-3 text-welcomeBgColor placeholder:text-welcomeBgColor outline-none' type="email" placeholder='Email Address' />
            <input className='border border-inputBorderColor  rounded-[3px] p-3 text-welcomeBgColor placeholder:text-welcomeBgColor outline-none' type="tel" placeholder='Phone Number' />
            <button className='bg-headerInfoBgColor text-white w-[47%] rounded-[3px]'>Request A Note</button>
          </form>
        </div>


        <div className='w-[50%] h-full'>
          <Image src={requestNote} className='h-full w-full' alt='image' />
        </div>
      </div>

      <div className='flex flex-col relative items-center gap-10 mt-[5em]'>
        <p className="text-textColor font-semibold text-[2.5em] before:absolute before:h-[1px] before:bg-headerInfoBgColor before:w-[10%] before:top-[1.6em] before:left-[17em] before:content-['']">Our Team Members</p>
        <div className='flex w-[75%] justify-between'>
          <div className='relative'>
            <Image className='' src={teamMember1} alt="image" />
            <div className='w-[60px] absolute  top-[19em] h-[60px] bg-headerInfoBgColor'></div>
          </div>

          <div className='relative'>
            <Image className='' src={teamMember2} alt="image" />
            <div className='w-[60px] absolute  top-[19em] h-[60px] bg-headerInfoBgColor'></div>
          </div>

          <div className='relative'>
            <Image className='' src={teamMember3} alt="image" />
            <div className='w-[60px] absolute  top-[19em] h-[60px] bg-headerInfoBgColor'></div>
          </div>
        </div>
      </div>

      <div className='flex mt-[5em] h-[400px] '>
        <div className='w-[50%] h-full'>
          <Image className='w-full h-full' src={requestNote} alt="image" />
        </div>

        <div className='w-[50%] flex flex-col gap-7 justify-center px-6 ps-8' >
          <p className='text-textColor font-semibold text-[2.5em]'>What Say Our Client!!!</p>
          <p className='text-welcomeBgColor flex gap-2'><Quote width="30" height="30" />Dolores sed duo clita tempor justo dolor et stet
            lorem kasd labore dolore lorem ipsum. At lorem lorem
            magna ut et, nonumy et labore et tempor diam tempor
            erat dolor rebum sit ipsum.</p>

          <div className='flex gap-3 relative'>
            <Image className='w-[60px] h-[60px] rounded-[100%]' src={teamMember2} alt='image' />
            <div className='flex flex-col'>
              <p className='text-textColor font-semibold text-[1.2em]'>Client Name</p>
              <p className='text-welcomeBgColor'>PROFESSION</p>
            </div>
            <div className='flex gap-2 left-[-5px] absolute top-[3.8em]'>
              <RedCircle width="37" height="37" />
              <RedCircle width="37" height="37" />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center gap-[20px] mt-[3em]'>
        <p className='text-textColor font-semibold text-[2.5em]'>Latest Blog Post</p>
        <div className='flex h-[400px] gap-[40px]'>
          <div className='flex flex-col bg-headerBgColor '>
            <Image src={LatestBlog1} className='h-[70%]' alt='image' />
            <div className='flex h-[30%]'>
              <div className='w-[20%] bg-headerInfoBgColor h-full flex flex-col justify-centeritems-center'>
                <p className='text-white'>01</p>
                <p className='text-textColor'>JAN</p>
                <p className='text-white'>2025</p>
              </div>
              <div className='flex flex-col justify-center w-[90%]'>
                <div className='flex justify-evenly w-full'>
                  <p className='text-welcomeBgColor'>ADMIN</p>
                  <p className='text-welcomeBgColor'>WEB DESIGN</p>
                </div>
                <p className='text-[1.1em] font-semibold text-textColor px-3'>Magna sea dolor ipsum
                  amet lorem eos</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col bg-headerBgColor '>
            <Image src={LatestBlog2} className='h-[70%]' alt='image' />
            <div className='flex h-[30%]'>
              <div className='w-[20%] bg-headerInfoBgColor h-full flex flex-col justify-center items-center'>
                <p className='text-white'>01</p>
                <p className='text-textColor'>JAN</p>
                <p className='text-white'>2025</p>
              </div>
              <div className='flex flex-col justify-center w-[90%]'>
                <div className='flex justify-evenly w-full'>
                  <p className='text-welcomeBgColor'>ADMIN</p>
                  <p className='text-welcomeBgColor'>WEB DESIGN</p>
                </div>
                <p className='text-[1.1em] font-semibold text-textColor px-3'>Magna sea dolor ipsum
                  amet lorem eos</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col bg-headerBgColor '>
            <Image src={LatestBlog3} className='h-[70%]' alt='image' />
            <div className='flex h-[30%]'>
              <div className='w-[20%] bg-headerInfoBgColor h-full flex flex-col justify-center  items-center'>
                <p className='text-white'>01</p>
                <p className='text-textColor'>JAN</p>
                <p className='text-white'>2025</p>
              </div>
              <div className='flex flex-col justify-center w-[90%]'>
                <div className='flex justify-evenly w-full'>
                  <p className='text-welcomeBgColor'>ADMIN</p>
                  <p className='text-welcomeBgColor'>WEB DESIGN</p>
                </div>
                <p className='text-[1.1em] font-semibold text-textColor px-3'>Magna sea dolor ipsum
                  amet lorem eos</p>
              </div>
            </div>
          </div>




        </div>
      </div>


    </div>
  )
}

export default page