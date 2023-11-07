# 配置

> 这里是v1.3.x配置,与v1.2.x有差异,如需迁移,请见下面配置迁移指南

## 说明

vuepress配置分为以下三种:

1. config.js中的vuepress配置,这里主要配置的是和vuepress本身有关的配置(比如 `extractHeaders`)以及部分插件的配置
2. config.js中的 `themeConfig` 配置,绝大部分重要的**全局**的主题配置都在这里进行(比如配置顶部导航栏的 `themeConfig.nav`)
3. Markdown中的Frontmatter配置,这里主要配置一些和**当前页面**密切相关的配置(比如在该页面中使用LogoGroup,CardGroup组件时传递的参数列表就在这里配置)

## 迁移指南(v1.2.x -> v1.3.x)

> 为了优化配置逻辑和可读性,v1.2.x的配置方式已不再推荐,尽管大部分配置(除已移除外)依然向下兼容

### 样式变更

注意在v1.3.x中全局引入了tailwindcss,部分源于v1.2.x的html配置可能受到影响(比如margin现在默认0)

### 主页配置

> 为了增强扩展性和自定义能力,主页配置现改为在README.md中使用定义好的全局组件来完成快速配置

#### 快速迁移

如果你希望使用v1.2.x的主页,你可以在README.md中加入下面两行使用来代替,并把原本hero开头的配置全部重命名为cta开头(如 `hero_title`->`cta_title`)

```html
<CTA/>
<CardGroup/>
```

如有问题请见下方详情说明

#### 详细说明

原本的主页配置可能大概如下

```json
themeConfig:{
    hero_img_scr: ,
    hero_title: ,
    hero_button: { name: "Get Started", link: "#" },
    hero_link: { name: "Read Config", link: "#" },
    hero_banner_html: ` `,
    card_group: [],
    hero_description_html: ``,
    hero_details_html: ``,
    hero_details_title: "",
}
```

其中 `hero_details_html` `hero_details_title`和 `hero_banner_html` 自v1.3.0起不再支持,类似的效果现在你可以直接在README.md中使用html,而不需要再如v1.2.x在配置传入的html字符串依赖v-html实现

其他v1.2.x中以hero开头的主页配置可以替换为cta开头(如 `hero_title`->`cta_title`),内容格式依旧兼容,然后在README.md中 使用 `<CTA/>`即可

card_group配置依然向下兼容,使用 `<CardGroup/>`即可,但v1.3.x中的配置方式更为推荐,并且允许任意数量card_group有着不同的内容

`hero_img_scr`已移除,如今插入图片可以直接使用Markdown语法或者img标签快速实现,不再需要config中配置

### 高亮切换配置

> 暂时性的移除了高亮切换功能

### 未提及的配置

理论上所有未提及的配置表示v1.3.x仍继续沿用
