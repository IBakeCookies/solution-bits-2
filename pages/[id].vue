<script setup lang="ts">
definePageMeta({
    middleware: 'cocktail-whitelist',
});

const route = useRoute();
const cocktailStore = useCocktailStore();
const id: ComputedRef<string> = computed(() => {
    return getSingleRouteParam(route.params.id);
});

// server and client api call
cocktailStore.getCocktail(toValue(id));
</script>

<template>
    <section class="grid grid-cols-12 grow-1">
        <Sidenav
            :id="id"
            :cocktails="cocktailStore.availableCocktails"
            class="col-span-12 lg:col-span-2 bg-white"
        />

        <div class="col-span-12 lg:col-span-10 bg-gray-100 p-4">
            <Cocktail
                class="bg-white rounded-lg p-4"
                :class="{ 'mt-5': i !== 0 }"
                v-for="(cocktail, i) in cocktailStore.cocktails"
                :key="cocktail.name"
                :cocktail="cocktail"
            />
        </div>
    </section>
</template>
