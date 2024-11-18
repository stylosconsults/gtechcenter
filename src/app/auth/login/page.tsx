"use client"

import PagesTopDiv from '../../../components/PagesTopDiv'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import LoginImage from "../../../../public/images/bgImg2.png"
import Image from 'next/image'
import { useUsers } from '@/hooks/useUsers'
import { LoggingUser } from '@/types/User'

const page = () => {
    const { error, setError, loading, userSuccessMsgs, loginUser } = useUsers()
    const [disableLoginBtn, setDisableLoginBtn] = useState<boolean>(false)
    const [loggingUserData, setLoggingUserData] = useState<LoggingUser>({
        email: "",
        password: ""
    })

    const handleLoggingDataChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setLoggingUserData(
            (previousData) => ({
                ...previousData,
                [name]: value
            })
        )
    }

    const handleOnSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await loginUser(loggingUserData)
    }

    useEffect(() => {
        if (error) {
            alert(error)
            setError("")
        }
    }, [error])

    useEffect(() => {
        if (userSuccessMsgs.logInSuccessMsg) {
            alert(userSuccessMsgs.logInSuccessMsg)
            setLoggingUserData(
                {
                    email: "",
                    password: ""
                }
            )
        }
    }, [userSuccessMsgs.logInSuccessMsg])

    useEffect(() => {
        if (
            loggingUserData.email &&
            loggingUserData.password
        ) {
            setDisableLoginBtn(false)
        } else {
            setDisableLoginBtn(true)
        }
    }, [loggingUserData])

    return (
        <div className='flex flex-col'>
            <PagesTopDiv heading='Login To GTECH' paragraph='Home Login' />

            <div className='flex h-[440px] '>

                <div className='bg-headerBgColor flex flex-col gap-3 pt-2 w-[50%] h-full border border-green-500 px-4 justify-center'>
                    <form onSubmit={handleOnSubmit} className='h-[75%]  w-full flex flex-col justify-evenly rounded-[5px] gap-4 bg-headerBgColor p-2'>

                        <p className='text-textColor text-[2.4em] font-semibold text-center'>Login</p>

                        <input
                            type="email"
                            placeholder='youremail@example.com'
                            className='p-3 text-[1.1em] outline-none rounded-[5px]'
                            name="email"
                            value={loggingUserData.email}
                            onChange={handleLoggingDataChange}
                        />
                        <input
                            type="text"
                            placeholder='Password'
                            className='p-3 text-[1.1em] outline-none rounded-[5px]'
                            name='password'
                            value={loggingUserData.password}
                            onChange={handleLoggingDataChange}
                        />

                        <button disabled={loading || disableLoginBtn} className={`${loading || disableLoginBtn ? "bg-red-400": "bg-headerInfoBgColor"}  text-white p-2 text-[1.1em] font-semibold rounded-[5px]`}>{loading ? "loading" : "Submit"}</button>
                    </form>

                </div>


                <div className='w-[50%] '>
                    <Image className='w-full h-full' src={LoginImage} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default page