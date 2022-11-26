import Home from '@/pages/Home';
import Leaf from '@/pages/Leaf';
import Tree from '@/pages/Tree';
import { type Route } from '@/routes';
const Routes: Route[] = [
  {
    path: 'home',
    element: <Leaf />,
  },
];

export default Routes;
