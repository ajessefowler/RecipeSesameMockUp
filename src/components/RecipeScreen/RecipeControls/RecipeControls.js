import React from "react";
import GyroPhoto from '../../../images/gyros.jpg';

const RecipeControls = (props) => {
    return (
        <div className="recipeControls">
            <img src={GyroPhoto} alt="Selected recipe." />
        </div>
    );
}

export default RecipeControls;