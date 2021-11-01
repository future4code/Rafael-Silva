import { Router } from "express";
import { PokemonController } from '../controller/Pokemon.controller';


const router: Router = Router();

const pokemonController = new PokemonController();

router.get('/pokemon/all', pokemonController.getAllPokemonController);




export default router;
