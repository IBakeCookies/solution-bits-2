<script setup lang="ts">
import type { CocktailApp } from '@data/type/app/cocktailApp';

interface Props {
    cocktail: CocktailApp;
}

defineProps<Props>();
</script>

<template>
    <div class="p-6 block lg:flex">
        <!-- Lazy not really working for me, but I am out of time to write intersection observer compoennt for now  -->
        <NuxtImg
            loading="lazy"
            :src="cocktail.thumbnail"
            :alt="cocktail.name"
            class="lg:hidden rounded-lg max-h-[14rem]"
            :placeholder="false"
        />

        <div class="order-10 lg:order-0 mt-4 mr-0 lg:mr-4 lg:mt-0">
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

        <NuxtImg
            loading="lazy"
            :src="cocktail.thumbnail"
            :alt="cocktail.name"
            class="hiddne ml-auto rounded-lg max-h-[14rem]"
        />
    </div>
</template>
