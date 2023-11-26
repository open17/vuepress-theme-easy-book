module.exports = (options, ctx) => {
  const { siteConfig } = ctx;

    // 引入 CDN 资源
    const daisyuiCDN = ['link', { href: 'https://cdn.jsdelivr.net/npm/daisyui@2.52.0/dist/full.css', rel: 'stylesheet', type: 'text/css' }];

    if (Array.isArray(siteConfig.head)) {
      siteConfig.head.push(daisyuiCDN);
    } else {
      siteConfig.head = [daisyuiCDN];
    }

  siteConfig.postcss = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer')
    ]
  };
  if(!siteConfig.themeConfig)siteConfig.themeConfig={};
  else if(!siteConfig.themeConfig.searchMaxSuggestions)siteConfig.themeConfig.searchMaxSuggestions=50;
    return {
      chainWebpack: (config) => {
        config.resolve.alias.set('core-js/library/fn', 'core-js/features');
      },
      plugins: [
        ['pad-markdown'],
        ['fulltext-search'],
        ['markdown-todolist'],
        ['el-img'],
        ['el-tab'],
        [
          'vuepress-plugin-container',
          {
            type: 'alert',
            before: info => `<div class="alert shadow-lg">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class=" stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div>
            <span class="text-xl font-bold">${info}</span>
            <div class="text-xs fixed-orgin-css">
            `,
            after: '</div></div></div></div>',
          },
        ],
        [
          'vuepress-plugin-container',
          {
            type: 'info',
            before: info => `<div class="alert alert-info shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div>
            <span class="text-xl font-bold">${info}</span>
             <div class="text-xs fixed-orgin-css">
            `,
            after: '</div></div></div></div>',
          },
        ],
        [
          'vuepress-plugin-container',
          {
            type: 'success',
            before: info => `<div class="alert alert-success shadow-lg">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <div>
            <span class="text-xl font-bold">${info}</span>
             <div class="text-xs fixed-orgin-css">
            `,
            after: '</div></div></div></div>',
          },
        ],
        [
          'vuepress-plugin-container',
          {
            type: 'warning',
            before: info => `<div class="alert alert-warning shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <div>
            <span class="text-xl font-bold">${info}</span>
             <div class="text-xs fixed-orgin-css">
            `,
            after: '</div></div></div></div>',
          },
        ],
        [
          'vuepress-plugin-container',
          {
            type: 'error',
            before: info => `<div class="alert alert-error shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <div>
            <span class="text-xl font-bold">${info}</span>
             <div class="text-xs fixed-orgin-css">
            `,
            after: '</div></div></div></div>',
          },
        ],
        [
          'vuepress-plugin-container',
          {
            type: 'hero',
            before: info => `<HeroSection info="${info}"/>`,
            after: '</HeroSection>',
          },
        ],
        [
          'vuepress-plugin-container',
          {
            type: 'collapse',
            before: info => `<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100  rounded-box mx-10 w-auto">
            <input type="checkbox" class="peer" />
             <div class="collapse-title text-xl font-medium">${info}</div>
             <div class="collapse-content">`,
            after: ' </div></div>',
          },
        ],
        [
          'vuepress-plugin-container',
          {
            type: 'tooltip',
            before: info => `<div class="tooltip" data-tip="${info}">`,
            after: '</div>',
          },
        ],
        [
          'vuepress-plugin-container',
          {
            type: 'video',
            before: info => `<IVideo url="${info}" />`,
            after: '',
          },
        ],
      ],
    };
  };