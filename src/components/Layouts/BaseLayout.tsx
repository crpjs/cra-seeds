import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AppstoreOutlined,
  ContainerOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Route, Outlet, Link } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import React, { useState, Suspense } from 'react';
import type { MenuProps } from 'antd';

import MenuApp from './Menu';

const { Header, Sider, Content } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

/**
 * 可变
 * path 、name、key、icon
 */
const items: MenuItem[] = [
  getItem(<Link to="/home">home</Link>, 'home', <ContainerOutlined />),
  getItem(<Link to="/leaf">leaf</Link>, 'leaf', <PieChartOutlined />),
  getItem(<Link to="/about">about</Link>, 'about', <PieChartOutlined />),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ]),
];

const BaseLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      className="site-layout"
      style={{
        height: 'calc(100vh - 50px)',
        overflowY: 'scroll',
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <MenuApp />
        {/* <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={menuItems}
        /> */}
        {/* <MenuApp /> */}
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            },
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {/* <Suspense fallback={null}> */}
          <Outlet />
          {/* </Suspense> */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
