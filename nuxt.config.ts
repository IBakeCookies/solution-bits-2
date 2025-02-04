import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@pinia/nuxt', '@nuxt/image'],
    vite: {
        plugins: [tailwindcss()],
    },
    css: ['./main.css'],

    alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
        '@business': fileURLToPath(new URL('./src/business', import.meta.url)),
    },
});
