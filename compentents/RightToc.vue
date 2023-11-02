<template>
  <div
    class="fixed right-2 top-28 border-l-2 overflow-y-scroll bg-white dark:bg-gray-800"
  >
    <div class="flex flex-col sm:flex-row sm:justify-around">
      <div class="w-64 max-h-96">
        <nav class="mt-2 px-6">
          <a
            v-for="(header, index) in page_header"
            :key="index"
            :href="`#${header.slug}`"
            :style="{
              'margin-left': `${(header.level - 2) * 1.25}rem`,
            }"
            class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 
             transition-colors dark:hover:text-white dark:hover:bg-gray-600 
            duration-200 text-gray-600 dark:text-gray-400 rounded-lg"
          >
            <svg
              v-if="header.level == 2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              />
            </svg>

            <!-- <span class="mx-4 text-lg font-normal"> Element </span> -->
            <div
              class="mx-4 text-sm font-normal"
              v-html="convertKatex(header.title)"
            ></div>
            <span class="flex-grow text-right"> </span>
          </a>
        </nav>
      </div>
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
  methods: {
    convertKatex(title) {
      if (title.startsWith("$") && title.endsWith("$")) {
        return katex.renderToString(title.slice(1, -1), {
          throwOnError: false,
        });
      }
      return '<text class="mb-0">' + title + "</text>";
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