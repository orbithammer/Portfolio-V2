import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function Layout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#0080FF"
    }
    
    return(
        <div>
            <div className="navbarWrapper">
                <img src="./images/portrait.png" className="portrait" />
                <nav>
                    <NavLink 
                        to="/" 
                        style={({isActive}) => isActive ? activeStyles : null}>Home
                    </NavLink>{` `}
                    <NavLink 
                        to="/about" 
                        style={({isActive}) => isActive ? activeStyles : null}>About
                    </NavLink>{` `}
                    <NavLink 
                        to="/projects" 
                        style={({isActive}) => isActive ? activeStyles : null}>Projects
                    </NavLink>{` `}
                    <NavLink 
                        to="/contact" 
                        style={({isActive}) => isActive ? activeStyles : null}>Contact
                    </NavLink>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}