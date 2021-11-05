import { Express, Request, Response } from 'express';
import {
    createIngredientHandler,
    deleteIngredientHandler,
    getIngredientsHandler,
    updateIngredientHandler,
} from './controller/ingredient.controller';

export default function (app: Express) {
    app.get('/healthcheck', (_: Request, res: Response) =>
        res.status(200).send({ message: 'OK' }),
    );

    // Ingredients
    app.post('/api/v1/ingredients', createIngredientHandler);
    app.get('/api/v1/ingredients', getIngredientsHandler);
    app.patch('/api/v1/ingredients/:id', updateIngredientHandler);
    app.delete('/api/v1/ingredients/:id', deleteIngredientHandler);
}
