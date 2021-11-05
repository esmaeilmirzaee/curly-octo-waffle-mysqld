import Ingredient, {
    IngredientInput,
    IngredientOutput,
} from '../model/ingredient.model';

export const createIngredient = async (
    payload: IngredientInput,
): Promise<IngredientOutput> => {
    const ingredient = await Ingredient.create(payload);
    return ingredient;
};

export const getIngredients = async (id: string): IngredientOutput => {
    try {
        const ingredient: IngredientOutput = await Ingredient.findByPk(id);
        if (!ingredient) {
            throw new Error('There is not such an ingredient');
        }
        console.log({ ingredient });
        return ingredient;
    } catch (err: any) {
        throw new Error(err.message);
    }
};

export const updateIngredient = async () => {};
export const deleteIngredient = async () => {};
