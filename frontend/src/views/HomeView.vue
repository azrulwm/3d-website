<template>
  <div class="home">
    <Banner />
    <Clients />
    <Expertise />
    <AboutUs />
    <WhyUs />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Banner from "@/components/home/Banner.vue";
import Expertise from "@/components/home/Expertise.vue";
import AboutUs from "@/components/home/AboutUs.vue";
import WhyUs from "@/components/home/WhyUs.vue";
import Clients from "@/components/home/Clients.vue";

@Component({
  components: {
    Banner,
    Expertise,
    AboutUs,
    WhyUs,
    Clients,
  },
})
export default class HomeView extends Vue {}
</script>
