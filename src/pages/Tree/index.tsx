import { Route, Routes, Link, Outlet } from 'react-router-dom';
import { Counter } from '@/components/Counter';
import { currentEnv } from '@/consts/env';

export default function Home() {
  console.log('process.env', process.env);
  return (
    <>
      <main>
        <h2>Welcome to the Tree page!</h2>
      </main>
    </>
  );
}
