<template>
  <div class="bond">
    <h1 class="text-5xl font-bold mb-4 color-primary">Welcome To</h1>
    <h2 class="text-5xl font-bold mb-4 color-secondary">Nuxt Bond</h2>
  </div>
</template>

<script setup>
  import {useRuntimeConfig} from "nuxt/app";

  const  runtimeConfig = useRuntimeConfig();
</script>
<style>
.bond {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
