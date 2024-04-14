import Router from 'express';
import verifyReuest from '../middlewares/verifyRequest';
import usersController from '../controllers/users.controllers';
import { validateAccessToken } from '../helpers/token.helper';

const router = Router();

router.post('/login',[
    verifyReuest.validPhone,
    verifyReuest.validPassword
], usersController.login);

router.get('/', usersController.getUsers);

router.get('/:id_user', validateAccessToken, usersController.getUser);

router.post('/', [
    validateAccessToken,
    verifyReuest.validFirstName,
    verifyReuest.validLastName,
    verifyReuest.validDateBirth,
    verifyReuest.validPhone,
    verifyReuest.validDateEmail,
    verifyReuest.validPassword,
    verifyReuest.validAdress
], usersController.createtUser);

router.put('/:id_user', [
    validateAccessToken,
    verifyReuest.validFirstName,
    verifyReuest.validLastName,
    verifyReuest.validDateBirth,
    verifyReuest.validPhone,
    verifyReuest.validDateEmail,
    verifyReuest.validPassword,
    verifyReuest.validAdress
], usersController.updatetUser);

router.delete('/:id_user', validateAccessToken, usersController.deleteUser);

router.put('/loggout/:id_user', validateAccessToken, usersController.loggout);

export = router;