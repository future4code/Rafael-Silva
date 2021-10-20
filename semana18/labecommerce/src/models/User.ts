export default class User {
    private id: string;

    private name: string;

    private age: number;

    private email: string;

    constructor(id: string, name: string, age: number, email: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getEmail(): string {
        return this.email;
    }
}
