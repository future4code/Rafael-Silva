import { UserInterface } from '../models/interfaces/UserInterface';
import UserModel from '../models/UserModel';
import Database from './Database';

export default class UserData extends Database {
    async findAll(): Promise<UserInterface[] | boolean> {
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

    async findById(id: string): Promise<UserInterface | boolean> {
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

    async findByEmail(email: string): Promise<UserInterface | boolean> {
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

    async create(user: UserModel): Promise<boolean> {
        try {
            await Database.connection('aula58_users').insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole(),
            });

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            await Database.connection('aula58_users').where({ id }).del();

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}