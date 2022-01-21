import React from "react";

const ShoppingCartContainer = (props) => {
    const closeCartScreen = () => {
        props.setCartScreenIsOpen(false);
    }

    return (
        <div className="cartContainer" onClick={closeCartScreen}>
            <div className="cartContent">
                <h2>Shopping Cart</h2>
            </div>
        </div>
    );
}

export default ShoppingCartContainer;