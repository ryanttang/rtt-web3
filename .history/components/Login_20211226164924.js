/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate, isInitializing } = useMoralis();


    return (
        <div className="bg-black relative text-white">
            <h1>Login Screen</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-5">
            {/* Logo */}
            <Image 
                className="object-cover"
                src="https://ryantang.site/img/cloudlogo.png" 
                height={200}
                width={500}
                />

            {/* Login Button */}
            <div
      className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2"
    >
      <img
        src="Assets/unlock.svg"
        className="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto"
      />
      <form className="flex flex-col justify-center items-center w-1/2">
        <img src="Assets/avatar.svg" className="w-32" />
        <h2
          className="my-8 font-display font-bold text-3xl text-gray-700 text-center"
        >
          Welcome to you
        </h2>
        <div className="relative">
          <i className="fa fa-user absolute text-primarycolor text-xl"></i>
          <input
            type="text"
            placeholder="username"
            className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
          />
        </div>
        <div className="relative mt-8">
          <i className="fa fa-lock absolute text-primarycolor text-xl"></i>
          <input
            type="password"
            placeholder="password"
            className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
          />
        </div>
        <a href="#" className="self-end mt-4 text-gray-600 font-bold"
          >Forgot password?</a
        >
        <a
          href="#"
          className="py-3 px-20 bg-primarycolor rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500"
          >Login</a
        >
      </form>
    </div>

            <button 
                onClick={authenticate}
                className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Login</button>
            </div>
            <div className="w-full h-screen">
            <Image 
                src="https://images.unsplash.com/photo-1531214547534-50935aeb3448?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                layout="fill" 
                objectFit="cover" 
                />
            </div>
            </div>
    )
}

export default Login
