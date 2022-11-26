import { Triangle, LineWave } from 'react-loader-spinner';
import styled from '@emotion/styled';

const FullWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg-1);
`;

export const PageLoading = () => {
  return (
    <FullWrapper>
      <Triangle
        height="50"
        width="50"
        color="#165dff"
        ariaLabel="page-loading"
        visible={true}
      />
    </FullWrapper>
  );
};

export const ContentLoading = () => {
  const wrapperClass = 'items-center flex justify-center';
  return (
    <LineWave
      height="100"
      width="100"
      color="#165dff"
      ariaLabel="line-wave"
      wrapperStyle={{}}
      wrapperClass={wrapperClass}
      visible={true}
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />
  );
};
