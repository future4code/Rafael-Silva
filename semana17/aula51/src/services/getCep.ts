import axios, { AxiosResponse } from "axios";
import { Address } from "../models/types";

export const getCep = async (cep: string, id: number, number: number): Promise<any> => {
    try {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const response: any = await axios.get(url);

        return {
            id: id,
            zipcode: response.data.cep,
            street: response.data.logradouro,
            number: number,
            neighborhood: response.data.bairro,
            city: response.data.localidade,
            state: response.data.uf
        };
    } catch (error) {
        return false;
    }
};
