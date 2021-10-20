export default class Product {
    private id: string;

    private name: string;

    private description: string;

    private price: number;

    private created: Date;

    private updated: Date;

    constructor(id: string, name: string, description: string, price: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.created = new Date();
        this.updated = new Date();
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getPrice(): number {
        return this.price;
    }

    public getCreated(): Date {
        return this.created;
    }

    public getUpdated(): Date {
        return this.updated;
    }
}
