import connection from "../Core/connection";

//Types
import { User } from "../Config/Types";

// Create User
export const createUser = async (id: number, name: string, nickname: string, email: string): Promise<any> => {
    try {
        await connection("TodoListUser").insert({
            id: id,
            name: name,
            nickname: nickname,
            email: email
        });
    } catch (error) {
        return false;
    }
};

// Update Users
export const updateUser = async (user: User): Promise<boolean> => {
    try {
        await connection("TodoListUser").update({
          name: user.name,
          nickname: user.nickname,
          email: user.email
        }).where({id: user.id});

        return true;
    } catch (error) {
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
export const findUserById = async (id: number): Promise<User | boolean> => {
    try {
        const result = await connection.select("*").from("TodoListUser").where({ id: id });
        return result[0];
    } catch (error) {
        return false;
    }
};
