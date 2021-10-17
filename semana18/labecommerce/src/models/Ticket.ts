import Product from './Product';

export default class Ticket extends Product {
    private origin: string;

    private destination: string;

    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
        origin: string,
        destination: string,
    ) {
        super(id, name, description, price);
        this.origin = origin;
        this.destination = destination;
    }

    public getOrigin(): string {
        return this.origin;
    }

    public getDestination(): string {
        return this.destination;
    }
}
