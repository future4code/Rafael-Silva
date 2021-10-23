import { USER_ROLES } from './interfaces/authInterface';

export class User {
    private id: string;

    private name: string;

    private email: string;

    private password: string;

    private role: USER_ROLES;

    constructor(id: string, name: string, email: string, password: string, role: USER_ROLES) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public getRole(): USER_ROLES {
        return this.role;
    }
}
