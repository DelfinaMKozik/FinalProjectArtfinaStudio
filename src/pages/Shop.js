import React from 'react';
import "../styles/elements/Shop.scss"
import {ProductsList} from "../components/ProductsList";
import ShopItem from "../components/ShopItem";

function Shop() {
    return (
        <div className="shop_page">
            <h1 className="shop_title">Find your design</h1>
            <div className="products_list">{ProductsList.map((product, key) => {
                return (
                    <ShopItem
                        key={key}
                        image={product.image}
                        name={product.name}
                        price={product.price}/>)
            })}</div>
        </div>
    );
}

export default Shop;