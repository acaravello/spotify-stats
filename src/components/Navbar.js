import React, {Component} from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";

import { IconSpotify, IconUser, IconTime, IconMicrophone, IconPlaylist, IconMusic } from '../assets/icons';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="Navbar-Title">
                    Spotify Stats
                </div>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink exact to='/home' className='nav-link'> <IconUser />Profile</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/artists' className='nav-link'> <IconMicrophone /> Top Artists</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/tracks' className='nav-link'> <IconMusic /> Top Tracks</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/playlists' className='nav-link'> <IconPlaylist /> Playlists</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/activities' className='nav-link'> <IconTime /> Activities </NavLink>
                        </li>
                    </ul>
                    <div className='spotify-link'>
                        <a href="https://developer.spotify.com/discover/"  target="_blank" rel="noreferrer" className='nav-link'> <IconSpotify /> </a>
                        </div>

            </div>
        )
    }
}

export default Navbar;