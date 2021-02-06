import React from 'react';
import { NavLink  } from 'react-router-dom'
import { AiOutlineDashboard, AiFillDatabase, AiOutlineBars } from "react-icons/ai";

const Menu = () => {
    return (
        <div className="sidebar_menu">
            <nav>
                <ul id="navbar">
                    <NavLink to='/dashboard' activeClassName="active"><AiOutlineDashboard/><p>Dashboard</p></NavLink>
                    <NavLink to='/protocols' activeClassName="active"><AiFillDatabase/><p>Protocols</p></NavLink>
                    <NavLink to='/amam' activeClassName="active"><AiOutlineBars/><p>AMAM</p></NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;