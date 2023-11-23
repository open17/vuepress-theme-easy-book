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
    ['link', { rel: 'icon', href: 'logo2.png' }],
    ['script', { src: 'https://cdn.lordicon.com/lordicon-1.4.0.js' }]
  ],
  themeConfig: {
    icon: "/logo2.png",
    title: "EB",
    lock_password: '123456',
    nav: {
      '主页': '',
      '指南': 'doc',
      '配置': 'config',
      '日志': 'log',
      "版本":
      {
        "新版本":{
          "v1.3.1": "",
        "v1.3.0": "",
        },
        "旧版本":{
          "v1.2.5": "",
        }
      },

    },
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
        { text: '导航配置', link: 'config/NavBar' },
        { text: '其他配置', link: 'config/Others' }
      ]
    },
    editurl: 'https://github.com/open17/vuepress-theme-easy-book/blob/master/example',
  }
}