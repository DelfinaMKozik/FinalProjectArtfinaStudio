import React from "react";
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
    return (
        <div className="navBar">
            <ul className="menu">
                <li>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/gallery">GALLERY</Link>
                    <Link to="/shop">SHOP</Link>
                </li>
            </ul>
            <h1 className="logo">ArtFinaStudio</h1>
            <div className="action-outer">
                <div className="user">
                    <FontAwesomeIcon icon={faUser} style={{color: "#000000",}} />

                </div>
                <div className="card">
                        <FontAwesomeIcon icon={faBagShopping} style={{color: "#000000",}} />
                </div>
            </div>
        </div>
    )
}