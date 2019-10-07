import React from 'react';
import "./style.css";

function BasketList({list, toggleBasket}) {
    return (
        <div className='wrapBasket'>
            <div className="bgClose" onClick={toggleBasket}></div>
            <div className='basketBlock'>fsdfsdsd</div>
        </div>
    )
}

export default BasketList;