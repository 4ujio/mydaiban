const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/mydaiban/",
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/config",
        ws: true,
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
});
