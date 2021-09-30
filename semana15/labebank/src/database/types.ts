export type Transaction = {
    value: number;
    date: string;
    description: string;
};

export type account = {
    name: string;
    birthDate: string
    document: number;
    balance: number;
    statement: Array<Transaction>;
};
