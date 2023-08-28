<template>
  <div class="container">
    <p>/ WHY US</p>

    <div
      v-for="(reason, index) in reasons"
      :key="index"
      class="flex justify-between w-full my-10 border-b-2 border-gray-800"
    >
      <div class="flex">
        <p class="w-1/6">/{{ index + 1 }}</p>
        <h2 class="title text-4xl font-light pr-20">{{ reason.title }}</h2>
      </div>
      <p class="description text-lg font-light pb-10">
        {{ reason.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class WhyUs extends Vue {
  reasons = [
    {
      title: "Data-Driven Solutions to Boost Business",
      description:
        "We take notable pride in being a facts-pushed digital marketing agency. This is going above the past conventional advertising and marketing strategies. We are capable of offer our clients with amazing outcomes manner to our self-control to leveraging the power of facts.",
    },
    {
      title: "Thorough Knowledge of The Client Base and The Market",
      description:
        "We suppose that the name of the game to presenting effective answers is having an intensive grasp of our clients and their industries. We carry out thorough marketplace and enterprise studies, going past ground-level insights, which enables us to offer customised techniques and foster success.",
    },
    {
      title: "Awakening Exceptional Value",
      description:
        "To demonstrate the power of collaboration, we showcase real-life success stories from our clients. These examples highlight how our collaborative approach has led to exceptional outcomes for their businesses. From increased brand visibility to higher conversion rates, these success stories demonstrate the tangible value of working together with 3D Advertisers.",
    },
    {
      title: "Setting and Achieving Goals to Promote Success",
      description:
        "Building strong relationships with our clients is a fundamental aspect of our approach. We establish trust through transparent communication, active listening, and mutual respect. We encourage regular feedback and collaboration to ensure that our strategies continuously align with their evolving needs. By forging long-term partnerships, we can provide consistent support and drive sustained success for their businesses.",
    },
    {
      title: "Effectiveness in the Provision of Exceptional Services",
      description:
        "Efficiency, quality, and enduring relationships are the pillars of our commitment at 3D Advertisers. We understand the importance of timely deliverables without compromising on the superior quality that defines our work. We go above and beyond to produce excellent results and establish enduring relationships built on trust and dependability.",
    },
  ];
}
</script>

<style scoped>
.container {
  padding-left: 12vw;
  padding-right: 12vw;
}

.title {
  max-width: 500px;
}
.description {
  max-width: 300px;
}
</style>
