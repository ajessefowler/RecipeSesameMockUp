import React from "react";
import CartItem from "../CartItem/CartItem";

const CartContents = (props) => {
    return (
        <div className="cartContents">
            { props.contents.map((item, index) => (
                <CartItem key={index} item={item} />
            )) }
        </div>
    );
}

export default CartContents;