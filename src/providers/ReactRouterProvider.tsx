import * as React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RouterMap } from '@/routes';

console.log('RouterMap', RouterMap);

const router = createBrowserRouter(RouterMap);

export const ReactRouterProvider = () => <RouterProvider router={router} />;
