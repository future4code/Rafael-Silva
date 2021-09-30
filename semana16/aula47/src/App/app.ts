import { connection } from "../Core/connection";

export const getAllActors = async (): Promise<any> => {
    const result = await connection("actors");

    return result;
};

export const getActorsById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM actors WHERE id = ${id}
    `);

    return result[0][0];
};

export const getActorsByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM actors WHERE name = "${name}"
    `);

    return result[0][0];
};

export const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as actors FROM actors WHERE gender = "${gender}"
    `);

    return result[0][0];
};

export const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
): Promise<void> => {
    await connection
        .insert({
            id: id,
            name: name,
            salary: salary,
            birth_date: dateOfBirth,
            gender: gender
        })
        .into("actors");
};

export const updateActorSalary = async (id: string, salary: number): Promise<boolean> => {
    const result = await connection("actors")
        .update({
            salary: salary
        })
        .where({ id: id });

    return result ? true : false;
};

export const deleteActor = async (id: string): Promise<boolean> => {
    const result = await connection("actors").delete().where({ id: id });
    return result ? true : false;
};

export const averageSalaryByGender = async (gender: string): Promise<any> => {
    const result = await connection("actors").avg({ averageSalary: `salary` }).where({ gender: gender });

    return result[0];
};
