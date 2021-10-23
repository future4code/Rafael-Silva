import { Request, Response } from 'express';
import Auth from '../../models/Auth';
import authInterface, { USER_ROLES } from '../../models/interfaces/authInterface';
import { RecipeDatabase } from '../../repository/recipe/RecipeDatabase';


const deleteRecipe = async (req: Request, res: Response) => {
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

        const recipe = await RecipeDatabase.findById(id);

        if (recipe === false) {
            res.statusCode = 404;
            throw new Error(
                'Oops! Ocorreu um error inesperado. Tente novamente mais tarde',
            );
        }

        if (recipe.user_id !== tokenVerify.id && tokenVerify.role !== USER_ROLES.ADMIN) {
            res.statusCode = 403;
            throw new Error('Você não tem permissão para editar esta receita');
        }

        const result = await RecipeDatabase.delete(id);

        if (result === false) {
            res.statusCode = 400;
            throw new Error(
                'Oops! Ocorreu um error inesperado. Tente novamente mais tarde',
            );
        } else {
            res.statusCode = 200;
            res.send({ message: 'Receita deletada com sucesso' });
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

export default deleteRecipe;
