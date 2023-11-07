# 导航栏配置
## 顶部导航栏配置
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

## 侧边栏配置
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