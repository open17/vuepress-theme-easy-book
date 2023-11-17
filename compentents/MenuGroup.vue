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
                <router-link :to="'/' + vv">{{ kk }}</router-link>
              </li>
            </template>
            <li :key="indexs + k + v" v-else>
              <router-link :to="'/' + v">{{ k }}</router-link>
            </li>
          </template>
        </ul>
      </li>
      <li v-else :key="index">
        <router-link :to="'/' + value">{{ key }}</router-link>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
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