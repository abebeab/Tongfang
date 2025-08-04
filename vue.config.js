// vue.config.js

const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  // This block explicitly defines the feature flags for the bundler,
  // which will remove the warning from your development console.
  // It also ensures they are correctly set for production builds.
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        args[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = JSON.stringify(false);
        args[0]['__VUE_OPTIONS_API__'] = JSON.stringify(true);
        args[0]['__VUE_PROD_DEVTOOLS__'] = JSON.stringify(false);
        return args;
      });
  }
});