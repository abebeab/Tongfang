const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // Add this line to disable the linting rule on save
  lintOnSave: false
})