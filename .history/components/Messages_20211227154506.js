import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";

function Messages() {
    const { user } = useMoralis();
    
    return (
        <div className="pb-56">
            <div className="my-5">
                <ByMoralis 
                    variant="dark"
                    style={{ marginLeft:"auto", marginRight: "auto" }} />
            </div>

            <div>
                {/* Messages */}
            </div>

            <div>
                {/* Send Message */}
    
            </div>

            <div className="text-center text-green-100 mt-5">
                <p>You're up to date {user.getUsername()}!</p>
            </div>
            <h1>Messages</h1>
        </div>
    );
}

export default Messages
