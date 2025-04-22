module.exports = {
  extends: [
    'react-app',
    'plugin:prettier/recommended' // 已集成 prettier 规则和冲突解决
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error', // 仅启用错误提示，配置从 .prettierrc 读取
    // 可在此补充其他 ESLint 规则（如 react-hooks 规则）
  }
};