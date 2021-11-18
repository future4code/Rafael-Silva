import CompetitionModel from '../models/CompetitionModel';
import Database from './Database';

export default class CompetitionData extends Database {

    constructor() {
        super('ev_competitions');
    }

    // public static async findAll(): Promise<[] | boolean> {
    //     try {
    //         const result = await Database.connection.select('*').from('aula58_users');

    //         if (result.length === 0) {
    //             return false;
    //         }
    //         return result;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }

    // public static async findById(id: string): Promise<| boolean> {
    //     try {
    //         const result = await Database.connection.select('*').from('aula58_users').where({ id });

    //         if (result.length === 0) {
    //             return false;
    //         }

    //         return result[0];
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }

    public async create(competition: CompetitionModel): Promise<boolean> {
        try {
            await Database.connection(this.tableName).insert({
                id: competition.getId(),
                competition: competition.getCompetition(),
                athlete: competition.getAthlete(),
                value: competition.getValue(),
                unit: competition.getUnit(),
                modalities: competition.getModalities()
            });

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    // public async delete(id: string): Promise<boolean> {
    //     try {
    //         await Database.connection('aula58_users').where({ id }).del();

    //         return true;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }
    
}