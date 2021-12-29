/* eslint-disable jsx-a11y/alt-text */
import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
    const { user } = useMoralis();

    return (
        <><header className="absolute w-full h-16 bg-white shadow-md transition lg:h-20">
            <nav className="container m-auto py-3 lg:px-20 lg:py-4">
                <div classNameName="relative flex flex-wrap items-center justify-between">
                    <div className="relative z-10 w-full px-6 flex items-center justify-between lg:w-auto">
                    <Image
                            layout="fill"
                            objectFit="contain"
                            className="rounded-full"
                            src="https://ryantang.site/img/cloudlogo.png" />

                        <button id="hamburger" className="relative w-10 h-10 lg:hidden">
                            <div role="hidden" id="line" className="inset-0 w-6 h-0.5 m-auto rounded-full bg-gray-500 transition duration-300"></div>
                            <div role="hidden" id="line2" className="inset-0 w-6 h-0.5 mt-1.5 m-auto rounded-full bg-gray-500 transition duration-300"></div>
                        </button>
                    </div>

                    <div id="navlinks" className="hidden w-full px-6 bg-white transition lg:block lg:w-auto lg:px-0 lg:bg-transparent">
                        <ul className="py-4 text-gray-600 text-lg tracking-wide lg:flex lg:space-x-8 lg:py-0">
                            <li>
                                <a href="" className="block w-full py-3 transition hover:text-cyan-600">Portfolio</a>
                            </li>
                            <li>
                                <a href="" className="block w-full py-3 transition hover:text-cyan-600">Services</a>
                            </li>
                            <li>
                                <a href="" className="block w-full py-3 transition hover:text-cyan-600">About</a>
                            </li>
                            <li>
                                <a href="" className="block w-full py-3 transition hover:text-cyan-600">Blog</a>
                            </li>
                            <li className="mt-4 lg:mt-0">
                                <a href="" className="block w-full py-3 px-6 rounded-xl bg-cyan-500 transition hover:bg-cyan-600 focus:bg-cyan-700 active:bg-cyan-800">
                                    <span className="block text-center text-white font-semibold lg:text-base">Contact us</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header><div className="relative top-10 p-5 z-50 bg-white shadow-sm border-b-2 border-black text-blue-500">
                <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                    <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                        <Image
                            layout="fill"
                            objectFit="contain"
                            className="rounded-full"
                            src="https://ryantang.site/img/cloudlogo.png" />
                    </div>
                    <div className="col-span-4 text-left lg:text-center">
                        {/* Avatar */}
                        <div className="relative h-48 w-48 lg:mx-auto border-black border-8 rounded-full">
                            <Avatar logoutOnPress />
                        </div>
                        {/* Welcome */}
                        <h1 className="text-3xl">Welcome</h1>
                        <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

                        {/* Username */}
                        {/* Change Username */}
                        <ChangeUsername />
                    </div>
                </div>
            </div></>
    );
}

export default Header;