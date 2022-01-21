import React from "react";
import CartHeader from "../CartHeader/CartHeader";

const CartContainer = (props) => {
    const closeCartScreen = () => {
        props.setCartScreenIsOpen(false);
    }

    return (
        <div className="cartContainer" onClick={closeCartScreen}>
            <div className="recipeCard">
                <CartHeader />
            </div>
        </div>
    );
}

export default CartContainer;