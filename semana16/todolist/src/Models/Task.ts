import connection from "../Core/Connection";
import { getUserById } from "./User";

//Types
import { Task } from "../Models/Interfaces/Task";

//Helpers
import { date_fmt } from "../Config/Helpers";

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
        const result = await connection.select("*").from("TodoListTask").where({ id: taskId });

        let task = result[0];

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
