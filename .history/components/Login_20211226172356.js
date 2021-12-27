/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate, isInitializing } = useMoralis();


    return (

        <div className="bg-black relative text-white">
            <h1>Login Screen</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-5">
           

            {/* Login Button */}
            <div className="container mx-auto p-2">
      <div className="max-w-sm mx-auto my-24 bg-white px-5 py-0 round shadow-xl opacity-90">
           {/* Logo */}
           <Image 
                className="object-cover"
                src="https://ryantang.site/img/cloudlogo.png" 
                height={200}
                width={500}
                />
        <div className="text-center mb-8 mt-8">
          <h1 className="font-bold text-4xl font-bold text-black">Welcome To Your Collection</h1>
        </div>
        <form action="#">
          {/* <div className="mt-5 text-black">
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              id="username"
              className="block w-full p-2 border rounded border-gray-500"
            />
          </div>
          <div className="mt-5 text-black">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="block w-full p-2 border rounded border-gray-500"
            />
          </div> */}
          <div className="mt-10">
            <input
              onClick={authenticate}
              type="submit"
              value="Login with Wallet"
              className="py-3 bg-yellow-500 hover:bg-green-600 rounded text-white text-center w-full animate-pulse"
            />
          </div>
        </form>
      </div>
    </div>

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
