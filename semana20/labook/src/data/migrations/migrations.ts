import knex from 'knex';
import dotenv from 'dotenv';
import users from "./users.json";

dotenv.config();

const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        multipleStatements: true,
    },
});

const createTables = async (): Promise<boolean> => {
    try {
        await connection
            .raw(`
                CREATE TABLE labook_users (
                    id varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
                    name varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
                    email varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
                    password varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
                    PRIMARY KEY (id),
                    UNIQUE KEY labook_users_UN (email)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

           `);

        console.log("Tabelas criadas com sucesso!");
        return true;
    } catch (e) {
        const error = e as Error;
        console.log(error);
        return false;
    }
};


const insertUsers = async (): Promise<boolean> => {
    try {
        await connection('labook_users').insert(users);

        console.log("Usuários criados com sucesso!");
        return true;
    } catch (e) {
        const error = e as Error;
        console.log(error);
        return false;
    }
};

// const insertRecipes = async (): Promise<boolean> => {
//     try {
//         await connection('labook_recipes').insert(recipe);

//         console.log("Receitas criados com sucesso!");
//         return true;
//     } catch (e) {
//         const error = e as Error;
//         console.log(error);
//         return false;
//     }
// };

const closeConnection = () => { connection.destroy(); };

createTables()
    .then(insertUsers)
    // .then(insertRecipes)
    .finally(closeConnection);