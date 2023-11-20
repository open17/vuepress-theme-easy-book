<template>
  <div class="fixed right-2 top-28 max-h-80 overflow-y-auto rounded-box border-2">
    <ul class="menu bg-base-100 w-56 p-2">
      <li
        v-for="(header, index) in page_header"
        :key="index"
        :style="{
          'margin-left': `${(header.level - 2) * 1.25}rem`,
        }"
      >
        <a :href="`#${header.slug}`"
          >
          <div v-html="convertKatex(header.title)" class=""></div
        ></a>
      </li>
    </ul>
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
  methods: {
    convertKatex(title) {
      if (title.startsWith("$") && title.endsWith("$")) {
        return katex.renderToString(title.slice(1, -1), {
          throwOnError: false,
        });
      }
      return '<span class="mb-0 text-base">' + title + "</span>";
    },
  },
  mounted() {
    // 创建第一个<script>标签并设置属性
    const katexCdn = document.createElement("script");
    katexCdn.src =
      "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js";
    katexCdn.integrity =
      "sha384-XjKyOOlGwcjNTAIQHIpgOno0Hl1YQqzUOEleOLALmuqehneUG+vnGctmUb0ZY0l8";
    katexCdn.crossOrigin = "anonymous";
    document.body.appendChild(katexCdn);
  },
};
</script>

<style>
/* WebKit 内核浏览器样式化 */
::-webkit-scrollbar {
  width: 0.5px; /* 滚动条宽度 */
  height: 0.5px; /* 滚动条高度 */
}
::-webkit-scrollbar-thumb {
  background-color: rgba(181, 63, 63, 0);
}
/* Firefox 浏览器样式化 */
* {
  scrollbar-width: thin; /* 滚动条宽度 */
}
</style>