import { Request, Response } from 'express';

import ProductDatabase from '../repository/ProductDatabase';
import Message from '../support/Message';

const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await new ProductDatabase().getAllProducts();

        if (products === false) {
            throw new Message(
                'Ooops! Ocorreu um erro inesperado. Tente novamente mais tarde.',
                400,
            );
        } else {
            res.status(200).send(products);
        }
    } catch (e) {
        const error = e as Error;
        // eslint-disable-next-line no-console
        console.log(error);
        res.send({ message: error.message });
    }
};

export default getAllProducts;
