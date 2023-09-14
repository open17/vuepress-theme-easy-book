# 你好我叫配置
## 示例
```js
// .vuepress/config.js
module.exports = {
  theme: "easy-book",
  // Fill in the webpage title in title
  title: 'Easy Book',
  base: "/ebook/",
  markdown: {
    extractHeaders: ['h2', 'h3', 'h4']
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
    group:{
      'doc':[
        { text:'文档',link: 'doc' },
        { text: '快速开始', link: 'doc/quick-start' },
        { text: '配置', link: 'doc/config' },
        { text: '插件', link: 'doc/plugin' },
        { text: 'Markdown', link: 'doc/markdown' },
        { text: '其他', link: 'doc/other' }
      ]
    },
    editurl: 'https://github.com/open17/vuepress-theme-easy-book/blob/master/example',
  }
}
```