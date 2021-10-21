import knex from 'knex';
import dotenv from 'dotenv';
import users from "./users.json";
import recipe from "./recipe.json";

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

                CREATE TABLE cookenu_users (
                    id varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
                    name varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
                    email varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
                    password varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
                    PRIMARY KEY (id),
                    UNIQUE KEY cookenu_users_UN (email)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

                CREATE TABLE cookenu_recipe (
                    id varchar(255) NOT NULL,
                    user_id varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
                    title varchar(255) NOT NULL,
                    description text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
                    created_at date NOT NULL,
                    PRIMARY KEY (id),
                    KEY cookenu_recipes_FK (user_id),
                    CONSTRAINT cookenu_recipes_FK FOREIGN KEY (user_id) REFERENCES cookenu_users (id) ON DELETE CASCADE
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

                CREATE TABLE cookenu_followers (
                    user_id varchar(255) NOT NULL,
                    followers varchar(255) DEFAULT NULL,
                    KEY cookenu_followers_FK (user_id),
                    CONSTRAINT cookenu_followers_FK FOREIGN KEY (user_id) REFERENCES cookenu_users (id) ON DELETE CASCADE
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
        await connection('cookenu_users').insert(users);

        console.log("Usuários criados com sucesso!");
        return true;
    } catch (e) {
        const error = e as Error;
        console.log(error);
        return false;
    }
};

const insertRecipes = async (): Promise<boolean> => {
    try {
        await connection('cookenu_recipes').insert(recipe);

        console.log("Receitas criados com sucesso!");
        return true;
    } catch (e) {
        const error = e as Error;
        console.log(error);
        return false;
    }
};

const closeConnection = () => { connection.destroy(); };

createTables()
    .then(insertUsers)
    .then(insertRecipes)
    .finally(closeConnection);
