<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>目录</span>
    </div>
    <div class="overflow-y card-body">
      <template v-if="headers">
        <div v-for="(header, index) in headers" :key="index" class="text item">
          <a
            :href="`#${header.slug}`"
            :style="{
              'padding-left': `${(header.level - 2) * 1.25}rem`,
            }"
            :class="{
              'title-color': header.level == 2,
              'notitle-color': header.level != 2,
              'active-link': activeIdx == index,
            }"
            @click="activeIdx = index"
          >
            {{ header.title }}
          </a>
        </div>
      </template>
      <div v-else><el-empty description="似乎没有标题诶"></el-empty></div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
    },
  },
  data() {
    return {
      activeIdx: 0,
    };
  },
};
</script>

<style scoped>
::-webkit-scrollbar-thumb {
  background-color: transparent;
}

.notitle-color:after,
.notitle-color {
  color: #2a2a2a;
}
.title-color:after,
.title-color {
  color: #1a242f;
  font-size: 15px;
}
.active-link:after,
.active-link {
  color: #1e80ff;
}
.card-body {
  height: 50vh;
}
.box-card {
  scrollbar-color: transparent transparent; /* 滚动条颜色（拖动块和轨道） */
  margin-top: 3vh;
  margin-right: 1vw;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 20vw;
  scrollbar-width: none;
  -moz-scrollbars-none: none;
}
</style>