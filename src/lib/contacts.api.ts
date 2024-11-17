import { Contact, SavedContact } from "@/types/Contact"
import axios,{ AxiosError } from "axios"

const apiClient= axios.create({
    baseURL:"/api",
    headers: {
        "Content-Type": "application/json"
    }
})

export const createContactApi = async(newContact: Contact):Promise<SavedContact>=>{
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

export const updateContactApi = async(contactId: string,updatedContactData: Contact):Promise<SavedContact>=>{
    try {
        const response = await apiClient.put(`/contacts/${contactId}`, updatedContactData)
        return response.data
    } catch (error) {
        if(error instanceof AxiosError) {
            throw new Error(error.response?.data.message)
        }

        throw error
    }
}


export const fetchAllContactsApi = async():Promise<SavedContact[]>=>{
    try {
        const response = await apiClient.get(`/contacts/`)
        return response.data
    } catch (error) {
        if(error instanceof AxiosError) {
            throw new Error(error.response?.data.message)
        }

        throw error
    }
}

export const fetchSingleContactApi = async(contactId: string):Promise<SavedContact> => {
    try {
        const response = await apiClient.get(`/contacts/${contactId}`)
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
        const response = await apiClient.delete(`/contacts/${contactId}`)
    } catch (error) {
        if(error instanceof AxiosError) {
            throw new Error(error.response?.data.message)
        }

        throw error
    }
}
