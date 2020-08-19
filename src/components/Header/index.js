import React from 'react';
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

import { MdShoppingBasket } from 'react-icons/md'

import { Container, Cart } from "./styles";

import Logo from '../../assets/images/logo.png'

export default function Header() {
    const cartSize = useSelector(state => state.cart.length);

    return (
       <Container>
           <Link to="/">
               <img src={Logo} alt="Netshoes" />
           </Link>

           <Cart to="/cart">
               <div>
                   <strong>Meu carrinho</strong>
                   <span>{cartSize} iten(s)</span>
               </div>
               <MdShoppingBasket size={33} color="#FFF"/>
           </Cart>
       </Container>
    );
}