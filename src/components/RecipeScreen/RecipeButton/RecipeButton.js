import React from "react";
import './RecipeButton.css';

const RecipeButton = (props) => {
    const handleButtonClick = () => {
        if (props.setAddClicked) props.setAddClicked(true);
        if (props.setRecipeSaved) props.setRecipeSaved(true);
    }

    return props.enabled ? (
        <div className="recipeButton" onClick={handleButtonClick}>
            <p>{props.label}</p>
        </div>
    ) : (
        <div className="recipeButton disabled" onClick={handleButtonClick}>
            <p>{props.label}</p>
        </div>
    );
}

export default RecipeButton;