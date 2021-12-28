import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";

function Messages() {
    return (
        <div className="pb-56">
            <div className="my-5">
                <ByMoralis 
                    variant="dark"
                    style={{ marginLeft:"auto", marginRight: "auto" }} />
            </div>
            <h1>Messages</h1>
        </div>
    );
}

export default Messages
