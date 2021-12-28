function SendMessage() {
    return (
        <form>
            <input 
                className="outline-none bg-transparent text-white placeholder-gray-500"
                type="text"
                placeholder={`Enter a message ${user.getUsername()}...`} />
            <button className="font-bold text-white">
                Send
            </button>
        </form>
    )
}

export default SendMessage
