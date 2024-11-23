"use client"
import PagesTopDiv from '../../../components/PagesTopDiv'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import LoginImage from "../../../../public/images/bgImg2.png"
import Image from 'next/image'
import { useUsers } from '@/hooks/useUsers'
import { User } from '@/types/User'
import { register } from 'module'
import { ROLES } from '@/constants/userRoles'
import Link from 'next/link'

const page = () => {
    const { error, loading, registerUser, setError, userSuccessMsgs } = useUsers()
    const [disableRegisterBtn, setDisableRegisterBtn] = useState<boolean>(false)
    const [registeringData, setRegisteringData] = useState<User>({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        role: ROLES.USER
    })

    const handleRegisteringDataChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setRegisteringData(
            (previousData) => ({
                ...previousData,
                [name]: value
            })
        )
    }

    const handleOnSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log('registering data ', registeringData);
        await registerUser(registeringData)
    }

    useEffect(() => {
        if (error) {
            alert(error)
            setError("")
        }
    }, [error])

    useEffect(() => {
        if (userSuccessMsgs.registerSuccessMsg) {
            alert(userSuccessMsgs.registerSuccessMsg)
            setRegisteringData(
                {
                    email: "",
                    password: "",
                    first_name: "",
                    last_name: "",
                    phone_number: "",
                    role: ROLES.USER
                }
            )
        }
    }, [userSuccessMsgs.logInSuccessMsg])

    useEffect(() => {
        if (
            registeringData.email &&
            registeringData.password &&
            registeringData.first_name &&
            registeringData.last_name &&
            registeringData.password &&
            registeringData.phone_number
        ) {
            setDisableRegisterBtn(false)
        } else {
            setDisableRegisterBtn(true)
        }
    }, [registeringData])

    return (
        <div className='flex flex-col'>
            <PagesTopDiv heading='Sign Up To GTECH' paragraph='Home Sign_Up' />

            <div className='flex '>

                <div className='bg-headerBgColor flex flex-col gap-3 pt-2 w-[50%] h-full px-4 justify-center'>
                    <form onSubmit={handleOnSubmit} className='h-[75%] w-full flex flex-col justify-evenly rounded-[5px] gap-4 bg-headerBgColor p-2'>

                        <p className='text-textColor text-[2.4em] font-semibold text-center'>Sign Up</p>
                        <div className='flex justify-between'>
                            <input
                                type="text"
                                placeholder='First Name'
                                className=' w-[48%] p-3 text-[1.1em] outline-none rounded-[5px]'
                                name='first_name'
                                value={registeringData.first_name}
                                onChange={handleRegisteringDataChange}
                                required
                            />
                            <input
                                type="text"
                                placeholder='Last Name'
                                className=' w-[48%] p-3 text-[1.1em] outline-none rounded-[5px]'
                                name='last_name'
                                value={registeringData.last_name}
                                onChange={handleRegisteringDataChange}
                                required
                            />
                        </div>
                        <input
                            type="number"
                            placeholder='Phone number'
                            className='p-3 text-[1.1em] outline-none rounded-[5px]'
                            name='phone_number'
                            value={registeringData.phone_number}
                            onChange={handleRegisteringDataChange}
                            required
                        />
                        <input
                            type="email"
                            placeholder='youremail@example.com'
                            className='p-3 text-[1.1em] outline-none rounded-[5px]'
                            name='email'
                            value={registeringData.email}
                            onChange={handleRegisteringDataChange}
                            required
                        />
                        <input
                            type="password"
                            placeholder='Password'
                            className='p-3 text-[1.1em] outline-none rounded-[5px]'
                            name='password'
                            value={registeringData.password}
                            onChange={handleRegisteringDataChange}
                            required
                        />

                        <button disabled={disableRegisterBtn || loading} className={` ${disableRegisterBtn || loading ? "bg-red-400" : "bg-headerInfoBgColor"}  text-white p-2 text-[1.1em] font-semibold rounded-[5px]`}>Submit</button>
                    </form>
                    <div className='flex items-center justify-center gap-3 text-[1.2em]'>

                        <p>Already have an account ?</p>
                        <Link className='underline-offset-2 underline' href={"/auth/login"}>log in</Link>
                    </div>
                </div>


                <div className='w-[50%] '>
                    <Image className='w-full h-full' src={LoginImage} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default page