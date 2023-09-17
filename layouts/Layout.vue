<template>
  <div class="overflow-x-hidden">
    <TopBarVue />
    <div class="flex justify-end space-x-10 main-body">
      <div><LeftNavVue /></div>
      <el-card class="box-card overflow-y">
        <Content
          class="markdown-body"
          ref="scrollContainer"
          :class="{
            'min-w-55': isCollapse == 'n',
            'min-w-65': isCollapse == 'y',
          }"
        />
          <!-- <tab-pane-vue/> -->
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
</style>