import { Sequelize } from "sequelize";
 
const db = new Sequelize(
    process.env.DATABASE!,
    process.env.USERDATABASE!,
    process.env.PASSWORDDATABASE,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false
    }
);


export default db;