import { Request, Response } from 'express';

class verifyReuest {

    validPhone(req: Request, res: Response, next: any) {
        if(!req.body.phone){
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

}

export = new verifyReuest();