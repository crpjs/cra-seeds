import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import type { MenuProps } from 'antd';
const { Header, Sider, Content } = Layout;
import { Route, Outlet, Link } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];

import {
  AppstoreOutlined,
  ContainerOutlined,
  PieChartOutlined,
  SettingOutlined,
  MailOutlined,
  MenuFoldOutlined,
  CompassOutlined,
  BookOutlined,
  QuestionCircleOutlined,
  TagsOutlined,
  CodeOutlined,
  BarChartOutlined,
  RiseOutlined,
  TeamOutlined,
  ProfileOutlined,
  LineChartOutlined,
  DeliveredProcedureOutlined,
  ReadOutlined,
  ClusterOutlined,
  WalletOutlined,
  ShopOutlined,
  GiftOutlined,
  FieldNumberOutlined,
} from '@ant-design/icons';
import { type } from '@testing-library/user-event/dist/type';

// https://ant.design/components/menu-cn

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

const items: MenuProps['items'] = [
  {
    label: <Link to="/home">home</Link>,
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: <Link to="/counter">Counter</Link>,
    key: 'Counter',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: <Link to="/leaf">leaf</Link>,
    key: 'leaf',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: <Link to="/about">about</Link>,
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      onClick={onClick}
      selectedKeys={[current]}
      items={items}
    />
  );
};

export default App;
