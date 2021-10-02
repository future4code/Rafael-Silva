export interface User {
    id: number;
    name: string;
    nickname: string;
    email: string;
}

export interface Task {
    id: number;
    title: string;
    description: string;
    limitDate: string;
    creatorUserId: number;
}