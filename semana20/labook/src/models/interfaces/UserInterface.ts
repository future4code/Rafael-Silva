import { USER_ROLES } from './AuthInterface';

export interface UserInterface {
    id: string;
    name: string;
    email: string;
    password: string;
    role: USER_ROLES;
}