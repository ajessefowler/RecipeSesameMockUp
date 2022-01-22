import React from "react";
import CartContents from "../CartContents/CartContents";
import CartHeader from "../CartHeader/CartHeader";

const CartContainer = (props) => {
    const closeCartScreen = () => {
        props.setCartScreenIsOpen(false);
    }

    return (
        <div className="cartContainer" onClick={closeCartScreen}>
            <div className="recipeCard">
                <CartHeader />
                <CartContents contents={props.cartContents} />
            </div>
        </div>
    );
}

export default CartContainer;