import { USER_ROLES } from '../UserModel';

export interface UserInterface {
    id: string;
    name: string;
    email: string;
    password: string;
    role: USER_ROLES;
}