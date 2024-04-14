import { getUser, user } from "../../interfaces/usersInteface";
import usersDbProcedures from "../../models/users.models";

export const getusers = async () => {
    try {

        const users: user[] = await usersDbProcedures.getUsers();

        const userReturn: getUser[] = []

        for(let i = 0; i < users.length; i++){

            const user: user = users[i];

            userReturn.push({
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                date_birth: user.date_birth,
                mobile_phone: user.mobile_phone,
                email: user.email,
                address: user.address,
                session_active: user.token == '' ? false : true
            })

        }

        return {
            status: 200,
            message: 'Usuarios obtenidos con exito',
            data: userReturn
        }
        
    } catch (error) {
        return {
            status: 500,
            message: `Error en el servidor: ${error}`
        }
    }
}

export const getuser = async (id_user: number) => {
    try {

        const users: user[] = await usersDbProcedures.getUserById(id_user);

        if(users.length < 1){
            return {
                status: 400,
                message: 'El usuario no existe'
            }
        }

        let userReturn: getUser | null= null;

        for(let i = 0; i < users.length; i++){

            const user: user = users[i];

            userReturn = {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                date_birth: user.date_birth,
                mobile_phone: user.mobile_phone,
                email: user.email,
                address: user.address,
                session_active: user.token == '' ? false : true
            }

        }

        return {
            status: 200,
            message: 'Usuario obtenido con exito',
            data: userReturn
        }
        
    } catch (error) {
        return {
            status: 500,
            message: `Error en el servidor: ${error}`
        }
    }
}