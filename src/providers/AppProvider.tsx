import React, { Suspense } from 'react';
import { ReactRouterProvider } from './ReactRouterProvider';
import { PageLoading } from '@/components/Loading';
import { ReactQueryProvider } from './ReactQueryProvider';
import { ErrorBoundaryProvider } from './ErrorBoundaryProvider';
export const AppProvider = () => {
  return (
    <ErrorBoundaryProvider>
      <ReactQueryProvider>
        <ReactRouterProvider />
      </ReactQueryProvider>
    </ErrorBoundaryProvider>
  );
};
