/* eslint-disable @typescript-eslint/no-var-requires */
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  chainWebpack: (config) => {
    console.log(config);
    config.plugin("html").tap((args) => {
      args[0].title = "蔡延松";
      return args;
    });
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
};