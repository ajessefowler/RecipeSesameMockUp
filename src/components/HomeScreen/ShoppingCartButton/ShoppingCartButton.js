import React from "react";

const ShoppingCartButton = (props) => {
    const handleButtonClick = () => {
        props.setCartScreenIsOpen(true);
    }

    return (
        <div className="cartBtn" onClick={handleButtonClick}>
            <h3>Cart</h3>
        </div>
    );
}

export default ShoppingCartButton;