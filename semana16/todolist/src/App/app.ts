import connection from "../Core/connection";

// Create User
export const createUser = async (id: number, name: string, nickname: string, email: string): Promise<any> => {
    await connection("TodoListUser").insert({
        id: id,
        name: name,
        nickname: nickname,
        email: email
    });
};
