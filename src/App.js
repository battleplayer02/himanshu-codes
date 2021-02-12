import Header from "./header/Header";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";
import io from "socket.io-client";
import "./styles.css";
import {useState} from "react";

var Parda = () => {
    return <div style={{
        background: "#1E1F26",
        width: "100vw",
        height: "calc(100vh - 50px)",
        position: "absolute",
        zIndex: "100",
        bottom: 0,
        opacity: 0.9,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "1px #fff solid"
    }}>
        <h1
            style={{
                color: "wheat", fontSize: '50px',letterSpacing:"6px"
            }}
        >
            Enter Your Username .
        </h1>
    </div>;

}

export default function App() {
    var socket = io("https://chat-himanshu.herokuapp.com/");
    const [flag, setFlag] = useState(0);

    function sendUserName(socket, username) {
        socket.emit('username', username);
    }

    return (
        <div className="grid">
            <Header sendUsername={sendUserName} socketVar={socket} flagSetter={setFlag}/>
            <Sidebar socket={socket}/>
            <Main socket={socket}/>
            {
                flag === 0 ?
                    <Parda/> :
                    null
            }
        </div>
    );
}
