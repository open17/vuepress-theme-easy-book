<template>
  <div class="overflow-x-hidden " v-if="isLoaded">
    <TopBarVue class="overflow-x-hidden" :isHome="isHome"/>
    <HomeViewVue class="overflow-x-hidden" v-if="isHome"/>
    <content-page-vue :page_header="getPageHeader()" :is_dark_mode="false" v-else-if="!isLock"/>
  </div>
</template>

<script>

import "tailwindcss/tailwind.css"
import ContentPageVue from "../views/ContentView.vue";
import TopBarVue from '../compentents/TopBar.vue';
import HomeViewVue from '../views/HomeView.vue';
export default {
  components: {
    TopBarVue,
    HomeViewVue,
    ContentPageVue,
  },
  data() {
    return {
      // 加载完毕资源
      isLoaded:false,
      // 主页
      isHome: false,
      // 默认active
      activeLink: -1,
      // 加密
      isLock: false,
    };
  },
  methods: {
    getActiveUrl(url){
      if(url.length==1){
        return url.substring(1, url.length);
      }
      if(url.endsWith('/')){
        return url.substring(1, url.length - 1)
      }
      else if(url.endsWith('.html')){
        return url.substring(1, url.length - 5);
      }
      return url.substring(1, url.length);
    },
    getPageHeader() {
      return this.$page.headers;
    },
    setActiveLink() {
      this.activeLink = this.getActiveUrl(this.$page.path);
      console.log(this.activeLink);
      this.checkHome();
    },
    checkHome() {
      this.isHome = this.$page.path == "/";
    },
    checkLock() {
      this.isLock = this.$page.frontmatter.lock;
      this.tryOpen();
    },
    tryOpen() {
      if (!this.isLock) {
        return;
      }
      this.$prompt("这是一个上锁页面,请输入密码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          if (value == this.$themeConfig.lock_password) {
            this.isLock = false;
            this.$message({
              type: "success",
              message: "Unlock!",
            });
            return;
          } else {
            this.$message({
              type: "error",
              message: "Try again",
            });
            this.tryOpen();
          }
        })
        .catch(() => {
          this.$message({
            type: "error",
            message: "Try again",
          });
        });
    },
  },
  mounted() {
    this.$watch('$page.path', this.setActiveLink);
    this.$watch('$page.path', this.checkLock);
    this.checkHome();
    this.checkLock();
    this.isLoaded=true;
  },
};
</script>

<style>

</style>