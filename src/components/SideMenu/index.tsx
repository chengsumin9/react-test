import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  DesktopOutlined
} from '@ant-design/icons';
import './index.less';

interface SideMenuProps {
  collapsed?: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 获取当前选中的菜单项
  const selectedKeys = [location.pathname];
  
  // 如果当前路径是子路径，则展开父级菜单
  const openKeys = collapsed ? [] : location.pathname.split('/').slice(0, -1).map((_, index, array) => 
    '/' + array.slice(0, index + 1).join('/')
  ).filter(item => item !== '/');

  // 处理菜单点击事件
  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <div className="side-menu-container">
      {/* Logo区域 */}
      <div className="logo-container">
        {!collapsed ? (
          <h1 className="logo-text">Art Design Pro</h1>
        ) : (
          <h1 className="logo-text-collapsed">Art</h1>
        )}
      </div>
      
      <Menu
        mode="inline"
        theme="light"
        selectedKeys={selectedKeys}
        defaultOpenKeys={openKeys}
        onClick={handleMenuClick}
        items={[
          {
            key: '/dashboard',
            icon: <DashboardOutlined />,
            label: '仪表盘',
            children: [
              {
                key: '/',
                label: '数据概览',
              },
              {
                key: '/dashboard/workplace',
                label: '工作台',
              },
            ],
          },
          {
            key: '/user',
            icon: <UserOutlined />,
            label: '用户管理',
          },
          {
            key: '/settings',
            icon: <SettingOutlined />,
            label: '系统设置',
          },
        ]}
      />
    </div>
  );
};

export default SideMenu;
