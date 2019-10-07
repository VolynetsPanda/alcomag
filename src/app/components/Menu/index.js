import React from 'react';
import "./style.css";

function Menu({listLink, activeLink, handleOpenMenu}){
    return (
        <ul className='wrapMenu'>
            {
                listLink.map(elem => (
                    <li key={elem.id} className={`width100 li ${activeLink==elem.id && 'activeLinkMenu'}`}>
                        <a
                            className={`linkMenu`}
                            href='#'
                            onClick={(e) => {handleOpenMenu(e, elem.id)}}>{elem.name}</a>
                    </li>
                ))
            }
        </ul>
    );
}

export default Menu;