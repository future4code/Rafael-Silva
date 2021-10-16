export default class Product {
    private id: string;

    private name: string;

    private description: string;

    private price: number;

    private created: number;

    private updated: number;

    constructor(id: string, name: string, description: string, price: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.created = Date.now();
        this.updated = Date.now();
    }
}
