<template>
  <header class="flex justify-between items-center mx-10 relative">
    <RouterLink :to="'/'">
      <img
        class="w-32"
        src="https://uploads-ssl.webflow.com/6450a38c30efcdeae58e15aa/6478768a5dc322b03d5180fc_6461bfdb72fa898a55ff132e_3-p-500.webp"
        alt="company logo"
    /></RouterLink>
    <div
      @click="menuClicked"
      class="menu-button h-full cursor-pointer rounded-full p-4 group z-20"
      :class="!showMenu ? 'bg-white' : 'bg-black'"
    >
      <div v-if="!showMenu" class="flex flex-col items-end">
        <div class="w-6 h-0.5 bg-black mb-2"></div>
        <div class="w-4 h-0.5 bg-black mb-2 group-hover:w-6 delay-250"></div>
        <div class="w-6 h-0.5 bg-black"></div>
      </div>

      <div v-else class="relative w-6 h-6">
        <!-- Top-left to bottom-right line of the "X" -->
        <div
          class="absolute top-1/2 left-0 transform -translate-y-1/2 rotate-45 w-6 h-0.5 bg-white"
        ></div>

        <!-- Top-right to bottom-left line of the "X" -->
        <div
          class="absolute top-1/2 right-0 transform -translate-y-1/2 -rotate-45 w-6 h-0.5 bg-white"
        ></div>
      </div>
    </div>
    <div
      v-if="showMenu"
      class="menu-overlay fixed inset-0 h-screen w-screen bg-white z-10 flex justify-between"
    >
      <div class="text-black text-6xl font-light cursor-pointer">
        <div
          v-for="(routerLink, index) in routerLinks"
          :key="index"
          class="m-10 group flex"
          @click="() => redirectTo(routerLink.path)"
        >
          <span class="hidden group-hover:inline-block text-black text-sm">
            0{{ index + 1 }}
          </span>
          <h1>
            {{ routerLink.name }}
          </h1>
        </div>
      </div>
      <div class="self-center">
        <div>
          <h3 class="text-2xl text-gray-300 mt-2">Malaysia</h3>

          <h4 class="my-6 text-black font-light">
            21-1st Floor, Jln Damai Perdana 6/1D,
            <br />
            Bandar Damai Perdana,
            <br />
            43200 Balakong, Selangor
          </h4>

          <h3
            class="text-2xl text-black font-light mt-2 p-1 border-b-2 hover:border-gray-500"
          >
            info@3dadvertisers.com
          </h3>
          <h3 class="text-xl text-black font-light mt-6 mb-20">
            Privacy Policy
          </h3>
        </div>

        <div>
          <h3 class="text-2xl text-gray-300 my-6">Social</h3>
          <div
            v-for="(socialLink, index) in socialLinks"
            :key="index"
            class="text-black text-xl my-4"
          >
            <a
              :href="socialLink.href"
              target="_blank"
              rel="noopener noreferrer"
              >{{ socialLink.name }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  showMenu = false;

  routerLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Expertise",
      path: "/expertise",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "About",
      path: "about",
    },
    {
      name: "Package",
      path: "/package",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/3dadvertisers/",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/3DAdvertisers",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/3d.advertisers/",
    },
  ];

  menuClicked() {
    this.showMenu = !this.showMenu;
  }

  redirectTo(path: string) {
    this.$router.push({ path });
    this.menuClicked();
  }
}
</script>

<style scoped>
.menu-overlay {
  padding-left: 20vw;
  padding-right: 20vw;
  padding-top: 6vw;
  padding-bottom: 6vw;
}
</style>
