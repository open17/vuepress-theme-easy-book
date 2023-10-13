<template>
  <div class="container">
    <!-- 搜索栏 -->
    <el-drawer
      title="Fast Search"
      :visible.sync="drawer"
      direction="ttb"
      size="75%"
    >
      <div class="vuepress-theme-search">
        <SearchBox />
      </div>
    </el-drawer>
    <!-- 设置栏 -->
    <el-dialog title="设置" :visible.sync="is_show_setting" width="80%">
      <p>请选择/搜索代码高亮主题(最多{{ limitHighlight }}个):</p>
      <el-select
        v-model="optsGroup"
        filterable
        multiple
        placeholder="请选择/搜索"
        :multiple-limit="limitHighlight"
      >
        <el-option
          v-for="(opt, index) in options"
          :label="opt"
          :key="index"
          :value="opt"
        >
        </el-option>
      </el-select>
      <div slot="footer" class="dialog-footer">
        <el-button
          @click="
            is_show_setting = false;
            optsGroup = ['atom-one-light', 'atom-one-dark'];
            applySetting();
          "
          >恢复默认</el-button
        >
        <el-button
          type="primary"
          @click="
            is_show_setting = false;
            applySetting();
          "
          >应用</el-button
        >
      </div>
    </el-dialog>
    <el-drawer
      title="目录"
      :visible.sync="show_mobile_menu"
      direction="ltr"
      size="80%"
      class=""
    >
      <el-menu :router="false" class="child" style="width: 80vw">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航</span>
          </template>

          <el-menu-item
            v-for="(item, index) in nav"
            :key="index"
            :index="item.link"
            class="flex items-center"
          >
            <router-link
              :to="'/' + item.link"
              class="w-full h-full"
            >
              {{ item.text }}
            </router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
      <LeftNav :isShow="true" />
    </el-drawer>
    <div class="navbar" :class="{ 'dark-box': is_dark_mode }">
      <div class="navbar-top">
        <div class="navbar-brand">
          <router-link to="/"><img class="logo" :src="$withBase(icon)" alt="Logo" v-if="icon"  /></router-link>
          <span class="title">{{ title }}</span>
        </div>
        <div class="navbar-links" v-if="!is_mobile">
          <router-link
            v-for="(i, index) in nav"
            :key="index"
            :to="'/' + i.link"
            :class="{ 'active-link': index === activeLink }"
            @click="setActiveLink(index, i.link)"
          >
            {{ i.text }}
          </router-link>
        </div>
        <div class="navbar-icons">
          <i
            class="icon-button el-icon-table-lamp"
            @click="changeDarkMode()"
          ></i>
          <i class="icon-button el-icon-search" @click="drawer = !drawer"></i>
          <i
            class="icon-button el-icon-set-up"
            :class="{ 'last-icon': !is_mobile }"
            @click="is_show_setting = !is_show_setting"
          ></i>
          <i
            class="icon-button el-icon-more last-icon"
            v-if="is_mobile"
            @click="show_mobile_menu = true"
          ></i>
        </div>
      </div>
      <div class="navbar-divider" v-if="!is_hero"></div>
    </div>
    <HeroPageVue
      v-if="is_hero"
      :is_dark_mode="is_dark_mode"
      :is_mobile="is_mobile"
    />
    <ContentPageVue
      v-else-if="!is_lock"
      :is_dark_mode="is_dark_mode"
      :is_mobile="is_mobile"
      :page_header="getPageHeader()"
    />
    <el-skeleton v-else />
  </div>
</template>

