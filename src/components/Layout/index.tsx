// src/components/Layout/index.tsx
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import SideMenu from '../SideMenu';
import Header from '../Header';
import Breadcrumb from '../Breadcrumb';
import './index.less'; // 确保这个文件存在

const { Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu />
      <Layout>
        <Header />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb />
          <div className="site-layout-background">
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Admin Template ©2023 Created by You
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;