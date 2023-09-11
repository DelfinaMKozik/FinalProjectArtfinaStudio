import React, {useState} from "react";
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import "../styles/components/NavBar.scss"



export default function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

    return (
        <div className="container container_navBar">
            <div className="navBar">
                <div className="rightSide" id={openLinks ? "open" : "close"}>
                    <ul className="hiddenLinks">
                            <li className="menu_element_hl"><Link to="/about">ABOUT</Link></li>
                            <li className="menu_element_hl"><Link to="/gallery">GALLERY</Link></li>
                            <li className="menu_element_hl"> <Link to="/shop">SHOP</Link></li>
                    </ul>
                </div>
                <ul className="menu leftSide">
                    <li className="menu_element"><Link to="/about" style={{ textDecoration: 'none', color: "black" }} >ABOUT</Link></li>
                    <li className="menu_element"><Link to="/gallery" style={{ textDecoration: 'none', color: "black"}}>GALLERY</Link></li>
                    <li className="menu_element"> <Link to="/shop" style={{ textDecoration: 'none', color:"black" }}>SHOP</Link></li>
                    <button onClick={toggleNavbar}>
                        <FontAwesomeIcon icon={faBars} style={{color: "#000000", width: "20px", height: "20px"}} />
                    </button>
                </ul>
                <Link to="/" style={{ textDecoration: 'none' }}><h1 className="logo" style={{textDecoration: "none"}}>ArtFinaStudio </h1></Link>
                <div className="action-outer">
                    <div className="user icons">
                        <Link to="/logIn"> <FontAwesomeIcon icon={faUser}  style={{color: "#000000", width: "20px", height: "20px"}} /></Link>

                    </div>
                    <div className="card icons">
                        <Link to="/checkout"><FontAwesomeIcon icon={faBagShopping} style={{color: "#000000", width: "20px", height: "20px"}} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}