import React from "react";

const AddIngredientsButton = (props) => {
    const handleButtonClick = () => {
        props.setAddClicked(true);
    }

    return (
        <div className="addIngredientsButton" onClick={handleButtonClick}>
            <p>Add to basket</p>
        </div>
    );
}

export default AddIngredientsButton;