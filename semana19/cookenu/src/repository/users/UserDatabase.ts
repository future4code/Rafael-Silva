import Database from '../../database/Database';
import { User } from '../../models/User';
import { dateFmt } from '../../services/Helpers';

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

    public static async unfollow(userId: string, userFollowId: string): Promise<boolean> {
        try {
            await Database.connection('cookenu_followers').where({
                user_id: userId,
                followers: userFollowId
            }).del();

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    public static async getFeed(userId: string): Promise<object | boolean> {
        try {
            const result = await Database.connection.raw(`
                SELECT
                    cookenu_recipe.id as id,
                    cookenu_recipe.title as title,
                    cookenu_recipe.description as description,
                    cookenu_recipe.created_at as created_at,
                    cookenu_recipe.user_id as user_id,
                    cookenu_users.name as username
                FROM cookenu_recipe
                JOIN cookenu_users ON cookenu_users.id = cookenu_recipe.user_id
                JOIN cookenu_followers ON cookenu_followers.followers = cookenu_recipe.user_id
                WHERE cookenu_followers.user_id = '${userId}'
            `);

            if (result.length === 0) {
                return false;
            }

            const resultModified = result[0].map((item: any) => ({
                id: item.id,
                title: item.title,
                description: item.description,
                created_at: dateFmt(item.created_at),
                user_id: item.user_id,
                username: item.username,
            }));

            return {
                feed: resultModified
            };
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
