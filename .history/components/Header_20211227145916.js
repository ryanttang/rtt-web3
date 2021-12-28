/* eslint-disable jsx-a11y/alt-text */
import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
    const { user } = useMoralis();

    return (
        <div className="sticky top-0 p-5 z-50 bg-white shadow-sm border-b-2 border-black text-blue-500">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image 
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        src="https://ryantang.site/img/cloudlogo.png"
                        />
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
        </div>
    );
}

export default Header;