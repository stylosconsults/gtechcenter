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
import EricImg from "../../../public/images/team/Eric Pic.jpeg"
import FabriceImg from "../../../public/images/team/FabPic.jpg"
import GiseleImg from "../../../public/images/team/Gisele.jpeg"
import YvonneImg from "../../../public/images/team/Yvonne.jpeg"
import RuthImg from "../../../public/images/team/Ruth.jpeg"
import RedemptaImg from "../../../public/images/team/Redempta_croped.jpg"
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
  const [currentIndex, setCurrentIndex] = useState(1);
  const { blogs, loadingStates } = useBlogs();
  const latest3Blogs = blogs.slice(0, 3);
  const loadingBlogCards = new Array(3).fill(null);

  useEffect(() => {
    const n = 4;
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex === n) {
        setCurrentIndex(1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="flex flex-col mb-16 w-full">
      {/* Hero Section */}
      <div className={`relative min-h-[50vh] md:h-[80vh] w-full text-white flex flex-col justify-center items-center ${barlow.variable}`}>
        <div className="w-full h-[50vh] md:h-[660px] flex relative">
          {bgImgs.map(({ image, imgIndex }, index) => (
            <Image
              className={`w-full h-full absolute transition-opacity duration-[3000ms] ease-in-out ${currentIndex === imgIndex ? 'opacity-100' : 'opacity-50'}`}
              src={currentIndex === imgIndex ? image : transparentPicture}
              key={index}
              alt="image"
            />
          ))}
        </div>

        <div className="absolute text-white border-0 flex flex-col justify-center items-center gap-6 md:gap-12 w-full h-full p-4">
          <p className="font-semibold text-base md:text-xl">
            IT CONSULTANCY
          </p>

          <p className="text-2xl md:text-4xl lg:text-[4em] w-[90%] md:w-[60%] text-center font-bold leading-tight md:leading-[1.3em]">
            Your Trusted Partner for Innovative Solutions
          </p>

          <div className="flex flex-col md:flex-row gap-3">
            <Link href="/auth/register"
              className="bg-headerInfoBgColor text-center rounded-[30px] p-3 w-full md:w-[10em] font-semibold">
              Get started
            </Link>
            <Link href="/contact"
              className="bg-white text-black text-center rounded-[30px] p-3 w-full md:w-[10em] font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Welcome section */}
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center bg-headerBgColor w-full md:w-[50%] px-4 md:px-6 py-8 gap-7">
          <p className="font-bold text-xl md:text-[2.5em] text-center md:text-left">
            Welcome to <span className="text-headerInfoBgColor">G-WISSEN Ltd</span>
          </p>
          <p className="text-welcomeBgColor text-sm md:text-base text-center md:text-left">
            Where innovation meets expertise! As a forward-thinking technology consultancy firm, we deliver cutting-edge solutions that drive growth and efficiency for businesses across various industries. Whether you are looking to scale your operations, improve data management, or integrate new technology into your workflow, G-WISSEN Ltd is here to guide you every step of the way.
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <Link href="/auth/register"
              className="bg-headerInfoBgColor text-white font-semibold text-center rounded-[30px] p-3 w-full md:w-[200px]">
              Get started
            </Link>
          </div>
        </div>

        <div className="w-full md:w-[50%] p-4 md:p-7 flex justify-center items-center">
          <WelcomeToGTech className="w-full h-auto" />
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
            <CallCenter className="w-16 h-16 md:w-20 md:h-20" />
            <p className="text-textColor font-semibold text-lg md:text-[1.3em] w-[90%] text-center">
              Call Center optimisation services
            </p>
            <p className="text-center w-[90%] text-welcomeBgColor text-sm md:text-base">
              We offer comprehensive solutions to improve call center operations, leveraging advanced technology and analytics to enhance customer interactions, boost agent productivity, and streamline workflows for maximum efficiency
            </p>
          </div>

          <div className="w-full md:w-full flex flex-col items-center justify-center gap-5 p-6 min-h-[20em] bg-headerBgColor rounded-[4px]">
            <ProjectManage className="w-16 h-16 md:w-20 md:h-20" />
            <p className='text-textColor font-semibold text-lg md:text-[1.3em] w-[90%] text-center'>Project Management</p>
            <p className='text-center w-[90%] text-welcomeBgColor text-sm md:text-base'>Our end-to-end project management services ensure the successful delivery of your initiatives. We focus on managing resources, timelines, and risk, while ensuring that each project meets its objectives on time and within budget.</p>
          </div>
          <div className="w-full md:w-full flex flex-col items-center justify-center gap-5 p-6 min-h-[20em] bg-headerBgColor rounded-[4px]">
            <ItSolutions className="w-16 h-16 md:w-20 md:h-20" />
            <p className='text-textColor font-semibold text-lg md:text-[1.3em] w-[90%] text-center'>IT Solutions</p>
            <p className='text-center w-[90%] text-welcomeBgColor text-sm md:text-base'>We specialize in integrating cutting-edge technology to optimize your IT infrastructure. From system upgrades to cloud integration, we provide tailored solutions that support your business goals and drive efficiency.</p>
          </div>
          <div className="w-full md:w-full flex flex-col items-center justify-center gap-5 p-6 min-h-[20em] bg-headerBgColor rounded-[4px]">
            <WebDev className="w-16 h-16 md:w-20 md:h-20" />
            <p className='text-textColor font-semibold text-lg md:text-[1.3em] w-[90%] text-center'>Web design & development</p>
            <p className='text-center w-[90%] text-welcomeBgColor text-sm md:text-base'>We create responsive, intuitive, and engaging websites and mobile applications tailored to your specific needs, ensuring a seamless user experience across platforms.</p>
          </div>
          <div className="w-full md:w-full flex flex-col items-center justify-center gap-5 p-6 min-h-[20em] bg-headerBgColor rounded-[4px]">
            <MobileDeve className="w-16 h-16 md:w-20 md:h-20" />
            <p className='text-textColor font-semibold text-lg md:text-[1.3em] w-[90%] text-center'>Mobile app development</p>
            <p className='text-center w-[90%] text-welcomeBgColor text-sm md:text-base'>Expert mobile app development creating intuitive, high-performance, and scalable solutions for seamless user experiences.</p>
          </div>
          <div className="w-full md:w-full flex flex-col items-center justify-center gap-5 p-6 min-h-[20em] bg-headerBgColor rounded-[4px]">
            <CyberSecurity className="w-16 h-16 md:w-20 md:h-20" />
            <p className='text-textColor font-semibold text-lg md:text-[1.3em] w-[90%] text-center'>Cyber security services</p>
            <p className='text-center w-[90%] text-welcomeBgColor text-sm md:text-base'>Our cybersecurity solutions protect your business from digital threats. We provide continuous monitoring, threat detection, and robust security frameworks to safeguard your data and ensure business continuity.</p>
          </div>

          {/* Repeat similar structure for other service cards */}
        </div>
      </div>

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
            <div className="flex flex-col gap-3 px-4 md:px-7">
              <ExpertTeam className="w-12 h-12 md:w-16 md:h-16" />
              <p className="text-textColor font-semibold text-lg md:text-[1.3em]">Expert team</p>
              <p className="text-welcomeBgColor text-sm md:text-base">
                With a diverse team of skilled professionals, G-WISSEN Consults offers unmatched expertise in tech consulting.
              </p>
            </div>


            <div className='flex flex-col gap-3 px-4 md:px-7'>
              <ClientApproach className="w-12 h-12 md:w-16 md:h-16" />
              <p className='text-textColor font-semibold text-lg md:text-[1.3em]'>Client-Centered Approach</p>
              <p className='text-welcomeBgColor text-sm md:text-base'>We place our clients at the core of everything we do, ensuring solutions are customized to their needs.</p>
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
            <div className='flex flex-col gap-3 px-4 md:px-7'>
              <InnovativeSols className='w-12 h-12 md:w-16 md:h-16' />
              <p className='text-textColor font-semibold text-lg md:text-[1.3em]'>Innovative Solutions</p>
              <p className='text-welcomeBgColor text-sm md:text-base'>We stay ahead of industry trends to bring the latest and most effective technology solutions to our clients.</p>
            </div>
            <div className='flex flex-col gap-3 px-4 md:px-7'>
              <ResultOriented className='w-12 h-12 md:w-16 md:h-16' />
              <p className='text-textColor font-semibold text-lg md:text-[1.3em] '>Results Oriented</p>
              <p className='text-welcomeBgColor text-sm md:text-base'>Our focus is on delivering measurable outcomes that drive business success.</p>
            </div>
          </div>
          {/* Similar structure as left column */}
        </div>
      </div>

      {/* Team Members section */}
      <div className="flex flex-col relative items-center gap-8 md:gap-10 mt-12 md:mt-[5em]">
        <p className="text-textColor font-semibold text-2xl md:text-[2.5em] text-center relative
          before:absolute before:h-[1px] before:bg-headerInfoBgColor before:w-[10%] 
          before:top-[1.6em] before:left-[50%] md:before:left-[17em] before:-translate-x-1/2">
          Our Team Members
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-[95%]">
          {/* Team member cards */}

          <div className='flex gap-3 h-[40vh] col-span-1 border-[1.4px] border-slate-200 rounded-[15px]'>
            <div className='w-[50%] rounded-[15px] h-full relative'>
              <Image
                className='w-full rounded-[15px] h-full object-cover'
                src={RedemptaImg}
                fill
                alt="image" />
                </div>
              <div className=" my-auto  ">
                <p className='font-bold mb-1'>Redempta Uwayezu</p>
                <p className='text-headerInfoBgColor'>Co-founder</p>
              </div>
            </div>
          


          <div className='flex gap-3 h-[40vh] col-span-1 border-[1.4px] border-slate-200 rounded-[15px]'>
            <div className='w-[50%] rounded-[15px] h-full relative'>
              <Image
                className='w-full rounded-[15px] h-full object-cover'
                src={YvonneImg}
                fill
                alt="image" />
                </div>
              <div className=" my-auto  ">
                <p className='font-bold mb-1'>Yvonne Uwase</p>
                <p className='text-headerInfoBgColor'>Managing Director</p>
              </div>
            </div>
          

          <div className='flex gap-3 h-[40vh] col-span-1 border-[1.4px] border-slate-200 rounded-[15px]'>
            <div className='w-[50%] rounded-[15px] h-full relative'>
              <Image
                className='w-full rounded-[15px] h-full object-cover'
                src={EricImg}
                fill
                alt="image" />
                </div>
              <div className=" my-auto  ">
                <p className='font-bold mb-1'>Nsengiyumva Eric</p>
                <p className='text-headerInfoBgColor'>Business Development Manager</p>
              </div>
            </div>
          
            <div className='flex gap-3 h-[40vh] col-span-1 border-[1.4px] border-slate-200 rounded-[15px]'>
            <div className='w-[50%] rounded-[15px] h-full relative'>
              <Image
                className='w-full rounded-[15px] h-full object-cover'
                src={FabriceImg}
                fill
                alt="image" />
                </div>
              <div className="my-auto">
                <p className='font-bold mb-1'>Kagina Fabrice</p>
                <p className='text-headerInfoBgColor'>Human Resources Officer</p>
              </div>
            </div>

          <div className='flex gap-3 h-[40vh] col-span-1 border-[1.4px] border-slate-200 rounded-[15px]'>
            <div className='w-[50%] rounded-[15px] h-full relative'>
              <Image
                className='w-full rounded-[15px] h-full object-cover'
                src={GiseleImg}
                fill
                alt="image" />
                </div>
              <div className=" my-auto  ">
                <p className='font-bold mb-1'>Nyirarukundo Gisele</p>
                <p className='text-headerInfoBgColor'>Business Development Officer</p>
              </div>
            </div>
          

          

         

          <div className='flex gap-3 h-[40vh] col-span-1 border-[1.4px] border-slate-200 rounded-[15px]'>
            <div className='w-[50%] rounded-[15px] h-full relative'>
              <Image
                className='w-full rounded-[15px] h-full object-cover'
                src={RuthImg}
                fill
                alt="image" />
                </div>
              <div className=" my-auto  ">
                <p className='mb-1 font-bold'>Bamukunde Ruth</p>
                <p className='text-headerInfoBgColor'>Business Development officer</p>
              </div>
            </div>
          


         
          

          {/*  team member cards */}
        </div>
      </div>

      {/* Client section */}
      <div className="flex flex-col md:flex-row mt-12 md:mt-[5em]">
        <div className="w-full md:w-[50%]">
          <Image
            src={requestNote}
            alt="client"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col gap-6 md:gap-7 justify-center p-4 md:px-6 md:ps-8">
          <p className="text-textColor font-semibold text-2xl md:text-[2.5em]">
            What Say Our Client!!!
          </p>
          <p className="text-welcomeBgColor flex items-start text-sm md:text-base">
            <Quote className="w-16 md:w-[300px]" />
            Our clients consistently praise us for our dedication, expertise, and tailored solutions. They’ve trusted us to handle every aspect of their projects, from strategic planning to seamless execution, and we’ve exceeded their expectations time and again. Whether it's providing innovative solutions, ensuring timely delivery, or being a reliable partner in growth, we’re proud to have helped businesses achieve success across various industries. Our commitment to excellence has made us a trusted partner for organizations looking to unlock their full potential..
          </p>
        </div>
      </div>

      {/* Latest Blogs section */}
      <div className="flex flex-col items-center gap-5 md:gap-[20px] mt-12 md:mt-[3em] px-4">
        <p className="text-textColor font-semibold text-2xl md:text-[2.5em] text-center">
          Latest Blog Post
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[40px] w-full md:w-[80%]  ">
          {loadingStates.loadingAllBlogs ? (
            loadingBlogCards.map((_, index) => (
              <LoadingBlogCard key={index} />
            ))
          ) : blogs.length === 0 ? (
            <NoBlogsFound />
          ) : (
            latest3Blogs.map((blog, index) => (
              <BlogCard
                key={blog._id}
                {...blog}
                index={index}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MainUserPage;