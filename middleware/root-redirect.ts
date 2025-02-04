export default defineNuxtRouteMiddleware((to, from) => {
    const cocktailStore = useCocktailStore();

    return navigateTo(`/${cocktailStore.availableCocktails.at(0)}`);
});
