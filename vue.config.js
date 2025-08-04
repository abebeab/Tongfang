// At the very top of the file, force load the .env file
require('dotenv').config();

const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
    chainWebpack: config => {
    // Vue CLI enables prefetching by default, this ensures it's active.
    // It adds <link rel="prefetch"> for all async chunks.
    // This will automatically pre-download the code for other pages
    // when the browser is idle, making navigation feel instant.
    config.plugins.delete('prefetch'); // Optional: Clear any existing prefetch plugins if needed
    config.plugin('prefetch').tap(options => {
      options[0].fileBlacklist = options[0].fileBlacklist || [];
      options[0].fileBlacklist.push(/my-async-chunk\./); // Example of blacklisting a specific chunk if needed
      return options;
    });
  }
});
