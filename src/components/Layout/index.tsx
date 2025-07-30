// src/components/Layout/index.tsx
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import SideMenu from '../SideMenu';
import Header from '../Header';
import Breadcrumb from '../Breadcrumb';
import './index.less';

const { Content, Sider } = Layout;

const MainLayout = () => {
  // 添加侧边栏折叠状态
  const [collapsed, setCollapsed] = useState(false);

  // 切换侧边栏折叠状态
  const toggleSider = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="main-layout">
      {/* 左侧菜单栏固定 */}
      <Sider
        theme="light"
        width={240}
        collapsible
        collapsed={collapsed}
        trigger={null} // 不显示默认的触发器
        collapsedWidth={64}
        className="main-sider"
      >
        <SideMenu collapsed={collapsed} />
      </Sider>

      {/* 右侧内容容器 */}
      <Layout
        className="main-content-layout"
        style={{ marginLeft: collapsed ? '64px' : '240px' }}
      >
        {/* 固定头部 */}
        <Header
          className="main-header"
          toggleSider={toggleSider}
          collapsed={collapsed}
        >
          <Breadcrumb />
        </Header>

        {/* 可滚动内容区域 */}
        <Content className="main-content">
          <div className="content-container">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
