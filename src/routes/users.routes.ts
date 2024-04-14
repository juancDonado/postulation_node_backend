import Router from 'express';
import verifyReuest from '../middlewares/verifyRequest';
import usersController from '../controllers/users.controllers';

const router = Router();

router.post('/login',[
    verifyReuest.validPhone,
    verifyReuest.validPassword
], usersController.login);

router.get('/', usersController.getUsers);

router.get('/:id_user', usersController.getUser);

export = router;