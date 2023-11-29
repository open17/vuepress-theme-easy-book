<template>
  <ul class="menu  px-1 gap-2" :class="{'menu-horizontal':isHorizontal}">
    <template v-for="(value, key, index) in navGroup">
      <li v-if="typeof value === 'object'" tabindex="0" :key="index">
        <a>
          {{ key }}
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            />
          </svg>
        </a>
        <ul class="p-2 bg-base-100">
          <template v-for="(v, k, indexs) in value">
            <template v-if="typeof v === 'object'">
              <li class="menu-title" :key="index + indexs + k">
                <span>{{ k }}</span>
              </li>
              <li
                v-for="(vv, kk, idx) in v"
                :key="index + indexs + idx + k + v"
              >
                <BetterLinkVue :to="vv">{{ kk }}</BetterLinkVue>
              </li>
            </template>
            <li :key="indexs + k + v" v-else>
              <BetterLinkVue :to="v">{{ k }}</BetterLinkVue>
            </li>
          </template>
        </ul>
      </li>
      <li v-else :key="index">
        <BetterLinkVue :to="value">{{ key }}</BetterLinkVue>
      </li>
    </template>
  </ul>
</template>

<script>
import BetterLinkVue from './BetterLink.vue';
export default {
  components: {
    BetterLinkVue
  },
    props: ['isHorizontal'],
    data() {
    return {
      navGroup: [],
    };
  },
  computed: {},
  mounted() {
    if (this.$themeConfig.nav) this.navGroup = this.$themeConfig.nav;
  },
};
</script>

<style>
</style>