<template>
  <div>
    <div class="container">
      <p class="mb-20">/ EXPERTISE</p>
      <h1 class="text-7xl font-light leading-[6rem]">
        We Leverage Brands
        <br />
        Through Winning
        <br />
        Strategies and Complex
        <br />
        Techniques
      </h1>
      <img
        src="https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/64633344a4b75e42e05c3a7b_ABC-poster-00001.jpg"
        alt="data banner"
      />
      <p class="text-gray-500 leading-10">
        We are a dynamic creative agency and video production company driven by
        the goal of enhancing businesses. Our scope goes beyond traditional
        digital marketing, as we are deeply passionate about crafting
        revolutionary solutions. Our team specializes in creating stunning 3D
        Digital Billboards and captivating 3D Animated Videos. Our innovative
        approach ensures that our work leaves a memorable impact. Additionally,
        we excel in Influencer Marketing, leveraging the power of influence and
        resonance. With our expertise in Search Engine Marketing (SEM) and
        Search Engine Optimization (SEO), we have established ourselves as a
        prominent social media marketing agency. Our unwavering commitment lies
        in delivering substantial growth and exceptional results, ultimately
        transforming businesses by fully understanding our clients' unique
        needs.
      </p>
    </div>
    <ExpertiseDetail />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ExpertiseDetail from "@/components/expertise/ExpertiseDetail.vue";

@Component({
  components: { ExpertiseDetail },
})
export default class ExpertiseView extends Vue {}
</script>

<style scoped>
.container {
  padding-top: 10vw;
  padding-bottom: 10vw;
  padding-left: 12vw;
  padding-right: 12vw;
}
</style>
