import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  
  // 获取当前选中的菜单项
  const selectedKeys = [location.pathname];
  
  // 根据当前路径设置默认展开的菜单
  useEffect(() => {
    if (collapsed) {
      setOpenKeys([]);
      return;
    }
    
    // 如果当前路径是首页或工作台，应该展开仪表盘菜单
    if (location.pathname === '/' || location.pathname === '/dashboard/workplace') {
      setOpenKeys(['/dashboard']);
    } else {
      // 其他情况按路径层级处理
      const pathKeys = location.pathname.split('/').slice(0, -1).map((_, index, array) => 
        '/' + array.slice(0, index + 1).join('/')
      ).filter(item => item !== '/');
      setOpenKeys(pathKeys);
    }
  }, [location.pathname, collapsed]);

  // 处理菜单点击事件
  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };
  
  // 处理子菜单展开/收起
  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
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
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
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
