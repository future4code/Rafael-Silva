import { connection } from "../data/connection";

export const selectAllUsers = async (sort: string, order: string, size: number, offset: number): Promise<any> => {
    try {
        const result = await connection("aula49_exercicio").orderBy(sort, order).limit(size).offset(offset);

        return result;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const selectUserByName = async (name: string): Promise<any> => {
    try {
        const result = await connection("aula49_exercicio").where({ name });

        return result;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const selectUserByType = async (type: string): Promise<any> => {
    try {
        const result = await connection("aula49_exercicio").where({ type });

        return result;
    } catch (error) {
        console.log(error);
        return false;
    }
};
