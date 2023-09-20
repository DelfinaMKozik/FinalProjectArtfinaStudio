import React from 'react';
import ComingSoon from "../components/ComingSoon";
import "../styles/elements/About.scss";
import startImage from "../assets/aboutImg.JPG";
import motorItems from "../assets/galleryEl.JPG";
import twoModel from "../assets/TwoItemsGallery.jpg";
import "../styles/elements/About.scss"

function About() {
    return (
        <div className="about_page">
            {/*<ComingSoon/>*/}

            <h1 className="about_me_title">Who we are</h1>
            <div className="about_description">
                <div className="about_page_el">
                    <img src={startImage}/>
                    <h2 className="about_page_el_title about_page_el_title_color1">History of ArtFinaStudio</h2>
                    <p className="about_page_el_description">It has all started during pandemic in the outskirts of Gliwice. I have decided to grab the paint and try my first Owl painting on the second hand blue t-shirt.This was the moment when my vision first started going wild...</p>
                </div>
                <div className="about_page_el">
                    <img src={motorItems}/>
                    <h2 className="about_page_el_title about_page_el_title_color2">Focusing on the Individuality</h2>
                    <p className="about_page_el_description">We believe that clothing can express inner us, hence simple denim can make a big statement. The customize clothing match your personality and inner you. </p>
                </div>
                <div className="about_page_el">
                    <img src={twoModel}/>
                    <h2 className="about_page_el_title about_page_el_title_color3">Sustainability in Fashion</h2>
                    <p className="about_page_el_description">Using second hand materials and recycled materials is the best way to contribute to cleaner planet. We want to spread the word to everyone to take one extra step for better future. </p>
                </div>

            </div>
        </div>
    );
}

export default About;