<template>
  <div class="overflow-x-auto no-scrollbar flex flex-nowrap gap-10">
    <div v-for="(client, index) in clients" :key="index" class="flex-shrink-0">
      <img :src="client.url" class="imageClass" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Clients extends Vue {
  clients = [
    {
      url: "https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/645b33c442ee1277c91aabf8_3-p-500.png",
    },
    {
      url: "https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/645b33c4fd36582db9bfb708_6-p-500.png",
    },
    {
      url: "https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/645b33c41bb20d201d7106a9_1-p-500.png",
    },
    {
      url: "https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/645b33c4046e97f61fb34b67_8.png",
    },
    {
      url: "https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/645b33c4046e97f7b5b34b66_10-p-500.png",
    },
    {
      url: "https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/645b33c4577bd321b4dc6bd7_11.png",
    },
    {
      url: "https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/645b33c440e38a1f8af51ec3_9-p-500.png",
    },
    {
      url: "https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/645b33c4d6e6c4b164ad488e_5-p-500.png",
    },
    {
      url: "https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/645b37bdd44541456309528c_7.png",
    },
  ];
}
</script>

<style scoped>
.imageClass {
  max-width: 200px;
}

.no-scrollbar::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and newer versions of Opera */
}
.no-scrollbar {
  scrollbar-width: none; /* for Firefox */
  -ms-overflow-style: none; /* for Internet Explorer and Edge */
}
</style>
