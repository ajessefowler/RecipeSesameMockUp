import React from "react";

const CartItem = (props) => {
    return (
        <div className="cartItem">
            <p>{props.item}</p>
        </div>
    );
}

export default CartItem;