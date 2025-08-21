import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../pages/Login';
import NotFound from '../pages/404';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Workplace = lazy(() => import('../pages/Dashboard/Workplace'));
const Rolesystem = lazy(() => import('../pages/System/role/index'));
const Menusystem = lazy(() => import('../pages/System/menu/index'));
const UserList = lazy(() => import('../pages/User/List'));

// 路由守卫
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const isAuth = localStorage.getItem('admin_token');
  return isAuth ? children : <Navigate to="/login" replace />;
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: 'dashboard',
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'workplace', element: <Workplace /> },
        ],
      },
      {
        path: 'system',
        children: [
          // { index: true, element: <Rolesystem /> },
          { path: 'role', element: <Rolesystem /> },
          { path: 'menu', element: <Menusystem /> },
        ],
      },
      {
        path: 'user',
        children: [{ index: true, element: <UserList /> }],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
