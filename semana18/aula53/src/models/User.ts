export class User {
    private id: number;
    private name: string;
    private email: string;
    private password: string;

    constructor(id: number, name: string, email: string, password: string) {
        console.log('Chamando o construtor da classe User');
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public getId(): number {
        return this.id;
    }

    public getEmail(): string {
        return this.email;
    }

    public getName(): string {
        return this.name;
    }

    public introduceYourself(): string {
        return `Olá, sou ${this.getName()}. Bom dia!`;
    }
}
