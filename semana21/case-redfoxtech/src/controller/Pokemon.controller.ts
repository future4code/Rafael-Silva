import { Request, Response } from 'express';
// import { InputPokemonDTO } from '../business/interfaceDTOS/PokemonDTOS';
import { PokemonBusiness } from '../business/Pokemon.business';
import { PokemonData } from '../data/PokemonData';

export class PokemonController {
    constructor(private readonly pokemonBusiness: PokemonBusiness = new PokemonBusiness(new PokemonData())) { }

    getAllPokemonController = async (req: Request, res: Response): Promise<void> => {
        try {

            const result = await this.pokemonBusiness.getAll();

            res.status(200).send(result);

        } catch (e) {
            const error = e as Error;

            console.log(error);

            res.send({ message: error.message });
        }
    }
}