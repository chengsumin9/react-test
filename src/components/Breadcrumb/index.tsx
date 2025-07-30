import { Breadcrumb } from 'antd';
import { useLocation, Link } from 'react-router-dom';
// import './index.less';

const breadcrumbNameMap: Record<string, string> = {
  '/': '数据概览',
  '/dashboard': '仪表盘',
  '/dashboard/workplace': '工作台',
  '/user': '用户管理',
  '/settings': '系统设置',
};

const AppBreadcrumb = () => {
  const location = useLocation();

  // 修复：为首页特殊处理面包屑显示
  const getBreadcrumbItems = () => {
    if (location.pathname === '/') {
      // 首页显示：仪表盘 / 数据概览
      return [
        <Breadcrumb.Item key="dashboard">
          <Link to="/dashboard">仪表盘</Link>
        </Breadcrumb.Item>,
        <Breadcrumb.Item key="home">数据概览</Breadcrumb.Item>,
      ];
    }

    // 其他页面按原逻辑处理
    const pathSnippets = location.pathname.split('/').filter((i) => i);

    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      const isLast = index === pathSnippets.length - 1;

      return (
        <Breadcrumb.Item key={url}>
          {isLast ? (
            breadcrumbNameMap[url]
          ) : (
            <Link to={url}>{breadcrumbNameMap[url]}</Link>
          )}
        </Breadcrumb.Item>
      );
    });

    return extraBreadcrumbItems;
  };

  return (
    <Breadcrumb className="app-breadcrumb">{getBreadcrumbItems()}</Breadcrumb>
  );
};

export default AppBreadcrumb;
