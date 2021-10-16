import { Router } from 'express';

// Endpoints
import createUser from '../app/createUser';
import createProduct from '../app/createProduct';

const router: Router = Router();

router.post('/user', createUser);
router.post('/product', createProduct);

export default router;
