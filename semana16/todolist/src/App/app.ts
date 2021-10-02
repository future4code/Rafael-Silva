import connection from "../Core/connection";

//Types
import { Task, User } from "../Config/Types";
import { date_fmt } from '../Config/Helpers';

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

//Create a new task
export const createTask = async (task: Task): Promise<boolean> => {
    try {
        await connection("TodoListTask").insert({
            id: task.id,
            title: task.title,
            description: task.description,
            limit_date: task.limit_date,
            creator_user_id: task.creator_user_id
        });

        return true;
    } catch (error) {
        return false;
    }
};

// Get task by id
export const getTaskById = async (taskId: number): Promise<Object | boolean> => {
    try {
        const result = await connection.select("*").from("TodoListTask").where({id: taskId});

        let task = result[0]

        const user = await getUserById(task.creator_user_id);

        task = {
            id: task.id,
            title: task.title,
            description: task.description,
            limitDate: date_fmt(task.limit_date),
            status: task.status,
            creatorUserId: user.id,
            creatorUserNickname: user.nickname
        };

        return task;
    } catch (error) {
        return false;
    }
};
