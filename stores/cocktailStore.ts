import type { CocktailsApi } from '@data/type/api/cocktailApi';
import type { CocktailApp } from '@data/type/app/cocktailApp';
import { ref } from 'vue';
import { defineStore } from 'pinia';
import { transformCocktailApiToCocktailApp } from '@business/transform/cocktailTransform';
import { linkManager } from '@data/linkManager';

const COCKTAILS = ['margarita', 'mojito', 'a1', 'kir'];

export const useCocktailStore = defineStore('cocktail', () => {
    const cocktails = ref<CocktailApp[]>([]);
    let abortController: AbortController | null = null;

    async function getCocktail(name: string): Promise<void> {
        if (abortController) {
            abortController.abort();
        }

        abortController = new AbortController();

        try {
            const { data } = await useFetch<CocktailsApi>(linkManager.getLink('cocktail'), {
                params: {
                    s: name,
                },
                signal: abortController.signal,
            });

            if (!data.value) {
                return;
            }

            cocktails.value = data.value.drinks.map(transformCocktailApiToCocktailApp);
        } catch (error) {
            console.error(error);
        }
    }

    return {
        availableCocktails: COCKTAILS,
        cocktails,
        getCocktail,
    };
});
