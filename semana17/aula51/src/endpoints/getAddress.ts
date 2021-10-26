import { Request, Response } from "express";
import { getCep } from "../services/getCep";

export const getAddressApp = async (req: Request, res: Response): Promise<void> => {
    try {
        const cep = req.params.cep as string

        if (!cep) {
            res.statusCode = 422;
            throw new Error("CEP Inválido!");
        }

        const result = await getCep(cep);

        res.status(200).send(result);
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};
