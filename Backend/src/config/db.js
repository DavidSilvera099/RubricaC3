import {createPool} from 'mysql2/promise.js';
import config from './config.js';

export const conn = createPool({
    host: config.DB.HOST,
    user: config.DB.USER,
    password: config.DB.PASSWORD,
    database: config.DB.NAME,
    port: config.DB.PORT
});

