// .vuepress/config.js
const path = require('path')
module.exports = {
  theme: path.resolve(__dirname, '../../'),
  // Fill in the webpage title in title
  title: 'vuepress-theme-easy-book',
  markdown: {
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6']
  },
  head: [
    ['link', { rel: 'icon', href: 'logo.svg' }],
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
    icon: "/logo.svg",
    title: "Easy-Book",
    lock_password: '123456',
    nav: [
      { text: '主页', link: '' },
      { text: '指南', link: 'doc' },
      { text: '配置', link: 'config' },
      { text: '日志', link: 'log' }
    ],
    group: {
      'doc': [
        {
          text: '介绍',
          link: 'doc',
        },
        { text: '快速开始', link: 'doc/quick-start' },
        { text: 'Markdown增强', link: 'doc/markdown' },
        {
          text: '新手教程',
          sublink: [
            { text: '环境配置', link: 'doc/beginner/install' },
            { text: '安装&使用', link: 'doc/beginner/start' }
          ]
        },
      ],
      'config': [
        { text: '配置', link: 'config' },
        { text: '主页配置', link: 'config/HomePage' },
        { text: '导航配置', link: 'config/NavBar'},
        { text: '其他配置', link: 'config/Others'}
      ]
    },
    editurl: 'https://github.com/open17/vuepress-theme-easy-book/blob/master/example',
    HighlightOptions: [
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
    defaultHighlight: ["stackoverflow-dark", "stackoverflow-light",],
    limitHighlight: 5,

  }
}