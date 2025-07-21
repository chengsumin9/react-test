import Mock from 'mockjs';

// 模拟用户数据
const users = Mock.mock({
  'list|20': [
    {
      'id|+1': 1,
      name: '@cname',
      email: '@email',
      role: '@pick(["admin", "editor", "user"])',
      status: '@pick(["active", "disabled"])',
      createTime: '@datetime',
    },
  ],
}).list;

// 登录接口
Mock.mock('/api/user/login', 'post', (options: any) => {
  const { username, password } = JSON.parse(options.body);
  if (username === 'admin' && password === '123456') {
    return {
      code: 200,
      message: '登录成功',
      data: {
        token: Mock.mock('@guid'),
        userInfo: {
          id: 1,
          username: 'admin',
          avatar:
            'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
          roles: ['admin'],
        },
      },
    };
  } else {
    return {
      code: 401,
      message: '用户名或密码错误',
    };
  }
});

// 获取用户信息
Mock.mock('/api/user/info', 'get', {
  code: 200,
  data: {
    id: 1,
    username: 'admin',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    roles: ['admin'],
  },
});

// 获取用户列表
Mock.mock('/api/user/list', 'get', {
  code: 200,
  data: users,
});

// 登出接口
Mock.mock('/api/user/logout', 'post', {
  code: 200,
  message: '退出成功',
});
