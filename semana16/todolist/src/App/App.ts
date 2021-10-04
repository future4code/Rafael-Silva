import express, { Request, Response } from "express";

//Models
import { Task } from "../Models/Interfaces/Task";
import { User } from "../Models/Interfaces/User";
import { createUser, findUser, getAllUsers, getUserById, searchUser, updateUser } from "../Models/User";
import {
    createResponsibilityTask,
    createTask,
    findMultipleTasks,
    findTask,
    getDelayedTasks,
    getTaskById,
    getTaskByStatus,
    getTaskCreatedByUser,
    getTaskResponsibility,
    removeResponsibility,
    searchTasks,
    updateTaskStatus
} from "../Models/Task";

//Helpers
import { date_fmt_back, uuid } from "../Config/Helpers";

/**
 * ################################
 * ###   Endpoints de Usuário   ###
 * ################################
 */

// Endpoint: Pegar todos os usuários
export const getAllUsersApp = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        res.status(200).send(users);
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};

// Endpoint: Pegar usuário pelo id
export const getUserByIdApp = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            res.statusCode = 404;
            throw new Error("Campo Inválido");
        }

        const user = await getUserById(id);

        if (user === false) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        } else {
            res.status(200).send(user);
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};

// Endpoint: Pesquisar usuário
export const searchUserApp = async (req: Request, res: Response) => {
    try {
        const search = req.query.query as string;

        if (search === "") {
            res.statusCode = 422;
            throw new Error("Campo Inválido.");
        }

        const users = await searchUser(search);

        res.status(200).send(users);
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};

// Endpoint: Criar usuário
export const createUserApp = async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body;

        if (!name || !nickname || !email) {
            res.statusCode = 422;
            throw new Error("Campos Inválidos!");
        }

        const id = uuid();

        await createUser(id, name, nickname, email);

        res.status(201).send({ message: "Usuário criado com sucesso!" });
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};

// Endpoint: Editar usuário
export const updateUserApp = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const { name, nickname, email } = req.body;

        if (isNaN(id)) {
            res.statusCode = 404;
            throw new Error("Campo Inválido");
        }

        const userFound = await findUser(id);

        if (userFound === false) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        }

        if (!name || !nickname) {
            res.statusCode = 422;
            throw new Error("Campos Inválidos!");
        }

        const newUser: User = {
            id,
            name,
            nickname,
            email
        };

        const user = await updateUser(newUser);

        if (user === false) {
            res.statusCode = 404;
            throw new Error("Não foi possível editar usuário.");
        } else {
            res.status(200).send({ message: "Usuário atualizado com sucesso!" });
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};

/**
 * ################################
 * ###   Endpoints de tarefas   ###
 * ################################
 */

// Endpoint: Pegar tarefa pelo id
export const getTaskByIdApp = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            res.statusCode = 404;
            throw new Error("Campo Inválido");
        }

        const task = await getTaskById(id);

        if (task === false) {
            res.statusCode = 404;
            throw new Error("Tarefa não encontrada.");
        } else {
            res.status(200).send(task);
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};

// Endpoint: Pegar tarefas criadas por um usuário
export const getTaskCreatedByUserApp = async (req: Request, res: Response) => {
    try {
        const id = Number(req.query.creatorUserId);

        if (isNaN(id)) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        }

        const tasks = await getTaskCreatedByUser(id);

        res.status(200).send(tasks);
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};

// Endpoint: Pegar usuários responsáveis por uma tarefa
export const getTaskResponsibleApp = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            res.statusCode = 422;
            throw new Error("Campo Inválido.");
        }

        const users = await getTaskResponsibility(id);

        if (Object.values(users)[0].length === 0) {
            res.statusCode = 404;
            throw new Error("Tarefa não encontrada.");
        }

        res.status(200).send(users);
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};

