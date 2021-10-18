import Database from '../database/Database';
import userInterface from '../models/interfaces/userInterface';

export default class UserDatabase extends Database {
    public static async create(user: userInterface): Promise<boolean> {
        try {
            await Database.connection('aula55-user').insert({
                id: user.id,
                email: user.email,
                password: user.password,
            });

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
