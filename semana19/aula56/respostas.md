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

