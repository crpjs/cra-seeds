/**
 * 路由模式
 * A. map 路由映射模式
 * B. 项目组件形式
 */

import Home from '@/pages/Home';
import Leaf from '@/pages/Leaf';
import Tree from '@/pages/Tree';
import BaseLayout from '@/components/Layouts/BaseLayout';
import { RouteObject, useRouteError } from 'react-router-dom';

export type Route = {
  enable?: boolean;
  icon?: JSX.Element;
  name?: string;
  children?: Route[];
  auth?: boolean;
  guest?: boolean;
} & RouteObject;

// 自动引入childRoutes目录里的子路由
const files = require.context('./children', true, /\.tsx$/);
let childrenRoutes: Route[] = [];
files.keys().forEach((file: string) => {
  // console.log('...files(file).default', files(file).default)
  childrenRoutes.push(...files(file).default);
});

console.log('childrenRoutes', childrenRoutes);
const rootLoader = async () => {
  return 1;
};

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}

const RouterMap: Route[] = [
  {
    path: '/',
    element: <BaseLayout />,
    // loader: rootLoader,
    // action: () => {},
    errorElement: <ErrorBoundary />,
    children: childrenRoutes,
  },
];

export default RouterMap;
