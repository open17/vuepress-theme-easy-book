// .vuepress/config.js
const path = require('path')
module.exports = {
  theme: path.resolve(__dirname, '../../'),
  // Fill in the webpage title in title
  title: 'vuepress-theme-easy-book',
  // base: "/vuepress-theme-easy-book/",
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
      { text: 'Home', link: '' },
      { text: 'Doc', link: 'doc' },
      { text: 'Config', link: 'config' },
      { text: 'Log', link: 'log' }
    ],
    group: {
      'doc': [
        {
          text:'文档',
         link: 'doc' ,
        },
        {
          text: '重要部分',
          sublink: [
            { text: '快速开始', link: 'doc/quick-start' },
            { text: 'Markdown增强', link: 'doc/markdown' }
          ]
        },
        {
          text: '新手教程',
          sublink: [
            { text: '环境配置', link: 'doc/beginner/install'},
            { text: '安装&使用', link: 'doc/beginner/start' }
          ]
        },
        {
          text: '杂项',
          sublink: [
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
    
  }
}