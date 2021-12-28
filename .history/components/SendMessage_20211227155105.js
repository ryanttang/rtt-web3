import { useMoralis } from "react-moralis"

function SendMessage() {
    const { user, Moralis } = useMoralis();
    return (
        <form className="flex">
            <input 
                className="flex-grow outline-none bg-transparent text-white placeholder-gray-500"
                type="text"
                placeholder={`Enter a message ${user.getUsername()}...`} />
            <button className="font-bold text-white">
                Send
            </button>
        </form>
    )
}

export default SendMessage
