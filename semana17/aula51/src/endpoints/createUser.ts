import { Request, Response } from "express";
import { createAddress } from '../models/Address';
import { User } from "../models/types";
import { createUser } from "../models/User";
import { getCep } from "../services/getCep";
import { uuid } from "../utils/helpers";

export const createUserApp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, nickname, email, street, number, zipcode } = req.body;

        if (!name || !nickname || !email || !zipcode) {
            res.statusCode = 422;
            throw new Error("'name', 'nickname', 'email' e 'address' são obrigatórios");
        }

        const newUserId: number = await uuid();
        const newAddressId: number = await uuid();

        const address = await getCep(zipcode, newAddressId, number);

        const newAddress = await createAddress(address);

        if (newAddress === false){
            res.statusCode = 400;
            throw new Error("Não foi possível cadastrar endereço");
        }

        const newUser: User = { id: newUserId, name, nickname, email, street, number, zipcode };

        const result = await createUser(newUser);

        if (result === false) {
            res.statusCode = 400;
            res.send("Ops! Um erro inesperado ocorreu =/");
        } else {
            res.status(201).send({ message: "Usuário criado com sucesso!" });
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};
