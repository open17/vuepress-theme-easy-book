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
  themeConfig: {
    nav: [
      { text: '展示', link: '' },
      { text: '关于', link: 'about' },
      { text: '文档', link: 'doc' },
      { text: '问题', link: 'question' },
      { text: '进一步了解', link: 'more' },
      { text: '更新日志', link: 'log' }
    ],
    group: {
      'doc': [
        {
          text:'不知道叫什么的分组',
          subgroup:[
            { text: '文档', link: 'doc' },
          ]
        },
        {
          text: '重要部分',
          subgroup: [
            { text: '快速开始', link: 'doc/quick-start' },
            { text: '配置', link: 'doc/config' },
            { text: 'Markdown', link: 'doc/markdown' }
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
  }
}