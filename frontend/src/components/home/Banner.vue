<template>
  <div class="relative">
    <img
      src="https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/646f143f3ad1fe199a68790b_123545-poster-00001.jpg"
      alt="home banner"
      class="w-full h-auto overflow-visible"
    />
    <h1
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-4xl sm:text-6xl md:text-7xl"
    >
      Revolutionizing Brands with
      <span class="text-span-6">Digital Masterpieces</span>
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Banner extends Vue {}
</script>

<style scoped>
.text-span-6 {
  text-align: center;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #7b3f88, #81b0fa);
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: 500;
}
</style>
