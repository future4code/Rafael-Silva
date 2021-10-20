import { Router } from 'express';

// Endpoints
import createUser from '../app/createUser';
import createProduct from '../app/createProduct';
import getAllUsers from '../app/getAllUsers';
import getAllProducts from '../app/getAllProducts';
import createTicket from '../app/createTicket';
import getAllTickets from '../app/getAllTicket';

const router: Router = Router();

router.get('/users/all', getAllUsers);
router.get('/products/all', getAllProducts);
router.get('/tickets/all', getAllTickets);

router.post('/user', createUser);
router.post('/product', createProduct);
router.post('/ticket', createTicket);

export default router;
