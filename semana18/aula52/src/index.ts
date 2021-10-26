import express from "express";
import cors from "cors";
import { AddressInfo } from "net";

//ROUTES
import router from "./Routes/routes";
import { UserAccount } from "./Models/UserAccount";
import { Transaction } from "./Models/Transaction";
import { Bank } from "./Models/Bank";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);

//Exercicio 1:
/*
a) O constructor é um metódo mágico que já é instanciado na minha variável quando eu passo o operador 'new'.
Com o constructor eu posso passar paramêtros para que meu objeto seja construido.
Para chamá-lo, fazemos assim:
const user = new UserAccount("Rafael", 22, "12345678910")


b) Apenas 1 vez, pois o objeto é construido apenas uma 1 vez a cada chamada

c) Para ter acesso as propriedades privadas de uma classe, essa classe deve ter um metódo específico chamado getters, que acessar
o conteúdo das propriedades da classe.

*/

// const user = new UserAccount("Rafael", 22, "12345678910");
// console.log(user)

//Exercicio 2:

// const user = new UserAccount("Rafael", 22, "123456789", new Transaction("Conta de Luz", 200, "11/10/2021"));

// const userName = user.getName();
// const userAge = user.getAge();
// const userDocument = user.getDocument();

// const userTransactionDescription = user.getTransactionDescription();
// const userTransactionValue = user.getTransactionValue();
// const userTransactionDate = user.getTransactionDate();

// console.log(userName);
// console.log(userAge);
// console.log(userDocument);
// console.log(userTransactionDescription);
// console.log(userTransactionValue);
// console.log(userTransactionDate);

//Exercicio 3:

const account = new Bank([
    new UserAccount("Rafael", 22, "123456789", new Transaction("Conta de Luz", 200, "11/10/2021")),
    new UserAccount("Gabriel", 25, "123456789", new Transaction("Conta de Luz", 200, "11/10/2021"))
]);

console.log(account.getAccountUser());


account.setAccountUser([
    new UserAccount("Carlos", 22, "123456789", new Transaction("Conta de Luz", 200, "11/10/2021"))
]);

console.log(account.getAccountUser());


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

export default app;
