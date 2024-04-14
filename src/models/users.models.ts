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

}

export default new usersDbProcedures();