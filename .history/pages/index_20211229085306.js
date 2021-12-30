import Head from 'next/head';
import Image from 'next/image';
import Login from '../components/Login';
import styles from '../styles/Home.module.css';
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from '../components/Messages';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-white to-black overflow-hidden z-1">
      
      <Head>
        <title>RTT WEB3 SPACE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div 
        className="max-w-screen-l mx-auto">
        {/* Header */}
        <Header />
        {/* Messages */}
        <Messages />
      </div>

      <div className="w-full h-screen">
            <Image 
                className="-z-10"
                src="https://images.unsplash.com/photo-1531214547534-50935aeb3448?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                layout="fill" 
                objectFit="cover" 
                />
            </div>
    </div>

    
    
  );

}
