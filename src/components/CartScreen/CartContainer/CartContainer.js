import React from "react";
import CartContents from "../CartContents/CartContents";
import CartHeader from "../CartHeader/CartHeader";
import './CartContainer.css';

const CartContainer = (props) => {
    return (
        <div className="cartContainer">
            <div className="recipeCard">
                <CartHeader setCartScreenIsOpen={props.setCartScreenIsOpen}/>
                <CartContents contents={props.cartContents} />
            </div>
        </div>
    );
}

export default CartContainer;