# 其他
## 目录结构
建议的目录结构如下:
```
.
├── docs(存放markdown的根目录)
│   │   
│   ├── .vuepress 
│   │   │
│   │   ├── components(可选的,存放自定义组件)
│   │   │
│   │   │
│   │   ├── public (可选的,存放公共资源)
│   │   │
│   │   ├── enhanceApp.js (可选的,客户端增强组件)
│   │   │
│   │   └── config.js (vuepress配置)
│   │ 
│   └── README.md (主页)
│   
│ 
└── package.json
```
## 页面路由

下面源自vuepress官方文档

> 此处我们把 docs 目录作为 targetDir （参考 命令行接口），下面所有的“文件的相对路径”都是相对于 docs 目录的

|文件的相对路径	   |页面路由地址  |
| ---              | ---          |
|/README.md	       |   /          |
|/guide/README.md  |  /guide/     | 
|/config.md	       | /config.html |