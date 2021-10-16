import BaseDatabase from './BaseDatabase';
import UserInterface from '../models/Interfaces/UserInterface';

export default class User extends BaseDatabase {
    // eslint-disable-next-line class-methods-use-this
    async create(user: UserInterface): Promise<boolean> {
        try {
            await BaseDatabase.connection('User').insert(user);

            return true;
        } catch (error: any) {
            console.log(error);
            return false;
        }
    }
}
