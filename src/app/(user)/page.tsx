"use client"

import React, { useEffect, useState } from 'react'
import CallCenter from "../../../public/icons/callCenter.svg"
import ProjectManage from "../../../public/icons/projectManagement.svg"
import ItSolutions from "../../../public/icons/itSolutions.svg"
import WebDev from "../../../public/icons/webDevDesign.svg"
import MobileDeve from "../../../public/icons/mobileDev.svg"
import CyberSecurity from "../../../public/icons/cybersecurity.svg"
import ExpertTeam from "../../../public/icons/expertTeam.svg"
import ClientApproach from "../../../public/icons/clientApproach.svg"
import InnovativeSols from "../../../public/icons/innovativeSolutions.svg"
import ResultOriented from "../../../public/icons/resultsOriented.svg"
import requestNote from "../../../public/images/requestNote.png"
import teamMember1 from "../../../public/images/teamMember1.png"
import teamMember2 from "../../../public/images/teamMember2.png"
import teamMember3 from "../../../public/images/teamMember3.png"
import Quote from "../../../public/icons/quote.svg"
import WelcomeToGTech from "../../../public/images/welcomeToGtech.svg"
import bgImg1 from "../../../public/images/bgImg2.png"
import bgImg2 from "../../../public/images/bgImg3.jpeg"
import bgImg3 from "../../../public/images/bgImg4.jpeg"
import bgImg4 from "../../../public/images/bgImg5.jpeg"
import Image, { StaticImageData } from 'next/image'
import { Barlow } from 'next/font/google'
import Link from 'next/link'
import transparentPicture from "../../../public/images/transparentPicture.png"
import { useBlogs } from '@/hooks/useBlogs'
import BlogCard from '@/components/BlogCard'
import NoBlogsFound from '@/components/NoBlogsFound'
import LoadingBlogCard from '@/components/LoadingBlogCard'

