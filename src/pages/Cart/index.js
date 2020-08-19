import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {formatPrice} from '../../util/format';

import * as SC from "./styles";
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete
} from 'react-icons/md'

import * as CartActions from "../../store/modules/cart/actions";
import { toast } from 'react-toastify';

export default function Cart(){
    const cart = useSelector(state => state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.amount * product.price)
    })));
    const total = useSelector(state => formatPrice(state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
    }, 0)));
    const dispatch = useDispatch();

    function handleDeleteProduct(id){
        dispatch(CartActions.removeFromCart(id));
    };

    function incrementAmount(product){
        dispatch(CartActions.updateAmount(product.id, product.amount + 1));
    }

    function decrementAmount(product){
        dispatch(CartActions.updateAmount(product.id, product.amount - 1));
    }

    function handleSubmitOrder(){
        if(cart.length == 0){
            toast.warn('Seu carrinho está vazio.')
            return;
        }
        
        alert("Pedido efetuado com sucesso! \n\n");
        Array.from(cart).forEach(product => {
            dispatch(CartActions.removeFromCart(product.id));
        });

    }

    return (
        <SC.Container>
            <SC.ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr key={product.id}>
                            <td>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormatted}</span>
                            </td>
                            <td>
                                <div>
                                    <button type="button" onClick={() => decrementAmount(product)}>
                                        <MdRemoveCircleOutline size={20} color="#7159c1"/>
                                    </button>
                                    <input type="number" readOnly value={product.amount} />
                                    <button type="button"onClick={() => incrementAmount(product)}>
                                        <MdAddCircleOutline size={20} color="#7159c1"/>
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{product.subtotal}</strong>
                            </td>
                            <td>
                                <button 
                                    type="button" 
                                    onClick={() => handleDeleteProduct(product.id)}
                                    data-cy="excluir-item"
                                >
                                    <MdDelete size={20} color="#7159c1"/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </SC.ProductTable>
            <footer>
                <button 
                    type="button" 
                    onClick={() => handleSubmitOrder()}
                    data-cy="finalizar-pedido"
                >Finalizar pedido</button>
                <SC.Total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                </SC.Total>
            </footer>
        </SC.Container>
    )
}