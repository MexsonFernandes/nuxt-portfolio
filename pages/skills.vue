<template>
  <div class="relative">
    <page-header title="Skills"></page-header>
    <div class="flex-grow min-h-screen px-4 md:px-10 py-12 bg-white-100">
      <div v-for="section in skills" :key="`${section.title}-data-outer`" class="mb-10">
        <h3 class="mb-5 text-2xl font-bold subheading text-gray-800">{{ section.title }}</h3>
        <div class="flex flex-wrap gap-8">
          <div
            v-for="icon in section.data"
            :key="`${icon.name}-data-inner`"
            class="flex flex-col items-center group has-tooltip relative cursor-pointer"
          >
            <span class="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg whitespace-nowrap z-10 pointer-events-none mb-2">
              {{ icon.name }}
              <svg class="absolute text-gray-800 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
            </span>
            
            <i :class="`${icon.iconClass} text-5xl transition-transform duration-300 transform group-hover:scale-110`"></i>
            <span class="mt-2 text-sm font-medium text-gray-600 group-hover:text-black transition-colors">{{ icon.name }}</span>
          </div>
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
    createArrayOfIcons(icons, names) {
      return icons.map((iconClass, index) => ({
        iconClass: iconClass,
        name: names[index],
      }))
    },
    createTools() {
      const tools = [
        'devicon-nodejs-plain colored',
        'devicon-arduino-plain colored',
        'devicon-git-plain colored',
        'devicon-android-plain colored',
      ]
      const names = ['NodeJS', 'Arduino', 'Git', 'Android']
      return this.createArrayOfIcons(tools, names)
    },
    createFrameworks() {
      const framework = [
        'devicon-django-plain colored',
        'devicon-ionic-original colored',
        'devicon-flask-original colored',
        'devicon-angularjs-plain colored',
        'devicon-nuxtjs-plain colored',
        'devicon-react-original colored',
      ]
      const names = ['Django', 'Ionic', 'Flask', 'Angular', 'Nuxt', 'React']
      return this.createArrayOfIcons(framework, names)
    },
    createProgramminglang() {
      const lang = [
        'devicon-javascript-plain colored',
        'devicon-python-plain colored',
        'devicon-c-plain colored',
        'devicon-cplusplus-plain colored',
        'devicon-java-plain colored',
        'devicon-dart-plain colored',
        'devicon-matlab-plain colored',
        'devicon-csharp-plain colored',
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
