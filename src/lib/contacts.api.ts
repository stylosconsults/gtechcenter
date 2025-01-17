import { Contact, ResponseContact, ResponseContacts } from "@/types/Contact"
import axios,{ AxiosError } from "axios"
import Cookies from "js-cookie"

const BASEURL = process.env.NEXT_PUBLIC_BASEURL

const apiClient= axios.create({
    baseURL:BASEURL,
    headers: {
        "Content-Type": "application/json"
    }
})

const token = Cookies.get("auth_token")

export const createContactApi = async(newContact: Contact):Promise<ResponseContact>=>{
    try {
        const response = await apiClient.post('/contacts', newContact)
        return response.data

    } catch (error) {
        if(error instanceof AxiosError) {
            throw new Error(error.response?.data.message)
        }

        throw error
    }
}

export const updateContactApi = async(contactId: string,updatedContactData: Contact):Promise<ResponseContact>=>{
    try {
        const response = await axios.put(`${BASEURL}/contacts/${contactId}`, updatedContactData,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        if(error instanceof AxiosError) {
            throw new Error(error.response?.data.message)
        }

        throw error
    }
}


export const fetchAllContactsApi = async():Promise<ResponseContacts >=>{
    try {

        const response = await axios.get(`${BASEURL}/contacts/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        if(error instanceof AxiosError) {
            throw new Error(error.response?.data.message)
        }

        throw error
    }
}

export const fetchSingleContactApi = async(contactId: string):Promise<ResponseContact> => {
    try {
        const response = await axios.get(`${BASEURL}/contacts/${contactId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        if(error instanceof AxiosError) {
            throw new Error(error.response?.data.message)
        }

        throw error
    }
}

export const deleteContactApi = async(contactId: string):Promise<void>=>{
    try {
        await axios.delete(`${BASEURL}/contacts/${contactId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    } catch (error) {
        if(error instanceof AxiosError) {
            throw new Error(error.response?.data.message)
        }

        throw error
    }
}
