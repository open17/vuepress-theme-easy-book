<template>
  <div>
    <iframe
      :width="w"
      :height="h"
      :src="youtube_url"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      v-if="youtube"
    ></iframe>
    <iframe
      :width="w"
      :height="h"
      :src="bv_url"
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allowfullscreen="true"
      v-else
    >
    </iframe>
  </div>
</template>

<script>
export default {
  props: ["w", "h", "bv", "youtube"],
  computed: {
    youtube_url() {
      return "https://www.youtube.com/embed/" + this.youtube;
    },
    bv_url(){
        return "https://player.bilibili.com/player.html?bvid="+this.bv+"&autoplay=0";
    }
  },
};
</script>

<style>
</style>