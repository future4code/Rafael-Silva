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

        if (row) {
            result = await this.pokemonData.getByRow(row);
        }

        if (name) {
            result = await this.pokemonData.getByName(name);
        }

        if (type) {
            result = await this.pokemonData.getByType(type, query);
        }


        result = await this.pokemonData.getAll(query);

        if (result) {
            return result;
        }
        return false;


    }
}