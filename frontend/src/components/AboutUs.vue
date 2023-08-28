<template>
  <div class="relative">
    <img
      src="https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/645e81cba02af39329d4d3f7_THE%20POWER%20OF%20DREAMS%20(1440%20%C3%97%20900%20px)-poster-00001.jpg"
      alt="about us"
      class="w-full h-auto overflow-visible"
    />
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <p>/ WHO ARE WE</p>
      <h1 class="text-6xl font-light mt-20">
        A pioneering creative agency blend creativity and strategy to deliver
        exceptional results and drive business success.
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AboutUs extends Vue {}
</script>

<style scoped></style>
