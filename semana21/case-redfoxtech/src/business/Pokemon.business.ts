import ErrorMessage from '../error/ErrorMessage';
import { InputPokemonDTO } from './interfaceDTOS/PokemonDTOS';
import { PokemonRepository } from './repository/PokemonRepository';

export class PokemonBusiness {
    private pokemonData: PokemonRepository;

    constructor(
        PokemonDatabaseImp: PokemonRepository
    ) {
        this.pokemonData = PokemonDatabaseImp;
    }

    async getAllBusiness(input: InputPokemonDTO): Promise<any> {
        let { row, name, type, sort, order, page, limit } = input;
        let result;
        let query = {};

        if (row && name && type) {
            throw new ErrorMessage("Não é possível filtrar por row ou name ou type ao mesmo tempo", 406);
        } else if (name && type) {
            throw new ErrorMessage("Não é possível filtrar por row ou name ou type ao mesmo tempo", 406);
        } else if (row && type) {
            throw new ErrorMessage("Não é possível filtrar por row ou name ou type ao mesmo tempo", 406);
        } else if (row && name) {
            throw new ErrorMessage("Não é possível filtrar por row ou name ou type ao mesmo tempo", 406);
        } 

        if (!page || page < 1 || Number.isNaN(page)) {
            page = 1;
        }

        if (!sort) {
            sort = 'Row';
        }

        if (!order) {
            order = 'asc';
        }

        if (!limit || limit < 1 || Number.isNaN(limit)) {
            limit = 10;
        }

        const offset = page ? (page - 1) * limit : (1 - 1) * limit;

        query = {
            sort,
            order,
            limit,
            offset
        };

        if (row && !Number.isNaN(row) && row > 0) {
            result = await this.pokemonData.getByRow(row);
        } else if (name) {
            result = await this.pokemonData.getByName(name, query);
        } else if (type) {
            result = await this.pokemonData.getByType(type, query);
        } else {
            result = await this.pokemonData.getAll(query);
        }

        return result;
    }
}