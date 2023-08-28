<template>
  <div class="home">
    <Banner />
    <Expertise />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Banner from "@/components/Banner.vue";
import Expertise from "@/components/Expertise.vue";

@Component({
  components: { Banner, Expertise },
})
export default class HomeView extends Vue {}
</script>
