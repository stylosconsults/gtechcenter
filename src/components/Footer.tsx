"use client"
import Link from 'next/link'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Facebook from "../../public/icons/facebook.svg"
import Instagram from "../../public/icons/instagram.svg"
import Twitter from "../../public/icons/twitter.svg"
import LinkedIn from "../../public/icons/linkedIn.svg"
import { useSubscription } from '@/hooks/useSubscription'

const Footer = () => {
    const {  loading, createSubscription, subscribeSuccessMsgs } = useSubscription()
    const [subscribingEmail, setSubscribingEmail] = useState<string>("")
    const [disableSubscribeBtn, setDisableSubscribeBtn] = useState<boolean>(false)
    
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value
        setSubscribingEmail(email)
    }

    const handleOnSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await createSubscription(subscribingEmail)

    }


    useEffect(()=>{
        if(subscribeSuccessMsgs.createSuccessMsg !==""){
            setSubscribingEmail("")
        }
    }, [subscribeSuccessMsgs.createSuccessMsg])


    useEffect(() => {

        if(loading){
            setDisableSubscribeBtn(true)
        }else{
            setDisableSubscribeBtn(false)
        }
    }, [loading])




    return (
        <div className='flex flex-col bg-textColor'>
            <div className='flex flex-col gap-6 py-[30px] items-center bg-headerInfoBgColor'>
                <p className='text-textColor font-semibold text-[2.5em]'>Stay Update!!!</p>
                <form onSubmit={handleOnSubmit} className='flex w-[30%] rounded-[5px] overflow-hidden justify-between '>
                    <input
                        type="text"
                        placeholder='Your Email'
                        value={subscribingEmail}
                        onChange={handleEmailChange}
                        className='w-[80%] outline-none p-3'
                        required
                    />

                    <button disabled={disableSubscribeBtn || loading} className={`${loading || disableSubscribeBtn ? "bg-slate-700":"bg-textColor"} bg-textColor text-white w-[20%]  p-2`}>
                        {!loading ?
                        "Sign Up":
                        "Loading"
                        
                        }
                    </button>
                </form>
            </div>

            <div className='flex justify-around my-[2em]' >
                <div className='flex flex-col gap-3'>
                    <p className='text-white font-semibold text-[1.1em]'>Quick Links</p>
                    <div className='flex flex-col gap-1 ps-4 text-headerLinkBorderColor'>
                        <Link href={"/"}>Home</Link>
                        <Link href={"/about"}>About Us</Link>
                        <Link href={"/services"}>Our Services</Link>
                        <Link href={"/blogs"}>Latest Blog Post</Link>
                        <Link href={"/contact"}>Contact Us</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-white font-semibold text-[1.1em]'>Popular Links</p>
                    <div className='flex flex-col gap-1 ps-4 text-headerLinkBorderColor'>
                        <Link href={"/"}>Home</Link>
                        <Link href={"/about"}>About Us</Link>
                        <Link href={"/services"}>Our Services</Link>
                        <Link href={"/blogs"}>Latest Blog Post</Link>
                        <Link href={"/contact"}>Contact Us</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-white font-semibold text-[1.1em]'>Get In Touch</p>
                    <div className='flex flex-col gap-1 ps-4 text-headerLinkBorderColor'>
                        <Link href={""}>Kk 345 st., Kicukiro Saint Joseph</Link>
                        <Link href={""}>info@example.com</Link>
                        <Link href={""}>+250788647871</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-white font-semibold text-[1.1em]'>Follow Us</p>
                    <div className='flex gap-1'>
                        <Link href={""}><Twitter /></Link>
                        <Link href={""}><Facebook /></Link>
                        <Link href={""}><LinkedIn /></Link>
                        <Link href={""}><Instagram /></Link>
                    </div>
                </div>
            </div>

            <div className='my-3 '>
                <p className='text-center  text-headerLinkBorderColor'>© <span className='underline underline-offset-[5px] inline-block'>G-Wissen</span>. All Rights Reserved. Designed by <span className='underline underline-offset-[5px] inline-block'>g-wissen</span></p>
            </div>
        </div>

    )
}

export default Footer