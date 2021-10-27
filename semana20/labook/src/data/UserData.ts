import UserRepository from '../business/repository/UserRepository';
import { User } from '../models/User';
import Database from './Database';

export class UserData extends Database implements UserRepository {
    constructor() {
        super("labook_users");
    }

    public findAll = async (): Promise<User[] | boolean> => {
        try {
            const result = await Database.connection.select('*').from(this.tableName);

            if (result.length === 0) {
                return false;
            }
            return result;
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    public findById = async (id: string): Promise<User | boolean> => {
        try {
            const result = await Database.connection.select('*').from(this.tableName).where({ id });

            if (result.length === 0) {
                return false;
            }

            return result[0];
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    public findByEmail = async (email: string): Promise<User | boolean> => {
        try {
            const result = await Database.connection.select('*').from(this.tableName).where({ email });

            if (result.length === 0) {
                return false;
            }

            return result[0];
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    public create = async (user: User): Promise<boolean> => {
        try {
            await Database.connection(this.tableName).insert({
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
    };

    public delete = async (id: string): Promise<boolean> => {
        try {
            await Database.connection(this.tableName).where({ id }).del();

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    };

}