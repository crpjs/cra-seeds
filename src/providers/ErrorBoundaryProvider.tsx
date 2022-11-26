import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import errorBoundary from '@/assets/error.svg';
import styled from '@emotion/styled';
import { Button } from 'antd';

// const { Title } = Typography;

const ErrorWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--color-bg-1);
  color: var(--color-text-3);
  gap: 20px;
`;

const ErrorFallback = () => {
  return (
    <ErrorWrapper>
      <img src={errorBoundary} alt="" width={300} />
      <h3>出错了</h3>
      <Button
        type="primary"
        onClick={() => window.location.assign(window.location.origin)}
      >
        刷新
      </Button>
    </ErrorWrapper>
  );
};

interface ErrorBoundaryProviderProps {
  children: React.ReactNode;
}

export const ErrorBoundaryProvider = ({
  children,
}: ErrorBoundaryProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};
