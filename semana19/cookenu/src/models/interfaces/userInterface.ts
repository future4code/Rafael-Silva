import authInterface from './authInterface';

export default interface userInterface extends authInterface {
    name: string;
    email: string;
    password: string;
}
