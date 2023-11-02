<template>
  <div class="pt-20 absolute left-0 px-0 mx-0 w-screen h-min-screen">
    <Content class="overflow-x-hidden"/>
    <FooterSectionVue class="w-full"/>
  </div>
</template>

<script>
import FooterSectionVue from '../compentents/FooterSection.vue';

export default {
  components: {
    FooterSectionVue,
  }
};
</script>

<style>
</style>