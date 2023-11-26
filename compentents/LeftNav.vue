<template>
  <div
    class="fixed top-0 pt-24 h-screen block w-60 overflow-y-scroll bg-base-200"
  >
    <div class="h-full">
      <nav class="mt-6">
        <div v-for="(i, index) in navGroup" :key="index">
          <!-- 一级菜单栏 -->
          <div @click="toggleActive(index)">
            <router-link
              :class="{
                'text-base     hover:text-primary':
                  isActive != index,
                'text-primary border-l-4 border-primary':
                  isActive == index,
              }"
              class="flex items-center justify-start w-full p-4 my-2 font-thin transition-colors duration-200"
              :to="GetRealLink(i.link)"
            >
              <span class="text-left">
              </span>
              <span class="mx-4 text-base font-bold"> {{ i.text }} </span>
            </router-link>
          </div>
          <!-- 二级菜单栏 -->
          <div class="sub" v-if="i.sublink && isActive == index">
            <div v-for="(j, subindex) in i.sublink" :key="subindex">
              <div @click="isSubActive = subindex">
                <router-link
                  class="flex items-center justify-start w-full p-4 pl-10 my-2 font-thin uppercase transition-colors duration-200 text-base    hover:text-primary"
                  :to="GetRealLink(j.link)"
                >
                  <span class="text-left">
                  </span>
                  <span class="mx-4 text-sm font-normal"> {{ j.text }} </span>
                </router-link>
              </div>
              <!-- 三级菜单栏 -->
              <div class="subsub" v-if="j.sublink && isSubActive == subindex">
                <router-link
                  v-for="(k, subsubindex) in j.sublink"
                  :key="subsubindex"
                  class="flex items-center justify-start w-full p-4 pl-14 my-2 font-thin uppercase transition-colors duration-200 text-base    hover:text-primary"
                  :to="GetRealLink(k.link)"
                >
                  <span class="text-left">
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
      isActive: -1,
      isSubActive: -1,
    };
  },
  methods:{
    GetRealLink(link) {
      if (link) return "/" + link;
      return "";
    },
    toggleActive(index) {
      if(this.isActive == index){
        this.isActive = -1;
      }
      else{
        this.isActive = index;
      }
    }
  }
};
</script>

<style>
</style>