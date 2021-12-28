function SendMessage() {
    return (
        <form>
            <input 
                className="outline-none bg-transparent text-white placeholder-gray-500"
                type="text" />
            <button className="font-bold text-white">
                Send
            </button>
        </form>
    )
}

export default SendMessage
