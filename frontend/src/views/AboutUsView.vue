<template>
  <div class="w-full">
    <div class="container">
      <p class="mb-20">/ ABOUT US</p>
      <h1 class="text-7xl font-light leading-[6rem]">
        We are 3D Advertisers,
        <br />
        We drive brand success
        <br />
        through innovative creativity
        <br />
        and strategic marketing.
      </h1>
    </div>
    <div class="mx-10 mt-32">
      <p class="mb-10">/ INTRODUCTION</p>
      <div class="grid grid-cols-2 gap-10">
        <h4 class="text-lg font-light text-justify leading-9">
          At 3D Advertisers, a leading Video Production Company and Creative
          Agency, we aim to provide brands with effective Business Growth
          Strategies that spur expansion and success. As a proficient Digital
          Marketing Agency, we bring extraordinary creativity, strategic
          thought, and quantifiable outcomes to the table. Our expertise in
          video production, digital marketing, 3D artwork, and website building
          allows us to realize our clients' brand visions and accomplish notable
          successes. We, as a dedicated Video Production Company and Creative
          Agency, work by comprehending their objectives and adjusting our
          Business Growth Strategies to meet their particular requirements.
          Trust 3D Advertisers, your go-to Digital Marketing Agency, to
          strengthen your brand and increase the potential of your company.
        </h4>
        <img
          src="https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/646461d2f4191cab117ebc5b_Website%20Contents%20-%20Expertise%20(1350%20%C3%97%20900%20px).jpg"
          alt="3d logo"
        />
      </div>
    </div>
    <Mission />
    <!-- Client section -->
    <div class="mx-32 mt-32">
      <p class="mb-10">/ OUR CLIENT</p>
      <h1 class="text-7xl font-light leading-[6rem]">
        Unlock Business Potential
        <br />
        and Drive Growth with
        <br />
        3D Advertisers
      </h1>

      <h3 class="text-lg cursor-pointer font-light mt-14">
        View Our Services →
      </h3>
    </div>

    <WhyUs class="mt-20" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Mission from "@/components/about/Mission.vue";
import WhyUs from "@/components/home/WhyUs.vue";

@Component({
  components: {
    Mission,
    WhyUs,
  },
})
export default class AboutUsView extends Vue {}
</script>

<style scoped>
.container {
  margin-right: 12vw;
  margin-left: 12vw;
}
</style>
