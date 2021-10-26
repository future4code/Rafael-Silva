export type User = {
    id: number;
    name: string;
    nickname: string;
    email: string;
    street: string;
    number: number;
    zipcode: number;
};

export type Address = {
    id: number;
    zipcode: string;
    street: string;
    number: number;
    neighborhood: string;
    city: string;
    state: string;
};
