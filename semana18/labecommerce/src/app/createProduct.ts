import { Request, Response } from 'express';

// Helpers
import { v4 as uuid } from 'uuid';

// Support
import Message from '../support/Message';

// Models
import Product from '../models/Product';

// Database
import ProductDatabase from '../core/ProductDatabase';

const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, description, price } = req.body;

        if (!name || !description || !price) {
            throw new Message('Campos Inválidos', 406);
        }

        if (Number.isNaN(price)) {
            throw new Message('Campo "price" inválido', 406);
        }

        const id = uuid();

        const newProduct = new Product(id, name, description, price);

        const result = await new ProductDatabase().create(newProduct);

        if (result === false) {
            throw new Message(
                'Oops! Ocorreu um erro. Tente novamente mais tarde.',
                400,
            );
        } else {
            res.status(201).send({ message: 'Produto criado com sucesso!' });
        }
    } catch (e) {
        const error = e as Error;
        console.log(error);
        res.send({ message: error.message });
    }
};

export default createProduct;
