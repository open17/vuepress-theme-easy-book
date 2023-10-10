<template>
  <div class="hero-body" :class="{ 'dark-box': is_dark_mode }">
    <div class="hero-banner" v-html="hero_banner_html"></div>
    <div class="hero-title">
      <h1>{{hero_title}}</h1>
    </div>
    <div class="hero-description" v-html="hero_description_html">

    </div>
    <div class="hero-links">
      <HeroButtonVue :Name="hero_button.name" :link="hero_button.link"/>
      <HeroLinkVue :Name="hero_link.name" :link="hero_link.link"/>
    </div>
    <div class="hero-img">
      <img :src="$withBase(hero_img_scr)" alt="hero_img_example" />
    </div>
    <div class="hero-details">
      <h3>Features</h3>
      <span>
        With <span style="color: #de1d8d">multiple</span> features,you can 
        <span style="color: #de1d8d">customize</span> the look and feel without complex coding and
        create professional sites <span style="color: #de1d8d">effortlessly</span>.
      </span>
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
import HeroButtonVue from './HeroButton.vue';
import HeroLinkVue from './HeroLink.vue';

export default {
  props: ["is_dark_mode"],
  data() {
    return {
        hero_img_scr:"hero_example.svg",
        hero_title:"Rapidly build knowledge base websites only using Markdown.",
        hero_button:{name:"Get Started",link:"#"},
        hero_link:{name:"Read Doc",link:"#"},
      footer_html: `<div style="align-items: center;text-align: center;">
            <p>MIT Licensed | Copyright © 2023-present open17</p>
        </div><br/><br/>`,
      hero_banner_html: `<span style="color:gray">
            <h3 style="display:inline-block;margin:0;color:#000">
                New UI!
            </h3>
        Let's check what's new in <h4 style="display:inline-block;margin:0;color: rgb(14 165 233)">vuepress-theme-easy-book</h4>@v1.2.x</span>
        <a href="/log" style="text-decoration-line: none;margin:0;padding:5px 10px; background-color:black; color: white; border: none; cursor: pointer; border-radius: 50px;">Look here
        <svg stroke-width="4" style="vertical-align:middle;width:1rem;height:1rem;color:#fff;" stroke="currentColor" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
        </svg>
        </a>
        `,
      card_group: [
        {
          img_url: "0460da93-5893-4e6f-ab92-8250eb4e60a3.webp",
          description: "New UI for vuepress-theme-easy-book",
          title: "v1.2.x",
          link:"#"
        },
        {
          img_url: "437a9e96-e685-4a4f-a6ad-2be341e56e77.webp",
          description: "New UI for vuepress-theme-easy-book",
          title: "v1.2.x",
          link:"#"
        },
        {
            img_url:"d38a24e2-c730-42e6-93ed-6ddad0d88d62.webp",
            description: "New UI for vuepress-theme-easy-book",
          title: "v1.2.x",
          link:"#"
        },
        {
          img_url: "e2cfd3c6-6e97-4919-91af-a9f795cf3316.webp",
          description: "New UI for vuepress-theme-easy-book",
          title: "v1.2.x",
          link:"#"
        },
        {
          img_url: "4b09cc7b-e61d-440a-8397-ae74d12f1e96.webp",
          description: "New UI for vuepress-theme-easy-book",
          title: "v1.2.x",
          link:"#"
        },
        {
            img_url:"7db51a0d-9158-4758-b943-bc6d4e1cc226.webp",
            description: "New UI for vuepress-theme-easy-book",
          title: "v1.2.x",
          link:"#"
        }
      ],
      hero_description_html:`      <span>
        The <span style="color: rgb(14 165 233)">vuepress-theme-easy-book</span> 
        lets you efficiently create personal knowledge base websites or comprehensive documentation platforms
         <span style="color: rgb(14 165 233)">without</span> using any codes, 
         which enables you to concentrate on the <span style="color: rgb(14 165 233)">notes</span> 
         and <span style="color: rgb(14 165 233)">knowledge</span> itself.
      </span>`
    };
  },
  components: {
    HeroButtonVue,
    HeroLinkVue,
    CardGroupVue,
  },
};
</script>

<style>
.dark-box img,
.dark-box .hero-img svg,
.dark-box .hero-card svg{
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
  color: #3b3838;
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