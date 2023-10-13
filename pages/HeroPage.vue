<template>
  <div class="hero-body" :class="{ 'dark-box': is_dark_mode }">
    <!-- banner,接受html,在移动端不显示 -->
    <div class="hero-banner" v-html="hero_banner_html" v-if="!is_mobile"></div>
    <div class="hero-title">
      <h1>{{ hero_title }}</h1>
    </div>
    <div class="hero-description" v-html="hero_description_html"></div>
    <div class="hero-links">
      <HeroButtonVue :Name="hero_button.name" :link="hero_button.link" />
      <HeroLinkVue :Name="hero_link.name" :link="hero_link.link" />
    </div>
    <div class="hero-img" v-if="hero_img_scr">
      <img :src="$withBase(hero_img_scr)" alt="hero_img_example" />
    </div>
    <div class="hero-details">
      <h3>{{ hero_details_title }}</h3>
      <div v-html="hero_details_html"></div>
    </div>
    <div class="hero-card">
      <CardGroupVue :group="card_group" />
    </div>
    <div class="hero-footer">
      <div class="hero-footer-divider"></div>
      <div v-html="footer_html"></div>
    </div>
  </div>
</template>

<script>
import CardGroupVue from "../new_compentents/CardGroup.vue";
import HeroButtonVue from "../new_compentents/HeroButton.vue";
import HeroLinkVue from "../new_compentents/HeroLink.vue";

export default {
  props: ["is_dark_mode", "is_mobile"],
  data() {
    return {
      hero_img_scr: "",
      hero_title: "Rapidly build knowledge base websites only using Markdown.",
      hero_button: { name: "Get Started", link: "#" },
      hero_link: { name: "Read Doc", link: "#" },
      footer_html: ``,
      hero_banner_html: ``,
      card_group: [],
      hero_description_html: ``,
      hero_details_html: ``,
      hero_details_title: "",
    };
  },
  components: {
    HeroButtonVue,
    HeroLinkVue,
    CardGroupVue,
  },
  mounted() {
    const themeConfigData = this.$themeConfig;

    if (themeConfigData) {
      // 检查 hero_img_scr 是否存在于 this.$themeConfig 中
      if (themeConfigData.hero_img_scr) {
        this.hero_img_scr = themeConfigData.hero_img_scr;
      }

      // 检查 hero_title 是否存在于 this.$themeConfig 中
      if (themeConfigData.hero_title) {
        this.hero_title = themeConfigData.hero_title;
      }

      // 检查 hero_button 是否存在于 this.$themeConfig 中
      if (themeConfigData.hero_button) {
        this.hero_button = themeConfigData.hero_button;
      }

      // 检查 hero_link 是否存在于 this.$themeConfig 中
      if (themeConfigData.hero_link) {
        this.hero_link = themeConfigData.hero_link;
      }

      // 检查 footer_html 是否存在于 this.$themeConfig 中
      if (themeConfigData.footer_html) {
        this.footer_html = themeConfigData.footer_html;
      }

      // 检查 hero_banner_html 是否存在于 this.$themeConfig 中
      if (themeConfigData.hero_banner_html) {
        this.hero_banner_html = themeConfigData.hero_banner_html;
      }

      // 检查 card_group 是否存在于 this.$themeConfig 中
      if (themeConfigData.card_group) {
        this.card_group = themeConfigData.card_group;
      }

      // 检查 hero_description_html 是否存在于 this.$themeConfig 中
      if (themeConfigData.hero_description_html) {
        this.hero_description_html = themeConfigData.hero_description_html;
      }

      // 检查 hero_details_html 是否存在于 this.$themeConfig 中
      if (themeConfigData.hero_details_html) {
        this.hero_details_html = themeConfigData.hero_details_html;
      }

      // 检查 hero_details_title 是否存在于 this.$themeConfig 中
      if (themeConfigData.hero_details_title) {
        this.hero_details_title = themeConfigData.hero_details_title;
      }
    }
  },
};
</script>

<style>
.dark-box img {
  filter: invert(1);
}

.hero-body {
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  min-height: 95%;
  width: 100%;
  background-color: #fff;
  /* justify-content: center; */
}

.hero-banner {
  color: #000;
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 2%;
  font-size: 1rem;
}

.hero-title {
  color: #000;
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  font-size: 1.8rem;
  font-weight: 700;
}

.hero-description {
  text-align: center;
  margin-left: 15%;
  margin-right: 15%;
  font-size: 1.4rem;
  color: #3b3838;
}

.hero-details {
  text-align: center;
  margin-left: 17%;
  margin-right: 17%;
}
.hero-details h3 {
  background: linear-gradient(to right, #7928ca, #ec61a7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.8rem;
  margin-bottom: 2%;
}
.hero-details span {
  font-size: 1.3rem;
  color: gray;
}
.hero-img {
  margin-left: 5%;
  margin-right: 5%;
  text-align: center;
}
.hero-img img {
  max-width: 100%;
}

.hero-links {
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 5vh;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 3%;
}

.hero-links button {
  margin-left: 5%;
}

.hero-card {
  margin-top: 5vh;
  margin-left: 15%;
  margin-right: 15%;
}

.hero-footer-divider {
  height: 1px;
  background-color: #ddd;
  margin: 1vh;
}
</style>