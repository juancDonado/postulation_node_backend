import { Request, Response } from 'express';
import { ResponseInterface } from '../interfaces/responseInterface';
import { loginService } from '../services/users/login.service';
import { createUser, getuser, getusers, updatetUserUser } from '../services/users/users.service';
import { user } from '../interfaces/usersInteface';

class usersController {

    login = async (req: Request, res: Response) => {
        try {

            const { phone, password } = req.body;

            const response: ResponseInterface = await loginService(phone, password);
            return res.status(response.status).json(response);
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                status: 500,
                message: 'Erro al consultar los totales.'
            });
        }
    }

    getUsers = async (req: Request, res: Response) => {
        try {

            const response: ResponseInterface = await getusers();
            return res.status(response.status).json(response);
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                status: 500,
                message: 'Erro al consultar los totales.'
            });
        }
    }

    getUser = async (req: Request, res: Response) => {
        try {

            const id_user = req.params.id_user;

            const response: ResponseInterface = await getuser(Number(id_user));
            return res.status(response.status).json(response);
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                status: 500,
                message: 'Erro al consultar los totales.'
            });
        }
    }

    createtUser = async (req: Request, res: Response) => {
        try {

            const user: user = req.body;

            const response: ResponseInterface = await createUser(user);
            return res.status(response.status).json(response);
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                status: 500,
                message: 'Erro al consultar los totales.'
            });
        }
    }

    updatetUser = async (req: Request, res: Response) => {
        try {

            const user: user = req.body;
            const id_user = req.params.id_user;

            const response: ResponseInterface = await updatetUserUser(user, Number(id_user));
            return res.status(response.status).json(response);
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                status: 500,
                message: 'Erro al consultar los totales.'
            });
        }
    }

}

export = new usersController();