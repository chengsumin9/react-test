import { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Spin } from 'antd';
import routes from './routes';
import './App.less';

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin size="large" className="app-loading" />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
