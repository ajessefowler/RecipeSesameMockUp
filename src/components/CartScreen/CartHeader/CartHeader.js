import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CartHeader = () => {
    return (
        <div className="cardHeader">
            <h1>Shopping Basket</h1>
            <FontAwesomeIcon icon={faTimes} size="2x"/>
        </div>
    );
}

export default CartHeader;