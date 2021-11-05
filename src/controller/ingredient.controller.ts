import { Request, Response } from 'express';
import { getIngredients } from '../service/ingredient.service';

export const createIngredientHandler = (req: Request, res: Response) => {};

export const getIngredientsHandler = async (req: Request, res: Response) => {
    try {
        let { id } = req.query;
        if (!id) {
            res.send(404).send({ message: 'Please check the path.' });
        }

        const ingredients = await getIngredients(id);
        return res.send({ ingredients });
    } catch (err: any) {
        return res.send({ message: err.message });
    }
};
export const updateIngredientHandler = () => {};
export const deleteIngredientHandler = () => {};
