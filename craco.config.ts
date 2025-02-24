// craco.config.ts

const path = require("path");
const CracoLess = require('craco-less');

const pathResolve = (pathUrl: string) => path.join(__dirname, pathUrl);

module.exports = {
  reactScriptsVersion: "react-scripts",
  // babel配置
  babel: {
    // babel插件
    plugins: [],
    // babel-loader选项
    loaderOptions: {},
  },
  // 插件配置
  plugins: [
    {
      plugin: CracoLess,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              "@primary-color": "#1890ff",
            },
          },
        },
      },
    },
  ],
  // webpack配置
  webpack: {
    // 别名配置
    alias: {
      "@": pathResolve("src"),
    },
    // 修改webpack配置
    configure: (webpackConfig: any, { env }: any) => {
      // 在此处修改
      return webpackConfig;
    },
  },
  // 本地服务器配置
  devServer: {
    port: 3005, // 本地服务的端口号，如果package.json中配置了端口号，会覆盖package.json
    proxy: {
      "/api": {
        target: "http://localhost:3005",
        changeOrigin: true,
        secure: false,
        xfwd: false,
      },
    },
  },
};

