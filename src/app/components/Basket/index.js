import React from 'react';
import "./style.css";

function Basket({toggleBasket, counter}) {
    return <span onClick={toggleBasket} className="btnBasket">{counter}</span>
}

export default Basket;