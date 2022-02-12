import React from "react";
import './RecipeDescription.css';

const RecipeDescription = (props) => {
    return (
        <div className="recipeDescription">
            { props.recipe.ingredients.map(line => <p>{line}</p>) }
            <div className="instructions">
                { props.recipe.instructions.split('\n').map(line => <p className="recipeInstructions">{line}</p>) }
            </div>
        </div>
    );
}

export default RecipeDescription;