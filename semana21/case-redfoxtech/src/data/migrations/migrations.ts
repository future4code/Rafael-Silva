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
                    Row bigint(20) NOT NULL,
                    Name varchar(255) DEFAULT NULL,
                    Pokedex_Number bigint(20) DEFAULT NULL,
                    Img_name varchar(255) DEFAULT NULL,
                    Generation bigint(20) DEFAULT NULL,
                    Evolution_Stage varchar(255) DEFAULT NULL,
                    Evolved bigint(20) DEFAULT NULL,
                    FamilyID bigint(20) DEFAULT NULL,
                    Cross_Gen bigint(20) DEFAULT NULL,
                    Type1 varchar(255) DEFAULT NULL,
                    Type2 varchar(255) DEFAULT NULL,
                    Weather1 varchar(255) DEFAULT NULL,
                    Weather2 varchar(255) DEFAULT NULL,
                    STAT_TOTAL bigint(20) DEFAULT NULL,
                    ATK bigint(20) DEFAULT NULL,
                    DEF bigint(20) DEFAULT NULL,
                    STA bigint(20) DEFAULT NULL,
                    Legendary bigint(20) DEFAULT NULL,
                    Aquireable bigint(20) DEFAULT NULL,
                    Spawns bigint(20) DEFAULT NULL,
                    Regional bigint(20) DEFAULT NULL,
                    Raidable bigint(20) DEFAULT NULL,
                    Hatchable bigint(20) DEFAULT NULL,
                    Shiny bigint(20) DEFAULT NULL,
                    Nest bigint(20) DEFAULT NULL,
                    New bigint(20) DEFAULT NULL,
                    NotGettable bigint(20) DEFAULT NULL,
                    Future_Evolve bigint(20) DEFAULT NULL,
                    CP40 bigint(20) DEFAULT NULL,
                    CP39 bigint(20) DEFAULT NULL
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