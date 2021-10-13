export class User {
    private id: number;
    private name: string;
    private email: string;
    private password: string;

    constructor(id: number, name: string, email: string, password: string) {
        console.log('Chamando o construtor da classe User');
        this.id = id;
        this.email = email;
        this.name = name;
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
        return "Olá, bom dia!"
    }
}
