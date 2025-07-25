import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Checkbox, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../utils/auth';
import { login } from '../../api/user';
import './index.less';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const res = await login(values);
      if (res.code === 200) {
        setToken(res.data.token);
        message.success('登录成功');
        navigate('/');
      } else {
        message.error(res.message);
      }
    } catch (error) {
      message.error('登录失败');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-left">
          <div className="login-title-box">
            <h1 className="login-main-title">后台管理系统</h1>
            <p className="login-sub-title">专注于用户体验的管理系统模板</p>
          </div>
          <div className="login-image"></div>
        </div>
        <div className="login-right">
          <div className="login-form-container">
            <h2 className="welcome-text">欢迎回来</h2>
            <p className="login-desc">输入您的账号和密码登录</p>
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              size="large"
              className="login-form"
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名！' }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="用户名"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码！' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
                />
              </Form.Item>
              <Form.Item>
                <div className="login-options">
                  <Checkbox>记住密码</Checkbox>
                  <a className="login-form-forgot" href="">
                    忘记密码
                  </a>
                </div>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block className="login-button">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
