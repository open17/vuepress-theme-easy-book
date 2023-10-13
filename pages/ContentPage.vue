<template>
  <div :class="{'dark':is_dark_mode}">
    <div class="content-page">
      <LeftNavVue :isdark="is_dark_mode" v-if="!is_mobile"/>
      <Content
        class="markdown-body"
        :class="{ 'collapse-markdown-body': isCollapse == 1,'mobile-markdown-body':is_mobile }"
      />
      <RightTocVue :page_header="page_header"  v-if="!is_mobile"/>
    </div>
  </div>
</template>

<script>
import LeftNavVue from "../new_compentents/LeftNav.vue";
import RightTocVue from "../new_compentents/RightToc.vue";

export default {
  props: ["is_dark_mode", "is_mobile", "page_header"],
  components: {
    RightTocVue,
    LeftNavVue,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  mounted() {
    this.$EventBus.$on("isCollapse", (data) => {
      this.isCollapse = data;
    });
  },
};
</script>

<style>
.dark .content-page {
  background-color: #0d1117;
}
.content-page {
  display: flex;
  flex-direction: row;
  padding-top: 2%;
}
.markdown-body {
  z-index: 2;
  margin-left: 17% !important;
  width: 60%;
  min-height: 90vh;
}

.collapse-markdown-body {
  margin-left: 10% !important;
  width: 68%;
}

.mobile-markdown-body {
  margin-left: 5% !important;
  width: 90%;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  border-bottom: none !important;
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