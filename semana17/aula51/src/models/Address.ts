import { connection } from "../data/connection";
import { Address } from "./types";

export const createAddress = async (address: Address): Promise<Address | boolean> => {
    try {
        await connection("aula51_address").insert(address);

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};
