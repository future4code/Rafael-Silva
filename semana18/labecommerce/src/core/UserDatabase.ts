import User from '../models/User';
import BaseDatabase from './BaseDatabase';

export default class UserDatabase extends BaseDatabase {
    // eslint-disable-next-line class-methods-use-this
    async create(user: User): Promise<boolean> {
        try {
            await BaseDatabase.connection('User').insert({
                id: user.getId(),
                name: user.getName(),
                age: user.getAge(),
                email: user.getEmail(),
            });

            return true;
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
            return false;
        }
    }

    // eslint-disable-next-line class-methods-use-this
    async getAllUsers(): Promise<User[] | boolean> {
        try {
            const result = await BaseDatabase.connection('User');

            return result;
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
            return false;
        }
    }
}
