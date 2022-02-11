import React from "react";
import './RecipeDescription.css';

const RecipeDescription = (props) => {
    return (
        <div className="recipeDescription">
            { props.recipe.ingredients.map(line => <p>{line}</p>) }
            <p className="recipeInstructions">{ props.recipe.instructions }</p>
        </div>
    );
}

export default RecipeDescription;