// Endpoint: Pegar todas as tarefas por status
export const getTaskByStatusApp = async (req: Request, res: Response) => {
    try {
        const status = req.query.status as string;

        if (status === "") {
            res.statusCode = 422;
            throw new Error("Campo Inválido");
        }

        const task = await getTaskByStatus(status);

        res.status(200).send(task);
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};

// Endpoint: Pegar todas as tarefas atrasadas
export const getTaskDelayedApp = async (req: Request, res: Response) => {
    try {
        const tasks = await getDelayedTasks();

        res.status(200).send(tasks);
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};

// Endpoint: Procurar tarefa por termos
export const searchTaskApp = async (req: Request, res: Response) => {
    try {
        const search = req.query.search as string;

        if (search === "" || !search) {
            res.statusCode = 422;
            throw new Error("Campo Inválido.");
        }

        const tasks = await searchTasks(search);

        res.status(200).send(tasks);
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};

// Endpoint: Criar tarefa
export const createTaskApp = async (req: Request, res: Response) => {
    try {
        const { title, description, limitDate, creatorUserId } = req.body;

        if (!title || !description || !limitDate || !creatorUserId) {
            res.statusCode = 422;
            throw new Error("Campos Inválidos!");
        }
        const id = uuid();

        const date = await date_fmt_back(limitDate);

        const newTask: Task = {
            id: id,
            title: title,
            description: description,
            limit_date: date,
            creator_user_id: creatorUserId
        };

        const result = await createTask(newTask);

        if (result === false) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        } else {
            res.status(201).send({ message: "Tarefa criada com sucesso!" });
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};

// Endpoint: Atribuir um usuário responsável a uma tarefa
// Atribuir mais de um responsável a uma tarefa
export const taskResponsible = async (req: Request, res: Response) => {
    try {
        const { task_id, responsible_user_id } = req.body;

        if (!task_id || !responsible_user_id || responsible_user_id.length === 0) {
            res.statusCode = 422;
            throw new Error("Campos Inválidos!");
        }

        const isArray = Array.isArray(responsible_user_id);
        let result;

        if (isArray === false) {
            result = await createResponsibilityTask(task_id, [responsible_user_id]);
        } else {
            result = await createResponsibilityTask(task_id, responsible_user_id);
        }

        if (result === false) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        } else {
            res.status(201).send({ message: "Adicionado responsável pela tarefa com sucesso!" });
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};

// Endpoint: Atualizar o status de uma ou várias tarefas
export const updateStatusTaskApp = async (req: Request, res: Response) => {
    try {
        const { task_ids, status } = req.body;

        if (!task_ids || !status || task_ids.length === 0) {
            res.statusCode = 422;
            throw new Error("Campo Inválido.");
        }

        const isArray = Array.isArray(task_ids);

        if (isArray === false) {
            const tasks = await findMultipleTasks([task_ids]);

            if (tasks === false) {
                res.statusCode = 404;
                throw new Error("Tarefa não encontrada.");
            }
        }

        const result = await updateTaskStatus(task_ids, status);

        if (result === false) {
            res.statusCode = 400;
            throw new Error("Não foi possível alterar o status.");
        } else {
            res.status(200).send({ message: "Status atualizado com sucesso!" });
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};

// Endpoint:  Retirar um usuário responsável de uma tarefa
export const removeResponsibleApp = async (req: Request, res: Response) => {
    try {
        const taskId: number = Number(req.params.taskId);
        const responsibleUserId = Number(req.params.responsibleUserId);

        if (isNaN(taskId) && isNaN(responsibleUserId)) {
            res.statusCode = 422;
            throw new Error("Campo Inválido.");
        }

        const taskFound = await findTask(taskId, "TodoListResponsibleUserTaskRelation", true);

        if (taskFound === false) {
            res.statusCode = 404;
            throw new Error("Tarefa não encontrada.");
        }

        const userFound = await findUser(responsibleUserId, "TodoListResponsibleUserTaskRelation", true);

        if (userFound === false) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrada.");
        }

        const result = await removeResponsibility(taskId, responsibleUserId);

        if (result === false) {
            res.statusCode = 400;
            throw new Error("Não foi possível alterar o status dessa tarefa.");
        } else {
            res.status(200).send({ message: "Removido responsável pela tarefa." });
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};
