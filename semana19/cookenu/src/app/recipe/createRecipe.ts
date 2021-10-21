import { Request, Response } from 'express';
import Auth from '../../models/Auth';
import authInterface from '../../models/interfaces/authInterface';
import { Recipe } from '../../models/Recipe';
import { RecipeDatabase } from '../../repository/recipe/RecipeDatabase';
import { uuid } from '../../services/Helpers';

const createRecipe = async (req: Request, res: Response) => {
    try {
        const token = req.headers.token as string;

        const tokenVerify = Auth.getTokenData(token) as authInterface;

        if (!tokenVerify) {
            res.statusCode = 403;
            throw new Error(
                "Token inválido, expirado ou ausente da chave 'token' do cabeçalho",
            );
        }

        const { title, description } = req.body;

        if (!title || !description) {
            res.statusCode = 422;
            throw new Error("Dados inválidos! Tente novamente.");
        }

        const id = uuid();
        const newRecipe = new Recipe(id, tokenVerify.id, title, description);

        const result = await RecipeDatabase.create(newRecipe);

        if (result === false) {
            res.statusCode = 404;
            throw new Error(
                'Oops! Ocorreu um error inesperado. Tente novamente mais tarde',
            );
        } else {
            res.status(201).send({ message: 'Receita criada com sucesso!' });
        }
    } catch (e) {
        const error = e as Error;

        console.log(error);

        if (res.statusCode === 200) {
            res.status(500).send({ message: 'Internal Server Error.' });
        } else {
            res.send({ message: error.message });
        }
    }
};


export default createRecipe;
