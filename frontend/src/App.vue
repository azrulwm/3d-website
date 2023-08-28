<template>
  <div id="app">
    <Header />
    <RouterView />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";

@Component({
  components: {
    Header,
  },
})
export default class extends Vue {}
</script>

<style lang="scss"></style>
