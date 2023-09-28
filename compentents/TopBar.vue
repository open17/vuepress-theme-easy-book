<template>
  <div>
    <!-- 搜索栏 -->
    <el-drawer
      title="全文搜索"
      :visible.sync="drawer"
      direction="ttb"
      size="75%"
    >
      <div class="vuepress-theme-search">
        <SearchBox />
      </div>
    </el-drawer>
    <!-- 设置栏 -->
    <el-dialog title="设置" :visible.sync="settingFormVisible" width="80%">
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
      <!-- <el-checkbox-group v-model="optsGroup" size="small">
        <el-checkbox-button
          v-for="(opt, index) in options"
          :label="opt"
          :key="index"
          >{{ opt }}</el-checkbox-button
        >
      </el-checkbox-group> -->
      <div slot="footer" class="dialog-footer">
        <el-button
          @click="
            settingFormVisible = false;
            optsGroup = ['atom-one-light', 'atom-one-dark'];
            applySetting();
          "
          >恢复默认</el-button
        >
        <el-button
          type="primary"
          @click="
            settingFormVisible = false;
            applySetting();
          "
          >应用</el-button
        >
      </div>
    </el-dialog>
    <!-- header -->
    <header>
      <div class="flex justify-between items-center">
        <!-- 标题 -->
        <div class="items-center flex justify-start space-x-10">
          <i
            class="el-icon-guide text-xl site-title"
            @click="ClickMobileNav()"
            v-show="isMobile"
          ></i>
          <h2 class="site-title">{{ this.$site.title }}</h2>
        </div>
        <!-- 图标 -->
        <div class="items-center space-x-10">
          <el-popover
            placement="bottom"
            title="搜索"
            width="200"
            trigger="hover"
            content="点击图标,开始全文搜索"
          >
            <a
              class="hover-color el-icon-search text-xl"
              @click="drawer = true"
              slot="reference"
            >
            </a>
          </el-popover>
          <el-popover
            placement="bottom"
            title="明亮/黑暗"
            width="200"
            trigger="hover"
            content="点击图标,切换明亮/黑暗模式"
          >
            <a
              class="hover-color text-xl"
              :class="{
                'el-icon-sunny': toggleDarkMode=='light',
                'el-icon-moon': toggleDarkMode=='dark',
                'el-icon-cloudy-and-sunny': toggleDarkMode=='auto',
              }"
              @click="toggleMode()"
              slot="reference"
            ></a>
          </el-popover>
          <el-popover
            placement="bottom"
            title="奶茶杯"
            width="200"
            trigger="hover"
            content="点我切换语言"
          >
            <a
              @click="notFinish"
              class="hover-color el-icon-milk-tea text-xl"
              slot="reference"
            ></a>
          </el-popover>
          <el-popover
            placement="bottom"
            title="设置"
            width="200"
            trigger="hover"
            content="自定义网站"
          >
            <a
              @click="settingFormVisible = true"
              class="hover-color el-icon-setting text-xl"
              slot="reference"
            ></a>
          </el-popover>
        </div>
      </div>
      <!-- 导航栏 -->
      <el-menu
        class="w-screen pl-10 pr-10"
        mode="horizontal"
        :default-active="activeIndex"
        :router="false"
        @select="handleSelect"
        v-if="!isMobile"
      >
        <el-menu-item
          v-for="(item, index) in nav"
          :key="index"
          :index="item.link"
          class="flex items-center"
        >
          <router-link :to="GetRealLink(item.link)" class="h-full w-full">
            {{ item.text }}
          </router-link>
        </el-menu-item>
      </el-menu>
    </header>
    <!-- 移动端侧边栏 -->
    <el-drawer
      title="目录"
      :visible.sync="showMobileNav"
      direction="ltr"
      size="80%"
      class=""
    >
      <el-menu
        :default-active="activeIndex"
        :router="false"
        @select="handleSelect"
        class="child"
        style="width: 80vw"
        :text-color="isdark ? '#fff' : '#303133'"
        :active-text-color="isdark ? '#ffd04b' : '#409EFF'"
        :background-color="isdark ? '#0d1117' : '#ffffff'"
      >
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
            <router-link :to="GetRealLink(item.link)" class="h-full w-full">
              {{ item.text }}
            </router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
      <LeftNavVue :isShow="true" :isdark="isdark" />
    </el-drawer>
  </div>
