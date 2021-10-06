import { connection } from "../data/connection";
import { User } from "./types";

export const createUser = async (newUser: User): Promise<boolean> => {
    try {
        await connection("aula51_users").insert(newUser);

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};
