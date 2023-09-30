<template>
  <div class="overflow-x-hidden main-container" :class="{ dark: isDarkMode }" style="">
    <!-- TopBar正常20vh,移动端10vh -->
    <TopBarVue :isMobile="isMobile" :isdark="isDarkMode" />
    <div class="flex justify-end space-x-10 main-body" v-if="!isMobile">
      <div><LeftNavVue :isShow="!isMobile" :isdark="isDarkMode" /></div>
      <el-card class="box-card overflow-y">
        <Content
          class="markdown-body"
          ref="scrollContainer"
          :class="{
            'w-56': isCollapse == 'n',
            'w-66': isCollapse == 'y',
          }"
        />
      </el-card>
      <div><RightTocVue :headers="PageHeader" :isMobile="isMobile" /></div>
    </div>
    <div v-else>
      <div class="main-body overflow-y pl-10 w-95">
        <Content class="markdown-body w-85" ref="scrollContainer" />
        <!-- <div class="h-5"></div> -->
      </div>
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
      isDarkMode: false,
      isSetMode: "auto",
      isCollapse: "n",
      isMobile: false,
    };
  },
  methods: {
    checkMobile() {
      this.isMobile = window.matchMedia("(max-width: 768px)").matches;
    },
    handleThemeChange(event) {
      // 更新数据
      this.isDarkMode = event.matches;
      console.log(document.body.classList);
      if (this.isDarkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      // console.log(this.isDarkMode);
    },
    initTheme(){
      if(this.isSetMode=="auto")this.isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (this.isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    }
  },
  created() {},
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMobile);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", this.handleThemeChange);
  },
  computed: {
    PageHeader() {
      return this.$page.headers;
    },
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", this.handleThemeChange);
    // 初始化系统主题
    this.initTheme()
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
    this.$EventBus.$on("toggleDarkMode", (data) => {
      if(data!="auto")this.isDarkMode=(data=="dark");
      this.isSetMode = data;
      this.initTheme()
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
.main-container{
  position: absolute;
  top: 0vh;
  left: 0vw;
  width: 100vw;
  height: 100vh;
}
.main-body {
  position: absolute;
  top: 20vh;
  height: 78vh;
}
@media (max-width: 768px) {
  /* 小于等于 768px 宽度时的样式 */
  .main-body {
    /* 移动设备样式 */
    /* 添加移动设备特定的样式属性 */
    top: 10vh;
    height: 90vh;
    left: 0;
    right: 0;
  }
}
.dark .main-body,
.dark .el-card {
  background-color: #0d1117;
  color: aliceblue;
}

.dark .el-tabs__item {
  color: aliceblue;
}
.dark .el-tabs__item.is-active,
.dark .el-tabs__item:hover{
  color: goldenrod;
}
.dark .el-tabs__active-bar{
  background-color: goldenrod;
}
</style>