import { Type } from '@sinclair/typebox';
import { constants, enums } from '../index';
import { NutritionGroupSchema } from './nutritionGroup';

export const IngredientPriceSchema = Type.Object({
  createdAt: Type.String({ format: 'date' }),
  id: Type.Integer(),
  price: Type.Number({ minimum: constants.INGREDIENT_MIN_NUMBER }),
});

export const IngredientSchema = Type.Object({
  id: Type.Integer(),
  createdAt: Type.String({ format: 'date' }),
  name: Type.String({
    minLength: constants.INGREDIENT_NAME_MIN_LENGTH,
    maxLength: constants.INGREDIENT_NAME_MAX_LENGTH,
  }),
  calories: Type.Number({
    minimum: constants.INGREDIENT_MIN_NUMBER,
    maximum: constants.INGREDIENT_MAX_NUMBER,
  }),
  carbs: Type.Number({
    minimum: constants.INGREDIENT_MIN_NUMBER,
    maximum: constants.INGREDIENT_MAX_NUMBER,
  }),
  protein: Type.Number({
    minimum: constants.INGREDIENT_MIN_NUMBER,
    maximum: constants.INGREDIENT_MAX_NUMBER,
  }),
  fat: Type.Number({
    minimum: constants.INGREDIENT_MIN_NUMBER,
    maximum: constants.INGREDIENT_MAX_NUMBER,
  }),
  prices: Type.Array(IngredientPriceSchema),
  group: NutritionGroupSchema,
  countType: Type.Enum(enums.INGREDIENT_COUNT_TYPES),
});

export const GetIngredientsPayloadSchema = Type.Object({
  group: Type.Optional(NutritionGroupSchema.properties.name),
});

export const GetIngredientsResponseSchema = Type.Object({
  ingredients: Type.Array(IngredientSchema),
  total: Type.Number(),
});

export const CreateIngredientPayloadSchema = Type.Object({
  name: IngredientSchema.properties.name,
  calories: IngredientSchema.properties.calories,
  carbs: IngredientSchema.properties.carbs,
  protein: IngredientSchema.properties.protein,
  fat: IngredientSchema.properties.fat,
  price: IngredientPriceSchema.properties.price,
  group: NutritionGroupSchema.properties.name,
  countType: Type.Enum(enums.INGREDIENT_COUNT_TYPES),
});

export const CreateIngredientResponseSchema = Type.Object({
  ingredient: IngredientSchema,
  message: Type.String(),
});

export const UpdateIngredientPayloadSchema = Type.Object({
  id: IngredientSchema.properties.id,
  name: IngredientSchema.properties.name,
  calories: IngredientSchema.properties.calories,
  carbs: IngredientSchema.properties.carbs,
  protein: IngredientSchema.properties.protein,
  fat: IngredientSchema.properties.fat,
  group: NutritionGroupSchema.properties.name,
  countType: Type.Enum(enums.INGREDIENT_COUNT_TYPES),
  prices: Type.Array(
    Type.Object({
      createdAt: Type.String({ format: 'date' }),
      id: Type.Optional(Type.Integer()),
      price: Type.Number({ minimum: constants.INGREDIENT_MIN_NUMBER }),
    }),
  ),
});

export const UpdateIngredientResponseSchema = CreateIngredientResponseSchema;

export const RemoveIngredientPayloadSchema = Type.Object({
  id: IngredientSchema.properties.id,
});

export const RemoveIngredientResponseSchema = Type.Object({
  id: IngredientSchema.properties.id,
  message: Type.String(),
});
