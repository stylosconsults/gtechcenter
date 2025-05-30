
export interface User {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: number| null;
    password: string;
}

export interface LoggingUser{
    email: string;
    password: string
}
export interface SavedUser extends User{
    _id: string;
}

export interface ResponseUser{
    message: string;
    user: SavedUser;
    token: {
        message: string;
        token: string
    }
}