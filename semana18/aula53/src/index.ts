import express from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';

//ROUTES
import router from './routes/routes';
import { create_uuid } from './config/helpers';
import { User } from './models/User';
import { Customer } from './models/Customer';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', router);

//Herança:
//Exercicio 1:
const id = create_uuid();
const user = new User(id, 'Rafael', 'rafa@email.com', '123456');

// console.log(user);

// Exercicio 2:

const customer = new Customer(id, 'Rafael', 'rafa@email.com', '123456', '12412421sds');

// console.log(customer);

// Exercicio 3:

customer.setPurchaseTotal(200)

console.log(customer);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

export default app;
