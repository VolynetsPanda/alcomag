import React from 'react';
import "./style.css";
import Basket from "../Basket";

function SearchProduct({search, onChangeSearch, counter, toggleBasket }){
    return (
        <div className='centerFlex'>
            <input type="text" value={search} onChange={(e)=>onChangeSearch(e.target.value)}/>
            <Basket counter={counter} toggleBasket={toggleBasket} />
        </div>
    );
}

export default SearchProduct;