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

interface SuccessMsgs {
  createSuccessMsg: string;
  updateSuccessMsg: string;
  getAllSuccessMsg: string;
  getSingleSuccessMsg: string;
  deleteSuccessMsg: string;
}

export function useContacts() {
  const [contacts, setcontacts] = useState<SavedContact[]>([]);
  const [singleContact, setSingleContact] = useState<SavedContact | null>(null);
  const [error, seterror] = useState<string | null>(null);
  const [loading, setloading] = useState<boolean>(false);

  const [successMsgs, setSuccessMsgs] = useState<SuccessMsgs>({
    createSuccessMsg: "",
    updateSuccessMsg: "",
    getAllSuccessMsg: "",
    getSingleSuccessMsg: "",
    deleteSuccessMsg: "",
  });

  const createContact = async (newContact: Contact) => {
    try {
      const savedContact = await createContactApi(newContact);
      setcontacts((previousContacts) => [
        ...previousContacts,
        savedContact.contact[0],
      ]);

      setSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        createSuccessMsg: savedContact.message,
      }));
    } catch (error) {
      seterror((error as Error).message);
      setSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        createSuccessMsg: "",
      }));
    } finally {
      setloading(false);
    }
  };

  const updateContact = async (contactId: string, newContact: Contact) => {
    try {
      const savedContact = await updateContactApi(contactId, newContact);
      setcontacts((previousContacts) =>
        previousContacts.map((contact) =>
          contact._id === savedContact.contact[0]._id
            ? savedContact.contact[0]
            : contact
        )
      );

      setSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        updateSuccessMsg: savedContact.message,
      }));
    } catch (error) {
      seterror((error as Error).message);
      setSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        updateSuccessMsg: "",
      }));
    } finally {
      setloading(false);
    }
  };

  const fetchAllContact = async () => {
    try {
      const allContacts = await fetchAllContactsApi();
      setcontacts((previousContacts) => [...allContacts.contact]);
      setSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        getAllSuccessMsg: allContacts.message,
      }));
    } catch (error) {
      seterror((error as Error).message);
      setSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        getAllSuccessMsg: "",
      }));
    } finally {
      setloading(false);
    }
  };

  const fetchSingleContact = async (contactId: string) => {
    try {
      const contact = await fetchSingleContactApi(contactId);
      setSingleContact({ ...contact.contact[0] });
      setSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        getSingleSuccessMsg: contact.message,
      }));
    } catch (error) {
      seterror((error as Error).message);
      setSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        getSingleSuccessMsg: "",
      }));
    } finally {
      setloading(false);
    }
  };

  const deleteContact = async (contactId: string) => {
    try {
      const result = await deleteContactApi(contactId);
      console.log("result after contact_delete", result);
      setSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        deleteSuccessMsg: "deleted successfully",
      }));
    } catch (error) {
      seterror((error as Error).message);
      setSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        deleteSuccessMsg: "",
      }));
    } finally {
      setloading(false);
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
    successMsgs,
    seterror,
    createContact,
    updateContact,
    deleteContact,
    fetchSingleContact,
  };
}
