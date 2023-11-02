<template>
  <div class="bg-white py-12 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
        {{title}}
      </h2>
      <div class="mx-auto mt-10 flex justify-center">
  <div class="max-w-lg flex items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:w-full">
    <img
      class="max-h-12 w-full object-contain"
      v-for="(logo, index) in logos"
      :key="index"
      :src="logo.src"
      :alt="logo.alt"
      width="158"
      height="48"
    />
  </div>
</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {
      logos: [],
      title:""
    };
  },
  mounted() {
    if (this.$page.frontmatter[this.info]) {
      this.logos = this.$page.frontmatter[this.info].logos;
      this.title = this.$page.frontmatter[this.info].title;
    }
  },
};
</script>

<style>
</style>