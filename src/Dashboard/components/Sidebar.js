import React from 'react';
import HeaderSidebar from "./Sidebar/HeaderSidebar";
import Menu from "./Sidebar/Menu";



const Sidebar = () => {
    return (
        <div className="sidebar_wrap">
            <HeaderSidebar/>
            <Menu/>
        </div>
    );
};

export default Sidebar;