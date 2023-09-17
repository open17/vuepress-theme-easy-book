<template>
  <div>
    <!-- 搜索栏 -->
    <el-drawer
      title="全文搜索"
      :visible.sync="drawer"
      direction="ttb"
      size="75%"
    >
      <div class="search">
        <SearchBox />
      </div>
    </el-drawer>
    <!-- 设置栏 -->
    <el-dialog title="设置" :visible.sync="settingFormVisible" width="80%">
      <p>请选择加载的代码高亮:</p>
      <el-checkbox-group v-model="optsGroup" size="small">
        <el-checkbox-button
          v-for="(opt, index) in options"
          :label="opt"
          :key="index"
          >{{ opt }}</el-checkbox-button
        >
      </el-checkbox-group>
      <div slot="footer" class="dialog-footer">
        <el-button @click="settingFormVisible = false;optsGroup=['atom-one-light','atom-one-dark'];applySetting()">恢复默认</el-button>
        <el-button type="primary" @click="settingFormVisible = false;applySetting()"
          >应用</el-button
        >
      </div>
    </el-dialog>
    <!-- header -->
    <header>
      <div class="flex justify-between items-center">
        <!-- 标题 -->
        <div class="items-center flex justify-start space-x-10">
          <i class="el-icon-guide text-xl"></i>
          <h2 class="">{{this.$site.title}}</h2>
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
                'el-icon-sunrise-1': !isDark,
                'el-icon-moon-night': isDark,
              }"
              @click="
                isDark = !isDark;
                notFinish();
              "
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
  </div>
</template>

<script>
import SearchBox from "@SearchBox";
export default {
  components: {
    SearchBox,
  },
  data() {
    return {
      isShowSearch: false,
      drawer: false,
      isDark: false,
      nav: [{ text: "首页", link: "" }],
      activeIndex: "/",
      settingFormVisible: false,
      // 高亮选择
      options: ["atom-one-light","atom-one-dark","github","github-dark","monokai","tokyo-night-dark","tokyo-night-light"],
      optsGroup:["atom-one-light","atom-one-dark"]
    };
  },
  mounted() {
    if (this.$themeConfig.nav) this.nav = this.$themeConfig.nav;
  },
  methods: {
    applySetting(){
      this.$notify({
          title: '设置',
          message: '已应用新的设置',
          type: 'success',
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
      this.activeIndex = keyPath[0];
      this.$EventBus.$emit("activeIndex", this.activeIndex);
    },
    GetRealLink(link) {
      return "/" + link;
    },
  },
};
</script>

<style>
.search input {
  background: none;
  padding-left: 5vw;
  position: absolute;
  left: 5vw;
  right: 10vw;
  width: 80vw;
  height: 5vh;
  border: solid 1px #7b838b;
}
.search input:focus {
  padding-left: 5vw;
  position: absolute;
  left: 5vw;
  right: 10vw;
  width: 80vw;
  height: 5vh;
  border: solid 1px #409eff;
}
.search ul {
  position: absolute !important;
  left: 10vw !important;
  right: 10vw !important;
  margin: 0;
  margin-top: 2vh;
  border: none !important;
}
.search li {
  width: 80vw !important;
}
header {
  background-color: #fff;
  height: 20vh;
}
</style>