export interface PokemonRepository {
    getAll(query: object): Promise<object[] | boolean>;
    getById(id: number): Promise<object | boolean>;
    getByName(name: string, query: object): Promise<object | boolean>;
    getByType(type: string, query: object): Promise<object[] | boolean>;
}