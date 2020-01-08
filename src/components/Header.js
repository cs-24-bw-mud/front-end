import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.scss'


function Header () {
    return(
        <>
        <div className= "link-container">
            <div className="link">
                <NavLink className="login-btn" to={"/login"}>
                    <span>Login</span>
                </NavLink>
            </div>
            <div className="link">
                <NavLink className="register-btn" to={"/registration"}>
                    <span>Register</span>
                </NavLink>
            </div>
            <div className="link">
                <NavLink className="home-btn" to={"/home"}>
                    <span>Home</span>
                </NavLink>
            </div>
            <div className="link">
                <NavLink to={"/about"}>
                    <span>About</span>
                </NavLink>
            </div>
        </div>
        </>
    )
}

export default (Header)