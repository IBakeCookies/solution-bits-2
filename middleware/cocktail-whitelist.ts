export default defineNuxtRouteMiddleware((to, from) => {
    const cocktailStore = useCocktailStore();

    const id = getSingleRouteParam(to.params.id);

    if (!cocktailStore.availableCocktails.includes(id)) {
        return false;
    }
});
