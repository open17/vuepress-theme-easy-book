<template>
  <div class="pt-10 absolute left-0 px-0 mx-0 w-screen h-min-screen bg-base-100">
    <Content class="overflow-x-hidden bg-transparent"/>
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