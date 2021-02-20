import {useState, useRef} from 'react'

export default function SidebarLiveChat({socket}) {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [data, setData] = useState([]);

    // var fun = () => messages.map(mes => <p className="message">{mes}</p>)

    socket.on('code-share-message', data => setMessages([...messages,data]));

    function handelClick() {
        input === '' ? null : socket.emit('code-share-message', input);
        input === '' ? null : setInput("")
    }

    return (
        <div className="live-chat" id="draggable-div">
            <div className="chat-heading" id="chat-heading">Live Chat</div>
            <div className="message-wrapper">
                {
                    messages.map((message, index) => {
                        return <p className="message" key={index}> {message} </p>
                    })
                }
            </div>
            <div className="input-send">
                <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder={"message..."}/>
                <button onClick={handelClick}>
                    <i className="fa fa-send" style={{color: "blue"}}></i>
                </button>
            </div>
        </div>
    );
}
