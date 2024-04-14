import { validPassword } from "../../helpers/password.helper";
import { user } from "../../interfaces/usersInteface";
import usersDbProcedures from "../../models/users.models";
import JWTService from "../JWT/JWT_service";

export const loginService = async (phone: string, password: string) => {

    try {

        const user: user[] = await usersDbProcedures.getUserByPhone(phone);

        if(user.length < 1){
            return {
                status: 400,
                message: 'El usuario o contraseña ingresados son incorrectos'
            }
        }

        const userLogin: user = user[0];

        const valid = validPassword(password, userLogin.password);

        if(!valid){
            return {
                status: 400,
                message: 'El usuario o contraseña ingresados son incorrectos'
            }
        }

        const playload = {
            user: userLogin.first_name,
            phone: userLogin.mobile_phone,
            email: userLogin.email,
            id: userLogin.id
        }

        const token = JWTService.generateJWT(playload);

        console.log(token);

        if(!token){
            return {
                status: 500,
                message: 'No se pudo iniciar sesión por favor intelo mas tarde'
            }
        }

        return {
            status: 200,
            message: 'Inicio de sesión exitoso',
            user: userLogin,
            access_token: token,
            token_type: 'bearer'
        }
        
    } catch (error) {
        return {
            status: 500,
            message: `Error en el servidor: ${error}`
        }
    }

}