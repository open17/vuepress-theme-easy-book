# 其他配置
## 编辑
你可以通过`themeConfig.editLinkText`来配置编辑按钮的链接(注意编辑按钮是基于git的)
例如本网站:`editurl: 'https://github.com/open17/vuepress-theme-easy-book/blob/master/example'`
## 加密文章
> 并不是严格意义上的加密,依然可以在源代码中找到密码
### 设置密码
```js
themeConfig:{
  lock_password: '123456',
}
```
### 加密文章
你可以在文章中使用lock来加密文章
```m
---
lock: true
---
```
你还可以同时关闭搜索保证更好的加密

```m
---
search: false
lock: true
---
```
## 最大搜索
搜索栏给出的最大搜索建议数量，默认为50,你可以通过在配置文件中添加以下内容来更改此设置：
```js
themeConfig:{
  searchMaxSuggestions:25,
}
```