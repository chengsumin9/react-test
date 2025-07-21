import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
// import './index.less';

const items = [
  {
    key: '/',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
  },
  {
    key: '/user',
    icon: <UserOutlined />,
    label: 'User Management',
  },
  {
    key: '/settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
];

const SideMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClick = (e: { key: string }) => {
    navigate(e.key);
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[location.pathname]}
      items={items}
      onClick={onClick}
    />
  );
};

export default SideMenu;
