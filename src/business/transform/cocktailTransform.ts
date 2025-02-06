import type { CocktailApi } from '@data/type/api/cocktailApi';
import type { CocktailApp, CocktailIngredientApi } from '@data/type/app/cocktailApp';

// meh
export function transformCocktailApiToCocktailApp(cocktail: CocktailApi): CocktailApp {
    const ingredients: CocktailIngredientApi[] = Object.entries(cocktail).reduce(
        (acc: CocktailIngredientApi[], curr) => {
            if (curr[0].startsWith('strIngredient') && curr[1]) {
                acc.push({
                    ingredient: curr[1],
                    measure: cocktail[`strMeasure${acc.length + 1}`] || '',
                });
            }

            return acc;
        },
        [],
    );

    return {
        name: cocktail.strDrink,
        category: cocktail.strCategory,
        alcoholic: cocktail.strAlcoholic,
        glass: cocktail.strGlass,
        instructions: cocktail.strInstructions,
        thumbnail: cocktail.strDrinkThumb,
        ingredients,
    };
}
