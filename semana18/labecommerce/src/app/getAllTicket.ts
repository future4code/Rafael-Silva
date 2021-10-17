import { Request, Response } from 'express';

import TicketDatabase from '../repository/TicketDatabase';
import Message from '../support/Message';

const getAllTickets = async (req: Request, res: Response): Promise<void> => {
    try {
        const tickets = await new TicketDatabase().getAllTickets();

        if (tickets === false) {
            throw new Message(
                'Ooops! Ocorreu um erro inesperado. Tente novamente mais tarde.',
                400,
            );
        } else {
            res.status(200).send(tickets);
        }
    } catch (e) {
        const error = e as Error;
        // eslint-disable-next-line no-console
        console.log(error);
        res.send({ message: error.message });
    }
};

export default getAllTickets;
