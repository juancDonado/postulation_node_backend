import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';

import { PORT } from '../config';

import DataBaseConnector from './dataBase/connectionToDb';

class Server {

    app = express();
    swagger: any;
    server = http.createServer(this.app);

    apiPaths = {
        users: '/api/v1/users'
    }

    constructor() {
        this.middleware();
        this.routers();
        this.connetionDB(); 
    }

    private routers = () => {
        this.app.get('/', (req: Request, res: Response) => {
            return res.status(200).json({
                status: 200,
                message: `API ${PORT}`
            })
        });
        this.app.use(this.apiPaths.users, require('./routes/users.routes'));
    }

    private connetionDB = async () => {
        //connection a la base de datos en mongodb
        try {
            await DataBaseConnector.authenticate();
            console.log('OK Database');
        } catch (error) {
            console.error(error);
        }
    }

    private middleware = () => {
        this.app.use(morgan('combined'));
        this.app.use(cors());
        this.app.use(express.static("public"));
        this.app.use(express.raw({limit: '50mb'}));
        this.app.use(express.text({limit: '50mb'}));
        this.app.use(express.json({limit: '50mb'}));
        this.app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));
    }

    listening = () => {
        this.server.listen(PORT, () => {
            console.log(`server is listening on ${PORT}`);
        });
    }

}

export = new Server();