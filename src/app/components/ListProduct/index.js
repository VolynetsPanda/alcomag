import React from 'react';
import "./style.css";

function ListProduct({list, addBasket}){
    return (
        <ul className='wrapProducts'>
            {
                list.map(elem=>(
                    <li key={elem.id} className="productItem">
                        <img className="productImg" src={elem.image_url}/>
                        <h3>{elem.name}</h3>
                        <p>{elem.description}</p>
                        <button onClick={()=>addBasket(elem)}>add</button>
                    </li>
                ))
            }
        </ul>
    );
}

export default ListProduct;