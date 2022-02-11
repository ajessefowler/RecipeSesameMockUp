import React from "react";
import './RecipeDescription.css';

const RecipeDescription = (props) => {
    //{ props.description.map(line => <p>{line}</p>) }
    return (
        <div className="recipeDescription">
            { props.recipe.ingredients.map(line => <p>{line}</p>) }
            <p>{ props.recipe.instructions }</p>
        </div>
    );
}

export default RecipeDescription;