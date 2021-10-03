import connection from "../Core/Connection";

//Types
import { User } from "../Models/Interfaces/User";

//Get All Users
export const getAllUsers = async (): Promise<Object | boolean> => {
    try {
        const result = await connection.select("*").from("TodoListUser");

        const resultModified = result.map((user) => {
            return {
                id: user.id,
                nickname: user.nickname
            };
        });

        const users = {
            users: resultModified
        };

        return users;
    } catch (error) {
        console.log(error);
        return false;
    }
};

// Get User By id
export const getUserById = async (id: number): Promise<any> => {
    try {
        const result = await connection.select("id", "nickname").from("TodoListUser").where({ id: id });

        return result[0];
    } catch (error) {
        return false;
    }
};

//Find User By id
export const findUser = async (
    id: number,
    table: string = "TodoListUser",
    column: boolean = false
): Promise<User | boolean> => {
    try {
        let result;

        if (column === false) {
            result = await connection.select("*").from(`${table}`).where({ id: id });
        } else {
            result = await connection.select("*").from(`${table}`).where({ responsible_user_id: id });
        }

        return result[0];
    } catch (error) {
        console.log(error);
        return false;
    }
};

// Search a User
export const searchUser = async (search: string): Promise<Object | boolean> => {
    try {
        const result = await connection("TodoListUser")
            .where("name", "like", `%${search}%`)
            .orWhere("nickname", "like", `%${search}%`)
            .orWhere("email", "like", `%${search}%`);

        const resultModified = result.map((user) => {
            return {
                id: user.id,
                nickname: user.nickname
            };
        });

        const users = {
            users: resultModified
        };

        return users;
    } catch (error) {
        console.log(error);
        return false;
    }
};

// Create a new user
export const createUser = async (id: number, name: string, nickname: string, email: string): Promise<any> => {
    try {
        await connection("TodoListUser").insert({
            id: id,
            name: name,
            nickname: nickname,
            email: email
        });
    } catch (error) {
        console.log(error);
        return false;
    }
};

// Update User
export const updateUser = async (user: User): Promise<boolean> => {
    try {
        await connection("TodoListUser")
            .update({
                name: user.name,
                nickname: user.nickname,
                email: user.email
            })
            .where({ id: user.id });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};
