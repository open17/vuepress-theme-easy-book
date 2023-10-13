<template>
  <div class="LeftNav" :style="styles" v-if="isShow" >
    <el-menu
      :collapse="isCollapse"
      default-active="parts"
      :router="false"
      :collapse-transition="false"
      :text-color="isdark ? '#fff' : '#303133'"
      :active-text-color="isdark ? '#ffd04b' : '#409EFF'"
      :background-color="isdark ? '#0d1117' : '#ffffff'"
    >
      <!-- 章节 -->
      <!-- 这里代码记得优化!!!!! -->
      <el-submenu v-if="realgroup" index="parts">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>章节</span>
        </template>
        <template v-for="(item, index) in realgroup">
          <!-- 含分组 -->
          <el-menu-item-group
            v-if="item.subgroup"
            :key="index"
            :title="item.text"
          >
            <template v-for="(ig, igdx) in item.subgroup">
              <el-menu-item
                v-if="ig.link"
                :key="igdx"
                :index="ig.link"
                class="flex"
              >
                <router-link
                  :to="GetRealLink(ig.link)"
                  class="black h-full w-full"
                >
                  {{ ig.text }}
                </router-link>
              </el-menu-item>
              <el-submenu :key="igdx" v-if="ig.sublink" :index="ig.text">
                <template slot="title">{{ ig.text }}</template>
                <el-menu-item
                  v-for="(i, idx) in ig.sublink"
                  :key="idx"
                  class="flex"
                  :index="i.link"
                >
                  <router-link
                    :to="GetRealLink(i.link)"
                    class="black h-full w-full"
                  >
                    {{ i.text }}
                  </router-link>
                </el-menu-item>
              </el-submenu>
            </template>
          </el-menu-item-group>
          <!-- 基础menu -->
          <el-menu-item
            v-if="item.link"
            :key="index"
            :index="item.link"
            class="flex"
          >
            <router-link
              :to="GetRealLink(item.link)"
              class="black h-full w-full"
            >
              {{ item.text }}
            </router-link>
          </el-menu-item>
          <!-- 含submenu的menu -->
          <el-submenu :key="index" v-if="item.sublink" :index="item.text">
            <template slot="title">{{ item.text }}</template>
            <el-menu-item
              v-for="(i, idx) in item.sublink"
              :key="idx"
              class="flex"
              :index="i.link"
            >
              <router-link
                :to="GetRealLink(i.link)"
                class="black h-full w-full"
              >
                {{ i.text }}
              </router-link>
            </el-menu-item>
          </el-submenu>
        </template>
      </el-submenu>
      <!-- 编辑 -->
      <el-menu-item index="edit" @click="openUrl()" v-if="editurl">
        <i class="el-icon-edit"></i>
        <span slot="title">编辑</span>
      </el-menu-item>
      <!-- 留言墙 -->
      <el-menu-item index="comment">
        <i class="el-icon-s-comment"></i>
        <span slot="title">留言墙</span>
      </el-menu-item>
      <!-- 折叠 -->
      <el-menu-item @click="Collapse()" v-if="ifspan" index="span">
        <i
          :class="{
            'el-icon-arrow-right': isCollapse,
            'el-icon-arrow-left': !isCollapse,
          }"
        ></i>
        <span slot="title">
          {{ isCollapse ? "展开" : "收起" }}
        </span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ["isShow", "isdark","is_dark"],
  data() {
    return {
      styles: "background-color: #fff;width: 15vw;",
      isCollapse: false,
      drawer: false,
      direction: "rtl",
      value: 20,
      ifspan: false,
      realgroup: null,
      editurl: null,
    };
  },
  mounted() {
    if (this.$themeConfig.editurl) this.editurl = this.$themeConfig.editurl;
    var str = this.$page["relativePath"];
    this.updategroup(str.substring(0, str.indexOf("/")));
    this.$watch("$page.relativePath", this.handleRelativePathChange);
    this.isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (this.isMobile) this.styles = "width: 80vw;";
    this.ifspan = !this.isMobile;
  },
  methods: {
    handleRelativePathChange(newValue, oldValue) {
      // 值发生变化时执行的操作
      this.updategroup(newValue.substring(0, newValue.indexOf("/")));
    },
    updategroup(data) {
      this.realgroup = null;
      if (this.$themeConfig.group) {
        var group = this.$themeConfig.group;
        if (group[data]) {
          this.realgroup = group[data];
          // console.log(this.realgroup);
        }
      }
    },
    openUrl(url) {
      var link = this.$page.path;
      if (link.endsWith(".html")) {
        link = link.replace(/\.html$/, ".md");
      } else {
        link += "README.md";
      }
      window.open(this.editurl + link, "_blank");
    },
    Collapse() {
      this.isCollapse = !this.isCollapse;
      if (!this.isCollapse) {
        this.styles = "width: 15vw;";
        if (this.isMobile) this.styles = "width: 80vw;";
        this.$EventBus.$emit("isCollapse", "0");
      } else {
        this.$EventBus.$emit("isCollapse", "1");
        this.styles = "";
      }
    },
    BackToTop() {
      // alert(1);
      this.$EventBus.$emit("backtotop");
    },
    GetRealLink(link) {
      return "/" + link;
    },
  },
};
</script>
<style>
.dark-box {
  filter: invert(1) !important;
}
.el-menu a {
  text-decoration: none;
  color: rgb(18, 18, 18);
}
.el-menu a:hover,
.el-menu a:active {
  color: #4389e6;
}

.LeftNav .el-menu {
  border-right: 0;
}
@media (min-width: 768px) {
  .LeftNav {
    height: 90vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
@media (max-width: 768px) {
  /* 小于等于 768px 宽度时的样式 */
  .LeftNav {
    width: 80vw;
  }
}
</style>