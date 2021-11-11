// export default interface User {
//     name: string;
//     balance: number;
// }

export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}

export enum NATIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}

export interface User {
    name: string;
    age: number;
    nationality: NATIONALITY;
}

export interface Casino {
    name: string;
    location: LOCATION;
}