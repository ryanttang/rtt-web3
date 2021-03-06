import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login';
import styles from '../styles/Home.module.css'

export default function Home() {
  const isAuthenticated = false;

  if (!isAuthenticated) return <Login />

  return (
    <div className={styles.container}>
      <Head>
        <title>RTT WEB3 SPACE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>RTT WEB3 SPACE</h1>
      <Login />
    </div>
  );

}
