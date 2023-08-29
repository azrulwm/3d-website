<template>
  <div>
    <div class="container grid grid-cols-2 gap-40 mx-auto">
      <div
        v-for="(item, index) in expertise"
        :key="index"
        :class="{ 'mt-40': index % 2 === 1 }"
      >
        <div class="img-container">
          <img :src="item.img" :alt="item.name" />
        </div>
        <div class="flex items-center">
          <h4 class="text-gradient text-lg uppercase">
            {{ item.name }}
          </h4>
          <div class="linie-text-gradient flex-grow"></div>
        </div>

        <h2 class="text-3xl font-light mb-14">{{ item.title }}</h2>
        <p class="text-gray-500">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ExpertiseDetail extends Vue {
  expertise = [
    {
      name: "Digital Marketing",
      img: "https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/6464a99a5ae7c51a43b8480a_4%5B1%5D.jpg",
      title:
        "Fuel Your Business Growth with Results-Driven Digital Marketing Solutions",
      description:
        "As 3D Advertisers, a dedicated creative agency focused on assisting businesses in flourishing through effective business growth strategies. Our meticulous approach to crafting comprehensive digital marketing services aims to deliver impactful results. As a highly respected marketing agency, we specialize in the art of Search Engine Marketing (SEM) and Search Engine Optimization (SEO), social media marketing, and content marketing. Our team possesses exceptional skills in creating Digital Creative Content that deeply resonates with your specific target audience. We adopt a data-driven approach to ensure precision in targeting, optimized websites, and captivating content that seamlessly aligns with your brand's identity. Transparency, collaboration, and measurable success take center stage as priorities for us as an Influencer marketing agency. Partnering with our esteemed social media marketing agency enables you to unlock the endless potential of Search Engine Marketing, propelling your business to new heights. Prepare to witness our profound expertise, strategic acumen, and unwavering commitment to driving your business forward with our exceptional digital marketing solutions.",
    },
    {
      name: "Media Production",
      title: "Elevate Your Brand with Exquisite Media Production Services",
      img: "https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/6464a99a9be93d6e980b43e1_5%5B1%5D.jpg",
      description:
        "Welcome to 3D Advertisers, an esteemed creative agency with a solid reputation for delivering exceptional media production services. Our team of highly talented professionals, widely acknowledged as leaders in the industry, excels in providing remarkable solutions throughout the entire creative process. Our primary focus centers around crafting captivating Digital Creative Content that effectively captures attention and communicates your message. Whether it's awe-inspiring 3D Animated Videos, stunning visuals, or compelling motion graphics, we assure flawless execution of each project, including Corporate Videos, Intro Videos, and more. By leveraging cutting-edge technology and meticulously attending to details, we guarantee unparalleled quality in every aspect. Drawing upon our vast industry experience, we customize our production services to perfectly align with your specific requirements. Collaborate with our trusted creative agency to elevate your brand and make a lasting impact on your audience. Trust in 3D Advertisers for unparalleled media development that consistently exceeds expectations.",
    },
    {
      name: "3D Artworks",
      title: "Unleash the Power of Immersive 3D Artworks",
      img: "https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/6464a99b3fc91b735298d9cb_6%5B1%5D.jpg",
      description:
        "The amazing and immersive 3D artworks that we create at 3D Advertisers are our area of expertise and will enthral and engage your audience. Your ideas come to life in the hands of our team of skilled 3D artists, who turn them into eye-catching works of art through 3D Modelling. Our 3D Rendering offers a realistic and in-depth portrayal of your vision for everything from product visualisations to architectural representations. To guarantee the best quality and accuracy in every project, we use cutting-edge software and methods for 3D Visualization. Our Architectural Rendering offers a distinctive and effective solution whether you're trying to highlight your items, build virtual settings, or improve the visual identity of your brand. We surpass your expectations by delivering amazing results using our knowledge and creativity in 3D Modelling. Feel the power of our 3D Rendering at work and watch your brand soar. Experience the depth of our 3D Visualization and see your architectural dreams become a reality with our Architectural Rendering.",
    },
    {
      name: "Website Development",
      title: "Empower Your Brand with Cutting-Edge Website Development",
      img: "https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/6464a99b8c8fd22869e98f59_3%5B1%5D.jpg",
      description:
        "At 3D Advertisers, we specialize in creating tailored Website Development solutions that cater to your specific business requirements. Our team of skilled web developers combines creativity, technical expertise, and industry best practices to craft visually appealing and user-friendly websites. We collaborate closely with you to understand your brand identity, target audience, and business goals, ensuring that the website we design not only looks impressive but also delivers tangible results through website performance optimization. User experience takes precedence as we strive to enhance engagement and drive conversions, employing responsive design and intuitive navigation while adhering to SEO guidelines. Our websites are built using cutting-edge technology and coding standards, guaranteeing optimal performance and efficiency. Whether you need an e-commerce platform, a corporate website, or a customized web application, our Website Development services offer exceptional quality and performance, always prioritizing SEO considerations.",
    },
    {
      name: "Outdoor Advertising",
      title: "Stand Out in the Outdoors with Creative Outdoor Advertising",
      img: "https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/6464a99b8c8fd22869e98f59_3%5B1%5D.jpg",
      description:
        "As 3D Advertisers, a renowned creative agency crafting impactful outdoor advertising campaigns. We utilize state of the art technology and innovative design to create captivating 3D Digital Billboards and outdoor mediums. Our goal is to make your brand stand out and effectively communicate with your target audience through strategic positioning and compelling messaging. Our tailored solutions enhance brand awareness, foster engagement, and help achieve your marketing objectives. Trust our extensive experience in 3D Digital Billboards and projection mapping to elevate your brand. Rely on our creative agency to bring your brand to life with pioneering Projection Mapping techniques, delivering an unforgettable outdoor advertising experience.",
    },
  ];
}
</script>

<style scoped>
.img-container {
  height: 400px;
  width: auto; /* or set a fixed width if you have a maximum width in mind */
  overflow: hidden;
  display: inline-block; /* This makes the container wrap tightly around the image */
}

.img-container img {
  height: 100%;
  width: 100%;
  object-fit: cover; /* This will ensure the image covers the container without stretching */
}
.container {
  padding-left: 10vw;
  padding-right: 10vw;
}
.text-gradient {
  color: #a2a2a2;
  letter-spacing: 2px;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #7b3f88, #81b0fa);
  -webkit-background-clip: text;
  background-clip: text;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 40px;
  padding-bottom: 40px;
  font-family: Graphik, sans-serif;
  font-weight: 500;
  line-height: 13px;
}

.linie-text-gradient {
  height: 0;
  -webkit-text-fill-color: inherit;
  background-clip: border-box;
  border-top: 1px solid #a2a2a2;
  margin-left: 0.25rem;
}
</style>
