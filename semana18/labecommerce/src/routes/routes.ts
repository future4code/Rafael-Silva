import { Router } from 'express';

// Endpoints
import createUser from '../app/createUser';
import createProduct from '../app/createProduct';
import getAllUsers from '../app/getAllUsers';

const router: Router = Router();

router.get('/users/all', getAllUsers);

router.post('/user', createUser);
router.post('/product', createProduct);

export default router;
