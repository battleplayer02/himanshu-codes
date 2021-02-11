export default function SidebarLiveChat() {


    return (
        <div className="live-chat" id="draggable-div">
            <div className="chat-heading" id="chat-heading">Live Chat</div>
            <div className="message-wrapper">
                <p className="message">himanshu: message</p>
                <p className="message">himanshu: message</p>
                <p className="message">himanshu: message</p>
            </div>
            <div className="input-send">
                <input type="text"/>
                <button>
                    <i className="fa fa-send" style={{color: "blue"}}></i>
                </button>
            </div>
        </div>
    );
}
