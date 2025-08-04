const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  // This is the only configuration needed. It's a safe default.
  // The faulty chainWebpack block is removed, allowing Vue's built-in
  // prefetching to work correctly.
  transpileDependencies: true,
});