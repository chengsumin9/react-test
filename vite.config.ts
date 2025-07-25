import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#165DFF', // 更新为Art Design Pro的主色调
          '@success-color': '#52c41a', // 成功色
          '@warning-color': '#faad14', // 警告色
          '@error-color': '#f5222d',   // 错误色
          '@font-size-base': '14px',   // 主字号
          '@heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
          '@text-color': 'rgba(0, 0, 0, 0.65)',    // 主文本色
          '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // 次文本色
          '@border-radius-base': '4px', // 组件/浮层圆角
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
