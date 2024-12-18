import { LoggingUser, ResponseUser, User } from "@/types/User"
import axios, { AxiosError } from "axios"

const BASEURL = "https://gtechcenter-backend.onrender.com/api"
const apiClient = axios.create({
    baseURL: BASEURL,
    headers: {
        "Content-Type": "application/json"
    }
})
export const loginApi = async (loggingUser:LoggingUser):Promise<ResponseUser>=>{
    try {
        const response = await apiClient.post("/auth/login", loggingUser)

        return response.data
        // localStorage.setItem("authToken", response.data.)
    } catch (error) {
        if(error instanceof AxiosError){
            console.log('error ', error.response);
            throw new Error(error.response?.data.message)
        }
        throw error
    }
}


export const registerUserApi = async(registeringUser: User):Promise<ResponseUser>=>{
    try {
        const response = await apiClient.post("/auth/register", registeringUser)

        console.log('registering response data ', response.data);
        return response.data
    } catch (error) {
        if(error instanceof AxiosError){
            throw new Error(error.response?.data.message)
        }

        throw error;
    }
}

