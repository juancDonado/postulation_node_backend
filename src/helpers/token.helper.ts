import { Request, RequestHandler, Response } from "express";
import JWTService from "../services/JWT/JWT_service";

export const validateAccessToken: RequestHandler = async (req: Request, res: Response, next: Function) => {
    try {
        let accesToken: any = req.header('access_Token') || req.header('Access_token');

        const { success } = JWTService.validateAccessJWT(accesToken);

        if (!success) {
            return res.status(401).json({
                success,
                errors: [
                    {
                        msg: 'Error, Access Token invalido',
                        path: 'Access Token'
                    },
                ],
            })
        }

        next()

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            errors: [
                {
                    msg: 'Error, comunicarse con el administrador',
                    path: 'service',
                    error
                },
            ],
        })
    }
}