import { DataTypes, Model, Optional } from 'sequelize';
import db from '../utils/connect';

interface IngredientAttributes {
    id: number;
    name: string;
    slug: string;
    description: string;
    foodGroup: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

export interface IngredientInput
    extends Optional<IngredientAttributes, 'createdAt' | 'updatedAt'> {}
export interface IngredientOutput extends Required<IngredientAttributes> {}

class Ingredient
    extends Model<IngredientInput, IngredientOutput>
    implements IngredientAttributes
{
    public id!: number;
    public name!: string;
    public slug!: string;
    public description!: string;
    public foodGroup!: string;
    public createdAt?: Date | undefined;
    public updatedAt?: Date | undefined;
}

Ingredient.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        foodGroup: {
            type: DataTypes.STRING,
        },
    },
    { timestamps: true, sequelize: db },
);

export default Ingredient;
