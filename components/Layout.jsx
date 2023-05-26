import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function Layout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        textDecorationColor: "#722626",
        color: "#a5ffd9"
    }
    
    return(
        <div>
            <div className="navbar-wrapper">
                <img src="./images/portrait.jpg" className="portraitMobile" alt="Brock Penner's portrait" />
                <nav>
                    <NavLink 
                        to="/" 
                        style={({isActive}) => isActive ? activeStyles : null}>Home
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        style={({isActive}) => isActive ? activeStyles : null}>About
                    </NavLink>
                    <NavLink 
                        to="/projects" 
                        style={({isActive}) => isActive ? activeStyles : null}>Projects
                    </NavLink>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}