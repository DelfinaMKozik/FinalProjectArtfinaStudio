import React from "react";
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import "../styles/components/NavBar.scss"



export default function Navbar() {
    return (
        <div className="container container_navBar">
            <div className="navBar">
                <ul className="menu">
                    <li className="menu_element">ABOUT</li>
                    <li className="menu_element">GALLERY</li>
                    <li className="menu_element">SHOP</li>
                </ul>
                {/*<ul className="menu">*/}
                {/*    <li>*/}
                {/*        <Link to="/about">ABOUT</Link>*/}
                {/*        <Link to="/gallery">GALLERY</Link>*/}
                {/*        <Link to="/shop">SHOP</Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}
                <h1 className="logo">ArtFinaStudio</h1>
                <div className="action-outer">
                    <div className="user icons">
                        <FontAwesomeIcon icon={faUser}  style={{color: "#000000", width: "25px", height: "25px"}} />

                    </div>
                    <div className="card icons">
                            <FontAwesomeIcon icon={faBagShopping} style={{color: "#000000", width: "25px", height: "25px"}} />
                    </div>
                </div>
            </div>
        </div>
    )
}