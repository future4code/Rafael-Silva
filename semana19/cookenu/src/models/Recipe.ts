import { dateFmt } from '../services/Helpers';

export class Recipe {
    private id: string;

    private userId: string;

    private title: string;

    private description: string;

    private createdAt: string;

    constructor(id: string, userId: string, title: string, description: string, createdAt: string = dateFmt()) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
    }

    public getId(): string {
        return this.id;
    }

    public getUserId(): string {
        return this.userId;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public getCreatedAt(): string {
        return this.createdAt;
    }
}
