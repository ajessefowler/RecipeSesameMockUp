import React from "react";
import RecipeCartContents from "../RecipeCartContents/RecipeCartContents";
import './RecipeCartContainer.css';

const RecipeCartContainer = (props) => {
    return (
        <div className="recipeCart">
            <h2>Your Ingredients</h2>
            <RecipeCartContents cartContents={props.cartContents} addClicked={props.addClicked}/>
        </div>
    );
}

export default RecipeCartContainer;