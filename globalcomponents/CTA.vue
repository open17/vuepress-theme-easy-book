<template>
  <div class="pt-14">
    <div class="cta-title text-center">
      <h1 class="font-bold text-6xl mb-7">{{ cta_title }}</h1>
    </div>
    <div class="cta-description text-center">
      <div v-html="cta_description_html"></div>
    </div>
    <div class="cta-links flex justify-center mt-6">
      <CtaButtonVue :Name="cta_button.name" :link="cta_button.link" />
      <CtaLinkVue :Name="cta_link.name" :link="cta_link.link" />
    </div>
  </div>
</template>

<script>
import CtaButtonVue from "../compentents/CtaButton.vue";
import CtaLinkVue from "../compentents/CtaLink.vue";

export default {
  data() {
    return {
      cta_title: "Rapidly build knowledge base websites only using Markdown.",
      cta_button: { name: "Get Started", link: "#" },
      cta_link: { name: "Read Doc", link: "#" },
      cta_description_html: ``,
    };
  },
  components: {
    CtaButtonVue,
    CtaLinkVue,
  },
  methods: {
    getDataFromThemeConfig() {
      const themeConfigData = this.$themeConfig;

      if (themeConfigData) {
        // 检查 cta_title 是否存在于 this.$themeConfig 中
        if (themeConfigData.cta_title) {
          this.cta_title = themeConfigData.cta_title;
        }

        // 检查 cta_button 是否存在于 this.$themeConfig 中
        if (themeConfigData.cta_button) {
          this.cta_button = themeConfigData.cta_button;
        }

        // 检查 cta_link 是否存在于 this.$themeConfig 中
        if (themeConfigData.cta_link) {
          this.cta_link = themeConfigData.cta_link;
        }

        // 检查 cta_description_html 是否存在于 this.$themeConfig 中
        if (themeConfigData.cta_description_html) {
          this.cta_description_html = themeConfigData.cta_description_html;
        }
      }
    },
    getDataFromPage() {
      if(!this.$page.frontmatter.cta)return;
      if (this.$page.frontmatter.cta.title) {
        this.cta_title = this.$page.frontmatter.cta.title;
      }

      if (this.$page.frontmatter.cta.button) {
        this.cta_button = this.$page.frontmatter.cta.button;
      }

      if (this.$page.frontmatter.cta.link) {
        this.cta_link = this.$page.frontmatter.cta.link;
      }

      if (this.$page.frontmatter.cta.description_html) {
        this.cta_description_html = this.$page.frontmatter.cta.description_html;
      }
    },
  },
  mounted() {
    this.getDataFromThemeConfig();
    // page_yml优先级更高,可以覆盖掉主题配置
    this.getDataFromPage();
  },
};
</script>

<style>


.cta-title {
  color: #000;
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  font-size: 1.8rem;
  font-weight: 700;
}

.cta-description {
  text-align: center;
  margin-left: 15%;
  margin-right: 15%;
  font-size: 1.4rem;
  color: #3b3838;
}

.cta-links {
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 5vh;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 3%;
}

.cta-links button {
  margin-left: 5%;
}

</style>