</template>

<script>
import SearchBox from "@SearchBox";
import LeftNavVue from "./LeftNav.vue";
export default {
  props: ["isMobile", "isdark"],
  components: {
    SearchBox,
    LeftNavVue,
  },
  data() {
    return {
      limitHighlight: 5,
      isClickMobileNav: false,
      showMobileNav: false,
      isShowSearch: false,
      drawer: false,
      hasNotInitMode:true,
      toggleDarkMode:'auto',
      nav: [{ text: "首页", link: "" }],
      activeIndex: "/",
      settingFormVisible: false,
      // 高亮选择
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
  mounted() {
    if (this.$themeConfig.nav) this.nav = this.$themeConfig.nav;
    var str = this.$page["relativePath"];
    // console.log(str,str.substring(0, str.indexOf("/")));
    this.activeIndex = str.substring(0, str.indexOf("/"));

    // 代码高亮切换设置
    if(this.$themeConfig.HighlightOptions)this.options=this.$themeConfig.HighlightOptions;
    if(this.$themeConfig.defaultHighlight)this.optsGroup=this.$themeConfig.defaultHighlight;
    if(this.$themeConfig.limitHighlight)this.limitHighlight=this.$themeConfig.limitHighlight;
    // 是否为刚开始需要初始化
    if(this.hasNotInitMode){
      this.hasNotInitMode=false;
      this.toggleMode();
    }
  },
  methods: {
    toggleMode(){
      if(this.toggleDarkMode=='dark'){
        this.toggleDarkMode='light';
      }else if(this.toggleDarkMode=='light'){
        this.toggleDarkMode='auto';
      }
      else{
        this.toggleDarkMode='dark';
      }
      this.$EventBus.$emit("toggleDarkMode", this.toggleDarkMode);
    },
    applySetting() {
      this.$notify({
        title: "设置",
        message: "已应用新的设置",
        type: "success",
        offset: 70,
      });
      this.$EventBus.$emit("load-css", this.optsGroup);
    },
    notFinish() {
      this.$notify({
        title: "功能未完成",
        message: "当前功能未完成,敬请期待",
        type: "warning",
        offset: 200,
      });
    },
    handleSelect(key, keyPath) {
      // this.activeIndex = keyPath[0];
      // console.log(this.activeIndex);
      // this.$EventBus.$emit("activeIndex", this.activeIndex);
    },
    GetRealLink(link) {
      return "/" + link;
    },
    ClickMobileNav() {
      this.isClickMobileNav = !this.isClickMobileNav;
      this.showMobileNav = this.isClickMobileNav && this.isMobile;
    },
  },
  computed: {},
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
header {
  background-color: #fff;
  height: 20vh;
}
.dark header {
  background-color: #0d1117;
}
.dark .LeftNav,
.dark .el-menu,
.dark .el-menu-item,
.dark .el-menu-item-group,
.dark .el-submenu {
  background-color: #0d1117;
  color: #fff;
}
.dark .site-title {
  color: #fff;
}
.dark .el-menu--horizontal .is-active {
  color: gold !important;
  border-bottom: 2px solid gold !important;
}
.dark .el-menu-item:active,
.dark .el-menu-item:focus {
  background-color: #0d1117 !important;
}
.dark .el-menu-item:hover {
  background-color: #0d1117 !important;
  color: gold !important;
}
.dark .el-drawer {
  background-color: #0d1117;
}
</style>