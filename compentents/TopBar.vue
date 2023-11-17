<template>
  <div>
        <!-- Navbar -->
        <div
          class="w-full navbar bg-base-100 fixed top-0 left-0 z-50"
          :class="{ 'border-b-2': !isHome }"
        >
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div class="flex-1">
            <router-link class="btn btn-ghost normal-case text-xl" to="/">
              <img
                :src="$withBase($themeConfig.icon)"
                alt="logo"
                class="w-10"
              />
            </router-link>
            <router-link class="btn btn-ghost normal-case text-xl" to="/">{{
              $themeConfig.title
            }}</router-link>
          </div>
          <div class="flex-none hidden lg:flex">
            <!-- 菜单栏 -->
            <menu-group-vue :isHorizontal="true"/>
            <theme-selcect-vue/> 
          </div>
        </div>
  </div>
</template>

<script>
import SearchBox from "@SearchBox";

import MenuGroupVue from './MenuGroup.vue';
import ThemeSelcectVue from './ThemeSelector.vue';

export default {
  props: ["isHome"],
  components: {
    MenuGroupVue,
    SearchBox,
    ThemeSelcectVue
  },
  data() {
    return {
      activeNav: "",
      headerStyle: "2",
      navGroup: [],
      searchVisible: false,
    };
  },
  computed: {},
  mounted() {
    if (this.$themeConfig.nav) this.navGroup = this.$themeConfig.nav;
    this.$EventBus.$emit("toggleDarkMode", "light");
  },
};
</script>
<style>
.vuepress-theme-search input {
  background: none;
  padding-left: 5vw;
  position: absolute;
  left: 5vw;
  right: 10vw;
  width: 80vw;
  height: 5vh;
  border: solid 1px #7b838b;
}
.vuepress-theme-search input:focus {
  padding-left: 5vw;
  position: absolute;
  left: 5vw;
  right: 10vw;
  width: 80vw;
  height: 5vh;
  border: solid 3px #67a7e7;
}

.vuepress-theme-search ul {
  position: absolute !important;
  left: 10vw !important;
  margin: 0 !important;
  margin-top: 3vh !important;
  display: flex !important;
  flex-direction: column;
  border: 5px solid #409eff !important;
}
.vuepress-theme-search li {
  background-color: #fff !important;
}
</style>