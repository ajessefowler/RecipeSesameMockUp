import React from "react";

const RecipeDescription = (props) => {
    return (
        <div className="recipeDescription">
            <p>{props.description}</p>
        </div>
    );
}

export default RecipeDescription;