import config from 'config';
import express from 'express';
import routes from './routes';

const HOST = config.get<string>('host');
const PORT = config.get<number>('port');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Server is listening ${HOST}:${PORT}.`);
    routes(app);
});
