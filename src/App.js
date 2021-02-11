import Header from "./header/Header";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";
import io from "socket.io-client";
import "./styles.css";
import SidebarLiveChat from "./sidebarLiveChat/SidebarLiveChat";

export default function App() {
    var socket = io("https://chat-himanshu.herokuapp.com/");

    function sendUserName(socket, username) {
        socket.emit('username', username);
    }

    return (
        <div className="grid">
            <Header sendUsername={sendUserName} socketVar={socket}/>
            <Sidebar socket={socket}/>
            <Main socket={socket}/>
            {/*<SidebarLiveChat/>*/}
        </div>
    );
}
