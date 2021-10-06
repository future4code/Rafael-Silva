import { Request, Response } from "express";
import { selectAllUsers, selectUserByName, selectUserByType } from "../Models/User";

// export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const users = await selectAllUsers();

//         if (!users.length) {
//             res.statusCode = 404;
//             throw new Error("No users found");
//         }

//         res.status(200).send(users);
//     } catch (e) {
//         const error = e as Error;
//         console.log(error);
//         res.send({ message: error.message });
//     }
// };

// Exercicio 1:

//a)
export const getUsersByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name as string;

        if (!name) {
            res.statusCode = 422;
            throw new Error("Parâmetro passado inválido.");
        }

        const users = await selectUserByName(name);

        if (!users.length) {
            res.statusCode = 404;
            throw new Error("No users found");
        }

        res.status(200).send(users);
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};

//b)
export const getUsersByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const type = req.params.type as string;

        if (!type) {
            res.statusCode = 422;
            throw new Error("Parâmetro passado inválido.");
        }

        const users = await selectUserByType(type);

        if (!users.length) {
            res.statusCode = 404;
            throw new Error("No users found");
        }

        res.status(200).send(users);
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};

//Exercicio 2:

// export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
//     try {
//         let sort = req.query.sort ? req.query.sort : "email";
//         let order = req.query.order ? req.query.order : "ASC".toUpperCase;

//         if (sort !== "name" && sort !== "type") {
//             sort = "email";
//         }

//         if (order !== "ASC" && order !== "DESC") {
//             order = "ASC";
//         }

//         const users = await selectAllUsers(sort, order);

//         if (!users.length) {
//             res.statusCode = 404;
//             throw new Error("No users found");
//         }

//         res.status(200).send(users);
//     } catch (e) {
//         const error = e as Error;
//         console.log(error);
//         res.send({ message: error.message });
//     }
// };

//Exercicio 3:

// export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
//     try {
//         let sort = req.query.sort ? req.query.sort : "email";
//         let order = req.query.order ? req.query.order : "ASC".toUpperCase;
//         let page = Number(req.query.page);

//         if (page < 1 || page > 5 || isNaN(page)) {
//             page = 1;
//         }

//         const size = 5;
//         const offset = size * (page - 1);

//         if (sort !== "name" && sort !== "type") {
//             sort = "email";
//         }

//         if (order !== "ASC" && order !== "DESC") {
//             order = "ASC";
//         }

//         const users = await selectAllUsers(sort, order, size, offset);

//         if (!users.length) {
//             res.statusCode = 404;
//             throw new Error("No users found");
//         }

//         res.status(200).send(users);
//     } catch (e) {
//         const error = e as Error;
//         console.log(error);
//         res.send({ message: error.message });
//     }
// };

// Exercicio 4:

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        let sort = req.query.sort ? req.query.sort : "name";
        let order = req.query.order ? req.query.order : "DESC".toUpperCase;
        let page = Number(req.query.page);

        if (page < 1 || page > 5 || isNaN(page)) {
            page = 1;
        }

        const size = 10;
        const offset = size * (page - 1);

        if (sort !== "name" && sort !== "type") {
            sort = "name";
        }

        if (order !== "ASC" && order !== "DESC") {
            order = "DESC";
        }

        const users = await selectAllUsers(sort, order, size, offset);

        if (!users.length) {
            res.statusCode = 404;
            throw new Error("No users found");
        }

        res.status(200).send(users);
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};

