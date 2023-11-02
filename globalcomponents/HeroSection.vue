<template>
  <section class="text-gray-600 body-font">
    <div
      class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      v-if=" realDirection == 'left'"
    >
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          {{ title }}
        </h1>
        <p class="mb-8 leading-relaxed">
          {{ description }}
        </p>
        <div class="flex justify-center">
          <router-link
            :to="getLeftLink"
            class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            {{ leftText }}
          </router-link>
          <router-link
            :to="getRightLink"
            class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
          >
            {{ rightText }}
          </router-link>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          :src="getImgUrl"
        />
      </div>
    </div>
    <div
      class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
      v-else-if=" realDirection == 'mid'"
    >
      <img
        class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        alt="hero"
        :src="getImgUrl"
      />
      <div class="text-center lg:w-2/3 w-full">
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          {{ title }}
        </h1>
        <p class="mb-8 leading-relaxed">
          {{ description }}
        </p>
        <div class="flex justify-center">
          <router-link
            :to="getLeftLink"
            class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            {{ leftText }}
          </router-link>
          <router-link
            :to="getRightLink"
            class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
          >
            {{ rightText }}
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      v-else
    >
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          :src="getImgUrl"
        />
      </div>
      <div
        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          {{ title }}
        </h1>
        <p class="mb-8 leading-relaxed">
          {{ description }}
        </p>
        <div class="flex justify-center">
          <router-link
            :to="getLeftLink"
            class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            {{ leftText }}
          </router-link>
          <router-link
            :to="getRightLink"
            class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
          >
            {{ rightText }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    "info",
    "direction"
  ],
  data(){
    return {
    "realDirection":"",
    "title":"我是标题",
    "description":"我是描述",
    "leftLink":"/",
    "leftText":"左按钮",
    "rightLink":"/",
    "rightText":"右按钮",
    "img":"",
    }
  },
  computed: {
    getImgUrl() {
      if (this.img) return this.img;
      return "https://dummyimage.com/720x600";
    },
    getLeftLink() {
      if (this.leftLink) return this.leftLink;
      return "/";
    },
    getRightLink() {
      if (this.rightLink) return this.rightLink;
      return "/";
    },
  },
  mounted() {
    if (this.$page.frontmatter[this.info]) {
      this.realDirection = this.$page.frontmatter[this.info].direction;
      this.title = this.$page.frontmatter[this.info].title;
      this.description = this.$page.frontmatter[this.info].description;
      this.leftLink = this.$page.frontmatter[this.info].leftLink;
      this.leftText = this.$page.frontmatter[this.info].leftText;
      this.rightLink = this.$page.frontmatter[this.info].rightLink;
      this.rightText = this.$page.frontmatter[this.info].rightText;
      this.img = this.$page.frontmatter[this.info].img;
    }
    if(this.direction)this.realDirection=this.direction;
  }
};
</script>

<style>
</style>