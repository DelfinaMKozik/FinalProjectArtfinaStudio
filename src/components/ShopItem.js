import React, {useContext} from 'react';
import crazyCat from "../assets/catInWonderland.jpg";
import {ShopContext} from "../context/Shop-context";

function ShopItem(props) {
    const {id, image, name, price} = props.data;
    const {addToBag, bagItems} = useContext(ShopContext)

    const bagItemAmount = bagItems[id];

    return (
        <div className="shopItem">
            <div className="shopItem_img" style={{backgroundImage: `url(${image})`}}>
            </div>
            <h2 className="shopItem_title">{name}</h2>
            <p className="shopItem_price">£{price}</p>
            <button className="addToCartBtn" onClick={() => addToBag(id)}>
                Add To Bag {bagItemAmount > 0 && <> ({bagItemAmount}) </>}</button>
        </div>
    );
}

export default ShopItem;