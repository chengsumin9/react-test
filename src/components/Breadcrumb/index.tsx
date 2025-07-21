import { Breadcrumb } from 'antd';
import { useLocation, Link } from 'react-router-dom';
// import './index.less';

const breadcrumbNameMap: Record<string, string> = {
  '/': 'Dashboard',
  '/user': 'User Management',
  '/settings': 'Settings',
};

const AppBreadcrumb = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return <Breadcrumb className="app-breadcrumb">{breadcrumbItems}</Breadcrumb>;
};

export default AppBreadcrumb;
