import knex from 'knex';
import dotenv from 'dotenv';
import PokemonGo from './PokemonGo.json';

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
                CREATE TABLE IF NOT EXISTS case_redfoxtech (
                    id int(11) NOT NULL,
                    Name varchar(255) DEFAULT NULL,
                    Pokedex_Number int(11) DEFAULT NULL,
                    Img_name varchar(255) DEFAULT NULL,
                    Generation int(11) DEFAULT NULL,
                    Evolution_Stage varchar(255) DEFAULT NULL,
                    Evolved int(11) DEFAULT NULL,
                    FamilyID int(11) DEFAULT NULL,
                    Cross_Gen int(11) DEFAULT NULL,
                    Type1 varchar(255) DEFAULT NULL,
                    Type2 varchar(255) DEFAULT NULL,
                    Weather1 varchar(255) DEFAULT NULL,
                    Weather2 varchar(255) DEFAULT NULL,
                    STAT_TOTAL int(11) DEFAULT NULL,
                    ATK int(11) DEFAULT NULL,
                    DEF int(11) DEFAULT NULL,
                    STA int(11) DEFAULT NULL,
                    Legendary int(11) DEFAULT NULL,
                    Aquireable int(11) DEFAULT NULL,
                    Spawns int(11) DEFAULT NULL,
                    Regional int(11) DEFAULT NULL,
                    Raidable int(11) DEFAULT NULL,
                    Hatchable float DEFAULT NULL,
                    Shiny int(11) DEFAULT NULL,
                    Nest int(11) DEFAULT NULL,
                    New int(11) DEFAULT NULL,
                    NotGettable int(11) DEFAULT NULL,
                    Future_Evolve int(11) DEFAULT NULL,
                    CP40 int(11) DEFAULT NULL,
                    CP39 int(11) DEFAULT NULL
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
        await connection('case_redfoxtech').insert(PokemonGo);

        console.log("Pokemons criados com sucesso!");
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
    .finally(closeConnection);