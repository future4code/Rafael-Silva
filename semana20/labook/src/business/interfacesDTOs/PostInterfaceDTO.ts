export enum PostType {
    NORMAL = 'NORMAL',
    EVENT = 'EVENTO',
}

export interface PostCreateDTO {
    title: string;
    subtitle?: string;
    content: string;
    type: PostType;
    photo?: string;
}

export interface GetPostByIdDTO {
    id: string;
}