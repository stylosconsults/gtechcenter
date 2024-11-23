export interface Contact {
    first_name: string;
    last_name : string;
    subject: string;
    message: string;
    email: string
}

export interface SavedContact extends Contact {
    _id: string
    createdAt: string;
    lastlyUpdatedAt: string
}

export interface ResponseContact {
    contact: SavedContact;   
    message: string
}

export interface ResponseContacts {
    contacts: SavedContact[];   
    message: string
}