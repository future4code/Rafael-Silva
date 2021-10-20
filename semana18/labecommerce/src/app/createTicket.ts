import { Request, Response } from 'express';

// Helpers
import { v4 as uuid } from 'uuid';

// Support
import Message from '../support/Message';

// Models
import Ticket from '../models/Ticket';

// Database
import TicketDatabase from '../repository/TicketDatabase';

const createTicket = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, description, price, origin, destination } = req.body;

        if (!name || !description || !price || !origin || !destination) {
            throw new Message('Campos Inválidos!', 406);
        }

        if (Number.isNaN(price)) {
            throw new Message('Campo "price" inválido!', 406);
        }

        const id = uuid();
        const newTicket = new Ticket(
            id,
            name,
            description,
            price,
            origin,
            destination,
        );

        const result = await new TicketDatabase().create(newTicket);

        if (result === false) {
            throw new Message(
                'Oops! Ocorreu um erro. Tente novamente mais tarde.',
                400,
            );
        } else {
            res.status(201).send({ message: 'Viagem criado com sucesso!' });
        }
    } catch (e) {
        const error = e as Error;
        // eslint-disable-next-line no-console
        console.log(error);
        res.send({ message: error.message });
    }
};

export default createTicket;
