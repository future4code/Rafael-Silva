import UserRepository from '../business/repository/UserRepository';
import { User } from '../models/User';
import Database from './Database';

export class UserData extends Database implements UserRepository {
    async findAll(): Promise<User[] | boolean> {
        try {
            const result = await Database.connection.select('*').from('labook_users');

            if (result.length === 0) {
                return false;
            }
            return result;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async findById(id: string): Promise<User | boolean> {
        try {
            const result = await Database.connection.select('*').from('labook_users').where({ id });

            if (result.length === 0) {
                return false;
            }

            return result[0];
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async findByEmail(email: string): Promise<User | boolean> {
        try {
            const result = await Database.connection.select('*').from('labook_users').where({ email });

            if (result.length === 0) {
                return false;
            }

            return result[0];
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async create(user: User): Promise<boolean> {
        try {
            await Database.connection('labook_users').insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            });

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            await Database.connection('labook_users').where({ id }).del();

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}