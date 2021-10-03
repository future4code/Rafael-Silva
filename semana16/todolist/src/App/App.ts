import express, { Request, Response } from "express";

//Models
import { Task } from "../Models/Interfaces/Task";
import { User } from "../Models/Interfaces/User";
import { createUser, findUserById, getAllUsers, getUserById, searchUser, updateUser } from "../Models/User";
import {
    createResponsibilityTask,
    createTask,
    findTask,
    getDelayedTasks,
    getTaskById,
    getTaskByStatus,
    getTaskCreatedByUser,
    getTaskResponsibility,
    updateTaskStatus
} from "../Models/Task";

//Helpers
import { date_fmt_back, uuid } from "../Config/Helpers";
import { Status } from "../Models/Interfaces/Status";

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
            res.statusCode = 403;
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
            res.statusCode = 403;
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

        const findUser = await findUserById(id);

        if (findUser === false) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        }

        if (!name || !nickname) {
            res.statusCode = 403;
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
            res.statusCode = 403;
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
            res.statusCode = 403;
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

// Endpoint: Criar tarefa
export const createTaskApp = async (req: Request, res: Response) => {
    try {
        const { title, description, limitDate, creatorUserId } = req.body;

        if (!title || !description || !limitDate || !creatorUserId) {
            res.statusCode = 403;
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
export const taskResponsible = async (req: Request, res: Response) => {
    try {
        const { task_id, responsible_user_id } = req.body;

        if (!task_id || !responsible_user_id) {
            res.statusCode = 403;
            throw new Error("Campos Inválidos!");
        }

        const result = await createResponsibilityTask(task_id, responsible_user_id);

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

// Endpoint: Atualizar o status da tarefa pelo id
export const updateStatusTaskApp = async (req: Request, res: Response) => {
    try {
        const id: number = Number(req.params.id);
        const { status } = req.body;

        if (isNaN(id)) {
            res.statusCode = 403;
            throw new Error("Campo Inválido.");
        }

        const task = await findTask(id);

        if (task === false) {
            res.statusCode = 404;
            throw new Error("Tarefa não encontrada.");
        }

        if (!status) {
            res.statusCode = 403;
            throw new Error("String Inválida.");
        }

        const result = await updateTaskStatus(id, status);

        if (result === false) {
            res.statusCode = 400;
            throw new Error("Não foi possível alterar o status dessa tarefa.");
        } else {
            res.status(201).send({ message: "Status atualizado com sucesso!" });
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};
