import { PostType } from "../business/interfacesDTOs/PostInterfaceDTO";

import { dateFmt } from "../utils/helpers";

export class Post {
    constructor(
        private id: string,
        private authorId: string,
        private title: string,
        private content: string,
        private type: PostType,
        private subtitle?: string,
        private photo?: string,
        private createdAt: string = dateFmt()
    ) { }


    public getId(): string { return this.id; }

    public getAuthorId(): string { return this.authorId; }

    public getTitle(): string { return this.title; }

    public getSubtitle(): string | undefined { return this.subtitle; }

    public getPhoto(): string | undefined { return this.photo; }

    public getContent(): string { return this.content; }

    public getType(): PostType { return this.type; }

    public getCreatedAt(): string { return this.createdAt; }
}