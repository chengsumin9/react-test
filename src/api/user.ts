import request from './index';

export interface LoginParams {
  username: string;
  password: string;
}

export interface UserInfo {
  id: number;
  username: string;
  avatar: string;
  roles: string[];
}

export interface UserItem {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  createTime: string;
}

export const login = (data: LoginParams) => {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  });
};

export const getUserInfo = () => {
  return request<UserInfo>({
    url: '/user/info',
    method: 'get',
  });
};

export const getUserList = () => {
  return request<{ list: UserItem[] }>({
    url: '/user/list',
    method: 'get',
  });
};

export const logout = () => {
  return request({
    url: '/user/logout',
    method: 'post',
  });
};
