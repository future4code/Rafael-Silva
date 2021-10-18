### Exercício 1:

- a) Concordo em usar strings e números juntos para representar os ids. Torna os ids mais únicos e quase impossiveis de se repetir na base de dados.

- b)

    ```
    import { v4 } from "uuid"

    export const uuid = (): string => {
        return v4()
    };
    ```

### Exercício 2:

- a) Primeiro é criado uma váriavel com o nome da tabela. É feita a conexão com o banco de dados e depois é criado uma função de criar um novo usuário,
passando o id, email e password, e inserindo na tabela User.

- b) 

    ```
    CREATE TABLE `lovelace-2147692-rafael-silva`.`aula55-user` (
        id varchar(255) NOT NULL,
        email varchar(255) NOT NULL,
        password varchar(255) NOT NULL
    )

    ```

- c) 

    ```
    import Database from '../src/database/Database';

    interface userInterface {
        id: string;
        email: string;
        password: string;
    }


    export default class UserDatabase extends Database {
        public static async create(user: userInterface): Promise<boolean> {
            try {
                await Database.connection('aula55-user').insert({
                    id: user.id,
                    email: user.email,
                    password: user.password,
                });

                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }
    ```