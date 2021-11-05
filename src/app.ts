import config from 'config';
import express from 'express';
import routes from './routes';
import db from './utils/connect';

const NODE_ENV = config.get<string>('node_env');

const HOST = config.get<string>(`${NODE_ENV}.host`);
const PORT = config.get<number>(`${NODE_ENV}.port`);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

try {
    db.authenticate()
        .then(() => {
            console.log(`DB is connected.`);
        })
        .catch((err) => {
            console.log('DB is disconnected', err.message);
        });

    app.listen(PORT, () => {
        console.log(`Server is listening ${HOST}:${PORT}.`);
        routes(app);
    });
} catch (err: any) {
    console.error(`Something went wrong. ${err.message}`);
    process.exit(1);
}
