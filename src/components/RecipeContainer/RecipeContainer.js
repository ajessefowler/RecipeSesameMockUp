import React from "react";

const RecipeContainer = (props) => {
    const closeRecipeScreen = () => {
        props.setRecipeScreenIsOpen(false);
    }

    return (
        <div className="recipeContainer" onClick={closeRecipeScreen}>
            <div className="recipeContent">
                <h2>{props.openRecipe}</h2>
            </div>
        </div>
    );
}

export default RecipeContainer;