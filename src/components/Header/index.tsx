import { Layout, Dropdown, Avatar, Menu, message, Badge, Tooltip, Input } from 'antd';
import {
  UserOutlined,
  LogoutOutlined,
  BellOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ReloadOutlined,
  AppstoreOutlined,
  FullscreenOutlined,
  ZoomInOutlined,
  InteractionOutlined
} from '@ant-design/icons';
import { removeToken } from '../../utils/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TabsNav from '../TabsNav';
import './index.less';

const { Header } = Layout;
const { Search } = Input;

interface AppHeaderProps {
  className?: string;
  children?: React.ReactNode;
  toggleSider?: () => void;
  collapsed?: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = ({ className, children, toggleSider, collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isFullscreen, setIsFullscreen] = useState(false);

  // 监听全屏状态变化
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleLogout = () => {
    removeToken();
    message.success('退出登录成功');
    navigate('/login');
  };

  // 刷新当前页面
  const refreshPage = () => {
    const { pathname } = location;
    // 使用window.location.reload()会刷新整个应用，这里使用导航到当前路径的方式实现局部刷新
    navigate(pathname, { replace: true });
  };

  // 切换全屏模式
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        message.error(`全屏模式出错: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const menu = (
    <Menu
      items={[
        {
          key: 'profile',
          icon: <UserOutlined />,
          label: '个人中心',
        },
        {
          key: 'settings',
          icon: <SettingOutlined />,
          label: '个人设置',
        },
        {
          type: 'divider',
        },
        {
          key: 'logout',
          icon: <LogoutOutlined />,
          label: '退出登录',
          onClick: handleLogout,
        },
      ]}
    />
  );

  return (
    <Header className={`app-header ${className || ''}`}>
      {/* 功能区 */}
      <div className="header-function-area">
        {/* 侧边栏折叠按钮 */}
        <div className="function-item" onClick={toggleSider}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        
        {/* 面包屑 */}
        <div className="breadcrumb-container">
          {children}
        </div>
        
        {/* 工具栏 - 新增红框中的功能 */}
        <div className="tools-container">
          {/* 放大图 */}
          <Tooltip title="放大图">
            <div className="function-item">
              <ZoomInOutlined />
            </div>
          </Tooltip>
          
          {/* 搜索 */}
          <div className="search-container">
            <Search placeholder="搜索..." style={{ width: 200 }} />
          </div>
          
          {/* 刷新 */}
          <Tooltip title="刷新">
            <div className="function-item" onClick={refreshPage}>
              <ReloadOutlined />
            </div>
          </Tooltip>
          
          {/* 全屏 */}
          <Tooltip title={isFullscreen ? "退出全屏" : "全屏"}>
            <div className="function-item" onClick={toggleFullscreen}>
              <FullscreenOutlined />
            </div>
          </Tooltip>
          
          {/* 创新互动操作 */}
          <Tooltip title="创新互动操作">
            <div className="function-item">
              <InteractionOutlined />
            </div>
          </Tooltip>
        </div>
      </div>
      
      {/* 标签导航区 */}
      <div className="tabs-container">
        <TabsNav refreshPage={refreshPage} />
      </div>
      
      {/* 用户信息区 */}
      <div className="header-right">
        <Tooltip title="帮助文档">
          <div className="header-action">
            <QuestionCircleOutlined />
          </div>
        </Tooltip>
        <Tooltip title="通知中心">
          <div className="header-action">
            <Badge count={5} size="small">
              <BellOutlined />
            </Badge>
          </div>
        </Tooltip>
        <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
          <div className="user-action">
            <Avatar className="user-avatar" icon={<UserOutlined />} />
            <span className="username">管理员</span>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;
