function SendMessage() {
    return (
        <form>
            <input 
                className="outline-none bg-transparent text-white border-4 border-black z-50"
                type="text" />
            <button className="font-bold text-white">
                Send
            </button>
        </form>
    )
}

export default SendMessage
