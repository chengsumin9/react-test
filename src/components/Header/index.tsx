import { Layout, Dropdown, Avatar, Menu, message } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { removeToken } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';
// import './index.less';

const { Header } = Layout;

const AppHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    message.success('Logout successfully');
    navigate('/login');
  };

  const menu = (
    <Menu
      items={[
        {
          key: 'logout',
          icon: <LogoutOutlined />,
          label: 'Logout',
          onClick: handleLogout,
        },
      ]}
    />
  );

  return (
    <Header className="app-header">
      <div className="header-right">
        <Dropdown overlay={menu} placement="bottomRight">
          <div className="user-action">
            <Avatar icon={<UserOutlined />} />
            <span className="username">Admin</span>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;
