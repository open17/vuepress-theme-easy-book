<template>
  <div
    class="overflow-x-hidden bg-base-100"
    v-if="isLoaded"
    :data-theme="activeTheme"
  >
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <TopBarVue class="overflow-x-hidden" :isHome="isHome" />
        <LockViewVue v-if="isLock" />
        <HomeViewVue class="overflow-x-hidden" v-else-if="isHome" />
        <content-page-vue
          :page_header="getPageHeader()"
          :is_dark_mode="false"
          v-else
        />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-100">
          <MenuGroupVue :isHorizontal="false" />
        </ul>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center items-center h-screen">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      class="w-40 mx-auto h-40"
    >
      <rect
        fill="#FF156D"
        stroke="#FF156D"
        stroke-width="15"
        width="30"
        height="30"
        x="25"
        y="50"
      >
        <animate
          attributeName="y"
          calcMode="spline"
          dur="2"
          values="50;120;50;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.4"
        ></animate>
      </rect>
      <rect
        fill="#FF156D"
        stroke="#FF156D"
        stroke-width="15"
        width="30"
        height="30"
        x="85"
        y="50"
      >
        <animate
          attributeName="y"
          calcMode="spline"
          dur="2"
          values="50;120;50;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.2"
        ></animate>
      </rect>
      <rect
        fill="#FF156D"
        stroke="#FF156D"
        stroke-width="15"
        width="30"
        height="30"
        x="145"
        y="50"
      >
        <animate
          attributeName="y"
          calcMode="spline"
          dur="2"
          values="50;120;50;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="0"
        ></animate>
      </rect>
    </svg>
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
import ContentPageVue from "../views/ContentView.vue";
import TopBarVue from "../compentents/TopBar.vue";
import HomeViewVue from "../views/HomeView.vue";
import MenuGroupVue from "../compentents/MenuGroup.vue";
import LockViewVue from "../views/LockView.vue";
export default {
  components: {
    TopBarVue,
    HomeViewVue,
    ContentPageVue,
    MenuGroupVue,
    LockViewVue,
  },
  data() {
    return {
      // 加载完毕资源
      isLoaded: false,
      // 主页
      isHome: false,
      // 默认active
      activeLink: -1,
      // 加密
      isLock: false,
      activeTheme: "light",
    };
  },
  methods: {
    setActiveTheme(theme) {
      this.activeTheme = theme;
    },
    getActiveUrl(url) {
      if (url.length == 1) {
        return url.substring(1, url.length);
      }
      if (url.endsWith("/")) {
        return url.substring(1, url.length - 1);
      } else if (url.endsWith(".html")) {
        return url.substring(1, url.length - 5);
      }
      return url.substring(1, url.length);
    },
    getPageHeader() {
      return this.$page.headers;
    },
    setActiveLink() {
      this.activeLink = this.getActiveUrl(this.$page.path);
      this.checkHome();
    },
    checkHome() {
      this.isHome = this.$page.path == "/";
    },
    checkLock() {
      this.isLock = this.$page.frontmatter.lock;
    },
    unlockPage() {
      this.isLock = false;
    },
  },
  mounted() {
    this.checkLock();
    this.checkHome();
    this.$watch("$page.path", this.checkLock);
    this.$watch("$page.path", this.setActiveLink);
    this.$EventBus.$on("changeTheme", this.setActiveTheme);
    this.$EventBus.$on("unlockPage", this.unlockPage);
    this.$nextTick(() => {
      setTimeout(() => {
        this.isLoaded = true;
      }, 1000);
    });
  },
};
</script>

<style>
</style>