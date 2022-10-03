import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const { data, error, isLoading } = trpc.useQuery(['hello']);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <>{JSON.stringify(error)}</>;
  }

  return <>{JSON.stringify(data)}</>;
};

export default Home;
