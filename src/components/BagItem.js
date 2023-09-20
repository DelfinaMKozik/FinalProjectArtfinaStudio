import React, {useContext} from 'react';
import "../styles/elements/Checkout.scss";
import {ShopContext} from "../context/Shop-context";


function BagItem(props) {
    const { id,image, name, price} = props.data;
    const {bagItems,removeFromBag, addToBag, updateBagItemCount} = useContext(ShopContext)


    return (
        <div className="bagItem">
            <img src={image}/>
            <div className="product_description">
                <p className="checkout_product_title">{name}</p>
                <p className="checkout_product_price">£{price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromBag(id)}> - </button>
                    <input value={bagItems[id]} onChange={(e) => updateBagItemCount(Number(e.target.value), id)}/>
                    <button onClick={() => addToBag(id)}> + </button>
                </div>
            </div>

        </div>
    );
}

export default BagItem;