/* eslint-disable jsx-a11y/alt-text */
import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";

function Header() {
    const { user } = useMoralis();

    return (
        <div className="text-blue-500">
            <div className="">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image 
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        src="https://ryantang.site/img/cloudlogo.png"
                        />
                </div>
                <div>
                    {/* Avatar */}
                    <div className="relative h-48 w-48 lg:mx-auto border-black border-8 rounded-full">
                        <Avatar logoutOnPress />
                    </div>
                    {/* Welcome */}
                    <h1 className="text-3xl">Welcome</h1>
                    {/* Username */}
                    {/* Change Username */}
                </div>
            </div>
        </div>
    );
}

export default Header;