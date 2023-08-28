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
import Banner from "@/components/Banner.vue";
import Expertise from "@/components/Expertise.vue";
import AboutUs from "@/components/AboutUs.vue";
import WhyUs from "@/components/WhyUs.vue";
import Clients from "@/components/Clients.vue";

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
