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
    limit_date: string;
    creator_user_id: number;
}