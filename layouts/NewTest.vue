<template>
  <div class="container">
    <div class="navbar" :class="{'dark-box':is_dark_mode}">
      <div class="navbar-top">
        <div class="navbar-brand">
          <img class="logo" src="../mark.svg" alt="Logo" />
          <span class="title">Easy Book</span>
        </div>
        <div class="navbar-links">
          <el-link
            v-for="link in links"
            :key="link.id"
            :href="link.url"
            :class="{ 'active-link': link.id === activeLink }"
            @click="setActiveLink(link.id)"
          >
            {{ link.label }}
          </el-link>
        </div>
        <div class="navbar-search" v-if="!is_hero">
          <el-input
            placeholder="Search"
            class="search-input"
            prefix-icon="el-icon-search"
          ></el-input>
        </div>
        <div class="navbar-icons">
          <i
            class="icon-button el-icon-table-lamp"
            @click="is_dark_mode = !is_dark_mode"
            
          ></i>
          <i class="icon-button el-icon-set-up last-icon" @click="is_hero = !is_hero"></i>
        </div>
      </div>
      <div class="navbar-divider" v-if="!is_hero"></div>
      <div class="navbar-links" v-if="!is_hero">
        <el-link
          v-for="link in links2"
          :key="link.id"
          :href="link.url"
          :class="{ 'active-link': link.id === activeLink }"
          @click="setActiveLink(link.id)"
        >
          {{ link.label }}
        </el-link>
      </div>
    </div>
    <HeroPageVue v-if="is_hero" :is_dark_mode="is_dark_mode"/>
  </div>
</template>

<script>
import HeroPageVue from '../pages/HeroPage.vue';

export default {
  components:{
    HeroPageVue,
  },
  name: "Navbar",
  data() {
    return {
      is_dark_mode:false,
      is_hero: true,
      activeLink: 1,
      hero_description_html:"",
      links: [
        { id: 1, label: "Home", url: "#", active: true },
        { id: 2, label: "About", url: "#", active: false },
        { id: 3, label: "Services", url: "#", active: false },
        { id: 4, label: "返回v1.1.x", url: "/", active: false },
      ],
      links2: [
        { id: 5, label: "Docs", url: "#", active: true },
        { id: 6, label: "Templates", url: "#", active: false },
        { id: 7, label: "Pricing", url: "#", active: false },
        { id: 8, label: "Customer", url: "#", active: false },
      ],
    };
  },
  methods: {
    setActiveLink(linkId) {
      this.activeLink = linkId;
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.dark-box img,.dark-box svg{
  filter:invert(1);
}
.shadow-bar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dark-box{
  filter:invert(100%);
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 90vh;
  /* background-color: #cac9c9; */
  overflow-y: auto;
  /* narbar height+20px */
  padding-top: 10vh;
}



/* 导航 */
.navbar {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100vw - 20px);
  background-color: #fff;
  padding: 10px;
}

.navbar-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-divider {
  height: 1px;
  background-color: #ddd;
  margin: 10px 0;
}

.logo {
  height: 40px;
}

.navbar-search {
  margin-left: 5vw;
  flex-grow: 1;
  text-align: center;
}

.navbar-icons {
  display: flex;
  align-items: center;
}
.title {
  margin-left: 10px;
  font-weight: bold;
}
.navbar-brand {
  display: flex;
  align-items: center;
  text-align: center;
}
.icon-button {
  margin-left: 10px;
  font-size: 1.5rem;
  margin-left: 20px;
}

.last-icon {
  margin-right: 50px; /* Add a right margin to the last icon */
}

.navbar-links {
  margin-left: 30px;
  display: flex;
  justify-content: flex-start;
  height: 8vh; /* Adjust the height as needed */
}

.el-link {
  margin-right: 30px;
  /* font-weight: 530; */
  color: #3b3838;
  transition: color 0.3s;
}

.el-link.active-link,
.el-link.active-link:hover {
  color: #007bff;
}

.el-link.active-link::after,
.el-link.active-link:hover::after {
  height: 3px;
  transform: scaleX(1);
}

.el-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #007bff;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s;
}
</style>