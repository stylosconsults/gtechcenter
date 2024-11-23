import { Contact, ResponseContact, ResponseContacts, SavedContact } from "@/types/Contact"
import axios,{ AxiosError } from "axios"
import Cookies from "js-cookie"

const apiClient= axios.create({
    baseURL:"/api",
    headers: {
        "Content-Type": "application/json"
    }
})

const token = Cookies.get("auth_token")

export const createContactApi = async(newContact: Contact):Promise<ResponseContact>=>{
    try {
        const response = await apiClient.post('/contacts', newContact)
        console.log('response data ', response.data);
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
        const response = await axios.put(`/api/contacts/${contactId}`, updatedContactData,{
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

        const response = await axios.get(`/api/contacts/`, {
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
        const response = await axios.get(`/api/contacts/${contactId}`, {
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
        const response = await axios.delete(`/api/contacts/${contactId}`, {
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
