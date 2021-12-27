/* eslint-disable jsx-a11y/alt-text */
import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";

function Header() {
    const { user } = useMoralis();

    return (
        <div>
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
                    <div className="relative h-48 w-48">
                        {/* Avatar */}
                        <Avatar logoutOnPress />

                    </div>
                    {/* Welcome */}
                    {/* Username */}
                    {/* Change Username */}
                </div>
            </div>
        </div>
    );
}

export default Header;