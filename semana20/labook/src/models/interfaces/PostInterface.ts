export interface PostInterface {
    id: string;
    authorId: string;
    title: string;
    subtitle?: string;
    content: string;
    photo?: string;
    type: string;
    createAt: string;
}