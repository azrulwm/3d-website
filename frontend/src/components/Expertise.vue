<template>
  <div class="mt-20">
    <div class="container grid grid-cols-2">
      <div>
        <h3>/EXPERTISE</h3>
        <h1 class="text-5xl font-light my-20">
          Unleash Your Brand's Potential with Our Services
        </h1>
      </div>
      <div class="self-center">
        <h3 class="text-center text-xl">What we do →</h3>
      </div>
    </div>

    <div class="overflow-x-auto no-scrollbar flex flex-nowrap">
      <div
        v-for="(item, index) in expertise"
        :key="index"
        class="w-full mx-6 flex-shrink-0"
      >
        <img :src="item.image" :alt="item.name" class="w-full h-auto mb-10" />
        <div class="flex">
          <p class="mx-10">0{{ index + 1 }}</p>
          <div class="pl-28">
            <h2 class="gradient-header">{{ item.name }}</h2>
            <p class="text-2xl mt-10 w-2/3 leading-10 font-light">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Expertise extends Vue {
  expertise = [
    {
      name: "Digital Marketing",
      image:
        "https://uploads-ssl.webflow.com/6450a38c30efcd8aa58e15c0/646f0d389cdeb60826d6a720_4.webp",
      description:
        "At 3D Advertisers we are proud to be one of the leading digital advertising agencies offering our clients an extensive range of services such as SEM and SEO together with social media marketing, content marketing, influencer marketing along with insights analysis. Our dedication lies in assisting businesses achieve online success by running smart and data-driven campaigns.",
    },
    {
      name: "Media Production",
      image:
        "https://uploads-ssl.webflow.com/6450a38c30efcd8aa58e15c0/646f0d500f51e8c463908866_5.webp",
      description:
        "3D Advertisers, a creative agency, excels as a Video Production Company, crafting 3D Animated Videos, Corporate Videos, and Intro Videos. We generate Digital Creative Content that captivates, using advanced technology and industry experience. Trust our team for exceptional media production, enhancing your brand's impact.",
    },
    {
      name: "3D Artworks",
      image:
        "https://uploads-ssl.webflow.com/6450a38c30efcd8aa58e15c0/646f0d5df884bd361fc3a40e_6.webp",
      description:
        "When it comes to converting imaginative concepts into breathtaking visual representations, few do it better than the talented team at leading creative agency: 3D Advertisers. Character Design, Architectural Rendering, and Product Visualization are the three main areas of expertise for our Creative Agency. Positioned as the creative agency of choice for captivating 3D content is due to our expertise in 3D Modelling combined with cutting-edge technology.",
    },
    {
      name: "Website Development",
      image:
        "https://uploads-ssl.webflow.com/6450a38c30efcd8aa58e15c0/646f0d68f884bd361fc3aa91_2.webp",
      description:
        "At 3D Advertisers, our expertise lies in crafting websites that perfectly blend stunning design and cutting-edge technology. We tailor layouts to align with your distinct business requirements, with a keen focus on enhancing website performance and boosting visibility on search engines. Our commitment to superior web development guarantees a robust online presence. Opting for our services means you can expect an intuitive interface and beneficial business outcomes.",
    },
    {
      name: "Outdoor Advertising",
      image:
        "https://uploads-ssl.webflow.com/6450a38c30efcd8aa58e15c0/646f0d71ff03df91f1e7fbcd_8.webp",
      description:
        "Make your business enterprise extra well-known with the aid of making use of our professional outdoor marketing offerings. From engaging 3D digital billboards to strategically located billboards, we create campaigns that captivate your target audience and give a boost to your employer's message. You can assume 3D Advertisers to provide top-notch outside advertising and marketing alternatives to be able to expand your target audience and have an effect.",
    },
  ];
}
</script>

<style scoped>
.container {
  padding-left: 20vw;
  padding-right: 20vw;
}

.gradient-header {
  -webkit-text-fill-color: transparent;
  cursor: none;
  background-image: linear-gradient(to right, #7b3f88, #81b0fa);
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 30px;
}

.no-scrollbar::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and newer versions of Opera */
}
.no-scrollbar {
  scrollbar-width: none; /* for Firefox */
  -ms-overflow-style: none; /* for Internet Explorer and Edge */
}
</style>
