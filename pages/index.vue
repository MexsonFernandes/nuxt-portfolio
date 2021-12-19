<template>
  <div class="mt-5">
    <div class="sticky top-0 w-full text-black bg-white">
      <div class="mt-0 text-5xl">
        <div>Mexson</div>
        <div class="text-blue-900">Fernandes</div>
      </div>
      <br />
      <div class="text-2xl">
        <div>RoboMex</div>
      </div>
      <br />
      <div>
        <button class="inline-flex items-center px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
          </svg>
          <div>Goa, India</div>
        </button>

        <button class="inline-flex items-center px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
            />
          </svg>
          <div><a href="tel:+91 8007503717">+91 8007503717</a></div>
        </button>
        <button class="inline-flex items-center px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
              clip-rule="evenodd"
            />
          </svg>
          <div>
            <a href="mailto: robomex2020@gmail.com">robomex2020@gmail.com</a>
          </div>
        </button>
      </div>
      <div class="grid grid-cols-4 gap-4 lg:grid-cols-10">
        <a
          v-for="link in links"
          :key="`${link.icon}-data`"
          :aria-label="link.icon"
          rel="noopener"
          class="w-12 h-12 m-2 rounded-full"
          target="_blank"
          :href="link.src"
          ><img
            class="rounded-half"
            :src="require(`~/assets/images/icons/${link.icon}`)"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      links: [
        {
          src: 'https://www.linkedin.com/in/mexsonfernandes',
          icon: 'linkedin.svg',
        },
        {
          src: 'https://github.com/MexsonFernandes',
          icon: 'github.svg',
        },
        {
          src: 'https://www.researchgate.net/profile/Mexson_Fernandes',
          icon: 'research-gate.png',
        },
        {
          src: 'https://www.facebook.com/mexsonfernandes',
          icon: 'facebook.svg',
        },
        {
          src: 'https://twitter.com/mexsonfernandes',
          icon: 'twitter.svg',
        },
        {
          src: 'https://www.instagram.com/robomex.official/',
          icon: 'instagram.svg',
        },
        {
          src: 'https://medium.com/@mexsonfernandes',
          icon: 'medium.svg',
        },
        {
          src: 'https://www.youtube.com/channel/UC9vlPXQfuWR1NMO2BFBZueQ',
          icon: 'youtube.svg',
        },
        {
          src: 'https//www.quora.com/profile/Mexson-Fernandes-1',
          icon: 'quora.svg',
        },
      ],
    }
  },
}
</script>
