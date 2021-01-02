import React, {Component} from "react";
import "./Navbar.css";
import {Link, NavLink} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                Navbar here
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink exact to='/home' className='nav-link'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/artists' className='nav-link'>Artists</NavLink>
                        </li>
                    </ul>
            </div>
        )
    }
}

export default Navbar;