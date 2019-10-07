import React, {Component} from 'react';
import "./style.css";
import {API_DRINK} from "../../module/helpers/constants";
import ListProduct from "../ListProduct";
import SearchProduct from "../SearchProduct";
import BasketList from "../BasketList";
export default class Content extends Component {
    /**
     *
     * @type {{search: string, listBasket: Array, windowBasket: boolean, list: Array}}
     */
    state={
        list:[],
        search:'',
        listBasket:[],
        windowBasket:false
    }
    componentDidMount() {
        this.getData()
    }
    onChangeSearch=(search)=>{
        this.setState({search})
        search.length>2 && this.getData(search)
    }
    toggleBasket=()=>{
        const {windowBasket} = this.state
        this.setState({windowBasket:!windowBasket})
    }
    addBasket=(val)=>{
        const {listBasket} = this.state
        let _id = val.id;
        if(listBasket.length!=0){
            for (let i = 0; i<listBasket.length; i++) {
                console.log(listBasket[i].id==_id)
            }
        } else listBasket.push(val)
        this.setState({listBasket:listBasket})
    }
    getData=(name)=>{
        const {activeLink} = this.props;
        const request = name!=null ? `beers?beer_name=${name}` : 'beers';
        fetch(`${API_DRINK}${request}`)
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    list:res
                })
            })
    }
    render() {
        const {list, search, listBasket, windowBasket} = this.state
        const {onChangeSearch, toggleBasket, addBasket} = this
        return (
            <div className='content'>
                {
                    windowBasket && <BasketList toggleBasket={toggleBasket} />
                }
                <SearchProduct
                    search={search}
                    onChangeSearch={(val)=>onChangeSearch(val)}
                    counter={listBasket.length}
                    toggleBasket={toggleBasket}
                />
                {list.length>0
                    ?<ListProduct list={list} addBasket={(val)=>addBasket(val)}/>
                    :<p>no goods</p>
                }
            </div>
        );
    }
}