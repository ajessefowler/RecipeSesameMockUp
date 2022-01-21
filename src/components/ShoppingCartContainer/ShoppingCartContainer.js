import React from "react";
import ShoppingCartHeader from "../ShoppingCartHeader/ShoppingCartHeader";

const ShoppingCartContainer = (props) => {
    const closeCartScreen = () => {
        props.setCartScreenIsOpen(false);
    }

    return (
        <div className="cartContainer" onClick={closeCartScreen}>
            <div className="recipeCard">
                <ShoppingCartHeader />
            </div>
        </div>
    );
}

export default ShoppingCartContainer;