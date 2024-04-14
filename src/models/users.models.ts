import db from "../dataBase/connectionToDb";
import { user } from "../interfaces/usersInteface";

class usersDbProcedures {
    private db: typeof db;

    constructor() {
        this.db = db;
    }

    public async getUserByPhone(phone: string): Promise<user[]> {
        const users: any = await this.db.query('CALL getUserByPhone(:phone)', {
            replacements: {
                phone: phone
            }
        }) as { users: Array<user> }[];

        return users;
    }

    public async getUsers(): Promise<user[]> {
        const users: any = await this.db.query('CALL getUsers()', {}) as { users: Array<user> }[];

        return users;
    }

    public async getUserById(id: number): Promise<user[]> {
        const users: any = await this.db.query('CALL getUserById(:id)', {
            replacements: {
                id: id
            }
        }) as { users: Array<user> }[];

        return users;
    }

    public async createUser(user: user): Promise<user[]> {
        const users: any = await this.db.query('CALL createUser(:firstName, :LastNam, :dateBirth, :address, :password, :phone, :email)', {
            replacements: {
                firstName: user.first_name,
                LastNam: user.last_name,
                dateBirth: user.date_birth,
                address: user.address,
                password: user.password,
                phone: user.mobile_phone,
                email: user.email
            }
        }) as { users: Array<user> }[];

        return users;
    }

    public async updateUser(user: user): Promise<user[]> {
        const users: any = await this.db.query('CALL updateUser(:firstName, :LastNam, :dateBirth, :address, :password, :phone, :email, :id)', {
            replacements: {
                firstName: user.first_name,
                LastNam: user.last_name,
                dateBirth: user.date_birth,
                address: user.address,
                password: user.password,
                phone: user.mobile_phone,
                email: user.email,
                id: user.id
            }
        }) as { users: Array<user> }[];

        return users;
    }

    public async deleteUserById(id: number): Promise<any> {
        const users: any = await this.db.query('CALL deleteUserById(:id)', {
            replacements: {
                id: id
            }
        }) as { users: any}[];

        return users;
    }

}

export default new usersDbProcedures();