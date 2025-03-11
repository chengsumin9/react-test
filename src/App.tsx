import React, { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { RouteIProps } from "./router/types";
import routesList from "./router/index";

import "./App.less";

const { Header, Content, Sider} = Layout;

const App: React.FC = () => {
  const navigate = useNavigate();

  // 顶部菜单：高亮项
  const defaultSelectedKeys = ["/home"];

  // 侧边菜单：高亮项、 展开项
  const siderDefaultSelectedKeys: string[] = [];
  const siderDefaultOpenKeys: string[] = [];

  // 当前顶部菜单路径
  const [curPath, setCurPath] = useState(defaultSelectedKeys[0]);

  // 顶部菜单：过滤没有label的路由
  const menuList: MenuProps["items"] = routesList
    .filter((r) => r.label)
    .map((route) => ({
      key: route.key,
      label: route.label,
    }));

  // 左侧菜单：点击顶部菜单后更新左侧菜单
  let siderMenuList: MenuProps["items"] = [];
  const siderMenu = routesList.filter(
    (item) => item.label && item.key === curPath && item.children
  );
  if (siderMenu.length && siderMenu[0].children) {
    siderMenuList = siderMenu[0].children;
  }

  // 顶部菜单点击事件
  const clickTopMenu: MenuProps["onClick"] = (e) => {
    setCurPath(e.key);
    navigate(e.key, {
      replace: true,
      state: { curPath: e.key, id: 1, name: "home" },
    });
  };

  // 左侧菜单点击事件
  const clickSiderMenu: MenuProps["onClick"] = (e) => {
    navigate(e.key, { replace: true });
  };

  // 数组扁平化
  const flattenArray = (arr: RouteIProps[]): RouteIProps[] => {
    return arr.reduce((result: any, item: any) => {
      return result.concat(
        item,
        Array.isArray(item.children) ? flattenArray(item.children) : []
      );
    }, []);
  };

  return (
    <Layout className="layout-wrapper">
      <Header className="layout-header">
        <div className="sys-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={defaultSelectedKeys}
          items={menuList}
          onClick={clickTopMenu}
          className="menu-wrapper"
        />
      </Header>
      <Layout className={!siderMenuList.length ? "no-sider-menu" : ""}>
        {siderMenuList.length > 0 && (
          <Sider className="layout-sider">
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={siderDefaultSelectedKeys}
              defaultOpenKeys={siderDefaultOpenKeys}
              items={siderMenuList}
              onClick={clickSiderMenu}
              className="menu-wrapper"
            />
          </Sider>
        )}
        <Content className="layout-content">
          <Routes>
           {/* 这里做数组扁平化，就是解决常遇到的说router6子路由页面不渲染的问题。
           因为react-router-dom的Routes组件不支持嵌套路由，所以要将路由扁平化，
           然后通过key来判断是否是当前路由，否则就会出现路由跳转错误的问题 */}
            {flattenArray(routesList).map(
              ({ key, element, redirect }: RouteIProps) => {
                return (
                  <Route
                    key={key}
                    path={key}
                    element={redirect ? <Navigate to={redirect} /> : element}
                  ></Route>
                );
              }
            )}
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
