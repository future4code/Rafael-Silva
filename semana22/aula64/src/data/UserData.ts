import { UserInterface } from '../models/interfaces/UserInterface';
import Database from './Database';

export default class UserData extends Database {
    public async findAll(): Promise<UserInterface[] | boolean> {
        try {
            const result = await Database.connection.select('*').from('aula58_users');

            if (result.length === 0) {
                return false;
            }
            return result;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    public async findById(id: string): Promise<UserInterface | boolean> {
        try {
            const result = await Database.connection.select('*').from('aula58_users').where({ id });

            if (result.length === 0) {
                return false;
            }

            return result[0];
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    public async findByEmail(email: string): Promise<UserInterface | boolean> {
        try {
            const result = await Database.connection.select('*').from('aula58_users').where({ email });

            if (result.length === 0) {
                return false;
            }

            return result[0];
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    public async create(user: UserInterface): Promise<boolean> {
        try {
            await Database.connection('aula58_users').insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role
            });

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    public async delete(id: string): Promise<boolean> {
        try {
            await Database.connection('aula58_users').where({ id }).del();

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}