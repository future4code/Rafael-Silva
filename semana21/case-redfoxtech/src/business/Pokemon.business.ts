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

    async getAllBusiness(input: InputPokemonDTO): Promise<object> {
        let { page, sort, order, name, type, limit } = input;

        if (!page || page < 1 || Number.isNaN(page)) {
          page = 1
        }

        if (!sort) {
          sort = 'name'
        }

        if(!order) {
          order = 'asc'
        }

        if (!limit || limit < 1 || Number.isNaN(limit)) {
            limit = 10
        }

        const offset = page ? (page - 1) * limit : (1 - 1) * limit;

        const orderBy = `${sort} ${order}`;
        let where = {};

        if (name) {
            where = {
                [name]: `%${name}%`
            };
        }

        if (type) {
            where = {
                [type]: `%${type}%`
            };
        }
        const result = await this.pokemonData.getAll({
            limit,
            offset,
            orderBy,
            where,
            limit
        });
        return result;

    }
}