import { useMoralis } from "react-moralis";

function Message( {message} ) {
    const {user } = useMoralis();

    const isUserMessage = message.get('ethAddress') === user.get('ethAddress');

    return (
        <div>
        <div className={`flex space-x-4 p-3 rounded-lg ${
            isUserMessage 
                ? "rounded-br-none bg-blue-300"
                : "rounded-bl-none bg-orange-400"
            }`}>

            <p>{message.get("message")}</p>
        </div>
        </div>
    );
}

export default Message