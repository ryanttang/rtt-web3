import { useMoralis } from "react-moralis"
import { useState } from "react";

function SendMessage() {
    const { user, Moralis } = useMoralis();
    const [message, setMessage] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        if(!message) return;

        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress'),
        }).then(
            (message) => {
                // The object was saved successfully.
        },
            (error) => {
            // Save failed: error code + message
            console.log(error.message);
        }
    );
};


    return (
        <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-white-400">
            <input 
                className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder={`Enter a message ${user.getUsername()}...`} />
            <button 
                className="font-bold text-white"
                type="submit"
                onClick={sendMessage}>
                
                Send
            </button>
        </form>
    )
}

export default SendMessage