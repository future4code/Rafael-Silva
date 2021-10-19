import authInterface from './authInterface';

export default interface userInterface extends authInterface {
    email: string;
    password: string;
}
