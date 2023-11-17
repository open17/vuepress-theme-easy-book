<template>
  <div class="flex items-stretch">
    <div class="dropdown dropdown-end">
      <div tabindex="0" class="m-1 btn">选择主题</div>
      <ul
        tabindex="0"
        class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
        data-choose-theme=""
      >
        <li v-for="(theme, index) in themes" :key="index"><a @click="changeTheme(theme)">{{ theme }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themes: [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
      ],
    };
  },
  methods:{
    changeTheme(theme){
      this.$EventBus.$emit('changeTheme', theme);
    }
  }
};
</script>

<style>
</style>