<script>
import SearchBox from "@SearchBox";
import ContentPageVue from "../pages/ContentPage.vue";
import HeroPageVue from "../pages/HeroPage.vue";
import "../styles/basic.css";
import LeftNav from "../compentents/LeftNav.vue";
export default {
  components: {
    SearchBox,
    HeroPageVue,
    ContentPageVue,
    LeftNav,
  },
  data() {
    return {
      show_mobile_menu: false,
      limitHighlight: 5,
      isClickMobileNav: false,
      showMobileNav: false,
      isShowSearch: false,
      drawer: false,
      is_show_setting: false,
      is_dark_mode: true,
      is_hero: false,
      is_mobile: false,
      activeLink: 0,
      is_lock: false,
      // 源自config
      icon: null,
      title: "Easy-Book",
      nav: [{ text: "Home", link: "" }],
      options: [
        "atom-one-light",
        "atom-one-dark",
        "github",
        "github-dark",
        "monokai",
        "tokyo-night-dark",
        "tokyo-night-light",
        "pojoaque",
        "sunburst",
        "vs",
        "panda-syntax-dark",
        "panda-syntax-light",
        "googlecode",
        "night-owl",
        "mono-blue",
        "school-book",
        "stackoverflow-dark",
        "stackoverflow-light",
        "tomorrow-night-blue",
        "tomorrow-night-bright",
        "rainbow",
      ],
      optsGroup: ["atom-one-light", "atom-one-dark"],
    };
  },
  methods: {
    applySetting() {
      this.$notify({
        title: "设置",
        message: "已应用新的设置",
        type: "success",
        offset: 70,
      });
      this.$EventBus.$emit("load-css", this.optsGroup);
    },
    getPageHeader() {
      return this.$page.headers;
    },
    changeDarkMode() {
      this.is_dark_mode = !this.is_dark_mode;
      var info = "dark";
      if (!this.is_dark_mode) info = "light";
      this.$EventBus.$emit("toggleDarkMode", info);
    },
    setActiveLink(linkId, link) {
      this.activeLink = linkId;

      // this.$router.replace(this.$withBase(link));

      this.isHero();
    },
    isMobile() {
      this.is_mobile = window.matchMedia("(max-width: 768px)").matches;
    },
    isHero() {
      this.is_hero = this.$page.path == "/";
    },
    isLock() {
      this.is_lock = this.$page.frontmatter.lock;
    },
    tryOpen() {
      if (!this.is_lock) {
        return;
      }
      this.$prompt("这是一个上锁页面,请输入密码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          if (value == this.$themeConfig.lock_password) {
            this.is_lock = false;
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
    this.$watch('$page.path', this.isHero);
    if (this.$themeConfig.icon) this.icon = this.$themeConfig.icon;
    if (this.$themeConfig.title) this.title = this.$themeConfig.title;
    if (this.$themeConfig.nav) this.nav = this.$themeConfig.nav;
    this.changeDarkMode();
    this.isMobile();
    this.isHero();
    this.isLock();
    this.tryOpen();
    if (this.$themeConfig.HighlightOptions)
      this.options = this.$themeConfig.HighlightOptions;
    if (this.$themeConfig.defaultHighlight)
      this.optsGroup = this.$themeConfig.defaultHighlight;
    if (this.$themeConfig.limitHighlight)
      this.limitHighlight = this.$themeConfig.limitHighlight;
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

@media screen and (min-width: 768px) {
  html {
    font-size: 16px;
  }
}
@media screen and (max-width: 768px) {
  html {
    font-size: 11px;
  }
}
* {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.dark-box img {
  filter: invert(1);
}
.shadow-bar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dark-box {
  filter: invert(100%);
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 90vh;
  /* background-color: #cac9c9; */
  overflow-y: auto;
  /* narbar height+20px */
  padding-top: 10vh;
}

/* 导航 */
.navbar {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100vw - 20px);
  background-color: #fff;
  padding: 10px;
}

.navbar-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-divider {
  height: 1px;
  background-color: #ddd;
}

.logo {
  height: 40px;
}

.navbar-icons {
  display: flex;
  align-items: center;
}
.title {
  margin-left: 10px;
  font-weight: bold;
}
.navbar-brand {
  display: flex;
  align-items: center;
  text-align: center;
  height: 8vh;
}
.icon-button {
  margin-left: 10px;
  font-size: 1.5rem;
  margin-left: 20px;
}

.last-icon {
  margin-right: 50px; /* Add a right margin to the last icon */
}

.navbar-links {
  margin-left: 30px;
  display: flex;
  justify-content: center;
  margin-top: 3vh;
  height: 5vh; /* Adjust the height as needed */
}

.navbar-links a {
  margin-right: 30px;
  /* font-weight: 530; */
  color: #3b3838;
  transition: color 0.3s;
}

.navbar-links .active-link,
.navbar-links .active-link:hover {
  color: #007bff;
}

.navbar-links .active-link::after,
.navbar-links  .active-link:hover::after {
  height: 3px;
  transform: scaleX(1);
}

.navbar-links a ::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #007bff;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s;
}

/* WebKit 内核浏览器样式化 */
::-webkit-scrollbar {
  width: 0.5px; /* 滚动条宽度 */
}
::-webkit-scrollbar-thumb {
  background-color: gray;
}
/* Firefox 浏览器样式化 */
* {
  scrollbar-width: thin; /* 滚动条宽度 */
}
</style>