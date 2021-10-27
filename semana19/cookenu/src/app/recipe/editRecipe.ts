import { Request, Response } from 'express';
import Auth from '../../models/Auth';
import authInterface from '../../models/interfaces/authInterface';
import { RecipeDatabase } from '../../repository/recipe/RecipeDatabase';


const editRecipe = async (req: Request, res: Response) => {
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
            throw new Error("Id inválido");
        }

        const { title, description } = req.body;

        if (!title || !description) {
            res.statusCode = 400;
            throw new Error("Todos os campos são obrigatórios");
        }


        const recipe = await RecipeDatabase.findById(id);

        if (recipe === false) {
            res.statusCode = 404;
            throw new Error(
                'Oops! Ocorreu um error inesperado. Tente novamente mais tarde',
            );
        }

        if (recipe.user_id !== tokenVerify.id) {
            res.statusCode = 403;
            throw new Error('Você não tem permissão para editar esta receita');
        }

        const updateRecipe = await RecipeDatabase.update(id, title, description);

        if (updateRecipe === false) {
            res.statusCode = 400;
            throw new Error(
                'Oops! Ocorreu um error inesperado. Tente novamente mais tarde',
            );
        } else {
            res.statusCode = 200;
            res.send({ message: 'Receita atualizada com sucesso' });
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

export default editRecipe;
