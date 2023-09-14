import React from 'react';
import "../styles/elements/Home.scss"
import buddhaDesign from "../assets/BlackAndWhiteBackground.JPG"
import crazyCat from "../assets/catInWonderland.jpg"
import {Link} from "react-router-dom"


function Home() {
    return (
        <div className="container_home">
            <div className="home_page">
                <div className="slogan">
                    <h2 className="slogan_title">BE BOLD, BE UNIQUE, BE IN STYLE </h2>
                    <p className="slogan_element">Why not get your unique denim design on?</p>
                </div>
                <div className="banner_display">
                    <div className="buddha_design banner_display_element" style={{backgroundImage: `url(${buddhaDesign})`}}>
                        <Link to="/shop"><button className="banner_btn">SHOP HERE</button></Link>
                    </div>
                    <div className="crazyCat_design banner_display_element" style={{backgroundImage: `url(${crazyCat})`}}>
                        <Link to="/shop"><button className="banner_btn">SHOP HERE</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
