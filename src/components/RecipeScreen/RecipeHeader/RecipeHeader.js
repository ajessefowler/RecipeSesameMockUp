import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const RecipeHeader = (props) => {
    return (
        <div className="recipeHeader">
            <h1>{props.recipeName}</h1>
            <FontAwesomeIcon icon={faTimes} size="2x"/>
        </div>
    );
}

export default RecipeHeader;