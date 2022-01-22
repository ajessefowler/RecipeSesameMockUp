import React, { useState } from "react";
import GyroPhoto from '../../../images/gyros.jpg';
import AddIngredientsButton from "../AddIngredientsButton/AddIngredientsButton";
import RecipeCartContainer from "../RecipeCartContainer/RecipeCartContainer";

const RecipeControls = (props) => {
    const [addClicked, setAddClicked] = useState(false);

    return (
        <div className="recipeControls">
            <img src={GyroPhoto} alt="Selected recipe." />
            <RecipeCartContainer cartContents={props.cartContents} addClicked={addClicked}/>
            <AddIngredientsButton setAddClicked={setAddClicked}/>
        </div>
    );
}

export default RecipeControls;