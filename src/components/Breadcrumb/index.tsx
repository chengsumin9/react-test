import { Breadcrumb } from 'antd';
import { useLocation, Link } from 'react-router-dom';
// import './index.less';

const breadcrumbNameMap: Record<string, string> = {
  '/': '数据概览',
  '/dashboard': '仪表盘',
  '/dashboard/workplace': '工作台',
  '/system/role': '角色管理',
  '/system/menu': '菜单管理',
  '/user': '用户管理',
  '/settings': '系统设置',
};

// 新增：路径与父级映射关系
const breadcrumbParentMap: Record<string, string> = {
  '/dashboard/workplace': '/dashboard',
  '/system/role': '/system',
  '/system/menu': '/system',
  // 可以继续添加其他路径的父子关系
};

// 新增：父级路径名称映射（补充 breadcrumbNameMap 中没有的中间路径）
const parentNameMap: Record<string, string> = {
  '/system': '系统设置',
  // 可以继续添加其他父级路径名称
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
    const currentPath = location.pathname;

    // 检查是否有定义的父级关系
    if (breadcrumbParentMap[currentPath]) {
      const parentPath = breadcrumbParentMap[currentPath];
      const parentName =
        parentNameMap[parentPath] || breadcrumbNameMap[parentPath] || '';
      const currentPageName = breadcrumbNameMap[currentPath] || '';

      return [
        <Breadcrumb.Item key={parentPath}>
          <Link to={parentPath}>{parentName}</Link>
        </Breadcrumb.Item>,
        <Breadcrumb.Item key={currentPath}>{currentPageName}</Breadcrumb.Item>,
      ];
    }

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
