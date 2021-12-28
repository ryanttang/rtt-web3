import { useMoralis } from "react-moralis"

function SendMessage() {
    const { user, Moralis } = useMoralis();
    const [message, setMessage] = useState("");


    return (
        <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-white-400">
            <input 
                className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder={`Enter a message ${user.getUsername()}...`} />
            <button className="font-bold text-white">
                Send
            </button>
        </form>
    )
}

export default SendMessage
