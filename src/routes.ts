import { Request, Response } from 'express';

export default function (app) {
    app.get('/healthcheck', (_: Request, res: Response) =>
        res.status(200).send({ message: 'OK' }),
    );
}
