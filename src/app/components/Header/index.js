import React, {Component} from 'react';
import "./style.css";
import Menu from "../Menu"

export default class Header extends Component {
    render() {
        const {menuState, handleOpenMenu, activeLink, listLink} = this.props
        return (
            <header className={!menuState ? 'open' : ''}>
                <Menu
                    activeLink={activeLink}
                    listLink={listLink}
                    handleOpenMenu={(e, id)=>handleOpenMenu(e, id)}
                />
            </header>
        );
    }
}