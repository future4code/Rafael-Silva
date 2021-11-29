import { Request, Response } from 'express';
import { InputPokemonDTO } from '../business/interfaceDTOS/PokemonDTOS';
import { PokemonBusiness } from '../business/Pokemon.business';
import { PokemonData } from '../data/PokemonData';
import ErrorMessage from '../error/ErrorMessage';

export class PokemonController {
    constructor(private readonly pokemonBusiness: PokemonBusiness = new PokemonBusiness(new PokemonData())) { }

    getAllPokemonController = async (req: Request, res: Response): Promise<void> => {
        try {

            const input: InputPokemonDTO = {
                id: Number(req.query.id),
                name: req.query.name as string,
                type: req.query.type as string,
                sort: req.query.sort as string,
                order: req.query.order as string,
                page: Number(req.query.page),
                limit: Number(req.query.limit)
            };

            const result = await this.pokemonBusiness.getAllBusiness(input);

            res.status(200).send(result);

        } catch (e) {
            const error = e as ErrorMessage;

            console.log(error);

            res.status(error.getStatusCode() || 400).send({ message: error.message });
        }
    };
}