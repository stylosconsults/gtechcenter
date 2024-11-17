"use client"

import { updateBlogApi } from "@/lib/blogs.api"
import { createContactApi, deleteContactApi, fetchAllContactsApi, fetchSingleContactApi, updateContactApi } from "@/lib/contacts.api"
import { Contact, SavedContact } from "@/types/Contact"
import { useState } from "react"



export function useContacts (){
    const [contacts, setcontacts] = useState<SavedContact[]>([])
    const [singleContact, setSingleContact] = useState<SavedContact|null>(null)
    const [error, seterror] = useState<string| null>(null)
    const [loading, setloading] = useState<boolean>(false)
    
    const createContact = async (newContact: Contact)=>{
        try {
            const savedContact = await createContactApi(newContact)
            setcontacts(
                (previousContacts) => [...previousContacts, savedContact]
            )
        } catch (error) {
            seterror((error as Error).message)
        }finally{
            setloading(false)
        }
    }

    const updateContact = async (contactId: string,newContact: Contact)=>{
        try {
            const savedContact = await updateContactApi(contactId,newContact)
            setcontacts(
                (previousContacts) => previousContacts.map((contact)=> contact._id === savedContact._id ? savedContact : contact)
            )
        } catch (error) {
            seterror((error as Error).message)
        }finally{
            setloading(false)
        }
    }

    const fetchAllContact = async ()=>{
        try {
            const allContacts = await fetchAllContactsApi()
            setcontacts(
                (previousContacts)=> [...allContacts]
            )
        } catch (error) {
            seterror((error as Error).message)
        }finally{
            setloading(false)
        }
    }


    const fetchSingleContact = async (contactId: string)=>{
        try {
            const contact = await fetchSingleContactApi(contactId)
            setSingleContact({...contact})
        } catch (error) {
            seterror((error as Error).message)
        }finally{
            setloading(false)
        }
    }


    const deleteContact = async (contactId: string)=>{
        try {
            const result = await deleteContactApi(contactId)
            console.log('result after contact_delete', result);
        } catch (error) {
            seterror((error as Error).message)
        }finally{
            setloading(false)
        }
    }


    return {
        contacts, 
        singleContact, 
        error, 
        loading,
        createContact,
        updateContact,
        deleteContact,
        fetchSingleContact
    }
}