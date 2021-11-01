// import ErrorMessage from '../error/ErrorMessage';
// import { InputPokemonDTO } from './interfaceDTOS/PokemonDTOS';
import { PokemonRepository } from './repository/PokemonRepository';

export class PokemonBusiness {
    private pokemonData: PokemonRepository;

    constructor(
        PokemonDatabaseImp: PokemonRepository
    ) {
        this.pokemonData = PokemonDatabaseImp;
    }

    async getAll(): Promise<object> {

        const pokemon = await this.pokemonData.getAll();

        return pokemon;
    }
}