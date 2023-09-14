module.exports = (options, ctx) => {
  const { siteConfig } = ctx;
  if(!siteConfig.themeConfig)siteConfig.themeConfig={};
  else if(!siteConfig.themeConfig.searchMaxSuggestions)siteConfig.themeConfig.searchMaxSuggestions=100;
    return {
      chainWebpack: (config) => {
        config.resolve.alias.set('core-js/library/fn', 'core-js/features');
      },
      plugins: [
        ['fulltext-search'],
        ['pad-markdown'],
        ['markdown-todolist'],
        ['el-img'],
        ['el-tab']
      ],
    };
  };