/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
import Message from "./Message";
import Image from "next/image";


// Only show messages from last x minutes
const MINS_DURATION = 10000;

function Messages() {
    const { user } = useMoralis();
    const endOfMessagesRef = useRef(null);
    const { data, loading, error } = useMoralisQuery(
        "Messages",
        (query) => 
            query
                .ascending("createdAt").greaterThan("createdAt", 
                new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
        [],
        {
            live: true
        }
    );
    
    return (
        <div className="pb-56 z-40">
            <div className="my-5">
                <ByMoralis 
                    variant="dark"
                    style={{ marginLeft:"auto", marginRight: "auto" }} />
            </div>

            <div className="space-y-10 p-4">
                {/* Messages */}
                {data.map(message =>  (
                    <Message key={message.id} message={message} />
                ))}
            </div>

            <div className="flex justify-center">
                {/* Send Message */}
                <SendMessage endOfMessagesRef={endOfMessagesRef} />
            </div>

            <div 
                className="text-center text-green-100 mt-5"
                ref={endOfMessagesRef}>
                <p>You're up to date {user.getUsername()}!</p>
            </div>
        </div>

        
    );

}

export default Messages
