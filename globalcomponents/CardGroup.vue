<template>
  <div class="flex flex-wrap mx-32 mt-4 justify-center">
    <div v-for="(g, index) in group" :key="index" class="w-full sm:w-1/2 lg:w-1/3 p-2">
      <div class="border border-gray-300 transition-transform transform-gpu hover:scale-105 hover:shadow-lg my-4">
        <img :src="$withBase(g.img_url)" class="w-auto p-5">
        <div class="p-4">
          <div class="text-center font-bold text-lg mb-2">{{ g.title }}</div>
          <div class="text-center text-gray-600 mb-2">{{ g.description }}</div>
          <div class="h-px bg-gray-300 my-4"></div>
          <div class="text-center">
            <a :href="g.link" class="text-primary font-medium">View Details</a>
          </div>
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
      group: [],
    };
  },
  mounted() {
    if (!this.info) {
      // 向下兼容1.2.x配置形式
      this.group = this.$themeConfig.card_group;
    } else {
      this.group = this.$page.frontmatter[this.info];
    }
  },
};
</script>