# 其他配置
## footer
`themeConfig.footer`中配置
## 编辑
你可以通过`themeConfig.editLinkText`来配置编辑按钮的链接(注意编辑按钮是基于git的)
例如本网站:`editurl: 'https://github.com/open17/vuepress-theme-easy-book/blob/master/example'`
## 加密文章
:::warning 由于vuepress生成的终究是静态页面,所以并不是严格意义上的绝对加密
:::
当你解锁成功一次后再关闭浏览器前你都不需要重新输入密码
### 设置密码
自`v1.3.4`起为了提高安全性,你需要使用sha256加密
比如你想要设置的密码是`123`(密码支持一切utf-8形式的符号,包括中文),那么你在配置里应该写sha256转换后的值
```js
themeConfig:{
  password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
}
```
你可以使用下面这个`<GetHashInput/>`组件来查看密码对应的加密
<GetHashInput/>
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
### 定时解锁
你可以设置`unlock_time`来定时解锁,格式为`ISO 8601`
这里时间计算使用的是`new Date()`
例如
```
lock: true
unlock_time: '2023-11-24T10:30:00'
```
## 最大搜索
搜索栏给出的最大搜索建议数量，默认为50,你可以通过在配置文件中添加以下内容来更改此设置：
```js
themeConfig:{
  searchMaxSuggestions:25,
}
```