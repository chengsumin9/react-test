import { Tabs, Tooltip } from 'antd';
import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  DesktopOutlined,
  ReloadOutlined
} from '@ant-design/icons';
import './index.less';

interface TabItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  closable: boolean;
}

interface TabsNavProps {
  refreshPage?: () => void;
}

// 菜单项与图标的映射
const iconMap: Record<string, React.ReactNode> = {
  '/': <DashboardOutlined />,
  '/dashboard': <DashboardOutlined />,
  '/dashboard/workplace': <DesktopOutlined />,
  '/user': <UserOutlined />,
  '/settings': <SettingOutlined />,
};

// 菜单项与标题的映射
const titleMap: Record<string, string> = {
  '/': '数据概览',
  '/dashboard': '数据概览',
  '/dashboard/workplace': '工作台',
  '/user': '用户管理',
  '/settings': '系统设置',
};

const TabsNav: React.FC<TabsNavProps> = ({ refreshPage }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState<string>(location.pathname);
  const [tabs, setTabs] = useState<TabItem[]>([]);
  // 使用useRef来跟踪tabs，避免在依赖项中使用tabs状态
  const tabsRef = useRef<TabItem[]>([]);

  // 初始化和路由变化时更新标签页
  useEffect(() => {
    const { pathname } = location;

    // 设置当前活动的标签页
    setActiveKey(pathname);

    // 检查标签页是否已存在
    const isExist = tabsRef.current.some((tab) => tab.key === pathname);

    if (!isExist && titleMap[pathname]) {
      // 添加新标签页
      const newTab: TabItem = {
        key: pathname,
        label: titleMap[pathname] || pathname,
        icon: iconMap[pathname] || null,
        closable: pathname !== '/', // 首页不可关闭
      };

      const newTabs = [...tabsRef.current, newTab];
      setTabs(newTabs);
      tabsRef.current = newTabs;
    }
  }, [location.pathname]); // 移除tabs依赖项

  // 初始化时添加首页标签
  useEffect(() => {
    if (tabs.length === 0) {
      const initialTab = [
        {
          key: '/',
          label: '数据概览',
          icon: <DashboardOutlined />,
          closable: false,
        },
      ];
      setTabs(initialTab);
      tabsRef.current = initialTab;
    }
  }, []);

  // 切换标签页
  const onChange = (key: string) => {
    navigate(key);
  };

  // 关闭标签页
  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove'
  ) => {
    if (action === 'remove' && typeof targetKey === 'string') {
      // 过滤掉要关闭的标签页
      const newTabs = tabs.filter((tab) => tab.key !== targetKey);
      setTabs(newTabs);
      tabsRef.current = newTabs;

      // 如果关闭的是当前活动的标签页，则跳转到最后一个标签页
      if (targetKey === activeKey && newTabs.length > 0) {
        const lastTab = newTabs[newTabs.length - 1];
        setActiveKey(lastTab.key);
        navigate(lastTab.key);
      }
    }
  };

  // 阻止关闭按钮的点击事件冒泡
  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // 刷新当前标签页
  const handleRefreshTab = (e: React.MouseEvent, tabKey: string) => {
    e.stopPropagation();
    if (refreshPage && tabKey === activeKey) {
      refreshPage();
    }
  };

  return (
    <div className="tabs-nav-container">
      <Tabs
        type="editable-card"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
        hideAdd
        items={tabs.map((tab) => ({
          key: tab.key,
          label: (
            <div className="tab-label-container">
              <span className="tab-label">
                {tab.icon && <span className="tab-icon">{tab.icon}</span>}
                {tab.label}
              </span>
              <Tooltip title="刷新标签页">
                <ReloadOutlined 
                  className="tab-refresh-icon" 
                  onClick={(e) => handleRefreshTab(e, tab.key)}
                />
              </Tooltip>
            </div>
          ),
          closable: tab.closable,
        }))}
      />
    </div>
  );
};

export default TabsNav;
