import React from 'react';
import "../styles/elements/Gallery.scss"
import ComingSoon from "../components/ComingSoon";
import crazyPattern from "../assets/artsyVibePatItem.jpg";
import birdInSunshine from "../assets/BirdGoodLight.jpg";
import carMural from "../assets/CarMuralB.jpg";
import garbusMural from "../assets/CarMuralGarbus.jpg";
import catInWonderland from "../assets/catInWonderland.jpg";
import arstyCow from "../assets/CowItem.jpg";
import crazyEyeItem from "../assets/crazyEyeItem.jpg";
import buddhaDenim from "../assets/denimJacket.jpg";
import dog from "../assets/DogItem.jpg";
import firstOwl from "../assets/forstDEsignOwl.jpg";
import frontPocket from "../assets/FrontPocketItem.jpg";
import motorcycles from "../assets/galleryEl.JPG";
import ferrari from "../assets/orangeCar.jpg";
import photoDenim from "../assets/PhotographyItem.jpg";
import polRock from "../assets/PolRockDEsign.jpg";
import twoEL from "../assets/TwoItemsGallery.jpg";

function Gallery() {
    return (
        <div className="gallery_page">
            <h1 className="gallery_title">Gallery</h1>
            <div className="gallery_content">
                <img src={twoEL} alt="" className="gallery_el"/>
                <img src={carMural} alt="Car Mural" className="gallery_el"/>
                <img src={garbusMural} alt="Garbus mural" className="gallery_el"/>
                <img src={crazyEyeItem} alt="techno style eye design" className="gallery_el"/>
                <img src={buddhaDenim} alt="buddha design on denim jacket" className="gallery_el"/>
                <img src={crazyPattern} alt="crazy high pattern on the t-shirt" className="gallery_el"/>
                <img src={birdInSunshine} alt="bird in sunshine in the cherry tree painting on back of the t-shirt" className="gallery_el"/>
                <img src={catInWonderland} alt="Cat in wonderland on the t-shirt " className="gallery_el"/>
                <img src={arstyCow} alt="folklore figures on the bull's skull" className="gallery_el"/>
                <img src={dog} alt="splash of colors designing a boxer" className="gallery_el"/>
                <img src={firstOwl} alt="first design - owl on the blue t-shirt using acrylics" className="gallery_el"/>
                <img src={frontPocket} alt="" className="gallery_el"/>
                <img src={motorcycles} alt="" className="gallery_el"/>
                <img src={ferrari} alt="" className="gallery_el"/>
                <img src={photoDenim} alt="" className="gallery_el"/>
                <img src={polRock} alt="" className="gallery_el"/>
            </div>
        </div>
    );
}

export default Gallery;