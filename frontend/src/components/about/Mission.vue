<template>
  <div>
    <img
      src="https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/646b335e3706b3d0850e62b9_THE%20POWER%20OF%20DREAMS.%20(10).jpg"
      alt="mission"
    />

    <div class="grid grid-cols-2 gap-40 mx-20">
      <div v-for="(item, index) in mission" :key="index">
        <p class="uppercase">/ {{ item.title }}</p>
        <p class="text-xl leading-10 font-light text-justify">
          {{ item.description }}
        </p>
      </div>
    </div>
    <h3 class="text-xl mx-20 cursor-pointer" @click="redirectToExpertise">
      What we do →
    </h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Mission extends Vue {
  mission = [
    {
      title: "mission",
      description:
        "AI technology is essential for a complete transformation of the creative industry and improved artistic efficiency and speed. Moreover, unmatched value and innovation provision to clients is at the heart of our mission. Through utilizing a skilled team dedicated to driving customer success and combining creative solutions with state-of-the-art technology.",
    },
    {
      title: "vision",
      description:
        "We endeavor to employ artificial intelligence towards surpassing existing benchmarks in quality so that we can lead from the front within the industry while functioning under the banner of a creative agency; our vision is delivering superlative commercial development via attainment of preeminence with regards to AI-propelled creativity which fundamentally reshapes how brands interact with consumers. To enhance efficiency and precision whilst retaining originality we are committed towards fostering innovation through blending AI capabilities with human creativity.",
    },
  ];

  redirectToExpertise() {
    this.$router.push({
      path: "/expertise",
    });
  }
}
</script>

<style scoped></style>
