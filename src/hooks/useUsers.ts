// hooks/useUsers.ts
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import { ROLES } from "@/constants/userRoles";
import { loginApi, registerUserApi } from "@/lib/users.api";
import { LoggingUser, SavedUser, User } from "@/types/User";

interface UserSuccessMsgs {
    logInSuccessMsg: string;
    registerSuccessMsg: string;
    getAllUsersMsgs: string;
    getSingleUserMsg: string;
    updateUserMsg: string;
}

export function useUsers() {
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [userSuccessMsgs, setUserSuccessMsgs] = useState<UserSuccessMsgs>({
        logInSuccessMsg: "",
        registerSuccessMsg: "",
        getAllUsersMsgs: "",
        getSingleUserMsg: "",
        updateUserMsg: ""
    });

    const [users, setUsers] = useState<SavedUser[]>([]);
    const [currentUser, setCurrentUser] = useState<SavedUser>({
        _id: "",
        email: "",
        first_name: "",
        phone_number: null,
        last_name: "",
        password: "",
        role: ROLES.USER,
    });

    const loginUser = async (loggingUser: LoggingUser) => {
        setLoading(true);
        setError("");
        setUserSuccessMsgs(prev => ({
            ...prev,
            logInSuccessMsg: ""
        }));

        try {
            const loggedInUser = await toast.promise(
                loginApi(loggingUser),
                {
                    loading: 'Logging in...',
                    success: data => data.message,
                    error: (err) => err.message 
                }
            );

            const authToken = loggedInUser.token.token;
            Cookies.set("auth_token", authToken);

            setCurrentUser({
                _id: loggedInUser.user._id,
                email: loggedInUser.user.email,
                first_name: loggedInUser.user.first_name,
                last_name: loggedInUser.user.last_name,
                phone_number: loggedInUser.user.phone_number,
                password: loggedInUser.user.password,
                role: loggedInUser.user.role
            });

            setUserSuccessMsgs(prev => ({
                ...prev,
                logInSuccessMsg:  loggedInUser.message
            }));

            return loggedInUser;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An error occurred';
            setError(errorMessage);
            setUserSuccessMsgs(prev => ({
                ...prev,
                logInSuccessMsg: ""
            }));
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const registerUser = async (registeringUser: User) => {
        setLoading(true);
        setError("");
        setUserSuccessMsgs(prev => ({
            ...prev,
            registerSuccessMsg: ""
        }));
        try {
            const registeredUser = await toast.promise(
                registerUserApi(registeringUser),

                {
                    loading: 'Creating your account...',
                    success: data => data.message,
                    error: (err) => err.message
                }
            );

            const authToken = registeredUser.token.token;
            Cookies.set("auth_token", authToken);

            setCurrentUser({
                _id: registeredUser.user._id,
                email: registeredUser.user.email,
                first_name: registeredUser.user.first_name,
                last_name: registeredUser.user.last_name,
                phone_number: registeredUser.user.phone_number,
                password: registeredUser.user.password,
                role: registeredUser.user.role
            });

            setUserSuccessMsgs(prev => ({
                ...prev,
                registerSuccessMsg: registeredUser.message
            }));

            return registeredUser;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An error occurred';
            setError(errorMessage);
            setUserSuccessMsgs(prev => ({
                ...prev,
                registerSuccessMsg: ""
            }));
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return {
        loginUser,
        registerUser,
        users,
        currentUser,
        setError,
        error,
        loading,
        userSuccessMsgs
    };
}