# 主页配置

> 主页配置仅仅与单个页面高度相关,所以基本上全部的主页配置都在Frontmatter中完成

## 快速开始

我们可以在整个Markdown文档的最外层创建一个README.md来实现主页的相关配置

在这里你可以轻松地使用预先封装好的组件来快速且个性的构造自己的独特主页,组件间可以任意的更换顺序或者重复使用

### CTA

#### 样例展示

你可以在Markdown使用CTA组件快速达成下面的效果
![](1699097812749.png)


#### 使用说明

你可以在Markdown中使用下面代码来展示一个最简单的默认CTA:

```html
<CTA/>
```

#### 配置

CTA组件接受两种配置参数的方式,一种是兼容v1.2.x的配置方案,一种则是更为推荐也更方便的Frontmatter配置

##### Frontmatter配置

```xml
---
cta:
  title: "标题"
  button:
    name: "左按钮名称"
    link: "链接"
  link:
    name: "右链接名称"
    link: "链接"
  description_html: "<p>我是描述</p>"
---
```

在这里cta的名称**不可以改变**,然后在README.md中加入 `<CTA/>`即可引入该组件

##### themeConfig配置

```js
themeConfig:{
    cta_title: ,
    cta_button: { name: "Get Started", link: "#" },
    cta_link: { name: "Read Config", link: "#" },
    cta_description_html: ``,
}
```

该方式不自v1.3.0起不再推荐使用

#### 示例

```html
---
cta:
  title: "快速构建知识库&文档网站"
  button:
    name: "快速开始"
    link: "/doc"
  link:
    name: "配置详情"
    link: "/config"
  description_html: |
    <span><span style="color: rgb(14 165 233)">vuepress-theme-easy-book</span> 是一个美观实用的vuepress知识库&文档主题，可以帮助您以简单的配置<span style="color: rgb(14 165 233)">快速构建</span>出个人知识库网站或文档网站，同时在此基础上提供足量的<span style="color: rgb(14 165 233)">自定义外观</span>的选择,<span style="color: rgb(14 165 233)">个性化</span>你的网站</span>
---

<CTA/>
```

效果如上面展示部分所示

### HeroSection

#### 样例展示

HeroSection有三种方向布局选择

##### left布局

![16](1699110125921.png)

##### right布局(默认方向)

![1699110090311](1699110090311.png)

##### mid布局
![1699110036250](1699110036250.png)

#### 使用说明

你可以使用 `<HeroSection/>`来创建一个最简单配置的组件

与CTA不同,HeroSection在主题的设计理念上是一个可以多次复用的的组件,所以配置不再采用固定的"变量",而是可以接受一个传入的prop参数作为Frontmatter的名称

#### 配置

在Frontmatter中你可以建立以下配置

```json
---
your_hero_section_name:
  direction: "left"  //right,mid
  title: "标题"
  description: "描述"
  leftLink: "/"
  leftText: "全部功能"
  rightLink:  "/"
  rightText: "详情配置"
  img: "hero_example.svg"
---
```

然后使用info传入组件配置:

```html
<HeroSection info="your_hero_section_name"/>
```

这里的 `your_hero_section_name`改为你自己的配置名即可

#### 示例

```html
---
hero:
  direction: "left"
  title: "更多丰富功能,等你来看"
  description: "SEO优化, 复制功能, 打印功能, 代码主题动态切换, 文章加密......"
  leftLink: "/"
  leftText: "全部功能"
  rightLink:  "/"
  rightText: "详情配置"
  img: "hero_example.svg"
---

<HeroSection info="hero"/>

```

### CardGroup
配置逻辑同HeroSection

```html
---
card_group:
  - img_url: "1.webp"
    description: "支持一键轻松打印文档"
    title: "打印功能"
    link: "#"
  - img_url: "2.webp"
    description: "支持本地全文快速搜索"
    title: "搜索功能"
    link: "#"
  - img_url: "6.webp"
    description: "一个页面可由多个Markdown组合生成"
    title: "组合配置"
    link: "#"
  - img_url: "4.webp"
    description: "快捷按钮一键跳转到编辑页面"
    title: "编辑功能"
    link: "#"
  - img_url: "5.webp"
    description: "sitemap自动生成,优化网站搜索引擎自然排名"
    title: "SEO优化"
    link: "#"
  - img_url: "3.webp"
    description: "给不想展示给他人的文章设置密码"
    title: "文章加密"
    link: "#"
---
<CardGroup info="card_group"/>  
```
### LogoGroup
配置逻辑同HeroSection
```html
---
example_logos:
  title: "感谢"
  logos:
    - src: "tailwind.svg"
      alt: "Tailwindcss"
    - src: "element.svg"
      alt: "ElementUI"
---
<LogoGroup info="example_logos"/>
```

### TextSection

## 进阶技巧
待更新