## Herança

### Exercício 1:

-   a) Não é possível imprimir o atributo password diretamente porque ele é privado e não existe um método get para acessar esse atributo.
    Mas é possível imprimi-lo atraves da instâcia dele. Ex: const user = new User(blá); console.log(user).

-   b) A mensagem (Chamando o construtor da classe User) foi impressa no terminal apenas uma vez.

### Exercício 2:

-   a) A mensagem (Chamando o construtor da classe Customer) foi impressa no terminal apenas uma vez.

-   b) A mensagem (Chamando o construtor da classe User) foi impressa no terminal duas vezes. A classe User está sendo instanciada pela const user,
    então ocorre o primeiro `console.log()` e depois a classe Customer que está sendo instanciada pela const customer, e é uma classe filha da User, então
    ocorre o segundo `console.log()`.

### Exercício 3:

-   a) Não é possível imprimir o atributo password, pois ele é privado e não existe um método get para acessar esse atributo.

## Polimorfismo

### Exercício 1:

-   a) Todas as propriedades foram impressas menos a calculateBill(), pois ela é uma função. E para acessar o conteúdo dessa propriedade, fazemos assim
    `client.calculateBill()`.

### Exercício 2:

-   a) error TS2511: Cannot create an instance of an abstract class.

-   b) Nesse caso é necessario cria uma nova classe que extende essa classe abastrata Place

### Exercício 3:

-   1. É necessario extender essa classe para pode utilizar seus métodos já implementados
-   2. Porque a interface já define o que uma classe deve ter. Agora uma classe abstrata já implementa métodos e atributos comuns que qualquer classe que vá extender essa classe abstrata, possa usar ou não esses métodos já implementados. Uma interface não dá essa opção.
-   3. Porque ela já defini e implementa métodos comuns, para as subclasses poderem utilizar ou não.

