<template>
  <div class="home">
    <Banner />
    <Expertise />
    <AboutUs />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Banner from "@/components/Banner.vue";
import Expertise from "@/components/Expertise.vue";
import AboutUs from "@/components/AboutUs.vue";

@Component({
  components: { Banner, Expertise, AboutUs },
})
export default class HomeView extends Vue {}
</script>
