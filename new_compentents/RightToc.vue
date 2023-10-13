<template>
  <div class="right-toc">
    <template v-if="page_header">
      <div
        v-for="(header, index) in page_header"
        :key="index"
        class="text item"
      >
      <div @click="activeIdx=index" class="link-container">
        <a
          :href="`#${header.slug}`"
          :style="{
            'margin-left': `${(header.level - 2) * 1.25}rem`,
          }"
          :class="{
            'active-link': activeIdx == index ,
            'non-active-link': activeIdx != index && header.level!=2,
            'title-color': header.level == 2
          }"
          
        >
          {{ header.title }}
        </a>
      </div>
        
      </div>
    </template>
    <div v-else>
      <el-empty description="404"></el-empty>
    </div>
  </div>
</template>

<script>
export default {
  props: ["page_header"],
  data() {
    return {
      activeIdx: 0,
    };
  },
  computed: {},
};
</script>

<style scoped>
.dark .title-color{
  color: #ebeef5;
}

.dark .non-active-link{
  color: #ebeef5;
}

.link-container{
  margin-left: 10%;
  margin-top: 5%;
}
.link-container a{
  text-decoration: none !important;
}
.title-color {
  color: #242424;
  font-size: 1rem;
}
.active-link,.dark .active-link{
  color: rgb(30, 166, 220);
}
.non-active-link{
  color: rgb(85, 85, 85);
}
.right-toc {
  position: fixed;
  top: 20vh;
  right: 2%;
  width: 18%;
  overflow-y: auto;
  height: 50%;
  border: 1px solid #9c9da0;
  border-radius: 10px;
  padding-top: 5px;
}
</style>