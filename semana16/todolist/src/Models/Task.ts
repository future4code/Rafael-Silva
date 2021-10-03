import connection from "../Core/Connection";
import { getUserById } from "./User";

//Types
import { Task } from "./Interfaces/Task";
import { Status } from "./Interfaces/Status";

//Helpers
import { date_fmt } from "../Config/Helpers";

// Get task by id
export const getTaskById = async (taskId: number): Promise<Object | boolean> => {
    try {
        const result = await connection.select("*").from("TodoListTask").where({ id: taskId });

        let task = result[0];

        const user = await getUserById(task.creator_user_id);
        const responsibleUsers = await getTaskResponsibility(taskId);

        task = {
            id: task.id,
            title: task.title,
            description: task.description,
            limitDate: date_fmt(task.limit_date),
            status: task.status,
            creatorUserId: user.id,
            creatorUserNickname: user.nickname,
            responsibleUsers: Object.values(responsibleUsers)[0]
        };

        return task;
    } catch (error) {
        console.log(error);
        return false;
    }
};

// Get Task By Status
export const getTaskByStatus = async (status: string): Promise<any> => {
    try {
        const result = await connection("TodoListTask as task")
            .join("TodoListUser as user", "user.id", "task.creator_user_id")
            .select(
                "task.id as task_id",
                "task.title",
                "task.description",
                "task.limit_date",
                "task.status",
                "user.id as user_id",
                "user.nickname"
            )
            .where({ "task.status": status });

        const resultModified = result.map((task) => {
            return {
                taskId: task.task_id,
                title: task.title,
                description: task.description,
                limitDate: date_fmt(task.limit_date),
                status: task.status,
                creatorUserId: task.user_id,
                creatorUserNickname: task.nickname
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

//get Delayed Tasks
export const getDelayedTasks = async (): Promise<Object | boolean> => {
    try {
        const result = await connection.raw(`
        SELECT  task.id as task_id,
                task.title,
                task.description,
                task.limit_date,
                task.status,
                user.id as user_id,
                user.nickname
        FROM TodoListTask as task
        JOIN TodoListUser as user 
        ON user.id = task.creator_user_id
        WHERE task.limit_date < CURDATE()
        AND task.status <> "done"
    `);

        const resultModified = result[0].map((task: any) => {
            return {
                taskId: task.task_id,
                title: task.title,
                description: task.description,
                limitDate: date_fmt(task.limit_date),
                status: task.status,
                creatorUserId: task.user_id,
                creatorUserNickname: task.nickname
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

// Find a Task
export const findTask = async (
    id: number,
    table: string = "TodoListTask",
    column: boolean = false
): Promise<Task | boolean> => {
    try {
        let result;
        
        if (column === false) {
            result = await connection.select("*").from(`${table}`).where({ id: id });
        } else {
            result = await connection.select("*").from(`${table}`).where({ task_id: id });
        }

        return result[0];
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
export const getTaskResponsibility = async (taskId: number): Promise<Object | boolean> => {
    try {
        const result = await connection("TodoListResponsibleUserTaskRelation as responsible")
            .join("TodoListUser as user", "user.id", "responsible.responsible_user_id")
            .select("user.id", "user.nickname")
            .where({ "responsible.task_id": taskId });

        const users = {
            users: result
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

// Update Status Task
export const updateTaskStatus = async (taskId: number, status: Status): Promise<boolean> => {
    try {
        await connection("TodoListTask")
            .update({
                status: status
            })
            .where({ id: taskId });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

// Remove Responsible User
export const removeResponsibility = async (taskId: number, userId: number): Promise<boolean> => {
    try {
        await connection("TodoListResponsibleUserTaskRelation")
            .delete()
            .where({ task_id: taskId, responsible_user_id: userId });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};
