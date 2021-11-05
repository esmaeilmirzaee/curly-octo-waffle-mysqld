import config from 'config';
import { Dialect, Sequelize } from 'sequelize';

let NODE_ENV = config.get<string>('node_env');

const dbHost = config.get<string>(`${NODE_ENV}.db.Host`);
const dbPort = config.get<number>(`${NODE_ENV}.db.Port`);
const dbName = config.get<string>(`${NODE_ENV}.db.Name`);
const dbUser = config.get<string>(`${NODE_ENV}.db.User`);
const dbPassword = config.get<string>(`${NODE_ENV}.db.Pass`);
const dbDialect = config.get<Dialect>(`${NODE_ENV}.db.Dialect`);

const connect = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDialect,
});
export default connect;
