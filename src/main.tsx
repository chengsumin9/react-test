import './index.css'
import App from './App.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css' // 引入Ant Design重置样式

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <App />
  </React.StrictMode>,
)
