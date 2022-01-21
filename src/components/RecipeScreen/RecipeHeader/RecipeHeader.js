import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const RecipeHeader = (props) => {
    return (
        <div className="recipeHeader">
            <h1>{props.recipeName}</h1>
            <FontAwesomeIcon icon={faTimesCircle} size="2x"/>
        </div>
    );
}

export default RecipeHeader;