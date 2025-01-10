"use client"
import PagesTopDiv from '../../../components/PagesTopDiv'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import LoginImage from "../../../../public/images/bgImg2.png"
import Image from 'next/image'
import { useUsers } from '@/hooks/useUsers'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type RegisteringUser = {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    phone_number: string;  // Change type from number | null to string
    
}

const RegisterPage = () => {
    const { loading, registerUser, currentUser, userSuccessMsgs } = useUsers()
    const router = useRouter()
    const [disableRegisterBtn, setDisableRegisterBtn] = useState<boolean>(false)
    const [registeringData, setRegisteringData] = useState<RegisteringUser>({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        phone_number: "",
    })

    const handleRegisteringDataChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setRegisteringData(
            (previousData) => ({
                ...previousData,
                [name]: name === 'phone_number' ? (value === '' ? '' : value) : value
            })
        )
    }

    const handleOnSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const dataToSubmit = {
            ...registeringData,
            phone_number: registeringData.phone_number ? parseInt(registeringData.phone_number) : null
        }
        await registerUser(dataToSubmit)
    }



    useEffect(() => {
        console.log('success msg: ',userSuccessMsgs.registerSuccessMsg);
        if (userSuccessMsgs.registerSuccessMsg) {
            setRegisteringData(
                {
                    email: "",
                    password: "",
                    first_name: "",
                    last_name: "",
                    phone_number: "0"                }
            )

        }
    }, [userSuccessMsgs.registerSuccessMsg])

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

    useEffect(() => {
        let redirectTimeout: NodeJS.Timeout
        if (userSuccessMsgs.registerSuccessMsg && currentUser) {
            redirectTimeout = setTimeout(() => {
                const redirectPath = currentUser.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL ? "/admin/blogs" : "/"
                if (redirectPath) router.replace(redirectPath)
            }, 2000);
        }

        return () => {
            if (redirectTimeout) clearTimeout(redirectTimeout)
        }
    }, [currentUser, router, userSuccessMsgs])


    return (
        <div className='flex flex-col'>
            <PagesTopDiv heading='Sign Up To G-WISSEN' paragraph='Home Sign_Up' />

            <div className='grid grid-cols-1 md:grid-cols-2 '>

                <div className='bg-headerBgColor col-span-1 flex flex-col pt-2 h-auto px-0 md:px-4 justify-center'>
                    <form onSubmit={handleOnSubmit} className=' w-full flex flex-col justify-evenly rounded-[5px] gap-4 bg-headerBgColor p-2'>

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
                            value={registeringData.phone_number!}
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

                        <button disabled={disableRegisterBtn || loading} className={` ${disableRegisterBtn || loading ? "bg-red-400" : "bg-headerInfoBgColor"}  text-white p-2 text-[1.1em] font-semibold rounded-[5px]`}>{loading ? "Loading" : "Submit"}</button>
                    </form>
                    <div className='flex items-center justify-center gap-3 text-[1.2em]'>

                        <p>Already have an account ?</p>
                        <Link className='underline-offset-2 underline' href={"/auth/login"}>log in</Link>
                    </div>
                </div>


                <div className='col-span-1 h-[50vh] md:h-auto '>
                    <Image className='w-full h-full' src={LoginImage} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default RegisterPage