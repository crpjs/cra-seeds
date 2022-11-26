import { Route, Routes, Link, Outlet } from 'react-router-dom';
import { Counter } from '@/components/Counter';
import { currentEnv } from '@/consts/env';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import axios from 'axios';

// const queryClient = new QueryClient();
export default function Leaf() {
  console.log('process.env', process.env);
  const { isLoading, error, data, isFetching } = useQuery(['repoData'], () =>
    axios
      .get('https://api.github.com/repos/tannerlinsley/react-query')
      .then(res => res.data),
  );

  if (isLoading) return <>"Loading..."</>;

  if (error) return <>"An error has occurred: " + error;</>;
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
