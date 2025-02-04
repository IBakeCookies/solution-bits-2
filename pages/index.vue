<script setup lang="ts">
/* 
Regarding the redirect, it can be done in multiple ways:
- client side redict. inside  this component. 
- could also do a middleware that runs before a route gets resolved within the Vue part of the application. (this is what I did here)
- could also do a middleware.global.ts but it will run on every route change, which I would like to avoid.
- could also run a server/middleware that does the same thing within the Nitro part of the application.
- could also create a layout and do it there.
*/
definePageMeta({
    middleware: 'root-redirect',
});
</script>

<template></template>
