import { useMoralis } from "react-moralis"

function SendMessage() {
    const { user, Moralis } = useMoralis();
    return (
        <form className="flex w-11/12">
            <input 
                className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
                type="text"
                placeholder={`Enter a message ${user.getUsername()}...`} />
            <button className="font-bold text-white">
                Send
            </button>
        </form>
    )
}

export default SendMessage
