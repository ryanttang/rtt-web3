/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import { useMoralis } from "react-moralis";
import Image from "next/image";

function Avatar({username, logoutOnPress}) {
    const {user, logout } = useMoralis();
    
    return (
        <Image 
            className="rounded-full cursor-pointer hover:opacity-75"
            src={`https://avatars.dicebear.com/api/adventurer-neutral/${username || user.get("username")
                }.svg`}
            onClick={() => logoutOnPress && logout()}
            layout="fill"
    />
    );
}

export default Avatar