import express, { Request, Response } from "express";

//Models
import { Task } from "../Models/Interfaces/Task";
import { User } from "../Models/Interfaces/User";
import { createUser, findUserById, getAllUsers, getUserById, searchUser, updateUser } from "../Models/User";
import { createResponsibilityTask, createTask, getTaskById, getTaskCreatedByUser } from "../Models/Task";

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

        if (!id) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
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

        if (!id) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
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
            throw new Error("Usuário não encontrado.");
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

        if (!id) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        }

        const task = await getTaskById(id);

        if (task === false) {
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
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

        if (!id) {
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


        const result = await createResponsibilityTask(task_id, responsible_user_id)

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
