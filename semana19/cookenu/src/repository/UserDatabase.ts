import Database from '../database/Database';
import userInterface from '../models/interfaces/userInterface';

export default class UserDatabase extends Database {
    public static async create(user: userInterface): Promise<boolean> {
        try {
            await Database.connection('aula55-user').insert({
                id: user.id,
                email: user.email,
                password: user.password,
                role: user.role,
            });

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    public static async findById(id: string): Promise<userInterface | boolean> {
        try {
            const result = await Database.connection('aula55-user').where({
                id,
            });

            return result[0];
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    public static async findByEmail(
        email: string,
    ): Promise<userInterface | boolean> {
        try {
            const result = await Database.connection('aula55-user').where({
                email,
            });

            return result[0];
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
