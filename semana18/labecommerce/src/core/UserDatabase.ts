import User from '../models/User';
import BaseDatabase from './BaseDatabase';

export default class UserDatabase extends BaseDatabase {
    // eslint-disable-next-line class-methods-use-this
    async create(user: User): Promise<boolean> {
        try {
            await BaseDatabase.connection('User').insert(user);

            return true;
        } catch (error: any) {
            console.log(error);
            return false;
        }
    }
}
