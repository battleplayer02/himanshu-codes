import {useState, useEffect} from "react";
import User from "./User";

export default function SidebarUserList({socket}) {
    const [username, setuSername] = useState(null)
    socket.on('username-new', (data) => {
        setuSername(data);
        console.log(data);
    });


    return (
        <div className="scroll-wrapper">
            {
                username ? username.map((item, index) => <User key={index} user={item.name}/>) :
                    <p>Please add your <br/>username to see others.</p>
            }
        </div>
    );
}
