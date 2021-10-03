import connection from "../Core/Connection";
import { getUserById } from "./User";

//Types
import { Task } from "../Models/Interfaces/Task";

//Helpers
import { date_fmt } from "../Config/Helpers";
import ta from "date-fns/esm/locale/ta/index.js";

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
        console.log(error);
        return false;
    }
};

// Get tasks created by user
export const getTaskCreatedByUser = async (userId: number): Promise<Object | boolean> => {
    try {
        const result = await connection.select("*").from("TodoListTask").where({ creator_user_id: userId });
        const user = await getUserById(userId);

        const resultModified = result.map((task) => {
            return {
                taskId: task.id,
                title: task.title,
                description: task.description,
                limitDate: date_fmt(task.limit_date),
                status: task.status,
                creatorUserId: user.id,
                creatorUserNickname: user.nickname
            };
        });

        const tasks = {
            tasks: resultModified
        };

        return tasks;
    } catch (error) {
        console.log(error);
        return false;
    }
};

// Get Task Responsible
export const getTaskResponsibility = async (taskId: number): Promise<any> => {
    try {
        const result = await connection("TodoListResponsibleUserTaskRelation")
            .join("TodoListUser", "TodoListUser.id", "TodoListResponsibleUserTaskRelation.responsible_user_id")
            .select("TodoListUser.id", "TodoListUser.nickname")
            .where({ "TodoListResponsibleUserTaskRelation.task_id": taskId });

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
        console.log(error);
        return false;
    }
};

// Create Task Responsible
export const createResponsibilityTask = async (taskId: number, responsibleUserId: number): Promise<boolean> => {
    try {
        await connection("TodoListResponsibleUserTaskRelation").insert({
            task_id: taskId,
            responsible_user_id: responsibleUserId
        });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};
