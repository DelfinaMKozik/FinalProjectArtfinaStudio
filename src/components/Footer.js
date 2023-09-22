import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import "../styles/components/Footer.scss"

function Footer() {
    return (
        <div className="container_footer">
            <div className="footer">
                <div className="contact_section">
                    <div className="contact_section_el contact_section_el_line">
                        <h2 className="footer_title">Get In Touch</h2>
                        <p className="footer_element"><a href="mailto:artfinastudio@gmail.com">Email us</a></p>
                        <p className="footer_element">+44 (0) 7856 387698</p>
                    </div>
                    <div className="contact_section_el">
                        <h2 className="footer_title">Delivery</h2>
                        <p className="footer_element">UK Shipping</p>
                        <p className="footer_element">European Shipping</p>
                        <p className="footer_element">UK Returns</p>
                        <p className="footer_element">International Returns</p>
                    </div>
                </div>
                <div className="footer_bottomSection">
                    <div className="copyright">
                        <FontAwesomeIcon icon={faCopyright} style={{color: "#000000",}} />2023 ArtFinaStudio
                    </div>
                    <div className="icons_socialMedia">
                        <a href="https://www.instagram.com/artfinastudio/?fbclid=IwAR05NqdueVSdRNMxCysvyZJXyQtjZcuJqqL9Ij3GWzw5T4zCTXQ3Y2LuAOg"><FontAwesomeIcon icon={faInstagram} style={{color: "#bf1da9",width: "25px", height:"25px"}} className="socialMedia_el" /></a>
                        <a href="https://www.facebook.com/artfinastudio/"><FontAwesomeIcon icon={faFacebook} style={{color: "#177fcf",width: "25px", height:"25px"}} className="socialMedia_el"/></a>
                        <a href="https://www.pinterest.co.uk/delfina1229/"><FontAwesomeIcon icon={faPinterest} style={{color: "#c12525",width: "25px", height:"25px"}} className="socialMedia_el"/></a>
        </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;