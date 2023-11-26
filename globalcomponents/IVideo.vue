<template>
  <div>
    <iframe
      class="w-full h-96"
      :src="getUrl()"
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  props: ["url"],
  data(){
    return {
    }
  },
  methods:{
    getUrl(){
      if(this.url.startsWith("BV"))return "https://player.bilibili.com/player.html?bvid="+this.url+"&autoplay=0";
      else return "https://www.youtube.com/embed/"+this.url;
    }
  },
};
</script>

<style>
</style>