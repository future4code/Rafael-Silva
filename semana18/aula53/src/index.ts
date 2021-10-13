import express from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';

//ROUTES
import router from './routes/routes';
import { create_uuid } from './config/helpers';
import { User } from './models/User';
import { Customer } from './models/Customer';
import { Client } from './models/Interfaces/Client';
import { Place } from './models/Place';
import { Residence } from './models/Residence';
import { Commerce } from './models/Commerce';
import { Industry } from './models/Industry';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', router);

//Herança:
//Exercicio 1:
/*
const id = create_uuid();
const user = new User(id, 'Rafael', 'rafa@email.com', '123456');

// console.log(user);
*/

// Exercicio 2:
/*
const customer = new Customer(id, 'Rafael', 'rafa@email.com', '123456', '12412421sds');

 console.log(customer);
*/

// Exercicio 3:
/*
 
customer.setPurchaseTotal(200)

console.log(customer);
*/

// Exercicio 4:
/*
 console.log(customer.introduceYourself());
*/

// Exercicio 5:
/*
console.log(customer.introduceYourself());
*/

//Polimorfismo:
// Exercicio 1:
/*
const client: Client = {
    name: 'Marcos',
    registrationNumber: 2334,
    consumedEnergy: 200,
    calculateBill: () => {
        return 2;
    },
};

console.log(client.calculateBill())
*/

// Exercicio 2:
/*
const place = new Place("04849-328");

console.log(place)
*/

// Exercicio 3:

const home = new Residence(4, '04849-328');

const novaera = new Commerce(3, '04849-300');

const siemens = new Industry(400, '32322-531');

console.log(home, novaera, siemens);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

export default app;
