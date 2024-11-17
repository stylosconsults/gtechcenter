import { ROLES } from "../constants/userRoles";

export interface User {
    names: string;
    email: string;
    password: string;
    role?: typeof ROLES[keyof typeof ROLES]
}

