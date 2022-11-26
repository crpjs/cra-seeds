import { Route, Routes, Link, Outlet } from 'react-router-dom';
import { Counter } from '@/components/Counter';
import { currentEnv } from '@/consts/env';

export default function Home(props: any) {
  console.log('process props', props);
  return (
    <>
      <main>
        <h2>Welcome to the Counter!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <Counter />
      currentEnv {process.env.HLL_ENV}
      currentEnv-env: {process.env.HLL_NAME}
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </>
  );
}
