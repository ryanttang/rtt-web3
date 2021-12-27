import { useMoralis } from "react-moralis";

function Header() {
    const { user } = useMoralis();
    return (
        <div>
            <h1>Header</h1>
        </div>
    )
}

export default Header;