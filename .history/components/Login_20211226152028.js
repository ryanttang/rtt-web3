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
