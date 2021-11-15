<template>
  <div class="flex h-screen">
    <div class="w-56 overflow-hidden bg-gray-100">
      <div class="flex flex-wrap justify-center p-4">
        <img
          class="object-cover align-middle rounded-full  h-28 w-28 drop-shadow-lg"
          src="~/assets/images/mexson.png"
          alt="Mexson Fernandes"
        />
      </div>
      <ul class="flex flex-col py-4">
        <li v-for="(tab, index) in tabs" :key="`tab-${index}`">
          <NuxtLink
            :to="tab.route"
            class="flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform  hover:translate-x-2 hover:text-gray-800"
          >
            <span
              class="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400 "
              ><i class="bx bx-home"></i
            ></span>
            <span class="text-sm font-medium">{{ tab.name }}</span>
          </NuxtLink>
        </li>
      </ul>

      <div class="grid place-items-center">
        <vue-markdown :source="hitCounter"> </vue-markdown>
      </div>
    </div>
    <div class="flex flex-1 overflow-hidden">
      <div class="flex-1 ml-5 overflow-y-scroll">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  data: () => {
    return {
      hitCounter: `[![HitCount](https://api.mexsonfernandes.com/counter)](https://api.mexsonfernandes.com/counter)`,
      tabs: [
        {
          route: "/",
          name: "About",
        },
        {
          route: "/projects",
          name: "Projects",
        },
        {
          route: "/skills",
          name: "Skills",
        },
        {
          route: "/interests",
          name: "Interests",
        },
        {
          route: "/blog",
          name: "Blog",
        },
      ],
    };
  },
  components: {
    "vue-markdown": VueMarkdown,
  },
};
</script>

<style>
/* comfortaa-regular - latin */
@font-face {
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 400;
  src: url("../assets/font/comfortaa-v30-latin-regular.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("../assets/font/comfortaa-v30-latin-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../assets/font/comfortaa-v30-latin-regular.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("../assets/font/comfortaa-v30-latin-regular.woff") format("woff"),
    /* Modern Browsers */ url("../assets/font/comfortaa-v30-latin-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("../assets/font/comfortaa-v30-latin-regular.svg#Comfortaa")
      format("svg"); /* Legacy iOS */
}
</style>
