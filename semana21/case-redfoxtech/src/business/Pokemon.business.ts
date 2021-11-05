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
        let { id, name, type, sort, order, page, limit } = input;
        let result;
        let query = {};

        if (id && name && type) {
            throw new ErrorMessage("Não é possível filtrar por id ou name ou type ao mesmo tempo", 406);
        } else if (name && type) {
            throw new ErrorMessage("Não é possível filtrar por id ou name ou type ao mesmo tempo", 406);
        } else if (id && type) {
            throw new ErrorMessage("Não é possível filtrar por id ou name ou type ao mesmo tempo", 406);
        } else if (id && name) {
            throw new ErrorMessage("Não é possível filtrar por id ou name ou type ao mesmo tempo", 406);
        } 

        if (!page || page < 1 || Number.isNaN(page)) {
            page = 1;
        }

        if (!sort) {
            sort = 'id';
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

        if (id && !Number.isNaN(id) && id > 0) {
            result = await this.pokemonData.getById(id);
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