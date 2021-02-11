import SidebarLiveChat from "../sidebarLiveChat/SidebarLiveChat";
import SidebarUserList from "./sidebarUserList/SidebarUserList";

export default function Sidebar({socket}) {
    return (
        <div className="sidebar">
            <div className="sidebar-title">Users</div>
            <SidebarUserList socket={socket}/>
            <SidebarLiveChat socket={socket}/>
        </div>
    );
}
