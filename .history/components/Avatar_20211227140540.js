/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import { useMoralis } from "react-moralis"

function Avatar({username, logoutOnPress}) {
    const {user, logout } = useMoralis();
    
    return <Image 
        src={`https://avatars.dicebear.com/api/adventurer-neutral/${username || user.get('username')
    }`}
        onClick={(logoutOnPress && logout())}
        layout="fill"
    />
}

export default Avatar