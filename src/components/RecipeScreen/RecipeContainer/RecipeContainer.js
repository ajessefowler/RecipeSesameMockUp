import React from "react";
import RecipeDescription from "../RecipeDescription/RecipeDescription";
import RecipeHeader from "../RecipeHeader/RecipeHeader";
import RecipeControls from "../RecipeControls/RecipeControls";
import './RecipeContainer.css';

const RecipeContainer = (props) => {
    const closeRecipeScreen = () => {
        props.setRecipeScreenIsOpen(false);
    }

    return (
        <div className="recipeContainer">
            <div className="screenCard recipeCard">
                <RecipeHeader recipeName={props.openRecipe.title} closeRecipeScreen={closeRecipeScreen}/>
                <div className="recipeContent">
                    <RecipeDescription recipe={props.openRecipe} />
                    <RecipeControls cartContents={props.cartContents}/>
                </div>
            </div>
        </div>
    );
}

export default RecipeContainer;