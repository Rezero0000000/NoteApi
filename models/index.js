import { Sequelize } from 'sequelize';
import config from '../config/config.js';
const { username, password, database, host, dialect } = config.development;
console.log(username, password, database, host, dialect)


const db = new Sequelize(database, username, password, {
    host: host,
    dialect: dialect,
})

export default db;
