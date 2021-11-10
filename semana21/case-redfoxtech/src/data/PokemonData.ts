import Database from './Database';
import { PokemonRepository } from '../business/repository/PokemonRepository';


export class PokemonData extends Database implements PokemonRepository {

    constructor() {
        super('case_redfoxtech');
    }

    async getAll(query: any): Promise<object[] | boolean> {
        try {
            const result = await Database.connection(this.tableName)
                .orderBy(query.sort, query.order)
                .limit(query.limit)
                .offset(query.offset);
            return result;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getById(id: number): Promise<object | boolean> {
        try {
            const result = await Database.connection(this.tableName).where('id', id);
            return result[0];
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getByName(name: string, query: any): Promise<object[] | boolean> {
        try {
            const result = await Database.connection(this.tableName)
                .orderBy(query.sort, query.order)
                .where('Name', "like", `%${name}%`)
                .limit(query.limit)
                .offset(query.offset);
            return result;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getByType(type: string, query: any): Promise<object[] | boolean> {
        try {
            const result = await Database.connection(this.tableName)
                .orderBy(query.sort, query.order)
                .where('Type1', "like", `%${type}%`)
                .orWhere('Type2', "like", `%${type}%`)
                .limit(query.limit)
                .offset(query.offset);
            return result;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}