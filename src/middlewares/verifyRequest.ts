import { Request, Response } from 'express';

class verifyReuest {

    validPhone(req: Request, res: Response, next: any) {
        if(!req.body.phone && !req.body.mobile_phone){
            return res.status(400).json({
                status: 400,
                message: 'Error, el telefono es obligatorio'
            });
        }
        next();
    }

    validPassword(req: Request, res: Response, next: any) {
        if(!req.body.password){
            return res.status(400).json({
                status: 400,
                message: 'Error, la contraseña es obligatoria'
            });
        }
        next();
    }

    validFirstName(req: Request, res: Response, next: any) {
        if(!req.body.first_name){
            return res.status(400).json({
                status: 400,
                message: 'Error, el nombre del usuario es obligatorio'
            });
        }
        next();
    }

    validLastName(req: Request, res: Response, next: any) {
        if(!req.body.last_name){
            return res.status(400).json({
                status: 400,
                message: 'Error, el apellido del usuario es obligatorio'
            });
        }
        next();
    }

    validDateBirth(req: Request, res: Response, next: any) {
        if(!req.body.date_birth){
            return res.status(400).json({
                status: 400,
                message: 'Error, la fecha de cumpleaños es obligatoria'
            });
        }
        next();
    }

    validDateEmail(req: Request, res: Response, next: any) {
        if(!req.body.email){
            return res.status(400).json({
                status: 400,
                message: 'Error, el email es obligatorio'
            });
        }
        next();
    }

    validAdress(req: Request, res: Response, next: any) {
        if(!req.body.date_birth){
            return res.status(400).json({
                status: 400,
                message: 'Error, la dirección es obligatoria'
            });
        }
        next();
    }

}

export = new verifyReuest();