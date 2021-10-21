import Database from '../../database/Database';
import { Recipe } from '../../models/Recipe';
import { dateFmtYmd } from '../../services/Helpers';


export class RecipeDatabase extends Database {

    public static async create(recipe: Recipe): Promise<boolean> {
        try {
            await Database.connection('cookenu_recipe').insert({
                id: recipe.getId(),
                user_id: recipe.getUserId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                created_at: dateFmtYmd(recipe.getCreatedAt())
            });

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    };
}
