<template>
  <div class="ml-5">
    <page-header title="Skills"></page-header>
    <div v-for="section in skills" :key="`${section.title}-data-outer`">
      <div class="mb-3 subheading">{{ section.title }}</div>
      <div class="flex flex-wrap">
        <div
          v-for="icon in section.data"
          :key="`${icon.name}-data-inner`"
          class="w-12 m-1 flex-4 has-tooltip"
        >
          <span class="p-1 -mt-8 bg-gray-100 rounded shadow-lg tooltip">{{
            icon.name
          }}</span>
          <img
            class="m-1 grayscale hover:grayscale-0"
            :alt="icon.name"
            :src="icon.src"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      skills: [],
    }
  },
  mounted() {
    this.skills = [
      {
        title: 'Programming Languages',
        data: this.createProgramminglang(),
      },
      {
        title: 'Frameworks',
        data: this.createFrameworks(),
      },
      {
        title: 'Tools & Technologies',
        data: this.createTools(),
      },
    ]
  },
  methods: {
    createArrayOfIcons(array, names) {
      const icons = []
      array.forEach((val, index) => {
        icons.push({
          src: val,
          name: names[index],
        })
      })
      return icons
    },
    createTools() {
      const tools = [
        'https://logo.clearbit.com/nodejs.org',
        'https://logo.clearbit.com/arduino.cc',
        'https://res.cloudinary.com/robomx/image/upload/v1597510898/1200px_Git_icon_svg_1bfbb0dbce.png',
        'https://logo.clearbit.com/androidforums.com',
      ]
      const names = ['NodeJS', 'Arduino', 'Git', 'Android']
      return this.createArrayOfIcons(tools, names)
    },
    createFrameworks() {
      const framework = [
        'https://logo.clearbit.com/djangoproject.com',
        'https://logo.clearbit.com/ionicframework.com',
        'https://res.cloudinary.com/robomx/image/upload/v1597510062/145_1450089_python_flask_icon_f4145a896a.png',
        'https://res.cloudinary.com/robomx/image/upload/v1597509936/e6f3204bd34862cd764314637857e193_55d1c91733.png',
        'https://res.cloudinary.com/robomx/image/upload/v1597510161/nuxt_e1b51e3202.png',
        'https://res.cloudinary.com/robomx/image/upload/v1597510589/images_f1434aaeb0.png',
      ]
      const names = ['Django', 'Ionic', 'Flask', 'Angular', 'Nuxt', 'React']
      return this.createArrayOfIcons(framework, names)
    },
    createProgramminglang() {
      const lang = [
        'https://res.cloudinary.com/robomx/image/upload/v1597508167/J_7a14b80727.png',
        'https://logo.clearbit.com/python.org',
        'https://res.cloudinary.com/robomx/image/upload/v1597508111/c_programming_569564_af613374f8.png',
        'https://res.cloudinary.com/robomx/image/upload/v1597508581/46140125_da084900_c26d_11e8_8ea7_c45ae6306309_4c0a791b7c.png',
        'https://res.cloudinary.com/robomx/image/upload/v1597508048/java_9dd8229f53.jpg',
        'https://logo.clearbit.com/dart.dev',
        'https://res.cloudinary.com/robomx/image/upload/v1597509138/matlab_186726ae80.png',
        'https://res.cloudinary.com/robomx/image/upload/v1597508768/csharp_01_6dd19d9ab6.png',
      ]

      const names = [
        'JavaScript',
        'Python',
        'C',
        'C++',
        'Java',
        'Dart',
        'Matlab',
        'C#',
      ]

      return this.createArrayOfIcons(lang, names)
    },
  },
}
</script>
