import { Request, Response } from 'express';
import Auth from '../../models/Auth';
import authInterface from '../../models/interfaces/authInterface';
import { RecipeDatabase } from '../../repository/recipe/RecipeDatabase';
import { dateFmt } from '../../services/Helpers';


const getRecipeById = async (req: Request, res: Response) => {
    try {
        const token = req.headers.token as string;

        const tokenVerify = Auth.getTokenData(token) as authInterface;

        if (!tokenVerify) {
            res.statusCode = 403;
            throw new Error(
                "Token inválido, expirado ou ausente da chave 'token' do cabeçalho",
            );
        }

        const id = req.params.id as string;

        if (!id) {
            res.statusCode = 400;
            throw new Error("'id' inválido!");
        }

        const recipe = await RecipeDatabase.findById(id);

        if (recipe === false) {
            res.statusCode = 400;
            throw new Error(
                'Oops! Ocorreu um error inesperado. Tente novamente mais tarde',
            );
        } else {
            res.status(200).send({
                id: recipe.id,
                title: recipe.title,
                description: recipe.description,
                cratedAt: dateFmt(recipe.created_at)
            });
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

export default getRecipeById;
