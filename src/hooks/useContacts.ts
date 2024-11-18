"use client";

import { updateBlogApi } from "@/lib/blogs.api";
import {
  createContactApi,
  deleteContactApi,
  fetchAllContactsApi,
  fetchSingleContactApi,
  updateContactApi,
} from "@/lib/contacts.api";
import { Contact, SavedContact } from "@/types/Contact";
import { all } from "axios";
import { useEffect, useState } from "react";

interface ContactSuccessMsgs {
  createSuccessMsg: string;
  updateSuccessMsg: string;
  getAllSuccessMsg: string;
  getSingleSuccessMsg: string;
  deleteSuccessMsg: string;
}

export function useContacts() {
  const [contacts, setContacts] = useState<SavedContact[]>([]);
  const [singleContact, setSingleContact] = useState<SavedContact | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [contactSuccessMsgs, setContactSuccessMsgs] =
    useState<ContactSuccessMsgs>({
      createSuccessMsg: "",
      updateSuccessMsg: "",
      getAllSuccessMsg: "",
      getSingleSuccessMsg: "",
      deleteSuccessMsg: "",
    });

  const createContact = async (newContact: Contact) => {
    try {
      const savedContact = await createContactApi(newContact);
      setContacts((previousContacts) => [
        ...previousContacts,
        savedContact.contact,
      ]);

      setContactSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        createSuccessMsg: savedContact.message,
      }));
    } catch (error) {
      setError((error as Error).message);
      setContactSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        createSuccessMsg: "",
      }));
    } finally {
      setLoading(false);
    }
  };

  const updateContact = async (contactId: string, newContact: Contact) => {
    try {
      const savedContact = await updateContactApi(contactId, newContact);
      setContacts((previousContacts) =>
        previousContacts.map((contact) =>
          contact._id === savedContact.contact._id
            ? savedContact.contact
            : contact
        )
      );

      setContactSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        updateSuccessMsg: savedContact.message,
      }));
    } catch (error) {
      setError((error as Error).message);
      setContactSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        updateSuccessMsg: "",
      }));
    } finally {
      setLoading(false);
    }
  };

  const fetchAllContact = async () => {
    try {

      const allContacts = await fetchAllContactsApi();
      setContacts((previousContacts) => [...allContacts.contacts]);
      setContactSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        getAllSuccessMsg: allContacts.message,
      }));

    } catch (error) {

      setError((error as Error).message);
      setContactSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        getAllSuccessMsg: "",
      }));

    } finally {
      setLoading(false);
    }
  };

  const fetchSingleContact = async (contactId: string) => {
    try {

      const contact = await fetchSingleContactApi(contactId);
      setSingleContact({ ...contact.contact });
      setContactSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        getSingleSuccessMsg: contact.message,
      }));

    } catch (error) {

      setError((error as Error).message);
      setContactSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        getSingleSuccessMsg: "",
      }));

    } finally {

      setLoading(false);

    }
  };

  const deleteContact = async (contactId: string) => {
    try {

      const result = await deleteContactApi(contactId);
      console.log("result after contact_delete", result);
      setContactSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        deleteSuccessMsg: "deleted successfully",
      }));

    } catch (error) {

      setError((error as Error).message);
      setContactSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        deleteSuccessMsg: "",
      }));

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchAllContact();
  }, []);

  return {
    contacts,
    singleContact,
    error,
    loading,
    contactSuccessMsgs,
    setError,
    createContact,
    updateContact,
    deleteContact,
    fetchSingleContact,
  };
}
