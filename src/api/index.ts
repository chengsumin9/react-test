import axios from 'axios';
import { message } from 'antd';
import './mock'; // 引入Mock配置

// 创建axios实例
const service = axios.create({
  baseURL: '/api', // 统一接口前缀
  timeout: 5000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在请求发送之前做一些处理
    const token = localStorage.getItem('admin_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 请求错误处理
    console.log(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做处理
    const res = response.data;
    if (res.code !== 200) {
      message.error(res.message || 'Error');
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  (error) => {
    // 响应错误处理
    console.log('err' + error);
    message.error(error.message);
    return Promise.reject(error);
  }
);

export default service;