const barlow = Barlow({
  display: "swap",
  variable: "--font-barlow",
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

// const open_sans = Open_Sans({
//   display: "swap",
//   subsets: ['latin'],
//   variable: "--font-open-sans",
//   weight: "300",
// });

type BgImg = {
  image: StaticImageData,
  imgIndex: number
}

const bgImgs: BgImg[] = [
  {
    image: bgImg1,
    imgIndex: 1
  },

  {
    image: bgImg2,
    imgIndex: 2
  },

  {
    image: bgImg3,
    imgIndex: 3
  },

  {
    image: bgImg4,
    imgIndex: 4
  }


]

const MainUserPage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1)
  const { blogs, loadingStates } = useBlogs()
  const latest3Blogs = blogs.slice(0, 3)
  const loadingBlogCards = new Array(3).fill(null)


  useEffect(() => {
    const n = 4
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex + 1)
      if (currentIndex === n) {
        setCurrentIndex(1)
      }
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [currentIndex])



  return (
    <div className='flex flex-col mb-[4em] w-full'>
      <div className={`relative  h-[80vh] w-full text-white flex flex-col justify-center items-center  ${barlow.variable}`}>

        <div className=' w-full h-[660px]  flex relative'>
          {bgImgs.map(({ image, imgIndex }, index) => (
            <Image className={`w-[100%] h-full absolute transition-opacity duration-[3000ms] ease-in-out ${currentIndex === imgIndex ? 'opacity-1' : 'opacity-[.5]'}`} src={currentIndex === imgIndex ? image : transparentPicture} key={index} alt='image' />
          ))}
        </div>

        <div className='absolute text-white border flex flex-col justify-center items-center gap-[3em] w-full h-full'>
          <p className='font-semibold text-[20px]'>
            IT CONSULTANCY
          </p>

          <p className='text-[4em] w-[60%] text-center font-bold leading-[1.3em]'>
            Your Trusted Partner for Innovative Solutions
          </p>

          <div className='flex gap-3'>
            <Link href={"/auth/register"} className='bg-headerInfoBgColor text-center rounded-[30px] p-3 w-[10em] font-semibold'>
              Get started
            </Link>

            <Link href={"/contact"} className='bg-white text-black text-center rounded-[30px] p-3 w-[10em] font-semibold'>
              Contact Us
            </Link>
          </div>
        </div>

      </div>

      <div className='flex '>
        <div className='flex flex-col items-center justify-center bg-headerBgColor w-[50%] px-6 gap-7 '>
          <p className='font-bold text-[2.5em]'>Welcome to <span className='text-headerInfoBgColor'>G-WISSEN Ltd</span></p>
          <p className='text-welcomeBgColor'>Where innovation meets expertise! As a forward-thinking technology consultancy firm, we deliver cutting-edge solutions that drive growth and efficiency for businesses across various industries. Whether you are looking to scale your operations, improve data management, or integrate new technology into your workflow, G-WISSEN Ltd is here to guide you every step of the way.</p>
          <div className='w-full flex '>
            <Link href={"/auth/register"} className='bg-headerInfoBgColor text-white font-semibold text-center  rounded-[30px] p-3 w-[200px] '>Get started</Link>
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
            <p className='text-center w-[90%] text-welcomeBgColor'> We offer comprehensive solutions to improve call center operations, leveraging advanced technology and analytics to enhance customer interactions, boost agent productivity, and streamline workflows for maximum efficiency.</p>
          </div>

          <div className=" w-[25%] flex flex-col items-center justify-center gap-5 h-[20em] bg-headerBgColor rounded-[4px] ">
            <ProjectManage width={80} height={80} />
            <p className='text-textColor  font-semibold text-[1.3em] w-[90%] text-center'>Project Management</p>
            <p className='text-center w-[90%] text-welcomeBgColor'>Our end-to-end project management services ensure the successful delivery of your initiatives. We focus on managing resources, timelines, and risk, while ensuring that each project meets its objectives on time and within budget.</p>
          </div>

          <div className=" w-[25%] flex flex-col items-center justify-center gap-5 h-[20em] bg-headerBgColor rounded-[4px] ">
            <ItSolutions width={80} height={80} />
            <p className='text-textColor font-semibold text-[1.3em] w-[90%] text-center'>IT Solutions</p>
            <p className='text-center w-[90%] text-welcomeBgColor'>We specialize in integrating cutting-edge technology to optimize your IT infrastructure. From system upgrades to cloud integration, we provide tailored solutions that support your business goals and drive efficiency.</p>
          </div>

          <div className=" w-[25%] flex flex-col items-center justify-center gap-5 h-[20em] bg-headerBgColor rounded-[4px] ">
            <WebDev width={80} height={80} />
            <p className='text-textColor font-semibold text-[1.3em] w-[90%] text-center'>Web design & development</p>
            <p className='text-center w-[90%] text-welcomeBgColor'>We create responsive, intuitive, and engaging websites and mobile applications tailored to your specific needs, ensuring a seamless user experience across platforms.</p>
          </div>

          <div className=" w-[25%] flex flex-col items-center justify-center gap-5 h-[20em] bg-headerBgColor rounded-[4px] ">
            <MobileDeve width={80} height={80} />
            <p className='text-textColor font-semibold text-[1.3em] w-[90%] text-center'>Mobile app development</p>
            <p className='text-center w-[90%] text-welcomeBgColor'>Expert mobile app development creating intuitive, high-performance, and scalable solutions for seamless user experiences.</p>
          </div>

          <div className=" w-[25%] flex flex-col items-center justify-center gap-5 h-[20em] bg-headerBgColor rounded-[4px] ">
            <CyberSecurity width={80} height={80} />
            <p className='text-textColor font-semibold text-[1.3em] w-[90%] text-center'>Cyber security services</p>
            <p className='text-center w-[90%] text-welcomeBgColor'>Our cybersecurity solutions protect your business from digital threats. We provide continuous monitoring, threat detection, and robust security frameworks to safeguard your data and ensure business continuity.</p>
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

      {/* <div className='flex h-[400px] mt-[7em]'>
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
      </div> */}

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
          <p className='text-welcomeBgColor flex items-start'><Quote className="w-[300px]" />Our clients consistently praise us for our dedication, expertise, and tailored solutions. They’ve trusted us to handle every aspect of their projects, from strategic planning to seamless execution, and we’ve exceeded their expectations time and again. Whether it's providing innovative solutions, ensuring timely delivery, or being a reliable partner in growth, we’re proud to have helped businesses achieve success across various industries. Our commitment to excellence has made us a trusted partner for organizations looking to unlock their full potential..</p>

          {/* <div className='flex gap-3 relative'>
            <Image className='w-[60px] h-[60px] rounded-[100%]' src={teamMember2} alt='image' />
            <div className='flex flex-col'>
              <p className='text-textColor font-semibold text-[1.2em]'>Client Name</p>
              <p className='text-welcomeBgColor'>PROFESSION</p>
            </div>
            <div className='flex gap-2 left-[-5px] absolute top-[3.8em]'>
              <RedCircle width="37" height="37" />
              <RedCircle width="37" height="37" />
            </div>
          </div> */}

        </div>
      </div>
      {/* to be changed` */}
      <div className='flex flex-col items-center gap-[20px] mt-[3em]'>
        <p className='text-textColor font-semibold text-[2.5em]'>Latest Blog Post</p>
        <div className='flex h-[420px] w-[80%] gap-[40px]'>
          {loadingStates.loadingAllBlogs ? (
            // Show loading cards when loading is true
            loadingBlogCards.map((_, index) => (
              <LoadingBlogCard key={index} />
            ))
          ) : blogs.length === 0 ? (
            // Show no blogs found when blogs array is empty
            <NoBlogsFound />
          ) : (
            // Show actual blog cards when data is loaded
            latest3Blogs.map(({ category, description, title, imagePublicId, lastlyUpdatedDate, _id }, index) => (
              <BlogCard
                key={_id} // Better to use _id instead of index
                index={index}
                _id={_id}
                category={category}
                description={description}
                imagePublicId={imagePublicId}
                lastlyUpdatedDate={lastlyUpdatedDate}
                title={title}
              />
            ))
          )}
        </div>
      </div>


    </div>
  )
}

export default MainUserPage