/* eslint-disable jsx-a11y/alt-text */
import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";

function Header() {
    const { user } = useMoralis();

    return (
        <div>
            <div className="">
                <div className="relative h-22 w-22 mx-auto hidden lg:inline-grid">
                    <Image 
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        src="https://ryantang.site/img/cloudlogo.png"
                        />
                </div>
            </div>
        </div>
    );
}

export default Header;