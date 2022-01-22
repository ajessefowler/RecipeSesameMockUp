import React from "react";
import RecipeCartContents from "../RecipeCartContents/RecipeCartContents";

const RecipeCartContainer = (props) => {
    return (
        <div className="recipeCart">
            <h2>Your Basket</h2>
            <RecipeCartContents cartContents={props.cartContents} addClicked={props.addClicked}/>
        </div>
    );
}

export default RecipeCartContainer;