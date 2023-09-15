module.exports = (options, ctx) => {
  const { siteConfig } = ctx;
  if(!siteConfig.themeConfig)siteConfig.themeConfig={};
  else if(!siteConfig.themeConfig.searchMaxSuggestions)siteConfig.themeConfig.searchMaxSuggestions=100;
    return {
      chainWebpack: (config) => {
        config.resolve.alias.set('core-js/library/fn', 'core-js/features');
      },
      plugins: [
        ['pad-markdown'],
        ['fulltext-search'],
        ['markdown-todolist'],
        ['el-img']
        // ['el-tab']
      ],
    };
  };