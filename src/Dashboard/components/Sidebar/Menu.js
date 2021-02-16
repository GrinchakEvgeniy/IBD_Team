import React, {useState, useEffect} from 'react';
import { NavLink  } from 'react-router-dom'
import { AiOutlineDashboard, AiFillDatabase, AiOutlineBars } from "react-icons/ai";

const Menu = () => {
    const [amamMenu, setAmamMenu] = useState(false);

    return (
        <div className="sidebar_menu">
            <nav>
                <ul id="navbar">
                    <NavLink to='/dashboard' activeClassName="active"><AiOutlineDashboard/><p>Dashboard</p></NavLink>
                    <NavLink to='/protocols' activeClassName="active"><AiFillDatabase/><p>Protocols</p></NavLink>
                    <div className="amam_menu" onMouseEnter={()=>setAmamMenu(true)} onMouseLeave={()=>setAmamMenu(false)}>
                        <NavLink to='/amam' className="amam_link" activeClassName="active">
                            <AiOutlineBars/>
                            <p>AMAM</p>
                        </NavLink>
                        <div className="amam_sub_menu" style={{display: amamMenu ? "block" : "none"}}>
                            <NavLink to='/amam/subfields' activeClassName="active"><p>SubFields</p></NavLink>
                        </div>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;