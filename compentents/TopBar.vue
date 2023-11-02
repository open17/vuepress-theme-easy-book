<template>
  <div>
    <header
      class="text-gray-600 body-font fixed top-0 left-0 w-screen z-50 bg-white"
      :class="{' border-b-2':!isHome}"
    >
      <div :class="containerClasses">
        <a
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
           <img :src="$withBase($themeConfig.icon)" alt="logo" class="w-10">
          <span class="ml-3 text-xl">{{$themeConfig.title}}</span>
        </a>
        <nav :class="navClasses">
          <router-link
            v-for="(i, index) in navGroup"
            :key="index"
            :to="'/' + i.link"
            class="mr-5 hover:text-gray-900"
            :class="{ 'text-blue-400': i.link === activeNav }"
          >
            {{ i.text }}
          </router-link>
        </nav>
        <button
          class="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          @click="searchVisible=!searchVisible"
        >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

        </button>
      </div>
    </header>
    <!-- 搜索栏 -->
    <el-drawer
      title="Fast Search"
      :visible.sync="searchVisible"
      direction="ttb"
      size="75%"
    >
      <div class="vuepress-theme-search">
        <SearchBox />
      </div>
    </el-drawer>
  </div>
</template>

<script>
import SearchBox from "@SearchBox";
export default {
  props:["isHome"],
  components: {
    SearchBox,
  },
  data() {
    return {
      activeNav: "",
      headerStyle: "2",
      navGroup: [],
      searchVisible: false,
    };
  },
  computed: {
    containerClasses() {
      return "mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center";
    },
    navClasses() {
      if (this.headerStyle === "1") {
        return "md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center";
      } else if (this.headerStyle === "2") {
         return "md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center";
      } 
      else if (this.headerStyle === "3") {
        return "md:ml-auto flex flex-wrap items-center text-base justify-center";
      }
    },
  },
  mounted() {
    if (this.$themeConfig.nav) this.navGroup = this.$themeConfig.nav;
    this.$EventBus.$emit("toggleDarkMode",'light');
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