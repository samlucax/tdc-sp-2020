import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {ProductList} from "./styles";

import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';
import { formatPrice} from '../../util/format';

import * as CartActions from "../../store/modules/cart/actions";

export default function Home() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const amount = useSelector(state => state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount
        return amount;
    }, {}));

    useEffect(() => {
        loadProducts();
    }, [])


    async function loadProducts() {
        const response = await api.get('products');
        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price)
        }));
        setProducts(data);
    }

    function handleAddProductToCart(id){
        dispatch(CartActions.addToCart(id));
    }

    return (
        <ProductList>
            { products.map(product => (
                <li key={product.id}>
                    <img
                        src={product.image}
                        alt={product.title}
                    />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>

                    <button type="button" onClick={() => handleAddProductToCart(product.id)}>
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" /> {amount[product.id]}
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
            ))}
        </ProductList>
    )
}