import React from 'react';
import crazyCat from "../assets/catInWonderland.jpg";

function ShopItem({image, name, price}) {
    return (
        <div className="shopItem">
            <div className="shopItem_img" style={{backgroundImage: `url(${image})`}}>
            </div>
            <h2 className="shopItem_title">{name}</h2>
            <p className="shopItem_price">£{price}</p>
        </div>
    );
}

export default ShopItem;