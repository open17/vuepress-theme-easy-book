<template>
  <div class="overflow-x-hidden">
    <TopBarVue />
    <div class="flex justify-end space-x-10 main-body">
      <div><LeftNavVue :isShow="!isMobile" /></div>
      <el-card class="box-card overflow-y">
        <Content
          class="markdown-body"
          ref="scrollContainer"
          :class="{
            'w-56': isCollapse == 'n' && !isMobile,
            'w-66': isCollapse == 'y' && !isMobile,
            'w-75': isMobile,
          }"
        />
      </el-card>
      <div><RightTocVue :headers="PageHeader" /></div>
    </div>
  </div>
</template>

<script>
import "../styles/basic.css";
import LeftNavVue from "../compentents/LeftNav.vue";
import RightTocVue from "../compentents/RightToc.vue";
import TopBarVue from "../compentents/TopBar.vue";
// import TabPaneVue from '../compentents/TabPane.vue';

export default {
  components: {
    RightTocVue,
    TopBarVue,
    LeftNavVue,
    // TabPaneVue
  },
  data() {
    return {
      isCollapse: "n",
    };
  },
  methods: {},
  computed: {
    PageHeader() {
      return this.$page.headers;
    },
  isMobile() {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia("(max-width: 768px)").matches;
    }
    return false; // 在非浏览器环境下，返回一个默认值
  }
},
  mounted() {
    this.$EventBus.$on("backtotop", (backtotop) => {
      this.$nextTick(() => {
        const container = this.$refs.scrollContainer.$el;
        container.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
    this.$EventBus.$on("isCollapse", (data) => {
      this.isCollapse = data;
    });
    this.$EventBus.$on("clipboard-success", (data) => {
      this.$message({
        message: "复制成功",
        type: "success",
        offset: 60,
      });
    });
  },
};
</script>

<style>
.main-body {
  position: absolute;
  bottom: 0vh;
  top: 20vh;
}
@media (max-width: 768px) {
  /* 小于等于 768px 宽度时的样式 */
  .main-body {
    /* 移动设备样式 */
    /* 添加移动设备特定的样式属性 */
    top: 10vh;
  }
}
</style>