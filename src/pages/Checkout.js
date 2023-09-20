import React, {useContext} from 'react';
import {ProductsList} from "../components/ProductsList";
import {ShopContext} from "../context/Shop-context";
// import ShopItem from "../components/ShopItem";
import BagItem from "../components/BagItem";
import "../styles/elements/Checkout.scss";

function Checkout() {
    const {bagItems} = useContext(ShopContext);


    return (
        <div className="checkout_page">
            {/*<h1>Checkout</h1>*/}
            {/*<ComingSoon/>*/}
            <h1 className="checkout_title">Your Bag Items</h1>
            <div className="bag_items">
                {ProductsList.map((product) => {
                    if(bagItems[product.id] !== 0) {
                        return <BagItem data={product}/>
                    }
                })}
            </div>
        </div>
    );
}

export default Checkout;