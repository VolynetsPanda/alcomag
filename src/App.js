import React, {Component} from 'react';
import './App.css';
import Header from "./app/components/Header";
import CloseMenu from "./app/components/CloseMenu";
import Content from "./app/components/Content";

/**
 * Screen App
 */
export default class App extends Component{
  /**
   * 1. menuState - state menu true/false
   * 2. listLink - List of menu links
   * 3. activeLink -
   * @type {{activeLink: null, menuState: boolean, listLink: *[], list: Array}}
   */
  state={
    menuState:true,
    listLink:[{name:"Drink", id:0},{name:"Food", id:1},{name:"Deliver", id:2}],
    activeLink:null
  }

  /**
   *
   * @param e
   * @param id
   */
  handleOpenMenu=(e, id)=>{
    e.preventDefault()
    this.setState({
      menuState:false,
      activeLink:id
    })
  }

  /**
   * Close menu
   */
  handleCloseMenu=()=>{
    this.setState({
      menuState:true,
      activeLink:null
    })
  }
  render() {
    const {handleOpenMenu, handleCloseMenu} = this
    const {menuState, listLink, activeLink} = this.state
    return (
        <div className="App">
          <div className="wrap">

            <Header
                handleOpenMenu={(e, id)=>handleOpenMenu(e, id)}
                menuState={menuState}
                listLink={listLink}
                activeLink={activeLink}
            />
            <CloseMenu handleCloseMenu={handleCloseMenu} menuState={menuState}  />
            {activeLink!=null &&
              <Content activeLink={activeLink} />
            }
          </div>
        </div>
    );
  }
}
