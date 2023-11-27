<template>
  <div class="flex gap-4 flex-wrap mt-4 justify-center">
    <div v-for="(g, index) in group" :key="index">
      <a :href="g.link" target="_blank" v-if="isOutLink(g.link)">
        <card-section
          :img="$withBase(g.img_url)"
          :title="g.title"
          :description="g.description"
          :badge="g.badge"
          :tags="g.tags"
        />
      </a>
      <router-link :to="g.link" v-else>
        <card-section
          :img="$withBase(g.img_url)"
          :title="g.title"
          :description="g.description"
          :badge="g.badge"
          :tags="g.tags"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import CardSection from "./CardSection.vue";
export default {
  components: { CardSection },
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
  methods: {
    isOutLink(url) {
      // 判断是否是外链
      return url.startsWith("http");
    },
  },
};
</script>