import { LoggingUser, ResponseUser, User } from "@/types/User"
import axios, { AxiosError } from "axios"


const apiClient = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json"
    }
})
export const loginApi = async (loggingUser:LoggingUser):Promise<ResponseUser>=>{
    try {
        const response = await apiClient.post("/auth/login", loggingUser)

        console.log('logging response data ',response.data)   ;
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
        const response = await axios.post("/auth/register", registeringUser)

        console.log('registering response data ', response.data);
        return response.data
    } catch (error) {
        if(error instanceof AxiosError){
            console.log('axios error ', error);
            throw new Error(error.response?.data.message)
        }

        throw error;
    }
}

