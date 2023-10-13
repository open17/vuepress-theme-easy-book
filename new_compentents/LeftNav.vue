<template>
  <div class="left-nav"  :class="{ 'dark-box': isdark }">
    <left-nav :isShow="true" :is_dark="isdark"/>
  </div>
</template>

<script>
import LeftNav from '../compentents/LeftNav.vue'
export default {
  props:['isdark'],
    components:{
        LeftNav,
    },
  mounted(){
  }
}
</script>

<style>
.left-nav{
    position: fixed;
    display: flex;
    flex-direction: column;
    left: 0;
    top: 0;
    width: 15vw;
    height: 100vh;
    background-color: transparent;
    padding-top:10vh;
}
</style>