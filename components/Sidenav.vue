<script setup lang="ts">
interface Props {
    id: string;
    cocktails: string[];
}

defineProps<Props>();
</script>

<template>
    <nav>
        <ul class="sticky top-0">
            <li v-for="cocktail in cocktails" :key="cocktail">
                <NuxtLink
                    :to="{
                        params: { id: cocktail },
                    }"
                    class="p-4 block transition-colors hover:bg-gray-100"
                    :class="{ '!bg-gray-200': id === cocktail }"
                >
                    {{ cocktail }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>
