import React from 'react';
import { Link, withRouter } from 'react-router-dom';


function Header () {
    return(
        <>
        <div className= "link-container">
            <div className="link">
                <button component={Link} to={"/login"}>
                    <span>Login</span>
                </button>
            </div>
            <div className="link">
                <button component = {Link} to={"/register"}>
                    <span>Register</span>
                </button>
            </div>
        </div>
        </>
    )
}

export default withRouter(Header)