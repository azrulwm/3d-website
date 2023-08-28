<template>
  <footer class="footer">
    <div class="footer-container">
      <h1 class="heading-1">Have an idea?</h1>
      <h1>Tell us about it</h1>
    </div>

    <div class="flex justify-between">
      <div>
        <h3 class="text-3xl font-light">+60 11-1610 2525</h3>
        <h3 class="text-3xl font-light mt-2">info@3dadvertisers.com</h3>

        <h4 class="my-8 text-gray-400">
          21-1st Floor, Jln Damai Perdana 6/1D,
          <br />
          Bandar Damai Perdana,
          <br />
          43200 Balakong, Selangor
        </h4>

        <h4>Privacy Policy</h4>
      </div>

      <div class="grid grid-cols-3 gap-10 text-2xl justify-center items-center">
        <div>Facebook</div>
        <div>Instagram</div>
        <div>Youtube</div>
        <div>Linkedin</div>
        <div>Tiktok</div>
        <div>Twitter</div>
      </div>
    </div>

    <div class="bg-gray-500 h-px w-full my-6"></div>
    <p class="font-light text-justify">
      Our distinction as a premier creative agency and video production company
      at 3D Advertisers is one reason why we warmly welcome you. As the website
      content review process comes to an end, we want to express our
      appreciation for your hard work and dedication. When working with us at 3D
      Advertisers you gain more than just a digital marketing agency - you gain
      an invested partner committed to helping drive your growth and success.
      Additionally, fulfilling your advertising needs is effortless for us due
      to our expertise in Brand Marketing and Social Media marketing together
      with a comprehensive range of services. Our adept group of professionals
      strives to prioritize providing outstanding results that go beyond your
      anticipations. Narrative is key at our creative agency which prides itself
      on innovative communication utilizing an array of digital channels that
      help us effectively engage your audience. The engagement created by
      impactful text combined with engaging videos and intriguing designs from
      our video production company will ensure that your marketing message has
      impact. Also , through emphasizing teamwork and the development of trust
      we create lasting relationships within our digital marketing agency. Our
      thorough grasp of our client's objectives is achieved through close
      collaboration with them in addition to developing insight into their
      target audience and related sector. With the help of this information we
      are able to devise custom-made strategies and campaigns that lead to
      concrete results while enhancing your brand.With our data-driven approach
      every choice you make whether it's increasing brand awareness improving
      website traffic creating prospects generating leads boosting sales will be
      supported by statistics and insights. Regularly reviewing and improving
      our campaigns ensures that we achieve measurable results while maximizing
      your return on investment. Let's explore the fascinating world of
      invention together on this journey of growth and imagination, and we are
      committed to helping you achieve the maximum possible success for your
      brand. Start a dialogue with us right away which may help in the progress
      of your business.
    </p>
    <p class="font-light mt-6">
      3D ADVERTISERS SDN. BHD. - REG.202201020151 (1465848­U) - All rights
      reserved
    </p>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style scoped>
.footer {
  padding-bottom: 30px;
  padding-left: 12vw;
  padding-right: 12vw;
}

.footer-container {
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 5.41667vw;
}
.heading-1 {
  color: #fff;
  -webkit-text-fill-color: transparent;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to right, #7b3f88, #81b0fa);
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: 400;
  line-height: 110%;
}
</style>
