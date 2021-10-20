import Database from '../database/Database';
import Ticket from '../models/Ticket';
import { dateFmt, dateFmtBack } from '../utils/Helpers';

export default class TicketDatabase extends Database {
    // eslint-disable-next-line class-methods-use-this
    async create(ticket: Ticket): Promise<boolean> {
        try {
            await Database.connection('Ticket').insert({
                id: ticket.getId(),
                name: ticket.getName(),
                description: ticket.getDescription(),
                price: ticket.getPrice(),
                origin: dateFmtBack(ticket.getOrigin()),
                destination: dateFmtBack(ticket.getDestination()),
            });
            return true;
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
            return false;
        }
    }

    // eslint-disable-next-line class-methods-use-this
    async getAllTickets(): Promise<object[] | boolean> {
        try {
            const result = await Database.connection('Ticket');

            const resultModified = result.map(ticket => ({
                id: ticket.id,
                name: ticket.name,
                description: ticket.description,
                price: ticket.price,
                origin: dateFmt(ticket.origin),
                destination: dateFmt(ticket.destination),
            }));

            return resultModified;
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
            return false;
        }
    }
}
