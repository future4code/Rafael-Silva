import { connection } from "../Core/connection";

export const getActorsById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM actors WHERE id = ${id}
    `)


    return result[0][0]
};


export const getActorsByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM actors WHERE name = "${name}"
    `)

    return result[0][0]
}


export const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as actors FROM actors WHERE gender = "${gender}"
    `)

    return result[0][0];
}