export interface Contact {
    first_name: string;
    last_name : string;
    subject: string;
    message: string
}

export interface SavedContact extends Contact {
    _id: string
    createdAt: string;
    lastlyUpdatedAt: string
}