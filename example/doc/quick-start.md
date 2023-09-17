# 快速开始
## 前置环境
- [Node.js 10+](https://nodejs.org/en)

@tab

<[a]

1111111111111


<()>

<[b]

1111111111111


<()>

@tab


## 安装
### 自动安装
### 手动安装
> 如果要在已有的项目安装,请从第三步开始
1. 创建一个项目文件夹并切换到该文件夹,把easy-book替换为你想要的项目名
    ```
    mkdir myeasy-book
    cd easy-book
    ```
2. 包管理器初始化


    @tab

    <[npm]

    ```sh
    npm init
    ```

    <()

    <[yarn]

    ```
    yarn init 
    ```
    <()

    @@tab

3. 安装vuepress-theme-easy-book和vuepress(如果你没安装的话)
   

    @tab

    <[npm]

    ```
    npm i vuepress-theme-easy-book vuepress -D
    ```

    <()

    <[yarn]

    ```
    yarn add vuepress-theme-easy-book vuepress -D
    ```

    <()

    @@tab




4. 创建你的第一篇文档
    ```
    mkdir docs && echo '# easy-book' > docs/README.md
    ```
5. 配置主题
    现在您的目录应该类似如下结构
     ```
    .
    ├── docs
    │   └── README.md
    │   
    │ 
    └── package.json
    ```
    现在在docs文件夹中创建.vuepress文件夹,并创建config.js(这是vuepress的配置文件)
    ```
    .
    ├── docs
    │   ├── .vuepress 
    │   │   │
    │   │   └── config.js
    │   │ 
    │   └── README.md
    │   
    │ 
    └── package.json
    ```
    在config.js配置中引入主题,下面是最简单的配置
    ```js
    // .vuepress/config.js
    module.exports = {
        //使用本主题
        theme: 'easy-book',
        //title中填入网页标题
        title: 'your-title',
    }
    ```
6. 修改pakage.json启动命令(可选但推荐)
   
   在pakage.json加入以下代码
   这里我们把`vuepress dev docs`命令简化成`dev`,`vuepress build docs`命令简化成`build`
   
    ```json
    {
        //...你前面的init时自动生成配置
      "scripts": {
        "dev": "vuepress dev docs",
        "build": "vuepress build docs"
      }
    }
    ```

7. 完成!
   - 在本地服务器中运行页面

        已下均假设你进行了步骤6,否则将下面的`dev`替换为`vuepress dev docs`

        @tab

        <[npm]

        ```
        npm run dev
        ```

        <()

        <[yarn]

        ```
        yarn dev
        ```
        <()

        @@tab
       
   - 打包

        已下均假设你进行了步骤6,否则将下面的`build`替换为`vuepress build docs`

        @tab

        <[npm]

        ```
        npm run build
        ```

        <()

        <[yarn]

        ```
        yarn build
        ```
        <()

        @@tab