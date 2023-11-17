<template>
  <div :class="{ dark: is_dark_mode }">
    <LeftNavVue v-if="showLeft&&navGroup!=null" :navGroup="navGroup"/>
    <RightTocVue :page_header="page_header" v-if="showRight" />
    <div class="flex flex-col" ref="printContent">
      <div
        class="z-10 relative top-36 left-72 flex justify-center space-x-5 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 cursor-pointer"
          @click="goPage()"
          v-if="this.$themeConfig.editurl"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 cursor-pointer"
          @click="printComponent()"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
          />
        </svg>
      </div>
      <Content
        class="markdown-body min-h-screen overflow-y-scroll"
        :class="{
          'w-screen pl-10 pr-10 pt-10 absolute top-0 m-0 z-50': isFull,
          'pt-28 pr-72 w-auto': !isFull,
          'pl-72':navGroup!=null&&!isFull,
          'pl-20':navGroup==null&&!isFull,
        }"
      />
      <FooterSectionVue class="pl-64" v-show="!isFull" />
    </div>
  </div>
</template>

<script>
import FooterSectionVue from "../compentents/FooterSection.vue";
import LeftNavVue from "../compentents/LeftNav.vue";
import RightTocVue from "../compentents/RightToc.vue";

export default {
  props: ["is_dark_mode", "is_mobile", "page_header"],
  components: {
    RightTocVue,
    LeftNavVue,
    FooterSectionVue,
  },
  data() {
    return {
      showLeft: true,
      showRight: true,
      isFull: false,
      footer_html: ``,
      navGroup:null,
    };
  },
  methods: {
    printComponent() {
      this.showLeft = false;
      this.showRight = false;
      this.isFull = true;
      this.$nextTick(() => {
        window.print();
      });
      this.$nextTick(() => {
        this.showLeft = true;
        this.showRight = true;
        this.isFull = false;
      });
    },
    goPage(url) {
      var link = this.$page.path;
      if (link.endsWith(".html")) {
        link = link.replace(/\.html$/, ".md");
      } else {
        link += "README.md";
      }
      window.open(this.$themeConfig.editurl + link, "_blank");
    },
    copySuccessTips() {
      this.$EventBus.$on("clipboard-success", (data) => {
        this.$notify({
          title: "成功",
          message: "代码复制成功",
          type: "success",
        });
      });
    },
    handleRelativePathChange(newValue, oldValue) {
      this.updateGroup(newValue.substring(0, newValue.indexOf("/")));
    },
    updateGroup(data) {
      this.navGroup = null;
      if (this.$themeConfig.group) {
        var group = this.$themeConfig.group;
        if (group[data]) {
          this.navGroup = group[data];
          // console.log(this.navGroup);
        }
      }
    },
  },
  mounted() {
    var str = this.$page["relativePath"];
    this.updateGroup(str.substring(0, str.indexOf("/")));
    this.$watch("$page.relativePath", this.handleRelativePathChange);
    this.copySuccessTips();
  },
};
</script>

<style>
.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  border-bottom: none !important;
}
/* markdown标题样式更改 */
.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4 {
  margin-inline-start: -0.75rem !important;
  padding-inline-start: 0.75rem;
  border-inline-start: 0.275rem solid #34495e;
}

.dark .markdown-body h1,
.dark .markdown-body h2,
.dark .markdown-body h3,
.dark .markdown-body h4,
.dark .markdown-body h5,
.dark .markdown-body h6 {
  border-inline-start: 0.41rem solid goldenrod;
}
.markdown-body h5,
.markdown-body h6 {
  margin-inline-start: -0.75rem;
  padding-inline-start: 1rem;
  border-inline-start: 0.41rem solid #34495e;
}
/* markdown样式更改 取消#符号 */
.markdown-body .header-anchor {
  display: none;
}

.fixed-orgin-css p{
  margin-bottom: 0 !important;
}
.fixed-orgin-css {
  padding-bottom:none !important;
}
 .markdown-body .fixed-orgin-css pre{
  background-color: transparent !important;
}


.dark .el-card {
  background-color: #0d1117;
  color: aliceblue;
}

.dark .el-tabs__item {
  color: aliceblue;
}
.dark .el-tabs__item.is-active,
.dark .el-tabs__item:hover {
  color: goldenrod;
}
.dark .el-tabs__active-bar {
  background-color: goldenrod;
}
</style>