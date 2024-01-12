import {Router} from 'express'
import { createUserController } from './UseCases/CreateUser';

const router = Router();

router.post('/users', (req, res) => {
    return createUserController.handle(req, res.status(201).send());
});

export { router }