"use client"
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { useUsers } from '@/hooks/useUsers'
import { LoggingUser } from '@/types/User'
import PagesTopDiv from '@/components/PagesTopDiv'
import Image from 'next/image'
import LoginImage from "../../../../public/images/bgImg2.png"
import { ROLES } from '@/constants/userRoles'
import Link from 'next/link'

const LoginPage = () => {
    const router = useRouter()
    const pathname =usePathname()
    const searchParams = useSearchParams()
    const { error, setError, loading, userSuccessMsgs, currentUser, loginUser } = useUsers()
    const [disableLoginBtn, setDisableLoginBtn] = useState<boolean>(true)

    const [loggingUserData, setLoggingUserData] = useState<LoggingUser>({
        email: "",
        password: ""
    })

    const handleLoggingDataChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setLoggingUserData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleOnSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await loginUser(loggingUserData)
    }


    // useEffect(() => {
    //     const forbidden = searchParams.get('forbidden')
    //     const jwtExpired = searchParams.get('jwt_expired')
    //     const certainError = searchParams.get('certain_error')

    //     if (forbidden || jwtExpired || certainError) {
    //         setTimeout(() => {
    //             router.replace("/auth/login")
    //         }, 4000);
    //     }
    // }, [searchParams, router])

    // Handle URL parameters and errors
    useEffect(() => {
        const forbidden = searchParams.get('forbidden')
        const jwtExpired = searchParams.get('jwt_expired')
        const certainError = searchParams.get('certain_error')
        let redirectTimeout: NodeJS.Timeout


        if (!error) {

            if (forbidden || jwtExpired || certainError) {
                const message = forbidden || jwtExpired || certainError
                toast.error(message)
                // redirectTimeout = setTimeout(() => {
                //     router.replace("/auth/login")
                // }, 3000);
                router.replace(pathname)
            }


        } else {
            toast.error(error)
            setError("")
        }


        return () => {
            if (redirectTimeout) clearTimeout(redirectTimeout);
        }
    }, [error, searchParams, router, setError])

    // Handle redirection after successful login

    useEffect(() => {
        let redirectTimeout: NodeJS.Timeout
        if (userSuccessMsgs.logInSuccessMsg && currentUser) {
            redirectTimeout = setTimeout(() => {
                const redirectPath = currentUser.role === ROLES.ADMIN ? "/admin/blogs" : currentUser.role === ROLES.USER ? "/" : null
                if (redirectPath) router.replace(redirectPath)
            }, 2000);
        }

        return () => {
            if (redirectTimeout) clearTimeout(redirectTimeout)
        }
    }, [currentUser, router, userSuccessMsgs])

    // Form validation
    useEffect(() => {
        setDisableLoginBtn(!loggingUserData.email || !loggingUserData.password)
    }, [loggingUserData])

    return (
        <div className='flex flex-col'>
            <PagesTopDiv heading='Login To GTECH' paragraph='Home Login' />

            <div className='flex h-[440px]'>
                {/* Form Section */}
                <div className='bg-headerBgColor flex flex-col gap-3 pt-2 w-[50%] h-full border border-green-500 px-4 justify-center'>
                    <form onSubmit={handleOnSubmit} className='h-[75%] w-full flex flex-col justify-evenly rounded-[5px] gap-4 bg-headerBgColor p-2'>
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
                            type="password"
                            placeholder='Password'
                            className='p-3 text-[1.1em] outline-none rounded-[5px]'
                            name='password'
                            value={loggingUserData.password}
                            onChange={handleLoggingDataChange}
                        />

                        <button
                            disabled={loading || disableLoginBtn}
                            className={`
                                ${loading || disableLoginBtn ? "bg-red-400" : "bg-headerInfoBgColor"}
                                text-white p-2 text-[1.1em] font-semibold rounded-[5px]
                                transition-colors duration-200
                            `}
                        >
                            {loading ? "Loading..." : "Submit"}
                        </button>
                    </form>
                    <div className='flex items-center justify-center gap-3 text-[1.2em]'>
                        <p>Create an account</p>
                        <Link className='underline-offset-2 underline' href={"/auth/register"}>here</Link>
                    </div>
                </div>

                {/* Image Section */}
                <div className='w-[50%]'>
                    <Image
                        className='w-full h-full object-cover'
                        src={LoginImage}
                        alt="Login background"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default LoginPage