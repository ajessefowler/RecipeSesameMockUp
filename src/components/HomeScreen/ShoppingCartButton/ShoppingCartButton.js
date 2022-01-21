import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const ShoppingCartButton = (props) => {
    const handleButtonClick = () => {
        props.setCartScreenIsOpen(true);
    }

    return (
        <div className="cartBtn" onClick={handleButtonClick}>
            <FontAwesomeIcon icon={faShoppingBasket} size="2x"/>
        </div>
    );
}

export default ShoppingCartButton;