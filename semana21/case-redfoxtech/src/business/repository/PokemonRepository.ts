export interface PokemonRepository {
    getAll(query: object): Promise<object[] | boolean>;
    getByRow(row: number): Promise<object | boolean>;
    getByName(name: string, query: object): Promise<object | boolean>;
    getByType(type: string, query: object): Promise<object[] | boolean>;
}