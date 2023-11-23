<template>
  <div class="hero min-h-screen bg-base-200 w-full">
    <div class="hero-content flex-col lg:flex-row" :class="{'lg:flex-row-reverse':realDirection=='left','lg:flex-col':realDirection=='mid'}">
      <img
        v-if="this.img"
        :src="getImgUrl"
        class="lg:max-w-lg object-cover object-center rounded max-w-full"
      />
      <div class="w-full flex justify-center flex-col">
        <h1 class="text-5xl font-bold"  :class="{'text-center max-w-5xl':realDirection=='mid'}">{{ title }}</h1>
        <p class="py-6" :class="{'text-center max-w-5xl':realDirection=='mid'}">{{ description }}</p>
        <div class="flex gap-4 lg:justify-start justify-center"  :class="{'lg:justify-center':realDirection=='mid'}">
          <router-link class="btn btn-primary btn-md" :to="getLeftLink">{{
          leftText
        }}</router-link>
        <router-link class="btn btn-secondary btn-md" :to="getRightLink">{{
          rightText
        }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info", "direction"],
  data() {
    return {
      realDirection: "",
      title: "我是标题",
      description: "我是描述",
      leftLink: "/",
      leftText: "左按钮",
      rightLink: "/",
      rightText: "右按钮",
      img: "",
    };
  },
  computed: {
    getImgUrl() {
      if (this.img) return this.img;
      return null;
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
    if (this.direction) this.realDirection = this.direction;
  },
};
</script>

<style>
</style>