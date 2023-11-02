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
cta:
  img: "example.svg"
  title: "快速构建知识库&文档网站"
  button:
    name: "快速开始"
    link: "/doc"
  link:
    name: "配置详情"
    link: "/config"
  description_html: |
    <span><span style="color: rgb(14 165 233)">vuepress-theme-easy-book</span> 是一个美观实用的vuepress知识库&文档主题，可以帮助您以简单的配置<span style="color: rgb(14 165 233)">快速构建</span>出个人知识库网站或文档网站，同时在此基础上提供足量的<span style="color: rgb(14 165 233)">自定义外观</span>的选择,<span style="color: rgb(14 165 233)">个性化</span>你的网站</span>

example_logos:
  title: "感谢"
  logos:
    - src: "tailwind.svg"
      alt: "Tailwindcss"
    - src: "element.svg"
      alt: "ElementUI"

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

<CTA/>

<img
      class="w-full relative bottom-20"
      src="q.svg"
    />

<section>
    <div class="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8 dark:bg-gray-800">
        <div class="flex flex-wrap -mx-8">
            <div class="w-full px-8 lg:w-1/2">
                <div class="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                    <h2 class="mb-4 text-3xl font-bold lg:text-4xl font-heading dark:text-white">
                        轻松开始,就像数1,2,3一样简单
                    </h2>
                    <p class="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                        如何使用vuepress-theme-easy-book?无需任何html和css,无需繁杂的配置流程,只需要你的Markdown文档/笔记,以及简单轻松的配置,就可以快速的构建出美观实用的静态文档&知识库网站
                    </p>
                     <img src="hero2.svg"/>
                </div>
            </div>
            <div class="w-full px-8 lg:w-1/2">
                <ul class="space-y-12">
                    <li class="flex -mx-4">
                        <div class="px-4">
                            <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                1
                            </span>
                        </div>
                        <div class="px-4">
                            <h3 class="my-4 text-xl font-semibold dark:text-white">
                                安装主题
                            </h3>
                            <p class="leading-loose text-gray-500 dark:text-gray-300">
                                使用
                                <code class="bg-gray-100 dark:bg-gray-700 rounded-md px-2 ">
                                    <span style="color: rgb(14 165 233)">npm</span> i vuepress-theme-easy-book -D
                                </code>
                                安装主题
                            </p>
                        </div>
                    </li>
                    <li class="flex -mx-4">
                        <div class="px-4">
                            <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                2
                            </span>
                        </div>
                        <div class="px-4">
                            <h3 class="my-4 text-xl font-semibold dark:text-white">
                                配置主题
                            </h3>
                            <p class="leading-loose text-gray-500 dark:text-gray-300">
                            一个最小的主题配置文件仅需三行
                                <code class="bg-gray-100 dark:bg-gray-700 rounded-md px-2 block w-80 p-5">
                                    <span class=" text-green-400">module</span>.<span class=" text-purple-400">exports</span> = {<br>
                                    <div class="w-5 inline-block"></div>  theme: <span style="color: rgb(14 165 233)">'easy-book'</span>,<br>
                                  }<br>
                                </code>
                            </p>
                        </div>
                    </li>
                    <li class="flex -mx-4">
                        <div class="px-4">
                            <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                3
                            </span>
                        </div>
                        <div class="px-4">
                            <h3 class="my-4 text-xl font-semibold dark:text-white">
                                大功告成
                            </h3>
                            <p class="leading-loose text-gray-500 dark:text-gray-300">
                                现在你可以使用<code class="bg-gray-100 dark:bg-gray-700 rounded-md px-2 ">
                                    <span style="color: rgb(14 165 233)">npm</span> run dev</code>来预览页面效果,或者<code class="bg-gray-100 dark:bg-gray-700 rounded-md px-2 ">
                                    <span style="color: rgb(14 165 233)">npm</span> run build</code>打包成静态页面
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>


<div class="flex-wrap items-center justify-center gap-8 text-center sm:flex">
    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
            </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            Markdown增强
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
            针对知识库&文档网站需求的markdown增强，支持代码块、公式、选项卡、To-do List、标签、日历、走马灯、卡片、视频、荧光笔等
        </p>
    </div>
    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
            </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            Tailwindcss+ElementUI
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
            引入Tailwindcss,使你在markdown中书写样式更快捷轻松;支持ElementUI组件库,使你可以在markdown中使用组件快速扩展笔记功能
        </p>
    </div>
    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
            </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            足量全局组件
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
            CTA,卡片组,Logo组,HeroSection...足量预先封装好的全局组件,支持你在Markdown中随意使用,轻松构建主页,快速开发页面
        </p>
    </div>
</div>



<HeroSection info="hero"/>


<CardGroup info="card_group"/>  


<LogoGroup info="example_logos"/>



















<a href="https://github.com/open17/vuepress-theme-easy-book" class="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
</svg></a>