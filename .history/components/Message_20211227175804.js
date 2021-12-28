import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import TimeAgo from "timeago-react";

function Message( {message} ) {
    const { user } = useMoralis();

    const isUserMessage = message.get('ethAddress') === user.get('ethAddress');

    return (
        <div className={`flex items-end space-x-2 relative ${isUserMessage && "justify-end"}`}>
            
            <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
                <Avatar username={message.get("username")} />
            </div>
        
        <div className={`flex space-x-4 p-3 rounded-lg ${
            isUserMessage 
                ? "rounded-br-none bg-blue-300"
                : "rounded-bl-none bg-orange-400"
            }`}>

            <p>{message.get("message")}</p>
        </div>
        {/* Timestamp */}
        <TimeAgo
            className="text-xs text-gray-400 italic" 
            datetime={message.createdAt} />

        <p className={`absolute -bottom-5 text-xs ${isUserMessage ? "text-red-500" : "text-purple-400"}`}>
            {message.get("username")}
        </p>
        </div>
    );
}

export default Message