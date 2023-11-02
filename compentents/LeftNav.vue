<template>
  <div
    class="fixed top-0 pt-24 hidden h-screen lg:block w-60 overflow-y-scroll"
  >
    <div class="h-full bg-white dark:bg-gray-700">
      <nav class="mt-6">
        <div v-for="(i, index) in navGroup" :key="index">
          <!-- 一级菜单栏 -->
          <div @click="isActive = index">
            <router-link
              :class="{
                'text-gray-500  dark:text-gray-200 hover:text-blue-500':
                  isActive != index,
                'text-blue-500 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800':
                  isActive == index,
              }"
              class="flex items-center justify-start w-full p-4 my-2 font-thin uppercase transition-colors duration-200"
              :to="GetRealLink(i.link)"
            >
              <span class="text-left">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 2048 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
                  ></path>
                </svg>
              </span>
              <span class="mx-4 text-sm font-normal"> {{ i.text }} </span>
            </router-link>
          </div>
          <!-- 二级菜单栏 -->
          <div class="sub" v-if="i.sublink && isActive == index">
            <div v-for="(j, subindex) in i.sublink" :key="subindex">
              <div @click="isSubActive = subindex">
                <router-link
                  class="flex items-center justify-start w-full p-4 pl-10 my-2 font-thin uppercase transition-colors duration-200 text-gray-500 dark:text-gray-200 hover:text-blue-500"
                  :to="GetRealLink(j.link)"
                >
                  <span class="text-left">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 2048 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
                      ></path>
                    </svg>
                  </span>
                  <span class="mx-4 text-sm font-normal"> {{ j.text }} </span>
                </router-link>
              </div>
              <!-- 三级菜单栏 -->
              <div class="subsub" v-if="j.sublink && isSubActive == subindex">
                <router-link
                  v-for="(k, subsubindex) in j.sublink"
                  :key="subsubindex"
                  class="flex items-center justify-start w-full p-4 pl-14 my-2 font-thin uppercase transition-colors duration-200 text-gray-500 dark:text-gray-200 hover:text-blue-500"
                  :to="GetRealLink(k.link)"
                >
                  <span class="text-left">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 2048 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
                      ></path>
                    </svg>
                  </span>
                  <span class="mx-4 text-sm font-normal"> {{ k.text }} </span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props:["navGroup"],
  data() {
    return {
      isActive: 0,
      isSubActive: 2,
    };
  },
  methods:{
    GetRealLink(link) {
      if (link) return "/" + link;
      return "";
    },
  }
};
</script>

<style>
</style>