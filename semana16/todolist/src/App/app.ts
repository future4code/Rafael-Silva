import connection from "../Core/connection";

// Create User
export const createUser = async (id: number, name: string, nickname: string, email: string): Promise<any> => {
    try {
        await connection("TodoListUser").insert({
            id: id,
            name: name,
            nickname: nickname,
            email: email
        });
    } catch (error) {
        return false;
    }
};

// Get User By id
export const getUserById = async (id: number): Promise<any> => {
    try {
        const result = await connection.select("id", "nickname").from("TodoListUser").where({ id: id });

        return result[0];
    } catch (error) {
        return false;
    }
};
