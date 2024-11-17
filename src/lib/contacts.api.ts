import { Contact, ResponseContact, SavedContact } from "@/types/Contact"
import axios,{ AxiosError } from "axios"

const apiClient= axios.create({
    baseURL:"/api",
    headers: {
        "Content-Type": "application/json"
    }
})

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
        const response = await apiClient.put(`/contacts/${contactId}`, updatedContactData)
        return response.data
    } catch (error) {
        if(error instanceof AxiosError) {
            throw new Error(error.response?.data.message)
        }

        throw error
    }
}


export const fetchAllContactsApi = async():Promise<ResponseContact >=>{
    try {
        const response = await apiClient.get(`/contacts/`)
        console.log('fetched contacts ', response.data);
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
