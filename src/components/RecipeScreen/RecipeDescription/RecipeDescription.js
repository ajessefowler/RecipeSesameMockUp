import React from "react";
import './RecipeDescription.css';

const RecipeDescription = (props) => {
    return (
        <div className="recipeDescription">
            { props.description.map(line => <p>{line}</p>) }
        </div>
    );
}

export default RecipeDescription;