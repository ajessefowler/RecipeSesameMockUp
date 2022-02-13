import React, { useState } from "react";
import GyroPhoto from '../../../images/gyros.jpg';
import RecipeButton from "../RecipeButton/RecipeButton";
import RecipeCartContainer from "../RecipeCartContainer/RecipeCartContainer";
import './RecipeControls.css';

const RecipeControls = (props) => {
    const [addClicked, setAddClicked] = useState(false);
    const [recipeSaved, setRecipeSaved] = useState(false);
    const addIngredientsLabel = "Add ingredients";
    const saveRecipeLabel = "Save recipe";
    const savedRecipeLabel = "Recipe saved";

    return (
        <div className="recipeControls">
            <img src={process.env.PUBLIC_URL + "/images/"  + props.recipe.Image_Name + ".jpg"} alt={props.recipe.Title} />
            <RecipeCartContainer cartContents={props.cartContents} addClicked={addClicked}/>
            <div className="recipeButtons">
                <RecipeButton setRecipeSaved={setRecipeSaved} setAddClicked={setAddClicked} label={addIngredientsLabel} enabled={true}/>
                {recipeSaved ? (<RecipeButton label={savedRecipeLabel} setRecipeSaved={setRecipeSaved} enabled={false} />) : (<RecipeButton label={saveRecipeLabel} setRecipeSaved={setRecipeSaved} enabled={true}/>) }
            </div>
        </div>
    );
}

export default RecipeControls;