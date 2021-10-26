### Exercício 1:

-   a) Os `rounds` são os `cost`(custo númerico) da biblioteca bcrypt que está relacionado à segurança da senha. Quanto maior o `cost`, maior o tempo de execução do
algoritmo, geralmente é utilizado um `cost` de 12. O `salt` utiliza o `cost` para gerar uma string aleatória que adicionado no hash da senha, e essa string é única para cada hash criado.

-   b)

    ```
    import * as bcrypt from 'bcryptjs';

    export const passwd = (password: string): string => {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = bcrypt.genSaltSync(rounds);
        const hash = bcrypt.hashSync(password, salt);

        return hash;
    };
    
    ```
- c)
    ```
    import * as bcrypt from 'bcryptjs';

    export const isPasswd = (password: string, hash: string): boolean =>
        bcrypt.compareSync(password, hash);
    ```


### Exercício 2:

- a) Eu modificaria primeiro o endpoint de cadastro(signup), para já criar o novo usuário com a hash da senha para pode comparar essa hash no login. 

- d) Não, porque o endpoint `user/profile` só requer o token de acesso e é uma requisição GET, não sendo necessário criptografar nenhum dado.

### Exercício 3:

- a) 

    ```
    ALTER TABLE `lovelace-2147692-rafael-silva`.`aula55-user` ADD `role` ENUM("NORMAL","ADMIN") DEFAULT "NORMAL" NOT NULL;

    ```