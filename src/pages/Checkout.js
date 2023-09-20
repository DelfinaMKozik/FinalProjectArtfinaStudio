import React, {useContext} from 'react';
import {ProductsList} from "../components/ProductsList";
import {ShopContext} from "../context/Shop-context";
// import ShopItem from "../components/ShopItem";
import BagItem from "../components/BagItem";
import "../styles/elements/Checkout.scss";
import {useNavigate} from "react-router-dom"

function Checkout() {
    const {bagItems,getTotalBagAmount } = useContext(ShopContext);
    const totalAmount = getTotalBagAmount();

    const navigate = useNavigate();

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
            {totalAmount > 0 ?
            <div className="total_checkout">
                <p className="total_checkout_subtotal">Subtotal: £ {totalAmount}</p>
                <button onClick={() => navigate("/shop")}>Continue Shopping</button>
                <button>Checkout</button>
            </div>
            : <h1 className="empty_bag">Your bag is empty ;( </h1>}
        </div>
    );
}

export default Checkout;