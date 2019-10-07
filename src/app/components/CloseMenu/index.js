import React from 'react';
import "./style.css";

function CloseMenu({handleCloseMenu, menuState}) {
    return <button onClick={handleCloseMenu} className={!menuState ? "open2 close" : 'close'}>X</button>
}

export default CloseMenu;