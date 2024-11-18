import { ROLES } from "@/constants/userRoles";
import { loginApi, registerUserApi } from "@/lib/users.api";
import { LoggingUser, SavedUser, User } from "@/types/User";
import { useState } from "react";

interface UserSuccessMsgs {
    logInSuccessMsg: string;
    registerSuccessMsg: string;
    getAllUsersMsgs: string;
    getSingleUserMsg: string;
    updateUserMsg: string;

}

export function useUsers(){

    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [userSuccessMsgs, setUserSuccessMsgs] = useState<UserSuccessMsgs>({
        logInSuccessMsg: "",
        registerSuccessMsg: "",
        getAllUsersMsgs: "",
        getSingleUserMsg: "",
        updateUserMsg: ""
    })
    const [users, setUsers] = useState<SavedUser[]>([])
    const [currentUser, setCurrentUser] = useState<SavedUser>({
        _id: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        role: ROLES.USER,
    })


    const loginUser= async(loggingUser: LoggingUser)=>{
        setLoading(true)
        setError("")
        try {
            const loggedInUser = await loginApi(loggingUser)
            const authToken = loggedInUser.token.token
            localStorage.setItem("auth_token", authToken)
            localStorage.removeItem("auth_token")

        
            setCurrentUser(
                {
                    _id: loggedInUser.user._id,
                    email: loggedInUser.user.email,
                    first_name: loggedInUser.user.first_name,
                    last_name: loggedInUser.user.last_name,
                    password: loggedInUser.user.password,
                    role: loggedInUser.user.role
                }
            )
            setUserSuccessMsgs(
                (previousSuccessMsgs)=>({
                    ...previousSuccessMsgs,
                    logInSuccessMsg: loggedInUser.message
                })
            )
        } catch (error) {
            setError((error as Error).message)
            setUserSuccessMsgs(
                (previousSuccessMsgs)=>({
                    ...previousSuccessMsgs,
                    logInSuccessMsg: ""
                })
            )
        }finally{
            setLoading(false)
        }
    }

    const registerUser= async(registeringUser: User)=>{
        setLoading(true)
        setError("")
        try {
            const registeredUser = await registerUserApi(registeringUser)
            const authToken = registeredUser.token.token

            localStorage.setItem("auth_token", authToken)

            setCurrentUser(
                {
                    _id: registeredUser.user._id,
                    email: registeredUser.user.email,
                    first_name: registeredUser.user.first_name,
                    last_name: registeredUser.user.last_name,
                    password: registeredUser.user.password,
                    role: registeredUser.user.role
                }
            )

            setUserSuccessMsgs(
                (previousSuccessMsgs)=>({
                    ...previousSuccessMsgs,
                    registerSuccessMsg: registeredUser.message
                })
            )
        } catch (error) {
            setError((error as Error).message)
            setUserSuccessMsgs(
                (previousSuccessMsgs)=>({
                    ...previousSuccessMsgs,
                    registerSuccessMsg: ""
                })
            )
        }finally{
            setLoading(false)
        }
    }


    return {
        loginUser,
        registerUser,
        users,
        currentUser,
        error,
        setError,
        loading,
        userSuccessMsgs
    }
}