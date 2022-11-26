import Home from '@/pages/Home';
import Leaf from '@/pages/Leaf';
import Counter from '@/pages/Counter';
import About from '@/pages/About';
import { type Route } from '@/routes';
const Routes: Route[] = [
  {
    path: 'counter',
    element: <Counter />,
  },
];

export default Routes;
