import Database from './Database'
import {PokemonRepository} from '../business/repository/PokemonRepository'


export class PokemonData extends Database implements PokemonRepository {

    constructor(){
        super('case_redfoxtech');
    }

    async getAll({page, }): Promise<any>{
        try {
            const result = await Database.connection(this.tableName).orderBy('Row', 'asc').limit(20).offset(0);

            return result;
        } catch (error) {
            console.log(error);
            return false
        }
    }
}