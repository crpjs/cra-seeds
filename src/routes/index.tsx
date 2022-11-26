import React from 'react';
import { RouteObject } from 'react-router-dom';
export type Route = {
  enable?: boolean;
  icon?: JSX.Element;
  name?: string;
  children?: Route[];
  auth?: boolean;
  guest?: boolean;
} & RouteObject;

export { default as RouterMap } from './map';
