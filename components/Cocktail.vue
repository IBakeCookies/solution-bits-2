<script setup lang="ts">
import type { CocktailApp } from '@data/type/app/cocktailApp';

interface Props {
    cocktail: CocktailApp;
}

defineProps<Props>();
</script>

<template>
    <div class="p-6 block lg:flex">
        <NuxtImg
            loading="lazy"
            :src="cocktail.thumbnail"
            :alt="cocktail.name"
            class="w-50 rounded-lg max-h-[14rem]"
        />

        <div class="mt-4 ml-0 lg:ml-4 lg:mt-0">
            <h2><b>Name:</b> {{ cocktail.name }}</h2>

            <ul>
                <li><b>Category:</b> {{ cocktail.category }}</li>
                <li><b>Alcoholic:</b> {{ cocktail.alcoholic }}</li>
                <li><b>Glass:</b> {{ cocktail.glass }}</li>
                <li><b>instructions:</b> {{ cocktail.instructions }}</li>

                <li class="flex">
                    <b>Ingredients:&nbsp;</b>

                    <div>
                        <p v-for="ing in cocktail.ingredients" :key="ing.ingredient">
                            {{ ing.ingredient }}
                            <template v-if="ing.measure"> - {{ ing.measure }}</template>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
