<template>
  <header class="flex justify-between items-center">
    <RouterLink :to="'/'">
      <img
        class="w-32"
        src="https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/6478768a5dc322b03d5180fc_6461bfdb72fa898a55ff132e_3-p-500.webp"
        alt="company logo"
    /></RouterLink>
    <div>Menu Button</div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {}
</script>

<style scoped></style>
