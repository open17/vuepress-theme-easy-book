# 配置
## 主题配置
### 顶部导航栏
你可以通过 themeConfig.nav 增加一些导航栏链接
<details>
  <summary>例子</summary>

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: '展示', link: '' },
      { text: '关于', link: 'about' },
      { text: '文档', link: 'doc' },
      { text: '问题', link: 'question' },
      { text: '进一步了解', link: 'more' },
      { text: '更新日志', link: 'log' }
    ],
  }
}
```
</details>

### 侧边章节栏
你可以通过 themeConfig.group 增加侧边栏中的章节栏部分
#### 基本配置
在下面的例子中`'doc':[]`意味着只有当前链接在base/doc之下侧边栏才会有下面章节栏
```js
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
```
#### 子章节栏
你可以将link换为sublink来设置子侧边栏
<details>
<summary>例子</summary>
如你可以将:

```js
{ text: '插件', link: 'doc/plugin' }
```

换为
```js
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
 }
```
</details>

#### 章节栏分组
<el-alert
  title="分组与子章节栏的区别"
  type="success"
  description="两者不同在于分组并没有实际上创建一个下拉框,并且分组可以嵌套子章节栏(见示例二),但反之不行"
  >
</el-alert>

你可以将原本的link换位subgroup来分组,text变为组名

```js
{
  text: '重要部分',
  subgroup: [
    { text: '快速开始', link: 'doc/quick-start' },
    { text: '配置', link: 'doc/config' },
    { text: 'Markdown', link: 'doc/markdown' }
  ]
},
```
### 代码高亮相关配置
你可以通过
- themeConfig.HighlightOptions来配置代码高亮主题选项,
- themeConfig.defaultHighlight来配置默认应用的代码高亮主题
- themeConfig.limitHightlight来配置最多同时应用的代码高亮主题数量
- 代码高亮主题名请与highlight.js@11.8.0一致
```js
// 下面是默认配置
themeConfig: {
    HighlightOptions:[
        "atom-one-light",
        "atom-one-dark",
        "github",
        "github-dark",
        "monokai",
        "tokyo-night-dark",
        "tokyo-night-light",
        "pojoaque",
        "sunburst",
        "vs",
        "panda-syntax-dark",
        "panda-syntax-light",
        "googlecode",
        "night-owl",
        "mono-blue",
        "school-book",
        "stackoverflow-dark",
        "stackoverflow-light",
        "tomorrow-night-blue",
        "tomorrow-night-bright",
        "rainbow",
      ],
    defaultHighlight:["atom-one-light", "atom-one-dark"],
    limitHightlight:5
}

```
### 编辑
你可以通过themeConfig.editLinkText来配置编辑按钮的链接(注意编辑按钮是基于git的)
例如本网站:`editurl: 'https://github.com/open17/vuepress-theme-easy-book/blob/master/example'`
### 加密文章
> 并不是严格意义上的加密,依然可以在源代码中找到密码
#### 设置密码
```js
themeConfig:{
  lock_password: '123456',
}
```
#### 加密
你可以在文章中使用lock来加密文章
```m
---
lock: true
---
```
### 封面配置
```js
themeConfig:{
    hero_img_scr: "hero_example.svg",
    hero_title: "Rapidly build knowledge base websites only using Markdown.",
    hero_button: { name: "Get Started", link: "#" },
    hero_link: { name: "Read Config", link: "#" },
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
```
## 其他常用配置
## 示例
### 示例一
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
### 示例二
```js
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
```