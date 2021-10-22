import Database from '../../database/Database';
import { User } from '../../models/User';

export default class UserDatabase extends Database {
    public static async create(user: User): Promise<boolean> {
        try {
            await Database.connection('cookenu_users').insert({
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

    public static async findById(id: string): Promise<any> {
        try {
            const result = await Database.connection('cookenu_users').where({
                id,
            });

            if (result.length === 0) {
                return false;
            }

            return result[0];
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    public static async findByEmail(
        email: string,
    ): Promise<any> {
        try {
            const result = await Database.connection('cookenu_users').where({
                email,
            });

            if (result.length === 0) {
                return false;
            }

            return result[0];
        } catch (error) {
            console.log(error);
            return false;
        }
    }


    public static async follow(userId: string, userFollowId: string): Promise<boolean> {
        try {
            await Database.connection('cookenu_followers').insert({
                user_id: userId,
                followers: userFollowId
            });

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
