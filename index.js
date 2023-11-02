module.exports = (options, ctx) => {
  const { siteConfig } = ctx;
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
      ],
    };
  };