import { dateFmt } from '../services/Helpers';

export class Recipe {
    constructor(
        private id: string,
        private userId: string,
        private title: string,
        private description: string,
        private createdAt: string = dateFmt()
    ) { }

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
