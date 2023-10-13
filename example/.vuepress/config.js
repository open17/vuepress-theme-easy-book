// .vuepress/config.js
const path = require('path')
module.exports = {
  theme: path.resolve(__dirname, '../../'),
  // Fill in the webpage title in title
  title: 'Easy-Book',
  base: "/vuepress-theme-easy-book/",
  markdown: {
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6']
  },
  head: [
    ['link', { rel: 'icon', href: 'logo.png' }],
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?521f6f39625b7ea5ffbfe19f2d223139";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
  themeConfig: {
    icon: "/logo.png",
    title: "Easy-Book",
    lock_password: '123456',
    nav: [
      { text: 'Home', link: '' },
      { text: 'Doc', link: 'doc' },
      { text: 'Config', link: 'config' },
      { text: 'Log', link: 'log' }
    ],
    group: {
      'doc': [
        {
          text:'文档',
          subgroup:[
            { text: '文档', link: 'doc' },
          ]
        },
        {
          text: '重要部分',
          subgroup: [
            { text: '快速开始', link: 'doc/quick-start' },
            { text: 'Markdown增强', link: 'doc/markdown' }
          ]
        },
        {
          text: '新手教程',
          subgroup: [
            { text: '环境配置', link: 'doc/beginner/start'},
            { text: '安装&使用', link: 'doc/beginner/install' }
          ]
        },
        {
          text: '杂项',
          subgroup: [
            {
              text: '其他',
              sublink: [
                {
                  text: '其他目录',
                  link: 'doc/others'
                },
                {
                  text: '目录结构',
                  link: 'doc/others/menu-struct'
                },
                {
                  text: '页面路由',
                  link: 'doc/others/page-router'
                },

              ]
            },
            {
              text: '插件',
              sublink: [
                {
                  text: '插件目录',
                  link: 'doc/plugin'
                },
                {
                  text: '图片增强插件',
                  link: 'doc/plugin/el-img'
                }
              ]
            },

          ]
        },

      ]
    },
    editurl: 'https://github.com/open17/vuepress-theme-easy-book/blob/master/example',
        HighlightOptions:[
        "atom-one-light",
        "atom-one-dark",
        "github",
        "github-dark",
        "monokai",
        "tokyo-night-dark",
        "tokyo-night-light",
        "stackoverflow-dark",
        "stackoverflow-light",
        "tomorrow-night-blue",
        "tomorrow-night-bright",
      ],
    defaultHighlight:["stackoverflow-dark","stackoverflow-light",],
    limitHighlight: 5,
    hero_img_scr: "hero_example.svg",
    hero_title: "Rapidly build knowledge base websites only using Markdown.",
    hero_button: { name: "Get Started", link: "/doc" },
    hero_link: { name: "Read Config", link: "/config" },
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
        description: "New Features is coming soon...",
        title: "v1.2.x",
        link: "#",
      },
      {
        img_url: "437a9e96-e685-4a4f-a6ad-2be341e56e77.webp",
        description: "New Features is coming soon...",
        title: "v1.2.x",
        link: "#",
      },
      {
        img_url: "d38a24e2-c730-42e6-93ed-6ddad0d88d62.webp",
        description: "New Features is coming soon...",
        title: "v1.2.x",
        link: "#",
      },
      {
        img_url: "e2cfd3c6-6e97-4919-91af-a9f795cf3316.webp",
        description: "New Features is coming soon...",
        title: "v1.2.x",
        link: "#",
      },
      {
        img_url: "4b09cc7b-e61d-440a-8397-ae74d12f1e96.webp",
        description: "New Features is coming soon...",
        title: "v1.2.x",
        link: "#",
      },
      {
        img_url: "7db51a0d-9158-4758-b943-bc6d4e1cc226.webp",
        description: "New Features is coming soon...",
        title: "v1.2.x",
        link: "#",
      },
    ],
    hero_description_html: `      <span>
      The <span style="color: rgb(14 165 233)">vuepress-theme-easy-book</span> 
      lets you efficiently create personal knowledge base websites or comprehensive documentation platforms
       <span style="color: rgb(14 165 233)">without</span> using any codes, 
       which enables you to concentrate on the <span style="color: rgb(14 165 233)">notes</span> 
       and <span style="color: rgb(14 165 233)">knowledge</span> itself.
    </span>`,
    hero_details_html: `<span>
      With <span style="color: #de1d8d">multiple</span> features,you can 
      <span style="color: #de1d8d">customize</span> the look and feel without complex coding and
      create professional sites <span style="color: #de1d8d">effortlessly</span>.
    </span>`,
    hero_details_title: "Features",
  }
}