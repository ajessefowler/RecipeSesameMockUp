import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItem = (props) => {
    return (
        <div className="cartItem">
            <p>{props.item}</p>
            <FontAwesomeIcon icon={faTrash} />
        </div>
    );
}

export default CartItem;